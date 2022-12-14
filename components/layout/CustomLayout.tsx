import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import styles from "./CustomLayout.module.css";
import { NavBar } from "../NavBar";

export const CustomLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
