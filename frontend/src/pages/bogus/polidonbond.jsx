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

const polidonbond = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/20201106d5a678e.png"></a>
        Состав на основе композиции органосиликоновых и неионогенных ПАВ с
        солюбилизатором
      </strong>
      Обеспечивает мгновенное растекание рабочего раствора по листу за счёт
      снижения поверхностного натяжения. Не фитотоксичен. Безопасен для
      окружающей среды. Совместим со всеми видами пестицидов.
      <h2>Состав (вес/объём/%)</h2>
      Композиция органосиликоновых ПАВ 60 % Композиция алкоксилатов 20 %
      Инертные вещества 20 %<h3>Назначение</h3>
      <ul>
        <li>Снижает нормы расхода агрохимикатов.</li>
        <li>
          Обеспечивает высокую дисперсность и стабильность рабочего раствора.
        </li>
        <li>
          Позволяет проводить обработку при высоких скоростях и ветреной погоде.
        </li>
        <li>Увеличивает эффективность борьбы с переросшими сорняками.</li>
        <li>Повышает устойчивость к смыванию осадками.</li>
        <li>
          Усиливает действие пестицидов и некорневых подкормок в сухую и жаркую
          погоду за счет попадания рабочего раствора в труднодоступные места
          растений.
        </li>
        <li>
          Увеличивает прилипание, а также адгезию пестицидов и некорневых
          подкормок.
        </li>
        <li>Снижает объем рабочей жидкости.</li>
        <li>Увеличивает объем обрабатываемой площади.</li>
        <li>Уменьшает износ распылителей (форсунок) опрыскивателей.</li>
      </ul>
      <h3>Оптимальные дозировки</h3>
      Низкие нормы расхода: 0,025-0,050%
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/tochka-rosta/">Точка Роста</a>
      <strong>Упаковка:</strong> 1 л
    </div>
  );

  return (
    <>
      <Head>
        <title>ПОЛИДОН® БОНД - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ПОЛИДОН® БОНД" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default polidonbond;