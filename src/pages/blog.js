import Layout from "../components/layout";
import React from "react";
import { graphql, Link } from "gatsby";

function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.id}>
            <h2>
              <Link to={node.name}>{node.name}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const data = graphql`
  query BlogPosts {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
