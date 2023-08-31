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

const modduske = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/moddus-tmb.jpeg"></a>
        250 г/л тринексапак-этил
      </strong>
      Высокоэффективный регулятор роста растений для предотвращения полегания
      зерновых культур.
      <h2>Преимущества</h2>
      Повышает зимостойкость растений за счет:
      <ul>
        <li>увеличения содержания сахаров в осенний период</li>
        <li>укрепления корневой системы</li>
      </ul>
      Уменьшает риск полегания за счет:
      <ul>
        <li>укрепления корневой системы</li>
        <li>укрепления стебля</li>
        <li>сокращения длины междоузлий</li>
      </ul>
      Закладывает высокий потенциал урожайности растений за счет:
      <ul>
        <li>улучшения влагообеспеченности</li>
        <li>повышения продуктивного стеблестоя</li>
        <li>улучшения перезимовки</li>
      </ul>
      Технологические преимущества:
      <ul>
        <li>
          можно применять с фазы «кущение» до начала появления флагового
          листаможно применять в широком диапазоне температур начиная с +8°С
        </li>
        <li>отсутствие фитотоксического действия на культуру</li>
      </ul>
      <h2>Норма расхода</h2>
      Пшеница и ячмень яровые и озимые, рожь озимая: 0,2–0,4 л/га на 150–200
      л/га Озимая пшеница: 0,2 л/га на 150–200 л/га
      <strong>Производство:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Моддус, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Моддус, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default modduske;