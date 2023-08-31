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

const aqualis614352mgome = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2020/09/aqualis-6-14-35-2mgo-me.png"></a>
      Финальная калийная марка с низким содержанием азота. В конце вегетации
      стимулирует цветение, завязывание или уже развитие урожая. Низкое
      содержание азота поддерживает питание, но не стимулирует дальнейшее
      развитие листового аппарата. Применение усиливает отток веществ в
      продуктивные части растения, помогает увеличить содержание сухих веществ.
      Магний, сера и микроэлементы формируют красивые, сочные и крепкие плоды у
      овощных, повышают качество зерна и корнеплодов.
      <h3>Преимущества продуктов</h3>
      <ul>
        <li>100% растворимость в воде;</li>
        <li>
          Улучшает вкусовые качества, товарный вид и сроки хранения продукции;
        </li>
        <li>Комплекс микроэлементов: B, Cu, Mn, Zn, Fe, Mo в составе;</li>
        <li>Cu, Mn, Zn, Fe - в хелатной форме;</li>
        <li>Синергетический эффект при использовании с КАС-32;</li>
        <li>Повышают сахаристость корнеплодов;</li>
        <li>Повышают устойчивость к стрессовым факторам;</li>
      </ul>
      <h3>Состав питательных веществ</h3>
      <table>
        <tbody>
          <tr>
            <td>
              Азот общий (N), не менее 6% Азота аммонийного, не менее 1,5% Азота
              нитратного, не менее 4,5% Общие фосфаты в пересчете на P2O5, не
              менее 14,3% Калий, не менее 35% Сера, не менее 1,5% Оксид магния,
              не более (MgO) 2%
            </td>
            <td>
              Микроэлементы: B 0,02% Cu 0,005% Mn 0,005% Zn 0,01% Fe 0,07% Mo
              0,004%
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Норма расхода</h3>
      Зерновые 2-5 кг/га Плодово-ягодные 1-5 кг/га Овощи 3-5 кг/га
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/evrohim/">ЕвроХим</a>
      <strong>Упаковка:</strong> 25 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Aqualis® 6-14-35+2MgO+МЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Aqualis® 6-14-35+2MgO+МЭ"
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

export default aqualis614352mgome;
