import React, { useEffect, useState } from "react";
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";
import Menu from "@/components/general/menu";

const Layout = ({ children, style, logo }: any) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Header setMenuActive={setMenuActive} style={style} logo={logo} />
      {children}
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <Footer />
    </>
  );
};

export default Layout;
