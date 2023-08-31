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

const ljambdaske = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/05/berkanabio-lyambda-s-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
          Лямбда-цигалотрин
        </a>{" "}
        50 г/л
      </strong>
      Инсектицид предназначается для защиты зерновых, технических, овощных,
      плодовых и других культур от комплекса листогрызущих и сосущих насекомых,
      включая клещей.
      <h2>Преимущества</h2>
      <ul>
        <li>
          защита широкого спектра культур от важнейших вредителей, в том числе
          взрослых клещей, что
        </li>
        <li>позволяет избежать применения акарицидов;</li>
        <li>
          начинает действовать немедленно после обработки и оказывает быстрое
          парализующее действие на насекомых (нокдаун-эффект);
        </li>
        <li>
          продолжительный период защитного действия при высокой солнечной
          инсоляции и выпадении осадков;
        </li>
        <li>
          высокая эффективность против вредителей в сочетании с невысокой
          стоимостью обработки.
        </li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма</strong>
            </td>
            <td>
              <strong>Куль­ту­ра</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Хлебные жуки, пшеничный трипс, блошки, цикадки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Клоп вредная черепашка, тли, пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15-0,2</span>
            </td>
            <td>
              <span>Ячмень</span>
            </td>
            <td>
              <span>Мухи, пьявицы, цикадки, стеблевые пилильщики, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Яблоня</span>
            </td>
            <td>
              <span>Яблонная плодожорка, листовертки, клещи</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 1000-1500 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Яблоня</span>
            </td>
            <td>
              <span>Яблонный цветоед</span>
            </td>
            <td>
              <span>Опрыскивание до цветения.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Горчица (кроме горчицы на масло)</span>
            </td>
            <td>
              <span>Рапсовый цветоед</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Вишня (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5</span>
            </td>
            <td>
              <span>Земляника (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 400-500 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Малина (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 600-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,4</span>
            </td>
            <td>
              <span>Смородина (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 600-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3</span>
            </td>
            <td>
              <span>Крыжовник (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, пилильщики</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 600-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Колорадский жук</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Капуста</span>
            </td>
            <td>
              <span>
                Капустная совка, белянки, капустная моль, крестоцветные блошки
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Неплодоносящие сады, лесозащитные полосы</span>
            </td>
            <td>
              <span>Американская белая бабочка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости - 1000-1500 л/га. Срок для сбора
                дикорастущих грибов и ягод на обработанных территориях - 30
                дней. Срок возможного пребывания людей на обработанных площадях
                - не ранее 7 дней после обработки
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,32-0,48</span>
            </td>
            <td>
              <span>Виноград</span>
            </td>
            <td>
              <span>Листовертки, клещи</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 600-1000 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>Рапсовый цветоед</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Блошки</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15</span>
            </td>
            <td>
              <span>Люцерна</span>
            </td>
            <td>
              <span>
                Клопы, тли, долгоносики, листоблошки, толстоножка люцерновая
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Пастбища, дикая растительность</span>
            </td>
            <td>
              <span>Саранчовые нестадные</span>
            </td>
            <td>
              <span>Опрыскивание в период развития личинок.</span>
              <span>
                Расход рабочей жидкости - 200-400 л/га. Срок для сбора
                дикорастущих грибов и ягод на обработанных территориях - 30
                дней. Срок возможного пребывания людей на обработанных площадях
                - не ранее 7 дней после обработки
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Пастбища, дикая растительность</span>
            </td>
            <td>
              <span>Саранчовые стадные (личинки младших возрастов)</span>
            </td>
            <td>
              <span>Опрыскивание в период развития личинок.</span>
              <span>
                Расход рабочей жидкости - 200-400 л/га. Срок для сбора
                дикорастущих грибов и ягод на обработанных территориях - 30
                дней. Срок возможного пребывания людей на обработанных площадях
                - не ранее 7 дней после обработки
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Пастбища, дикая растительность</span>
            </td>
            <td>
              <span>Саранчовые стадные (личинки старших возрастов)</span>
            </td>
            <td>
              <span>
                Опрыскивание в период развития личинок. Расход рабочей жидкости
                - 200-400 л/га. Срок для сбора дикорастущих грибов и ягод на
                обработанных территориях - 30 дней. Срок возможного пребывания
                людей на обработанных площадях - не ранее 7 дней после обработки
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/rosagrohim/">
        <span>РосАгроХим</span>
      </a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Лямбда-С, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Лямбда-С, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default ljambdaske;
