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

const lg50545klp = () => {
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
      Подходи для наиболее ранних сроков сева. Не рекомендуется загущение
      посевов. Возможно возделывание по минимальной (Mini-Till) и нулевой
      технологии (No-Till). Группа спелости: среднеспелый Устойчивость к
      заразихе: A-G Технология возделывания: Clearfield Plus Средний диаметр
      корзинки, см - 17 Средняя масса 1000 семян, г - 74 Рекомендуемая густота
      на момент уборки: 50-55 тыс./га (зона достаточного увлажнения) 50-55
      тыс./га (зона недостаточного увлажнения)
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
              Среднеспелый гибрид для зон с недостатком влаги; Оптимизирован для
              производственной системы Clearfield® Plus; Стабильный урожай в
              стрессовых условиях выращивания; Гибрид с устойчивостью к заразихе
              рас А-G; Хорошая толерантность к основным заболеваниям, включая
              новые расы ложной мучнистой росы.
            </td>
            <td>
              Фомопсис - 8 Белая гниль корня - 7 Белая гниль корзинки - 8
              Пепельная гниль - 7 Фомоз - 7 Ржавчина - 8 Ложная мучнистая роса -
              9 Септориоз - 7 Вертициллез - 6
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>ЛГ 50545 КЛП - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ЛГ 50545 КЛП" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default lg50545klp;
