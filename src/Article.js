import React from "react";
import moment from "moment";
const Article = (article) => {
  const { title, length, date, snippet } = article;

  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("MMM Do dddd, YYYY ")}</span>

        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
