import React, { useState } from "react";

function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    alert("notice");
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
        </form>
        {/* browse URL history */}
      </div>
    </section>
  );
}

export default Demo;
