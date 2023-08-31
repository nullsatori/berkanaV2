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

const biopolimikcuzn = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/biopolimik_med_tsink.jpg"></a>
        Микроэлементы в хелатной форме.
      </strong>{" "}
      <strong>Полимерно-хелатный комплекс меди и цинка (Cu-3%, Zn- 1%)</strong>
      Содержит набор жизненно необходимых микроэлементов в полимерно – хелатной
      форме с усиленным пролонгированным действием за счет образования
      эластичной полимерной пленки на поверхности листа. Обладает фунгицидными
      свойствами. Предназначен для внекорневых подкормок и предпосевной
      обработки семян.
      <h2>Состав</h2>
      Макроэлементы: NPK=3:0:0 Микроэлементный комплекс: Cu - 3%, Zn - 1%;
      Микроэлементы в полимерно-хелатной форме.
      <h3>Рекомендовано</h3>
      Для внекорневой подкормки с усиленным лечебным действием против грибных и
      бактериальных болезней зерновых, овощных и других сельскохозяйственных
      культур.
      <h3>Норма расхода</h3>
      0,3 - 0,5 л/га (обработка посевов)
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
        <title>Биополимик Cu-Zn - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Биополимик Cu-Zn"
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

export default biopolimikcuzn;
