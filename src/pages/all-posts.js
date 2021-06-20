import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { PostCard } from '../components/post-card.component';
import Layout from '../components/layout.component';

const AllPosts = ({ data }) => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content: 'All the posts are delicious',
          },
        ]}
        title="ALlPosts"
      />
      <h1>All Posts</h1>

      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <PostCard to={post.fields.slug} key={post.id}>
          <h3 className="title">{post.frontmatter.title}</h3>
          <p className="ttr">{post.timeToRead} minute read.</p>
          <p className="excerpt">{post.excerpt}</p>
          <p className="date">{post.frontmatter.date}</p>
        </PostCard>
      ))}
    </Layout>
  );
};

export const allPostsQuery = graphql`
  query AllPostsQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

export default AllPosts;
