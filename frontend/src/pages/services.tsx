import React, {useEffect, useState} from "react";
import Layout from "@/components/general/layout";
import Head from "next/head";
import HeadNav from "../components/general/head-nav";
import Blocks from "@/components/services/blocks";
import { useRouter } from "next/router";
import {handleDotClick} from "@/utils/handleDotClick";
import {useWindowSize} from "rooks";
import {motion} from "framer-motion";

const Services = () => {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const { outerWidth } = useWindowSize();
  const slideImages = [
    "/first-slide-services.png",
    "/second-slide-services.png",
    "/third-slide-services.png",
    "/second-slide.png",
  ];
  const slideText = [
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="firstSlide services-slide"
      key="firstSlide"
    >
      <p>агроконсультирование</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="secondSlide services-slide"
      key="secondSlide"
    >
      <div>
        <p>своевременная доставка товара</p>

      </div>
      <p>собственным транспортом</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="thirdSlide services-slide"
      key="thirdSlide"
    >
      <div>
        <p>зимнее хранение СЗР</p>

      </div>
      <p>химическая прополка и подкормка</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fourthSlide services-slide"
      key="fourthSlide"
    >
      <div>
        <p>обработка посевов с/х культур</p>
      </div>
      <p>при помощи пневмоходов</p>
    </motion.div>,
  ];

  const handleClick = (number: number) => {
    handleDotClick(number);
    setSlide(number);
  };

  useEffect(() => {
    if (outerWidth) setWidth(outerWidth);
  }, [outerWidth]);

  return (
    <>
      <Head>
        <title>Услуги - Berkana</title>
        <meta name="description" content="Услуги Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/first-slide-services.png" as="image" />
        <link rel="preload" href="/second-slide-services.png" as="image" />
        <link rel="preload" href="/third-slide-services.png" as="image" />
        <link rel="preload" href="/second-slide.png" as="image" />
      </Head>
      <Layout logo={"white"}>
        <div
          className="backgroundSlider servicesSlider"
          style={{
            background: `url(${slideImages[slide]})`,
          }}
        >
          <div className="wrapper">
            {slideText[slide]}
            <div className="buttons">
              <span className="dot active" onClick={() => handleClick(0)}></span>
              <span className="dot" onClick={() => handleClick(1)}></span>
              <span className="dot" onClick={() => handleClick(2)}></span>
              <span className="dot" onClick={() => handleClick(3)}></span>
            </div>
          </div>


        </div>

      </Layout>
    </>
  );
};

export default Services;
