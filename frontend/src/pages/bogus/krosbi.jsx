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

const krosbi = () => {
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
      Раннеспелый. Раннеспелый гибрид интенсивного типа, высокий потенциал
      урожайности зерна. Высокая скорость отдачи влаги зерном, быстрый стартовый
      рост, раннее цветение помогает избегать стресса в середине вегетационного
      периода, высокая холодостойкость, подходит для раннего посева, устойчив к
      различным видам полегания. ФАО 189 Группа спелости: Раннеспелый
      Назначение: Зерно, Силос Тип зерна: Кремисто-зубовидный Среднее кол-во
      рядов в початке - 14-16 шт Среднее кол-во зерен в ряду - 28-32 шт Средняя
      высота растения - 230 см Средняя масса 1000 зерен - 310 г
      <table>
        <tbody>
          <tr>
            <td colspan="2">
              <strong>Толерантность к заболеваниям</strong>
            </td>
          </tr>
          <tr>
            <td>
              Энергия начального роста - 7 Потенциал урожая в своей гр. спелости
              - 9 Скорость отдачи влаги перед уборкой в своей гр. спелости - 8
              Толерантность к пузырчатой головне - 7
            </td>
            <td>
              Толерантность к пыльной головне - 7 Устойчивость к полеганию - 7
              Толерантность к засухе и другим стрессовым факторам - 9
              Толерантность к фузариозу початка - 8
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>КРОСБИ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="КРОСБИ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default krosbi;
