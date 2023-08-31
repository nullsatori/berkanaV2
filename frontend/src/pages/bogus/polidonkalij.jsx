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

const polidonkalij = () => {
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
          href="https://berkanabio.ru/wp-content/uploads/2019/09/20190524e02946a.png"
          rel="attachment wp-att-3454"
        ></a>
        Состав с высоким содержанием калия, фосфора (в виде дифосфоновой
        кислоты) и кремния в хелатной форме
      </strong>
      Применяется на всех сельскохозяйственных культурах в критические периоды
      роста и развития. Разработан для совместного использования в баковых
      смесях с гербицидами имидазолиновой группы, глифосатами. Вносится
      совместно с пестицидами и растворами минеральных удобрений.
      <h2>Состав (вес/объём/%)</h2>
      Калий (K2O) 180 г/л Фосфор (P2O5) 130 г/л Кремний (SiO2) 5 г/л
      <h3>Назначение</h3>
      <ul>
        <li>Устраняет дефицит калия, фосфора и кремния.</li>
        <li>Уменьшает риск полегания зерновых.</li>
        <li>Усиливает синтез и транспортировку углеводов.</li>
        <li>Усиливает фотосинтез.</li>
        <li>Оптимизирует водопотребление.</li>
        <li>Снижает стресс от переизбытка азота.</li>
        <li>Повышает сопротивляемость к болезням и атакам вредителей.</li>
        <li>Повышает урожайность и качественные показатели.</li>
        <li>Повышает стрессоустойчивость.</li>
        <li>Повышает поступление фосфора.</li>
      </ul>
      <h3>Оптимальные дозировки</h3>
      0,5-1,0 л/га, при расходе рабочего раствора 100-300 л.
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/tochka-rosta/">Точка Роста</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>ПОЛИДОН® КАЛИЙ + - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="ПОЛИДОН® КАЛИЙ +"
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

export default polidonkalij;
