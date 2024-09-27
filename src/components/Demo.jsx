import React, { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article";
import copy from "../assets/copy.png";
function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const articlesFromLocalstorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalstorage) {
      setAllArticles(articlesFromLocalstorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({
      articleUrl: article.url,
    });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      console.log(newArticle);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };
  return (
    <section className="max-w-xl w-full mt-16">
      {/* search */}
      <div className="flex flex-col w-full gap-2">
        <form
          action=""
          className="relative flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 absolute left-0 my-2 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <input
            type="url"
            placeholder="Enter Url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer-focus:border-gray-700 peer-focus:text-gray-700"
          />
          <button type="submit" className="submit_btn px-8">
            Submit
          </button>
          {/* <form enctype="multipart/form-data" method="POST">
            <input
              type="url"
              name="document_url"
              placeholder="Enter document URL"
            />
            <input
              type="file"
              name="document_file"
              accept=".doc,.docx,.pdf,.txt,.ppt,.pptx"
            />
            <button type="submit">Submit</button>
          </form> */}
        </form>
        {/* browse URL history */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => {
                setArticle(item);
              }}
              className="link_card"
            >
              <div className="copy_btn">
                <img
                  src={copy}
                  alt="copy_icon"
                  className="w-[40%] h-[40%] object-contain"
                />

                <p className="flex-1 font-satoshi text-blue font-medium text-sm truncate">
                  {item.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* display results */}
      <div className="my-10 max-w-full flex items-center justify-center">
        {isFetching ? (
          // <img src="" alt="loader" className="w-20 h-20 object-contain" />
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : error ? (
          <p className="font-inter font-bold text-">
            Something went wrong, try again <br />{" "}
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-xl text-gray-600">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p>{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
