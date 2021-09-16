import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const themeToggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  return (
    <body className={theme}>
      <main>
        <nav>
          <div className="nav-center">
            <h1>Almogwer blog</h1>
            <button
              className="btn"
              onClick={() => {
                themeToggle();
              }}
            >
              toggle
            </button>
          </div>
        </nav>
        <section className="articles">
          {data.map((item) => {
            return <Article key={item.id} {...item} />;
          })}
        </section>
      </main>
    </body>
  );
}

export default App;
