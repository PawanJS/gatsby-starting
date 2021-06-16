import React from "react";
import { graphql } from "gatsby";

// import Food from "../images/food.jpg";

const Index = ({ data }) => (
  <div>
    <h1>Home page</h1>
    <img src={data.file.publicURL} alt="Food" style={{ maxWidth: 600 }} />
  </div>
);

export const HomePageQuery = graphql`
  query {
    file(relativePath: { eq: "food.jpg" }) {
      publicURL
    }
  }
`;

export default Index;
