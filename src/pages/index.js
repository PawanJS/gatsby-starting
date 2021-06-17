import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// import Food from "../images/food.jpg";

const Index = ({ data }) => {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  return (
    <div>
      <h1>Home page</h1>
      <GatsbyImage image={image} alt="Food in the plate" />
    </div>
  );
};
export const HomePageQuery = graphql`
  query {
    file(relativePath: { eq: "food.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default Index;
