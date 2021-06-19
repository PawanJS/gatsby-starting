import React from 'react';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/layout.component';

const Markdown = ({ data }) => {
  const { markdownRemark } = data;
  // const { featuredImage } = markdownRemark.frontmatter;

  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      {/* {featuredImage && (
        <Img
          fluid={markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}
          loading="eager"
        />
      )} */}
      <h2>{markdownRemark.frontmatter.description}</h2>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
        # featuredImage {
        #   childImageSharp {
        #     fluid {
        #       ...GatsbyImageSharpFluid_withWebp_tracedSVG
        #     }
        #   }
        # }
      }
    }
  }
`;
export default Markdown;
