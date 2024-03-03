import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/general/layout";
import HeadNav from "../components/general/head-nav";
import PartnersBlock from "@/components/index-page/partners-block";
import { motion } from "framer-motion";
import { handleDotClick } from "@/utils/handleDotClick";
import Loader from "@/components/general/loader";

const Partners = () => {
  const [slide, setSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slideImages = [
    "/neoport-slide.png",
    "/bayer-slide.png",
    "/eurochem-slide.png",
    "/lysterra-slide.png",
  ];
  const slideText = [
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="firstSlide services-slide partners-slide"
      key="firstSlide"
    >
      <p>NeoPort</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="secondSlide services-slide partners-slide"
      key="secondSlide"
    >
      <div>
        <p>BAYER</p>
      </div>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="thirdSlide services-slide partners-slide"
      key="thirdSlide"
    >
      <div>
        <p>EuroChem</p>
      </div>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fourthSlide services-slide partners-slide"
      key="fourthSlide"
    >
      <div>
        <p>Lysterra</p>
      </div>
    </motion.div>,
  ];
  useEffect(() => {
    slideImages.forEach((imageUrl) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = handleImageLoad;
    });
  }, []);
  const handleClick = (number: number) => {
    handleDotClick(number);
    setSlide(number);
  };
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  if (!imagesLoaded) {
    // Render a placeholder until images are loaded
    return <Loader loading={true} />;
  }
  return (
    <>
      <Head>
        <title>Партнеры - Berkana</title>
        <meta name="description" content="Партнеры Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeadNav pageName={"наши партнеры"} subPageFlag={true} style={"blue"} />
        <div
          className="backgroundSlider servicesSlider partnersSlider"
          style={{
            background: `url(${slideImages[slide]})`,
          }}
        >
          <div className="wrapper">
            {slideText[slide]}
            <div className="buttons">
              <span
                className="dot active"
                onClick={() => handleClick(0)}
              ></span>
              <span className="dot" onClick={() => handleClick(1)}></span>
              <span className="dot" onClick={() => handleClick(2)}></span>
              <span className="dot" onClick={() => handleClick(3)}></span>
            </div>
          </div>
        </div>
        <PartnersBlock />
      </Layout>
    </>
  );
};

export default Partners;
