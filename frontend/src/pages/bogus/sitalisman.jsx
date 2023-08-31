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

const sitalisman = () => {
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
      Удачный урожай - не случайность! Адаптивность к раннему севу. Высокая
      переваримость силосной массы. Отличная отзывчивость на высокий фон
      минерального питания. Назначение Кукурузы: зерно, силос, крупа, спирт,
      корнаж ФАО: 180 Тип зерна: кремнисто-зубовидный Потенциал урожайности
      зерна - 10 Засухоустойчивость - 8 Скорость раннего развития - 9
      Холодостойкость - 9 Скорость влагоотдачи - 8 Устойчивость к полеганию - 9
      <table>
        <tbody>
          <tr>
            <td>Преимущества</td>
            <td>Толерантность к болезням</td>
          </tr>
          <tr>
            <td>
              Высокая переваримость силосной массы. Способен выдерживать
              загущение. Отлично отзывается на высокий фон минерального питания.
              Хорошая выполненность верхушки початка.
            </td>
            <td>
              гельминтоспориоз фузариоз початка стеблевые гнили пузырчатая
              головня
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>СИ ТАЛИСМАН - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="СИ ТАЛИСМАН" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default sitalisman;
