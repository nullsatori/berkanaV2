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

const bionekskemi40152 = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/9963.png"></a>
        NPK + Mg=40:1,5:2,0+0,7%
      </strong>
      Микроэлементы в хелатной форме. Для внекорневой азотной и микроэлементной
      подкормки растений. Усиленные антистрессовые, иммуностимулирующие,
      ростоускоряющие и фунгицидные свойства. Используется для стимулирования
      роста и развития зерновых культур в фазе кущения, для улучшения качества
      зерна (повышения содержания клейковины) в начале формирования зерна.
      <h3>Преимущества</h3>
      <ul>
        <li>Гигроскопичный порошок и гранулы;</li>
        <li>
          Микроэлементный комплекс: B-0,7%, Mo-0,005%, Co-0,001%, Cu-0,01%,
          Zn-0,01%, Mn-0,01%;
        </li>
        <li>
          Микроэлементы Co, Cu, Mn, Zn в полимерно -хелатной форме;Фитоспорин-М
          - 1%;
        </li>
        <li>БМВ-гуматы - 0,5%.</li>
      </ul>
      <h3>Норма расхода</h3>
      3-5 кг/га для стимулирования роста и развития в фазе кущения; 10-15 кг/га
      для улучшения качества в фазе налива и формирования зерна.
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/ooo-nvp-bashinkom/">
        ООО &quot;НВП БашИнком&quot;
      </a>
      <strong>Упаковка:</strong> 20 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Бионекс-Кеми (40+1,5+2) - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Бионекс-Кеми (40+1,5+2)"
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

export default bionekskemi40152;
