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

const lg50514 = () => {
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
      гектара. Возможно возделывание по экстенсивной технологии. Группа
      спелости: среднеранний Устойчивость к заразихе: А-G Средний диаметр
      корзинки,см - 16 Средняя масса 1000 семян, г - 65 Рекомендуемая густота на
      момент уборки: 55-60 тыс./га (зона достаточного увлажнения) 50-55 тыс./га
      (зона недостаточного увлажнения)
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
              Высокая стабильность урожайности в различных условиях
              возделывания; Высокое содержание масла; Максимально высокая
              толерантность к ржавчине; Хороший профиль по устойчивости к
              основным заболеваниям; Высокая толерантность к новым расам ложной
              мучнистой росы; Устойчив к заразихе рас А-G.
            </td>
            <td>
              Фомопсис - 9 Белая гниль корня - 8 Белая гниль корзинки - 7
              Пепельная гниль - 7 Фомоз - 8 Ржавчина - 9 Ложная мучнистая роса -
              9 Вертициллез - 8 Септориоз - 7
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЛГ 50514 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ЛГ 50514" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default lg50514;