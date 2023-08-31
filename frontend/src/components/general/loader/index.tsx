import React, {useEffect} from 'react';
import {TailSpin} from "react-loader-spinner";
import { motion } from "framer-motion";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Loader = (loading) => {
  useEffect(() => {
    // Get a reference to the menu element with class 'fc-menu'
    const menuElement = document.querySelector('.loader');

    if (loading) {
      // Disable body scroll while enabling scroll on the menu element
      disableBodyScroll(menuElement);
    } else {
      // Enable body scroll and remove listeners on the menu element
      enableBodyScroll(menuElement);
    }

    // Clear all scroll locks when the component unmounts
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [loading]);
  return (
    <motion.div
      className='loader'>
      <TailSpin
        height="45"
        width="45"
        color="#da9a23"
        ariaLabel="tail-spin-loading"
        radius="0"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </motion.div>
  );
};

export default Loader;