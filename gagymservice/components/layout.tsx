import Head from "next/head";

import React from "react";
import styles from "./layout.module.css";
import AppBar from "./appbar";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Myworkspace</title>
        <AppBar />
      </Head>
      {/* <header></header> */}
      <main className={styles.main}>
        <article className="row bg-light">
          <Sidebar />
          <div className="ms-4 col-10 ">{children}</div>
        </article>
        <Footer />
      </main>
    </>
  );
}
