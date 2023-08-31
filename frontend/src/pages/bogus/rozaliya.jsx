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

const rozalija = () => {
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
      <strong>Lidea</strong>
      Среднеранний гидрид Цветение: среднераннее Созревание: среднераннее Высота
      растения: среднее Корзинка: приподнятая Тип гибрида: Линолевый
      Масличность: 49%
      <table>
        <tbody>
          <tr>
            <td>Преимущество</td>
            <td>Рекомендации</td>
          </tr>
          <tr>
            <td>
              Классическая технология Высокий потенциал и отзывчивость на
              интенсивную технологию Адаптирован к стрессовым условиям Хорошая
              толерантность к болезням
            </td>
            <td>
              Зона достаточного увлажнения: 60-65 тыс. семян/га Засушливые
              условия: 55-60 тыс. семян/гаЗаразихоустойчивость: Минимально
              устойчивый
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Агрономический профиль</strong>
      Толерантность к фомопсису: средне Толерантность к вертициллезу: хорошо
      Толерантность к белой гнили: хорошо Толерантность к пепельной гнили:
      хорошо Толерантность к ржавчине: хорошо Устойчивость к полеганию: хорошо
      Начальные темпы роста: средние
    </div>
  );

  return (
    <>
      <Head>
        <title>РОЗАЛИЯ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="РОЗАЛИЯ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default rozalija;
