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

const reguljatorkislotnostiraduzhnyj = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/2342342d06.png"></a>
        Органическая кислота, комплексообразователь, индикатор, вода
      </strong>
      Для улучшения качества воды, применяемой для приготовления рабочих
      растворов средств защиты растений и водорастворимых удобрений:
      <ul>
        <li>Снижение щелочности воды;</li>
        <li>Снижение карбонатной жесткости;</li>
        <li>Улучшение стабильности и однородности рабочего раствора;</li>
        <li>Повышение общей эффективности обработки растений.</li>
      </ul>
      <h2>Преимущества</h2>
      <ul>
        <li>
          Добавление препарата РАДУЖНЫЙ стабилизирует рабочий раствор и повышает
          эффективность СЗР и агрохимикатов;
        </li>
        <li>
          Предотвращает образование осадка или гелеобразование в баковой смеси.
        </li>
      </ul>
      <h2>Норма расхода</h2>
      0,05-0,3 л препарата на 100 л воды
      <h3>Цветовая шкала определения кислотности (pH)</h3>
      <ul>
        <li>
          Оптимальный уровень рН рабочего раствора находится в пределах 5,5-6,5
          ед.
        </li>
        <li>
          Баковые смеси, включающие гуминовые препараты, должны иметь рН не ниже
          6,0
        </li>
      </ul>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/ooo-nvp-bashinkom/">
        ООО “НВП БашИнком”
      </a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Регулятор кислотности РАДУЖНЫЙ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Регулятор кислотности РАДУЖНЫЙ"
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

export default reguljatorkislotnostiraduzhnyj;
