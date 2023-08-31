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

const kajzerks = () => {
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
        <a href="https://berkanabio.ru/category/tiametoksam/">Тиаметоксам</a>{" "}
        (Актара) 350 г/л
      </strong>
      Системный инсектицид-протравитель семян сахарной свеклы, рапса, горчицы,
      подсолнечника и пшеницы от комплекса почвенных и наземных вредителей
      всходов.
      <h2>Преимущества</h2>
      <ul>
        <li>Производится в Европе;</li>
        <li>Обеспечивает надежную защиту от большинства вредителей;</li>
        <li>Не угнетает всходы и корневую систему культурных растений;</li>
        <li>
          В отличие от других неоникотиноидов, отлично работает в жарких и
          засушливых Условиях;
        </li>
        <li>
          Минимальный расход действующего вещества снижает пестицидную нагрузку;
        </li>
        <li>
          Позволяет производить заблаговременное (до 1 года) протравливание
          семян;
        </li>
        <li>
          Обработанные семена можно использовать в качестве переходных фондов;
        </li>
        <li>Полностью покрывает семена и прочно удерживается на них;</li>
        <li>
          Препарат выпускается в жидкой форме и, следовательно, при
          протравливании не образует пыль
        </li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
            </td>
            <td>
              <strong>Куль­ту­ра, об­ра­ба­ты­ва­емый объ­ект</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>
                Спо­соб, вре­мя об­ра­бот­ки, осо­бен­нос­ти при­ме­не­ния
              </strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0,5-1</td>
            <td>Пшеница, ячмень</td>
            <td>
              Внутристеблевые мухи, хлебная жужелица, цикадки, блошки, тли
            </td>
            <td>
              Обработка семян непосредственно перед посевом или заблаговременно.
              Расход рабочей жидкости – до 10 л/т семян
            </td>
          </tr>
          <tr>
            <td>0,5</td>
            <td>Пшеница</td>
            <td>Хлебная жужелица</td>
            <td>
              Обработка семян непосредственно перед посевом или заблаговременно.
              Расход рабочей жидкости – до 10 л/т семян
            </td>
          </tr>
          <tr>
            <td>8-12</td>
            <td>Свекла сахарная</td>
            <td>Вредители всходов</td>
            <td>
              Обработка семян непосредственно перед посевом или заблаговременно
              для фракции 4,5-5,5 мм. Расход рабочей жидкости – 15 л/т семян
            </td>
          </tr>
          <tr>
            <td>10-14</td>
            <td>Свекла сахарная</td>
            <td>Вредители всходов</td>
            <td>
              Обработка семян непосредственно перед посевом или заблаговременно
              для фракции 3,5-4,5 мм и для дражирования. Расход рабочей жидкости
              – до 25 л/т семян
            </td>
          </tr>
          <tr>
            <td>8-10</td>
            <td>Рапс, горчица</td>
            <td>Крестоцветные блошки</td>
            <td>
              Обработка семян непосредственно перед посевом или заблаговременно.
              Расход рабочей жидкости – 15 л/т семян
            </td>
          </tr>
          <tr>
            <td>8-10</td>
            <td>Подсолнечник</td>
            <td>Проволочники и ложнопроволочники</td>
            <td>
              Обработка семян непосредственно перед посевом или заблаговременно.
              Расход рабочей жидкости – 15 л/т семян
            </td>
          </tr>
          <tr>
            <td>0,2-0,22</td>
            <td>Картофель</td>
            <td>Колорадский жук, проволочники и ложнопроволочники</td>
            <td>Обработка клубней. Расход рабочей жидкости – 10 л/т</td>
          </tr>
          <tr>
            <td>6-9</td>
            <td>Кукуруза</td>
            <td>
              Проволочники и ложнопроволочники, внутристеблевые мухи, блошки
            </td>
            <td>
              Обработка семян непосредственно перед посевом или заблаговременно
              (до 1 года). Расход рабочей жидкости – 10 л/т
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Джи Ди Эс Кемикал
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Кайзер, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Кайзер, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default kajzerks;
