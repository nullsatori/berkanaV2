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

const lg50521klp = () => {
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
      Рекомендуется для хозяйств, ориентированных на высокий выход масла с
      гектара. В районах с распространением ржавчины рекомендуется проведение
      фунгицидной обработки. Возможно возделывание по экстенсивной технологии.
      Группа спелости: среднеранний Устойчивость к заразихе: A-G Технология
      возделывания: Clearfield Plus Средний диаметр корзинки, см - 19 Средняя
      масса 1000 семян, г - 74 Рекомендуемая густота на момент уборки: 60-65
      тыс./га (зона достаточного увлажнения) 55-60 тыс./га (зона недостаточного
      увлажнения)
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
              Стабильно высокое содержание масла; Хорошая стабильность
              урожайности в различных условиях возделывания; Оптимизирован для
              производственной системы Clearfield® Plus; Гибрид с устойчивостью
              к заразихе рас А-G; Хорошая толерантность к основным заболеваниям,
              включая новые расы ложной мучнистой росы.
            </td>
            <td>
              Фомопсис - 7 Белая гниль корня - 7 Белая гниль корзинки - 6
              Пепельная гниль - 7 Фомоз - 7 Ржавчина - 7 Ложная мучнистая роса -
              9 Вертициллез - 7 Септориоз - 9
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЛГ 50521 КЛП - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ЛГ 50521 КЛП" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default lg50521klp;