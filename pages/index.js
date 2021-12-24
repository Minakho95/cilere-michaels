import Banner from "../components/Banner";
import Head from "next/head";
import Header from "../components/Header";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Test priviledger</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {/* HEADER */}
      <Header />
      {/* BANNER */}
      <Banner />
      {/* CONTENT */}
      <Content />
    </div>
  );
}
