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

const borogumm745me = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/Borogum_M-3_54_50_1-_-ME.jpg"></a>
        Микроэлементы в хелатной форме
      </strong>
      Жидкое борное удобрение (В - 7%), усилен по NPK и содержит полный набор
      микроэлементов в хелатной форме. Стимулирует рост и развитие корней и
      клубнеобразование. Усиленные антистрессовые, иммуностимулирующие,
      ростоускоряющие и фунгицидные свойства.
      <h2>Состав</h2>
      <ul>
        <li>Макроэлементы: B-7,0%, NPK=7:4:5;</li>
        <li>
          Микроэлементы: Mo-0,01%, Co-0,01%, Cu-0,01%, Zn-0,01%, Mn-0,05%,
          Ni-0,001%, Li-0,0005%, S-0,01%, и Se-0,0001%, Cr-0,001%;
        </li>
        <li>Микроэлементы Co, Cu, Mn, Zn, Cr, Ni в хелатной форме;</li>
        <li>БМВ-гуматы - 3 %, Фитоспорин-М - 1%.</li>
      </ul>
      <h3>Рекомендовано</h3>
      Применяется для обработки посевов подсолнечника, рапса, картофеля.
      <h3>Норма расхода</h3>
      0,2 - 0,3 л/т, 10 л воды - предпосевная обработка семян 0,8 - 1,5 л/га на
      50-200 л воды - внекорневая подкормка
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/ooo-nvp-bashinkom/">
        ООО “НВП БашИнком”
      </a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Борогум М 7:4:5 + МЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Борогум М 7:4:5 + МЭ"
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

export default borogumm745me;