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

const orgamicas = () => {
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
          href="http://berkanabio.ru/wp-content/uploads/2018/12/Orgamica-S.jpg"
          rel="attachment wp-att-1287"
        ></a>
        Биофунгицид. 
      </strong>
      Подавление развития грибковых и бактериальных заболеваний растений,
      устойчив к засухе.
      <strong>Состав:</strong> Споры Bacillus amyloliquefaciens (титр не менее
      5х109 КОЕ/мл).
      <strong>Период защитного действия:</strong> После обработки семян фунгицид
      Orgamica S действует на корнях растений в течение всего периода вегетации.
      На стеблях и листьях растений биопрепарат действует в течение 10 – 20
      дней, в зависимости от степени инфицированности и погодных условий.
      <strong>Совместимость:</strong> Совместим в баковых смесях с большинством
      пестицидов.
      <strong>Условия и срок хранения:</strong> Препарат хранить в упаковке
      предприятия — изготовителя в сухих, чистых, вентилируемых, защищенных от
      воздействия прямых солнечных лучей и атмосферных осадков помещениях при
      температуре от +50С до +250С и относительной влажности воздуха не более
      75% в течение 12 месяцев. Не замораживать! После вскрытия препарат можно
      использовать в течение 7 суток. Рабочий раствор использовать в течение 24
      часов после приготовления.
      <strong>Препаративная форма:</strong> Мутная жидкость от светло-желтого до
      коричневого цвета.
      <strong>Класс опасности:</strong> IV (малоопасное)
      <h2>Механизм действия</h2>
      Являясь естественным обитателем почвы, штамм Bacillus amyloliquefaciens
      проявляет свои полезные свойства в непосредственной близости от корней и
      на поверхности листьев. При попадании в благоприятную среду обитания
      (увлажненная почва, поверхность растения) споры «прорастают», становясь
      метаболически активными вегетативными клетками, которые подавляют рост или
      полностью уничтожают вредоносные объекты посредством воздействия
      антибиотиков и гидролитических ферментов.
      <strong>Производитель:</strong> Bionovatik
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Orgamica S - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Orgamica S" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default orgamicas;
