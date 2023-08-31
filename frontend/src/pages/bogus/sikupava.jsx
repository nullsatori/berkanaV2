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

const sikupava = () => {
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
      <strong>Syngenta</strong>
      Среднеспелый гибрид подсолнечника, устойчивый к новым расам заразихи.
      Двойной удар по заразихе и болезням. Тип гибрида: Устойчивый к новым расам
      заразихи Группа спелости: Среднеспелый Назначение: Линолевый Масличность:
      50–53% Высота растений: 150–170 см Устойчивость к расам заразихи: A–G
      Технология возделывания: Классическая
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Преимущества</strong>
            </td>
            <td>
              <strong>Рекомендации по технологии</strong>
            </td>
          </tr>
          <tr>
            <td>
              Высокие темпы роста на начальных этапах органогенеза. Очень
              отзывчив на повышение уровня агротехнологии. Высокостабильный
              гибрид.
            </td>
            <td>
              Рекомендуется для использования в полях с высокой вероятностью
              поражения заразихой. Раскрывает свой потенциал при использовании
              интенсивной технологии. Сеять в оптимальные сроки, избегать
              загущения посевов.
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>СИ КУПАВА - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="СИ КУПАВА" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default sikupava;