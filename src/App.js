import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    if (theme) {
      document.documentElement.className = "light-theme";
    } else {
      document.documentElement.className = "dark-theme";
    }
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Almogwer blog</h1>
          <DarkModeToggle
            size={100}
            className="toggler"
            onChange={setTheme}
            checked={theme}
          />
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
