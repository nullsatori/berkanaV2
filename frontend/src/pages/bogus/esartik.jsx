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

const esartik = () => {
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
      Гибрид с превосходной ( наивысшей) устойчивостью к заразихе с высоким
      содержанием олеиновой кислоты в масле. Группа спелости: Среднераниий,
      105-110 дней Устойчивость к заразихе: Гомозиготный тип устойчивости к
      новым расам заразихи, A–G Потенциал урожайности: до 45 ц/га Высота
      растений / Размер корзинки: 150-180 см / 20 см Засухоустойчивость: Высокий
      уровень Масличность: до 48-52 % Наклон корзинки Наклон корзинки: 1/2 вниз
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
              Отличная устойчивость к почвенной и воздушной засухе. Высокий
              уровень толерантности к болезням, в том числе к ржавчине и ЛМР.
              Высокое содержание олеиновой кислоты, до 91%. Устойчив к
              стрессовым условиям. Прекрасная опыляемость в любых условиях.
              Устойчив к стеблевому полеганию.
            </td>
            <td>
              Своевременная уборка. Проводить эффективную борьбу с сорняками и
              вредителями. Гибрид для засушливых регионов, подверженных
              поражению агрессивными расами заразихи
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЕС АРТИК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ЕС АРТИК" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default esartik;