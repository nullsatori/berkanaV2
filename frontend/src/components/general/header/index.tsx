import React, { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.scss";

interface HeaderProps {
  setMenuActive: (active: boolean) => void;
  style: React.CSSProperties[];
  logo: "blue" | "yellow";
}

const Header: React.FC<HeaderProps> = ({ setMenuActive, style, logo }) => {
  const logoPath = getLogoPath(logo);
  const router = useRouter();

  const isActiveLink = (href: string): boolean => {
    return router.pathname === href;
  };

  const renderNavLink = (text: string, href: string) => (
    <Link href={href}>
      <p
        className={`${styles["header-text"]} ${
          isActiveLink(href) ? styles.active : ""
        } ${logo === "yellow" ? styles["yellow-links"] : ""} 
        ${logo === "blue" ? styles["blue-links"] : ""}
        ${logo === "white" ? styles["white-links"] : ""}
        `}
      >
        {text}
      </p>
    </Link>
  );

  const renderProjectLink = () => (
    <Link href={"/wip"} className={`${styles["header-text"]} ${styles.project} ${
      logo === "yellow" ? styles["yellow-links"] : ""
    } ${logo === "blue" ? styles["blue-links"] : ""}`}
          style={style}>
      <p

      >
        АгроПроект
      </p>
    </Link>
  );

  return (
    <div className={styles.header} style={style?.[0]}>
      <Link href={"/"}>
        <img src={logoPath} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.wrapper}>
        <div className={styles.temp}>
          {renderNavLink("СЗР", "/wip")}
          {renderNavLink("Семена", "/seeds")}
          {renderNavLink("Услуги", "/services")}
        </div>
        {renderProjectLink()}
        <div className={styles.language}>
          <p
            className={`${styles["header-text"]} ${
              logo === "yellow" ? styles["yellow-links"] : ""
            } ${logo === "blue" ? styles["blue-links"] : ""}`}
          >
            РУС
          </p>
          {/* SVG icon */}
        </div>
        <p
          className={`${styles["header-text"]} ${styles.phone} ${
            logo === "yellow" ? styles["yellow-links"] : ""
          } ${logo === "blue" ? styles["blue-links"] : ""}`}
        >
          +7 437 300 39 14
        </p>
        <img
          src={logo === "yellow" ? '/menu-yellow.png' :
               logo === "blue" ? '/menu-blue.png' : 'menu.png'}
          alt="menu"
          className={styles.menu}
          onClick={() => setMenuActive(true)}
        />
      </div>
    </div>
  );
};

const getLogoPath = (logo: "blue" | "yellow"): string => {
  if (logo === "blue") {
    return "/logo-blue.png";
  } else if (logo === "yellow") {
    return "/logo-yellow.png";
  } else {
    return "/logo.png";
  }
};

export default Header;
