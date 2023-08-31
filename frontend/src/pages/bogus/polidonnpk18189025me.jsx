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

const polidonnpk18189025me = () => {
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
          href="https://berkanabio.ru/wp-content/uploads/2019/09/20190524075f6b1312ab5ceaf9b4c87f5ee7841e.png"
          rel="attachment wp-att-3450"
        ></a>
        Сбалансированный состав по азоту, фосфору и калию с микроэлементами в
        хелатной форме
      </strong>
      Используется на всех сельскохозяйственных культурах в критические периоды
      роста и развития. Жидкий комплекс необходим для устранения дефицита азота,
      фосфора, калия и достижения определенного направленного эффекта (повышения
      урожайности и качественных показателей: повышения содержания белка в
      зерновых и зернобобовых культурах, повышения содержания углеводов в
      сахарной свекле). Повышает усвоение растениями NPK из почвы.{" "}
      <strong>Вносится совместно с пестицидами.</strong>
      <h2>Состав (вес/объём/%)</h2>
      Азот (N общий) 180 г/л Фосфор (P2O5) 180 г/л Калий (K2O) 90 г/л Сера (SO3)
      0.9 г/л Железо (Fe) 0.75 г/л Марганец (Mn) 0.375 г/л Молибден (Mo) 0.3 г/л
      Медь (Cu) 0.15 г/л Цинк (Zn) 0.15 г/л Магний (MgO) 0.15 г/л Бор (B) 0.09
      г/л Кобальт (Co) 0.015 г/л
      <h3>Назначение</h3>
      <ul>
        <li>Повышает засухоустойчивость.</li>
        <li>Увеличивает коэффициент использования минеральных удобрений.</li>
        <li>Устраняет дефицит азота, фосфора и калия.</li>
        <li>Увеличивает продуктивное кущение.</li>
        <li>Улучшает вегетативное развитие.</li>
        <li>Увеличивает урожайность.</li>
      </ul>
      <h3>Оптимальные дозировки</h3>
      1,0-3,0 л/га, при расходе рабочего раствора 100-300 л.
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/tochka-rosta/">Точка Роста</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>ПОЛИДОН® NPK (18⁃18⁃9+0,25%ME) - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="ПОЛИДОН® NPK (18⁃18⁃9+0,25%ME)"
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

export default polidonnpk18189025me;