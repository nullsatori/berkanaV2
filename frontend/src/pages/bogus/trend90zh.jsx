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

const trend90zh = () => {
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
      <strong>
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/23523rerfew.jpeg"></a>
        90% водный раствор этоксилата изодецилового спирта
      </strong>
      ПАВ Тренд® 90 уменьшает поверхностное натяжение капель, что приводит к
      увеличению поверхности покрытия листа и вызывает увеличение площади
      поглощения (абсорбции). Использование ПАВ Тренд® 90 способствует
      проникновению через кутикулу и значительно ускоряет поступление
      сульфонилмочевинных гербицидов в листья сорняков.
      <h2>Норма расхода</h2>
      ПАВ Тренд® 90 применяется в концентрации 0,1% (100 мл/100 л воды) при
      норме расхода рабочей жидкости от 200 до 300 л/га. В засушливых и жарких
      условиях для защиты посевов кукурузы от злаковых сорняков рекомендуется
      увеличить норму ПАВ Тренд® 90 до 300 мл/га и увеличить расход рабочего
      раствора.
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/djupon/">ООО “Дюпон”</a>
      <strong>Упаковка:</strong> 5 л.
    </div>
  );

  return (
    <>
      <Head>
        <title>Тренд-90, Ж - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Тренд-90, Ж" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default trend90zh;
