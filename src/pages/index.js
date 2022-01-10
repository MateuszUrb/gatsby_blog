import React from "react";
import Layout from "../components/layout";
import "../styles/global.css";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        eos.
      </p>
      <StaticImage src="../images/street_night.jpg" alt="street at night" />
    </Layout>
  );
};

export default IndexPage;
