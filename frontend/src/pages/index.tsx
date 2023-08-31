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
import fetchApiData from "@/utils/fetchApiData";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Berkana</title>
        <meta name="description" content="Главная Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/first-slide.webp" as="image" />
        <link rel="preload" href="/second-slide.webp" as="image" />
        <link rel="preload" href="/third-slide.webp" as="image" />
        <link rel="preload" href="/fourth-slide.webp" as="image" />
        <link rel="preload" href="/first-slide-mobile.webp" as="image" />
        <link rel="preload" href="/second-slide-mobile.webp" as="image" />
        <link rel="preload" href="/third-slide-mobile.webp" as="image" />
        <link rel="preload" href="/fourth-slide-mobile.webp" as="image" />
      </Head>
      <Layout>
        <BackgroundSlider />
        <About />
        <Video />
        <Prices />
        <Events />
        <AgroVideo />
        <PartnersBlock />
      </Layout>
    </>
  );
}
