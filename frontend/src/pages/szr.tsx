import Head from "next/head";
import { Inter } from "next/font/google";
import BackgroundSlider from "@/components/index-page/background-slider";
import About from "@/components/index-page/about";
import Video from "@/components/index-page/video";
import Prices from "@/components/index-page/prices";
import PartnersBlock from "@/components/index-page/partners-block";
import AgroVideo from "@/components/index-page/agro-video";
import Layout from "@/components/general/layout";
import Events from "@/components/index-page/events";
import { useRouter } from "next/router";
import DataDisplay from "@/components/szr/data-display";
import HeadNav from "../components/general/head-nav";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Szr() {
  return (
    <>
      <Head>
        <title>Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/first-slide.png" as="image" />
        <link rel="preload" href="/second-slide.png" as="image" />
        <link rel="preload" href="/third-slide.png" as="image" />
        <link rel="preload" href="/fourth-slide.png" as="image" />
        <link rel="preload" href="/first-slide-mobile.png" as="image" />
        <link rel="preload" href="/second-slide-mobile.png" as="image" />
        <link rel="preload" href="/third-slide-mobile.png" as="image" />
        <link rel="preload" href="/fourth-slide-mobile.png" as="image" />
      </Head>
      <Layout>
        <div className="wip">В разработке</div>
        {/*<HeadNav*/}
        {/*  pageName={"средства защиты растений"}*/}
        {/*  subPageFlag={true}*/}
        {/*  style={{ background: "#185f65" }}*/}
        {/*/>*/}
        {/*<div className="szr">*/}
        {/*  <DataDisplay />*/}
        {/*</div>*/}
      </Layout>
    </>
  );
}