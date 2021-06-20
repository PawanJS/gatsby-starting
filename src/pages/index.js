import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout.component';
import { PostCard } from '../components/post-card.component';

const Index = ({ data }) => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
        ]}
        title={data.site.siteMetadata.title}
      />
      <h1>Home page</h1>
      <h2>Featured Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <PostCard to={post.fields.slug} key={post.id}>
          <h3 className="title">{post.frontmatter.title}</h3>
          <p className="ttr">{post.timeToRead} minute read.</p>
          <p className="excerpt">{post.excerpt}</p>
          <p className="date">{post.frontmatter.date}</p>
        </PostCard>
      ))}
      <Link to="/all-posts/" className="link">
        See More
      </Link>
    </Layout>
  );
};

export const HomePageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "dddd, MMMM  Do YYYY")
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Index;
