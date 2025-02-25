import React, { useState } from "react";
import Header from "../components/Header";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState(false);

  return (
    <>
      <Header />
      <div
        className={
          theme
            ? "bg-gray-900 text-white min-h-screen p-6"
            : "bg-white text-gray-900 min-h-screen p-6"
        }
      >
        <button
          onClick={() => setTheme(!theme)}
          className="mt-4 w-6 h-6 font-semibold rounded-full  focus:outline-none flex items-center justify-center transition-all cursor-pointer right-10 absolute top-26 outline-none border-0"
        >
          {theme ? "☀️" : "🌙"}
        </button>
        <div className="max-w-3xl mx-auto mt-6">
          <h1 className="text-4xl font-bold mb-4">Theme Toggle Page</h1>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
