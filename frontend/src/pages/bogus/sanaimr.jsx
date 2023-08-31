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

const sanajmr = () => {
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
      Среднеранний гибрид подсолнечника для производственной системы
      Clearfield®. Стабильность в условиях засухи. Тип гибрида: для
      производственной системы Clearfield® Группа спелости: среднеранний
      Назначение: линолевый Масличность: 48–50% Высота растений: 160–180 см
      Устойчивость к расам заразихи: A–E Технология возделывания:
      производственная система Clearfield®
      <table>
        <tbody>
          <tr>
            <td>Преимущество</td>
            <td>Рекомендации по технологии</td>
          </tr>
          <tr>
            <td>
              Высокие темпы роста на начальных этапах органогенеза Лидер по
              урожайности в засушливых условиях Пластичен к срокам сева
            </td>
            <td>
              Не применять высокие дозы азотных удобрений Не возделывать после
              бобовых, избегать загущения посевов Не рекомендуется возделывать в
              полях с высоким инфекционным фоном фомопсиса
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>САНАЙ МР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="САНАЙ МР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default sanajmr;
