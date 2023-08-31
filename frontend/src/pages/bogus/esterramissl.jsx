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

const esterramissl = () => {
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
      Высокий урожай и устойчивость к заразихе и болезням для системы
      Clearfield. Группа спелости: Среднераниий, 105-110 дней Устойчивость к
      заразихе: Устойчив к новым расам заразихи, A-F Потенциал урожайности:
      Более 50 ц\га Высота растений / Размер корзинки: 160-180 см / 22 см
      Засухоустойчивость: Высокий уровень Масличность: до 49-52 % Наклон
      корзинки: Вниз Жаростойкость: Выше среднего
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
              Эффективно расходует элементы питания. Высокий потенциал
              урожайности. Устойчив к стрессовым условиям. Отличное опыление и
              выполненность корзинки. Высокий уровень толерантности к болезням.
              Отличный результат в условиях засухи и заразихи. Отзывчив на
              повышение уровня агротехники.
            </td>
            <td>
              Эффективно расходует элементы питанияВысокий потенциал
              урожайности. Устойчив к стрессовым условиям. Отличное опыление и
              выполненность корзинки. Высокий уровень толерантности к болезням.
              Отличный результат в условиях засухи и заразихи. Отзывчив на
              повышение уровня агротехники.
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЕС ТЕРРАМИС СЛ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="ЕС ТЕРРАМИС СЛ"
          style={style}
          pathStyle={pathStyle}
        />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default esterramissl;