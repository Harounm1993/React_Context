import React from "react";

import { theme } from "../../theme";

function Article({ title, paragraphs }) {
  return (
    <article style={theme.light}>
      <h1>{title}</h1>
      {paragraphs.map((text) => {
        return <p key={text}>{text}</p>;
      })}
    </article>
  );
}

export default Article;
