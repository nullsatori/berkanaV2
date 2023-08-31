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

const organitp = () => {
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
        <a
          href="http://berkanabio.ru/wp-content/uploads/2018/12/Organit-P.jpg"
          rel="attachment wp-att-1269"
        ></a>
        Биоудобрения. 
      </strong>
      Способствует мобилизации труднорастворимых соединений фосфора и калия в
      почве.
      <strong>Состав:</strong> Споры штамма Bacillus megaterium (титр не менее
      1х109 КОЕ/мл).
      <strong>Период защитного действия:</strong> В зависимости от условий,
      действие препарата сохраняется на протяжении 20-60 дней
      <strong>Совместимость:</strong> Полностью совместим с химическими СЗР в
      баковых смесях
      <strong>Условия и срок хранения:</strong> Препарат хранить в упаковке
      предприятия — изготовителя в сухих, чистых, вентилируемых, защищенных от
      воздействия прямых солнечных лучей и атмосферных осадков помещениях при
      температуре от +50С до + 250С в течение 12 месяцев со дня изготовления.
      После вскрытия препарат можно использовать в течение 7 суток. Рабочий
      раствор использовать в течение 24 часов после приготовления.
      <strong>Препаративная форма:</strong> Непрозрачная жидкость от светло —
      коричневого до темно-коричневого цвета.
      <strong>Класс опасности:</strong> IV (малоопасное)
      <h2>Механизм действия</h2>
      Безопасное и эффективное микробиологическое удобрение, улучшающее
      минеральное питание растений за счет повышения биодоступности фосфора.
      Споры Bacillus megaterium, содержащиеся в продукте, при попадании в почву
      активизируются, колонизируют ризосферу культурных растений, проявляя свои
      полезные свойства в непосредственной близости от корней. В процессе своего
      роста клетки бактерии растворяют труднодоступные для растений органические
      и неорганические соединения фосфора.
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bionovatik/">Bionovatik</a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Organit P - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Organit P" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default organitp;
