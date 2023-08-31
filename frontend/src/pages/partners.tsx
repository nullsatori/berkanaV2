import React from "react";
import Head from "next/head";
import Layout from "@/components/general/layout";
import HeadNav from "../components/general/head-nav";
import PartnersBlock from "@/components/index-page/partners-block";

const Partners = () => {
  return (
    <>
      <Head>
        <title>Партнеры - Berkana</title>
        <meta name="description" content="Партнеры Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeadNav
          pageName={"наши партнеры"}
          subPageFlag={true}
          style={'blue'}
        />
        <PartnersBlock />
      </Layout>
    </>
  );
};

export default Partners;
