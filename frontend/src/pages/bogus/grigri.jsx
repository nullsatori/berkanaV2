import React from "react";
import Layout from "@/components/general/layout";
import Head from "next/head";
import HeadNav from "@/components/general/head-nav";
import ReactHtmlParser from "html-react-parser";

function wrapUntaggedTextWithP(node) {
  if (typeof node === "string") {
    return <p>{node}</p>;
  }

  if (React.isValidElement(node)) {
    if (node.type === "span") {
      return node;
    }
    const hasSpanChildren = React.Children.toArray(node.props.children).some(
      (child) => React.isValidElement(child) && child.type === "span"
    );
    if (!hasSpanChildren) {
      const children = React.Children.map(node.props.children, (child) =>
        wrapUntaggedTextWithP(child)
      );
      return React.cloneElement(node, null, children);
    } else {
      return node;
    }
  }
  return node;
}

const grigri = () => {
  let style = {
    background: "#185F65",
    color: "#D4A95A",
  };
  let pathStyle = {
    fill: "#D4A95A",
  };
  let headerStyle = {
    color: "#D4A95A",
  };

  const jsx_content_wrapped = wrapUntaggedTextWithP(
    <div>
      <strong>LIDEA</strong>
      Среднеранний гибрид. Высокоурожайный стабильный гибрид. Высокая натура
      зерна. Эффективен для выращивания на крупу. ФАО 250 Тип зерна:
      кремнисто-зубовидный: больше 50% кремнистый Особенности гибрида: При
      применении интенсивной технологии гибрид ГРИГРИ отлично адаптирован к
      засушливым условиям. Отличная опыляемость даже в стрессовых условиях,
      быстрый ранний старт. Полевые наблюдения: хорошая толерантность к
      грибковым заболеваниям.
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Агрономический профиль</strong>
            </td>
            <td>
              <strong>Преимущества</strong>
            </td>
          </tr>
          <tr>
            <td>
              Начальные темпы роста: хорошо Устойчивость к позднему полеганию:
              отлично Толерантность к пыльной головне: отлично Толерантность к
              фузариозу початка: отлично
            </td>
            <td>
              Высокоурожайный стабильный гибрид Высокая натура зерна Эффективен
              для выращивания на крупу
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ГРИГРИ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ГРИГРИ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default grigri;
