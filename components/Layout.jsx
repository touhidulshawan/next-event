import Head from "next/head";
import NavBar from "./NavBar";
import styles from "@styles/Home.module.css";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;
