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

const borogummkompleksnyj = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/Borogum_M_kompleksnyy.jpg"></a>
        Микроэлементы в хелатной форме
      </strong>
      Применяется для обработки семян всех сельскохозяйственных культур и
      клубней картофеля, а также внекорневые подкормки. Обладает сильно
      выраженным иммуно-ростостимулирующими свойствами и защищает семена и
      всходы от комплекса болезней.
      <h2>Состав</h2>
      <ul>
        <li>
          Микроэлементный комплекс: B - 4,0%, Mo - 0,05%; Co-0,01%, Cu-0,2%,
          Zn-0,01%, Mn-0,02%, Ni-0,001%, Li-0,001%, S - 0,17%, Se-0,0001%,
          Cr-0,0002%, Fe - 0,05%;
        </li>
        <li>БМВ-гуматы - 1 %, Фитоспорин-М.</li>
      </ul>
      <h3>Норма расхода</h3>
      0,2 - 0,3 л/т на 10 л воды - предпосевная (предпосадочная) обработка семян
      и клубней; 0,8-1,0 л/га на 50-200 л воды внекорневая подкормка
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
        <title>Борогум М комплексный - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Борогум М комплексный"
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

export default borogummkompleksnyj;
