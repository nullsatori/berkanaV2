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

const dks4792 = () => {
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
      <strong>BAYER</strong>
      Простой среднеспелый гибрид универсального направления. Первоначальная
      энергия роста, высокий потенциал урожайности, засухоустойчивость,
      устойчивость к полеганию, мощная корневая система. ФАО 370 Тип зерна:
      Зубовидный Кол-во зёрен в початке: 640 – 750 шт.
      <strong>Растение</strong>
      Облиственный стебель высотой 240 – 260 см Полуэректоидное расположение
      листьев
      <strong>Зерно</strong>
      Зубовидного типа Цвет жёлтый Потенциал урожайности 16–20 т/га
      <table>
        <tbody>
          <tr>
            <td colspan="2">
              <strong>Особенности (от 0 до 3)</strong>
            </td>
          </tr>
          <tr>
            <td>
              Начальная энергия роста - 3 Холодостойкость - 3
              Засухоустройчивость - 3 Резистентность к пузырчатой головне - 3
              Резистентность к фузариозу - 3
            </td>
            <td>
              Устойчивость к корневому и стеблевому полеганию - 3 Ремонтантность
              - 3 Влагоотдача - 2 Стабильность и пластичность - 3 Раннее
              цветение - Нет
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ДКС 4792 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ДКС 4792" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default dks4792;
