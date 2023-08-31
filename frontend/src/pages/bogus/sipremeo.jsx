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

const sipremeo = () => {
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
      <strong>SYNGENTA</strong>
      Надежность премиум-класса! Максимальный урожай зерна в своей группе
      спелости. Адаптивен к различным погодным условиям выращивания, в том числе
      и стрессовым. Быстрая влагоотдача. Назначение Кукурузы: зерно, силос,
      корнаж, спирт ФАО: 380 Тип зерна зубовидный. Потенциал урожайности зерна –
      9 Засухоустойчивость – 10 Скорость раннего развития – 9 Холодостойкость –
      8 Скорость влагоотдачи – 9 Устойчивость к полеганию – 10
      <table>
        <tbody>
          <tr>
            <td>Другие характеристики</td>
            <td>Толерантность к болезням</td>
          </tr>
          <tr>
            <td>
              Быстро развивается на ранних этапах вегетации. Высокая
              адаптивность к технологиям обработки почвы различного типа
              (классическая, минимальная). Хорошая засухоустойчивость дает
              возможность выращивать в условиях недостатка влаги. Скорость
              влагоотдачи на уровне лучших гибридов в сегменте. Гибрид
              технологичен. Имеет оптимальную высоту прикрепления початка,
              растения и початки идеально выровнены, что облегчает уборку и
              сокращает потери.
            </td>
            <td>фузариоз початка</td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>СИ ПРЕМЕО - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="СИ ПРЕМЕО" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default sipremeo;
