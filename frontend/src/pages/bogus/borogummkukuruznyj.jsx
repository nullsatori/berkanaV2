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

const borogummkukuruznyj = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/Borogum_M_kukuruznyy.jpg"></a>
        Микроэлементы в хелатной форме
      </strong>
      Жидкое борное удобрение, усилен марганцем, содержит набор микроэлементов в
      хелатной форме. Применяется для предпосевной обработки семян кукурузы,
      усиливает интенсивность дыхательных процессов, ускоряет прорастание и
      стимулирует мощное отрастание корневой системы.
      <h2>Состав</h2>
      <ul>
        <li>
          Микроэлементный комплекс: B-4,0%, Mn-0,2%;Cu-1,0%, Zn-0,1%, Fe-0,05%,
          S-0,7%;
        </li>
        <li>Микроэлементы Cu, Mn, Zn в хелатной форме;</li>
        <li>БМВ-гуматы - 1%, Фитоспорин-М.</li>
      </ul>
      <h3>Норма расхода</h3>
      0,3 - 0,5 л/т - предпосевная обработка семян
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
        <title>Борогум М (кукурузный) - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Борогум М (кукурузный)"
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

export default borogummkukuruznyj;
