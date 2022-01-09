import React from "react";
import { Link } from "gatsby";
import * as styles from "./layout.module.css";

function Layout({ pageTitle, children }) {
  return (
    <div className={styles.container}>
      <title>{pageTitle}</title>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
