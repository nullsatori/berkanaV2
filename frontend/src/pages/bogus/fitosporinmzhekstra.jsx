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

const fitosporinmzhekstra = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/Fitosporin_M_ZH-Ekstra.jpeg"></a>
        Усиленная формула набором 11 микроэлементов в хелатной (ЭДТА) и
        амино-хелатной формах.
      </strong>
      <h2>Состав</h2>
      <ul>
        <li>
          Живые симбиотические бактериальные культуры Bacillus subtilis 26D, 1К
          (1×109 живых клеток и спор на 1 мл), БМВ-гуминовые вещества, 11
          микроэлементов;
        </li>
        <li>Cu, Zn, Co, Cr, Ni, Li-в хелатной (ЭДТА) аминохелатной формах;</li>
        <li>20 L-аминокислот натурального происхождения – 2 %</li>
        <li>Природные полисахариды, фитогормоны, витамины;</li>
      </ul>
       <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/ooo-nvp-bashinkom/">
        ООО «НВП БашИнком»
      </a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>ФИТОСПОРИН®-М, Ж ЭКСТРА - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="ФИТОСПОРИН®-М, Ж ЭКСТРА"
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

export default fitosporinmzhekstra;