import React from "react";

const Generic = ({ pageContext }) => (
  <div>
    <h1>{pageContext.title}</h1>
    <p>{pageContext.description}</p>
    <p>I am p tag</p>
  </div>
);

export default Generic;
