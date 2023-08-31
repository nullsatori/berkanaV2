import React from "react";
import Layout from "@/components/general/layout";
import Head from "next/head";
import HeadNav from "@/components/services/head-nav";
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

const esamis = () => {
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
      <strong>Bayer</strong>
      Раннеспелый гибрид с лучшей энергией роста на начальном этапе развития для
      системы Clearfield. Пригоден для технологии Mini till. Группа спелости:
      Раннеспелый, 100-105 дней Устойчивость к заразихе: Устойчив к заразихе рас
      А–Е Потенциал урожайности: до 45 ц/га Высота растений / Размер корзинки
      Высота растений / Размер корзинки: 160-180 см / 22 см Засухоустойчивость:
      Высокий уровень Масличность: до 49-52 % Наклон корзинки: 1/2 вниз
      Жаростойкость: Высокий уровень
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Преимущества</strong>
            </td>
            <td>
              <strong>Рекомендации</strong>
            </td>
          </tr>
          <tr>
            <td>
              Быстрый старт и раннее развитие. Высокий уровень толерантности к
              болезням, в том числе к ржавчине. Стабильная урожайность в
              стрессовых условиях. Ранняя уборка. Устойчив к полеганию
            </td>
            <td>
              Уборка в оптимальные сроки. При глубокой обработки почвы уровень
              засухоустойчивости повышается. Рекомендован для Приволжского и
              Центрально-Черноземного регионов возделывания.
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЕС АМИС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ЕС АМИС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default esamis;
