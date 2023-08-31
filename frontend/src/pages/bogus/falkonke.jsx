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

const falkonke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/06/berkanabio-falkon-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/spiroksamin/">Спироксамин</a>{" "}
        250 г/л +{" "}
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a>{" "}
        167 г/л +{" "}
        <a href="https://berkanabio.ru/category/triadimenol/">
          Триадименол (Байтан)
        </a>{" "}
        43 г/л
      </strong>
      Трёхкомпонентный системный фунгицид для зерновых культур, сахарной свеклы
      и виноградной лозы профилактического, лечебного и искореняющего действия.
      <h2>Преимущество</h2>
      <ul>
        <li>Высокая надёжность против широкого спектра заболеваний;</li>
        <li>Быстрое начало действия с последующей длительной защитой;</li>
        <li>Широкий диапозон сроков применения;</li>
        <li>Надёжная защита при различных погодных условиях;</li>
        <li>Профилактика формирования резистентности;</li>
      </ul>
      <h3>Норма расхода</h3>
      <div class="table_content_wrap">
        <table class="main_content">
          <tbody>
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
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Пшеница яровая и озимая</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Ржавчина бурая, ржавчина стеблевая, ржавчина желтая,
                  септориоз, гельминтоспориоз, мучнистая роса, фузариоз колоса,
                  ломкость стеблей
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации. Против фузариоза колоса:
                  конец колошения, начало цветения.
                </span>
                <span>Расход рабочей жидкости - 200-300 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Ячмень яровой и озимый</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Мучнистая роса, ржавчина карликовая, ржавчина бурая,
                  полосатая, сетчатая и темно-бурая пятнистости листьев,
                  септориоз, ринхоспориоз, фузариоз колоса, ломкость стеблей
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации. Против фузариоза колоса:
                  конец колошения, начало цветения.
                </span>
                <span>Расход рабочей жидкости - 200-300 л/га.</span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Рожь озимая</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Ржавчина бурая, гельминтоспориоз, септориоз, фузариоз колоса,
                  ломкость стеблей
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации. Против фузариоза колоса:
                  конец колошения, начало цветения.
                </span>
                <span>Расход рабочей жидкости - 200-300 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,4</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Виноград</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Оидиум</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации: до цветения, после цветения,
                  ягода размером с крупинку, зеленая ягода.
                </span>
                <span>Расход рабочей жидкости - 800-1000 л/га.</span>
              </td>
            </tr>
            <tr class="uneven" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Свекла сахарная</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Церкоспороз, мучнистая роса, фомоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации в фазе начало смыкания рядков,
                  последующие - с интервалом 14-16 дней.
                </span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bajer/">Байер</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Фалькон, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Фалькон, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default falkonke;
