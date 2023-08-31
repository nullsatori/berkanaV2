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

const dks5007 = () => {
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
      Простой среднепоздний гибрид универсального направления. Толерантность к
      болезням, хорошая влагоотдача, мощная корневая система, высокий потенциал
      крожайности, устойчивость к полеганию. ФАО 420 Тип зерна: Зубовидный
      Кол-во зёрен в початке: 700 – 920 шт
      <strong>Растение</strong>
      Облиственный стебель высотой 260 – 290 см Ремонтантный гибрид Ярко
      выраженное эректоидное расположение листьев
      <strong>Зерно</strong>
      Зубовидного типа Цвет жёлтый в верхней части Потенциал урожайности 13–19
      т/га
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Особенности (от 0 до 3)</strong>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              Начальная энергия роста - 3 Холодостойкость - 2
              Засухоустройчивость - 3 Резистентность к пузырчатой головне - 3
              Резистентность к фузариозу - 3
            </td>
            <td>
              Устойчивость к корневому и стеблевому полеганию - 3 Ремонтантность
              - 3 Влагоотдача - 3 Стабильность и пластичность - 3 Раннее
              цветение - Да
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ДКС 5007 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ДКС 5007" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default dks5007;