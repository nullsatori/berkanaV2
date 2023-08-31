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

const glorifi = () => {
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
      <strong>LIDEA</strong>
      Среднеранний гибрид. Высокий потенциал урожайности в сочетании с
      пластичностью. Толерантный к болезням конца вегетационного периода.
      Быстрая влагоотдача зерна. ФАО 280 Тип зерна: зубовидный Особенности
      гибрида: Благодаря отличной влагоотдаче и хорошей отзывчивости на условия
      выращивания адаптирован под различные технологии.
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Агрономический профиль</strong>
            </td>
            <td>
              <strong>Преимущества</strong>
            </td>
          </tr>
          <tr>
            <td>
              Начальные темпы роста: хорошо Устойчивость к позднему полеганию:
              хорошо Толерантность к пыльной головне: отлично Толерантность к
              фузариозу початка: отлично Влагоотдача: быстрая
            </td>
            <td>
              Высокий потенциал урожайности в сочетании с пластичностью.
              Толерантный к болезням конца вегетационного периода. Быстрая
              влагоотдача зерна.
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ГЛОРИФИ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ГЛОРИФИ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default glorifi;