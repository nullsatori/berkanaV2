import React, {useEffect} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
const FilterMenu = ({ menuActive, setMenuActive }: any) => {
  const router = useRouter();

  useEffect(() => {
    // Get a reference to the menu element with class 'fc-menu'
    const menuElement = document.querySelector('.fc-menu');

    if (menuActive) {
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
  }, [menuActive]);
  return (
    <AnimatePresence>
      {menuActive && (
        <motion.div
          initial={{ opacity: 1, scale: 1, x: "-200%" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="filter-menu"
        >

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterMenu;
