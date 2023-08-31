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

const dks3730 = () => {
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
      энергия роста, хорошая влагоотдача, мощная корневая система, высокий
      потенциал урожайности и возможность использовать на силос. ФАО 280 Тип
      зерна: Зубовидный
      <strong>Растение</strong>
      Облиственный стебель высотой 230 – 250 см. Полуэректоидное расположение
      листьев.
      <strong>Початок</strong>
      Высота крепления 90 – 100 см. Цилиндрическо-коническая форма. Длина 20 –
      24 см. Диаметр 4 – 5 см.
      <table>
        <tbody>
          <tr>
            <td colspan="2">
              <strong>Особенности (от 0 до 3)</strong>
            </td>
          </tr>
          <tr>
            <td>
              Начальная энергия роста Холодостойкость Засухоустройчивость
              Резистентность к пузырчатой головне Резистентность к фузариозу
            </td>
            <td>
              Устойчивость к корневому и стеблевому полеганию Ремонтантность
              Влагоотдача Стабильность и пластичность Раннее цветение - да
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ДКС 3730 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ДКС 3730" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default dks3730;
