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

const eshadsonsu = () => {
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
      Новинка. Высокая устойчивость к заболеваниям. Группа спелости:
      Раннеспелый, 100-105 дней Устойчивость к заразихе: &gt;F Потенциал
      урожайности: 50 ц/га Высота растений / Размер корзинки: 160-180 см / 23 см
      Засухоустойчивость: Высокий уровень Масличность: до 48-52 % Наклон
      корзинки: 1/2 вниз Жаростойкость: Высокий уровень
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
              Быстрый старт и раннее развитие. Высокий потенциал урожайности в
              сочетании с раннеспелостью. Надежен даже в условиях засухи.
              Высокий уровень толерантности к болезням. Новая генетика с высокой
              устойчивостью к ЛМР. Ранняя уборка.
            </td>
            <td>
              Быстрый старт и раннее развитие. Высокий потенциал урожайности в
              сочетании с раннеспелостью. Надежен даже в условиях засухи.
              Высокий уровень толерантности к болезням. Новая генетика с высокой
              устойчивостью к ЛМР. Ранняя уборка.
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЕС ХАДСОН СУ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ЕС ХАДСОН СУ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default eshadsonsu;