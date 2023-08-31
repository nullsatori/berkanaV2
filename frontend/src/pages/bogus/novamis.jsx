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

const novamiskl = () => {
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
      <strong>Lidea</strong>
      Ранний гибрид Цветение: среднераннее Созревание: раннее Высота растения:
      среднее Корзинка: опущенная Тип гибрида: Линолевый Масличность: 48-49%
      <table>
        <tbody>
          <tr>
            <td>Преимущество</td>
            <td>Рекомендации</td>
          </tr>
          <tr>
            <td>
              Технология Clearfield® Высокая стабильность в реализации
              потенциала урожайности в засушливых условиях Быстрый старт на
              ранних этапах роста Толерантность к ржавчине
            </td>
            <td>
              Зона достаточного увлажнения: 60-65 тыс. семян/га Засушливые
              условия: 55-60 тыс. семян/гаOR Master Essential: устойчивость к
              большинству известных рас заразихи кроме самых агрессивных форм
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Агрономический профиль</strong>
      Толерантность к фомопсису: хорошо Толерантность к вертициллезу: средне
      Толерантность к белой гнили: хорошо Толерантность к пепельной гнили:
      средне Толерантность к ржавчине: хорошо Устойчивость к полеганию: хорошо
      Начальные темпы роста: хорошие
    </div>
  );

  return (
    <>
      <Head>
        <title>НОВАМИС КЛ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="НОВАМИС КЛ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default novamiskl;
