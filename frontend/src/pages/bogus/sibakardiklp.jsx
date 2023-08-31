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

const sibakardiklp = () => {
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
      Среднеспелый высокопродуктивный гибрид для производственной системы
      Clearfield® Plus. Технологичность, Сила и Выносливость. Тип гибрида: для
      производственной системы Clearfield® Plus Группа спелости: среднеспелый
      Назначение: линолевый Масличность: 50–52% Высота растений: 150–170 см
      Устойчивость к расам заразихи: A–E Технология возделывания:
      производственная система Clearfield® Plus
      <table>
        <tbody>
          <tr>
            <td>Преимущество</td>
            <td>Рекомендации по технологии</td>
          </tr>
          <tr>
            <td>
              Генетически близок к гибриду НК КОНДИ обладает уникально высоким
              потенциалом урожайности (55 ц/га и выше)Средняя энергия роста на
              начальных этапах органогенезаВысокая масличность
            </td>
            <td>
              Рекомендации по технологии для реализации потенциала применять
              интенсивную технологиюИзбегать загущения посевовСеять в
              оптимальные сроки
            </td>
          </tr>
        </tbody>
      </table>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>СИ БАКАРДИ КЛП - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="СИ БАКАРДИ КЛП"
          style={style}
          pathStyle={pathStyle}
        />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default sibakardiklp;
