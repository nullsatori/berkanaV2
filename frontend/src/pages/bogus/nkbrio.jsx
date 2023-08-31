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

const nkbrio = () => {
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
      <strong>Syngenta</strong>
      Среднеспелый гибрид подсолнечника. Один из самых популярных в мире
      гибридов. Тип гибрида: Классический Группа спелости: Среднеспелый
      Назначение: Линолевый Масличность: до 52% Высота растений: 150–170 см
      Устойчивость к расам заразихи: A–E Технология возделывания: Классическая
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Преимущества</strong>
            </td>
            <td>
              <strong>Рекомендации по технологии</strong>
            </td>
          </tr>
          <tr>
            <td>
              Очень отзывчив на повышение уровня агротехнологии. Средняя энергия
              роста на начальных этапах органогенеза. Отличается высокой
              стабильностью.
            </td>
            <td>
              Сеять в оптимальные сроки. Для реализации потенциала урожайности
              применять интенсивную технологию. Соблюдать севооборотв, избегать
              загущения посевов. Проводить эффективный контроль сорняков.
              Избегать возделывания в полях с агрессивными расами заразихи.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>НК БРИО - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="НК БРИО" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default nkbrio;
