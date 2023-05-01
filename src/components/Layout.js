import Head from "next/head";
import styles from "../styles/Layout.module.css"
import Header from "./Header";
export default function Layout({title, keywords, description, children}) {
  return (
    <div className="">
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

        </Head>
        <Header />
    <div className={styles.container}>
    {children}
    </div>
    </div>
  );
}


Layout.defaultProps ={
    title: "Dj Events | Find the hottest parties",
    description:"Find the latest Dj and other musical events",
    keywords: "dj , music, event, party, parties"
}