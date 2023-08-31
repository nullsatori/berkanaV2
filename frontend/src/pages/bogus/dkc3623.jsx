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

const dks3623 = () => {
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
      Простой среднеранний гибрид универсального направления. Толерантность к
      болезням, хорошая влагоотдача, высокий потенциал урожайности, возможность
      использовать на силос, стабильность, засухоустойчивость и мощная корневая
      система. ФАО 270 Тип зерна: Зубовидный
      <strong>Растение</strong>
      Облиственный стебель высотой 220 – 230 см. Хорошо развитая корневая
      система. Ремонтантный гибрид.
      <strong>Початок</strong>
      Высота крепления 100 – 110 см. Цилиндрическо-коническая форма. Длина 28 –
      30 см. Диаметр 4 – 4,5 см.
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
              - 2 Влагоотдача - 3 Стабильность и пластичность - 3 Раннее
              цветение - нет
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>ДКС 3623 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ДКС 3623" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default dks3623;