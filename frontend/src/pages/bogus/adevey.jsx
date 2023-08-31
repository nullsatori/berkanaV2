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

const adevej = () => {
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
      Экологически пластичный гибрид, высокий потенциал урожайности, подходит
      для раннего сева, устойчив к полеганию. Лучший результат при возделывании
      по классической технологии в севообороте с использованием удобрений.
      Возможна монокультура, но с оборотом пласта и внесением стартовых доз
      фосфорных удобрений на достаточном калийном фоне минерального питания. ФАО
      300 Группа спелости: Среднеранний Назначение: Зерно Тип зерна:
      Кремнисто-зубовидный Среднее кол-во рядов в початке 14 шт Среднее кол-во
      зерен в ряду 34 шт Средняя высота растения 270 см
      <table>
        <tbody>
          <tr>
            <td colspan="2">
              <strong>Толерантность к заболеваниям</strong>
            </td>
          </tr>
          <tr>
            <td>
              Энергия начального роста - 9 Потенциал урожая зерна в своей группе
              спелости - 9 Скорость отдачи влаги перед уборкой в своей группе
              спелости - 7 Толерантность к пузырчатой головне - 8
            </td>
            <td>
              Толерантность к пыльной головне - 7 Устойчивость к полеганию - 9
              Толерантность к засухе и другим стрессовым условиям - 9
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
        <title>АДЭВЕЙ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="АДЭВЕЙ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default adevej;
