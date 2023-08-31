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

const metarizinzh = () => {
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
      <strong>Metarhizium anisopliae Р-72 титр не менее 108 КОЕ/мл</strong>
      Рекомендуется для защиты растений от почвообитающих вредителей (медведки,
      личинок майских хрущей, щелкунов, чернотелок, хробака и т.д.), а так же
      при обработке грядок с клубникой.
      <h2>Механизм действия</h2>
      Энтомопатогенный гриб Metarhizium anisopliae прорастает в полость тела
      насекомых, что вызывает микоз и гибель вредителей. Смерть насекомых
      происходит от нарушения циркуляции крови и от выделяемых грибом продуктов
      жизнедеятельности – токсинов и ферментов.
      <h2>Норма расхода</h2>
      Инструкция по применению в СХ
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма</strong>
            </td>
            <td>
              <strong>Куль­ту­ра</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>2-5</span>
            </td>
            <td>
              <span>Пастбища, участки заселенные саранчовыми</span>
            </td>
            <td>
              <span>Саранчовые</span>
            </td>
            <td>
              <span>Опрыскивание в период развития личинок.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      Инструкция по применению в ЛПХ
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма</strong>
            </td>
            <td>
              <strong>Куль­ту­ра</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>
                100 мл/ 100 м<sup>2</sup>
              </span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Проволочники</span>
            </td>
            <td>
              <span>Внесение в почву при посадке.</span>
              <span>
                Расход рабочей жидкости – 2 л/100 м<sup>2</sup>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/agrokom/">Агроком</a>
      <strong>Упаковка:</strong> 0,5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Метаризин, Ж - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Метаризин, Ж" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default metarizinzh;
