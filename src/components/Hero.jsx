import React from "react";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex items-center justify-between w-full mb-10 pt-3">
        <img src={logo} alt="summary_logo" className="w-8 object-contain" />
        <h1 className="text-4xl font-bold orange_gradient">Summarize</h1>
        <button
          type="button"
          className="black_btn"
          onClick={() =>
            window.open(
              "https://github.com/jannet18/notes-summarizer?tab=readme-ov-file#notes-summarizer"
            )
          }
        >
          github
        </button>
      </nav>
      <h1 className="head_text">
        Get Content Summary with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Smartly summarize any piece of text into concise, easy to digest content
        so you can free yourself from information overload.
      </h2>
    </header>
  );
}

export default Hero;
