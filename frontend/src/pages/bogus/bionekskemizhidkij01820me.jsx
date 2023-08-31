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

const bionekskemizhidkij01820me = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/Bioneks_Kemi_0_18_20.jpeg"></a>
        Микроэлементы в хелатной форме
      </strong>
      Водорастворимые комплексные биоактивированные удобрения серии Бионекс-Кеми
      с NPK, микроэлементами в полимерно-хелатной форме и биофунгицидом
      Фитоспорин-М. растворимые, бесхлорные, с полным набором макро- и
      микроэлементов в полимерно-хелатной форме и с защитными свойствами от
      болезней растений:
      <h3>Преимущества</h3>
      <ul>
        <li>
          обеспечивают увеличение урожайности с/х культур на 15-20%; один
          вложенный рубль дает 5-10 рублей чистой прибыли;
        </li>
        <li>
          содержит сбалансированный набор макро- и микроэлементов в
          полимерно-хелатной форме, обладает фунгицидными свойствами;
        </li>
        <li>насыщен универсальным биофунгицидом Фитоспорин;</li>
        <li>
          наличие в удобрении микроэлементов в полимерно-хелатной форме
          обеспечивает их легкое, практически полное усвоение растениями,
          предотвращая их окисление. За счет полимерных цепочек удобрение
          Бионекс-Кеми удерживается на листьях, корневых волосках и частицах
          почвы, оказывая длительное воздействие на протяжении различных
          периодов вегетации;
        </li>
        <li>
          позволяет регулировать питание растений с учетом их биологической
          особенности по периодам роста, что формирует высокие урожаи с лучшим
          качеством.
        </li>
      </ul>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/ooo-nvp-bashinkom/">
        ООО “НВП БашИнком"
      </a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Бионекс-Кеми Жидкий (0+18+20+МЭ) - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Бионекс-Кеми Жидкий (0+18+20+МЭ)"
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

export default bionekskemizhidkij01820me;
