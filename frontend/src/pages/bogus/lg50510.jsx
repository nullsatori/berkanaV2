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

const lg50510 = () => {
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
      <strong>LG</strong>
      Максимальный потенциал гибрид раскрывает на основе применения интенсивной
      технологии возделывания. Группа спелости: среднеранний Устойчивость к
      заразихе: А-G Средний диаметр корзинки,см - 18 Средняя масса 1000 семян, г
      - 77 Рекомендуемая густота на момент уборки: 55-60 тыс./га (зона
      достаточного увлажнения) 50-55 тыс./га (зона недостаточного увлажнения)
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Преимущество</strong>
            </td>
            <td>
              <strong>Толерантность к заболеваниям</strong>
            </td>
          </tr>
          <tr>
            <td>
              Высокий потенциал урожайности в благоприятных условиях и
              стабильность в стрессовых; Отличная пластичность к различным
              условиям выращивания и типам почв; Устойчивость к заразихе рас
              А-G; Хорошо адаптирован к ранним срокам сева; Хорошая
              толерантность к основным болезням, включая новые расы ЛМР.
            </td>
            <td>
              Фомопсис - 9 Белая гниль корня - 6 Белая гниль корзинки - 6
              Пепельная гниль - 8 Фомоз - 9 Ржавчина - 8 Ложная мучнистая роса -
              9 Вертициллез - 8 Септориоз - 8
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЛГ 50510 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ЛГ 50510" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default lg50510;
