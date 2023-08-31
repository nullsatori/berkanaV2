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

const polidonmolibden = () => {
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
        <a
          href="https://berkanabio.ru/wp-content/uploads/2019/09/201905242bff9b99.png"
          rel="attachment wp-att-3446"
        ></a>
        Состав с высоким содержанием молибдена в хелатной форме
      </strong>
      Применяется на всех сельскохозяйственных культурах в критические периоды
      роста и развития. Вносится совместно с пестицидами и растворами
      минеральных удобрений.
      <h2>Состав (вес/объём/%)</h2>
      Молибден (Mo) 80 г/л Кобальт (Co) 5 г/л
      <h3>Преимущества</h3>
      <ul>
        <li>Устраняет дефицит молибдена и кобальта.</li>
        <li>Способствует образованию клубеньковых бактерий у бобовых.</li>
        <li>Повышает фиксацию атмосферного азота.</li>
        <li>Усиливает синтез хлорофилла.</li>
        <li>Увеличивает коэффициент использования минеральных удобрений.</li>
      </ul>
      <h3>Оптимальные дозировки:</h3>
      0,1-0,3 л/га, при расходе рабочего раствора 100-300 л.
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/tochka-rosta/">Точка Роста</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>ПОЛИДОН® МОЛИБДЕН - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="ПОЛИДОН® МОЛИБДЕН"
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

export default polidonmolibden;