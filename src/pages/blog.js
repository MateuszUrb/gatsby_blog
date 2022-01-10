import Layout from "../components/layout";
import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as styles from "../styles/blogPosts.module.css";

function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog posts">
      <ul className={styles.blogPosts}>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </ul>
    </Layout>
  );
}

export const data = graphql`
  query BlogPosts {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
