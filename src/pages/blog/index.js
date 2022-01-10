import Layout from "../../components/layout";
import React from "react";
import { graphql, Link } from "gatsby";
import * as styles from "../../styles/blogPosts.module.css";

function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog posts">
      <ul className={styles.blogPosts}>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
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
        slug
      }
    }
  }
`;

export default BlogPage;
