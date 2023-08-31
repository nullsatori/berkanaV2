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

const optimoke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/06/optimo-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/piraklostrobin/">
          Пираклостробин
        </a>{" "}
        200 г/л
      </strong>
      Новый фунгицид для защиты кукурузы и сои от болезней.
      <h2>Преимущество</h2>
      <ul>
        <li>эффективный контроль основных болезней сои и кукурузы;</li>
        <li>повышение урожайности;</li>
        <li>лучшая стрессоустойчивость;</li>
        <li>большая экономическую эффективность;</li>
        <li>лучшее качество продукции;</li>
      </ul>
      <h3>Норма расхода</h3>
      <div class="table_content_wrap">
        <table class="main_content">
          <tbody>
            <tr>
              <td>
                <strong>Норма</strong>
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
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Кукуруза</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Прикорневые и стеблевые гнили, пузырчатая головня,
                  гельминториоз, фузариоз
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации профилактическое или при
                  появлении первых признаков болезней в фазы видимое образование
                  междоузлий или выметание початковых нитей.
                </span>
                <span>
                  Расход рабочей жидкости при наземном опрыскивании - 300 л/га,
                  авиационном - 50 л/га.
                </span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5(А)</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Кукуруза</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Прикорневые и стеблевые гнили, пузырчатая головня,
                  гельминториоз, фузариоз
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации профилактическое или при
                  появлении первых признаков болезней в фазы видимое образование
                  междоузлий или выметание початковых нитей.
                </span>
                <span>
                  Расход рабочей жидкости при наземном опрыскивании - 300 л/га,
                  авиационном - 50 л/га.
                </span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Соя</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Аскохитоз, пероноспороз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации профилактическое при появлении
                  первых признаков болезней.
                </span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5-1</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Подсолнечник</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Белая и серая гнили, альтернариоз, фомоз, фомопсис</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации при появлении первых признаков
                  одной из болезней при однократном приименении; При двукратном:
                  первое – при появлении первых признаков одной из болезней,
                  второе – через 14-21 дней.
                </span>
                <span>Расход рабочей жидкости- до 300 л/га</span>
              </td>
            </tr>
            <tr class="uneven" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Горох</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Аскохитоз, ржавчина</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации при появлении первых признаков
                  болезней. Расход рабочей жидкости - 300 л/га
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
        <strong>Упаковка:</strong> 5 л
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Оптимо, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Оптимо, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default optimoke;
