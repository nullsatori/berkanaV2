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

const aqualis134013me = () => {
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
          href="https://berkanabio.ru/wp-content/uploads/2020/09/25kg-Aqualis-13-40-13ME-240x376-196x265-1.png"
          rel="attachment wp-att-3273"
        ></a>
        Источник стартового фосфора
      </strong>
      Применяется в начале вегетации для стимулирования развития корневой
      системы и листового аппарата. Азот, калий и микроэлементы в составе
      помогают заложить здоровые и сильные генеративные органы для качественного
      урожая. Азот преобладает в аммонийной форме.
      <h3>Состав</h3>
      Азот общий (N) - 13% Общие фосфаты в пересчете на (P2O5) - 40% Калий - 13%
      Сера - 1,5% Микроэлементы B - 0.02% Cu - 0,005% Mn - 0,005% Zn - 0,01% Fe
      - 0,07% Mo - 0,004%
      <h3>Преимущества продуктов</h3>
      <ul>
        <li>100% растворимость в воде;</li>
        <li>Комплекс микроэлементов: B, Cu, Mn, Zn, Fe, Mo в составе;</li>
        <li>Cu, Mn, Zn, Fe - в хелатной форме;</li>
        <li>Синергетический эффект при использовании с КАС-32;</li>
        <li>Идеальное решение для внекорневых подкормок;</li>
      </ul>
      <h3>Норма расхода и применение</h3>
      <table>
        <tbody>
          <tr>
            <td>Кукуруза</td>
            <td>2-5 кг/га</td>
          </tr>
          <tr>
            <td>Овощи</td>
            <td>1-5 кг/га</td>
          </tr>
          <tr>
            <td>Плодовые</td>
            <td>3-5 кг/га</td>
          </tr>
        </tbody>
      </table>
      <strong>
        Производитель:{" "}
        <a href="https://berkanabio.ru/category/evrohim/">ЕвроХим</a>
      </strong>
      <strong>Упаковка:</strong> 25 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Aqualis® 13-40-13+МЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Aqualis® 13-40-13+МЭ"
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

export default aqualis134013me;
