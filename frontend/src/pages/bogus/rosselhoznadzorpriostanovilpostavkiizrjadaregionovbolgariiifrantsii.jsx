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

const rosselhoznadzorpriostanovilpostavkiizrjadaregionovbolgariiifrantsii =
  () => {
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
        <em>Ограничения связаны со вспышками болезней</em>
        Федеральная служба по ветеринарному и фитосанитарному надзору
        (Россельхознадзор) приостановила поставки и транзит продукции и животных
        из определенных областей Болгарии и Франции в связи со вспышками
        заболеваний в этих странах. Ограничения вступили в силу 31 марта 2016
        года, сообщила пресс-служба Россельхознадзора. В Хасковской области
        Болгарии зарегистрирована вспышка болезни Ньюкасла, в связи с этим
        вводятся временные ограничения на ввоз в Россию живой птицы и
        инкубационного яйца, мяса птицы и всех видов птицеводческой продукции,
        не прошедших тепловую обработку (не менее 70 градусов Цельсия), кормов и
        кормовых добавок для птиц (за исключением кормовых добавок растительного
        происхождения, химического и микробиологического синтеза), бывшего в
        употреблении оборудования для содержания, убоя и разделки птиц.
        Аналогичные меры вводятся из-за вспышки блутанга в отношении пяти
        французских регионов: Приморская Шаранта, Эндр, Жиронда, Рона и Арьеж.
        Из них нельзя экспортировать племенной крупный и мелкий рогатый скот,
        диких, зоопарковых и цирковых животных, восприимчивых к блутангу,
        верблюдов и других представителей семейства верблюжьих, сперму быков,
        баранов и козлов-производителей, а также эмбрионы крупного и мелкого
        рогатого скота. Источник:{" "}
        <a href="http://www.agroxxi.ru/rossiiskie-agronovosti/rosselhoznadzor-priostanovil-postavki-produkcii-iz-rjada-regionov-bolgarii-i-francii.html">
          www.agroxxi.ru
        </a>
      </div>
    );

    return (
      <>
        <Head>
          <title>
            Россельхознадзор приостановил поставки из ряда регионов Болгарии и
            Франции - Berkana
          </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout style={(headerStyle, pathStyle)}>
          <HeadNav
            pageName="Россельхознадзор приостановил поставки из ряда регионов Болгарии и Франции"
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

export default rosselhoznadzorpriostanovilpostavkiizrjadaregionovbolgariiifrantsii;