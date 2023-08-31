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

const mas83su = () => {
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
      <strong>Masseeds</strong>
      Ранняя корзина вашего успеха! Цветение: среднеранний Группа спелости:
      среднеранний Количество дней вегетации: 103 - 106 Тип: линолевый Высота
      растения: высокая Форма корзинки: слегка выпуклая Положение корзинки:
      слегка наклонена Масса 1000 семян: 50 - 55 Содержание масла (%): 50 - 52 %
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Преимущество</strong>
            </td>
            <td>
              <strong>Толерантность к болезням</strong>
            </td>
          </tr>
          <tr>
            <td>
              Уникальное соотношение раннеспелости и потенциала урожайности.
              Высокое содержание масла. Гарантированное качество Контроль
              сорняков.
            </td>
            <td>
              Ложная мучнистая роса: RM9 Фомопсис: 9 Склеротиния корзинки: 8
              Склеротиния стебля: 9
              <em>
                1-3 низкий | 4-6 средний | 7-9 хороший близкий к отличному
              </em>
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>МАС 83.СУ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="МАС 83.СУ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default mas83su;