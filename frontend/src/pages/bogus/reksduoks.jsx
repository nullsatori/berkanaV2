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

const reksduoks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/06/reks-duo-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/tiofanat-metil/">
          Тиофанат-метил
        </a>{" "}
        310 г/л +{" "}
        <a href="https://berkanabio.ru/category/epoksikonazol/">
          Эпоксиконазол
        </a>{" "}
        187 г/л
      </strong>
      Двухкомпонентный фунгицид для контроля важнейших заболеваний зерновых
      культур и сахарной свеклы.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Надежный контроль всех основных заболеваний на зерновых культурах и
          сахарной свекле благодаря широкому спектру действия;
        </li>
        <li>
          «Стоп-эффект»: быстрое проникновение и быстрое начальное действие на
          патоген;
        </li>
        <li>Длительная защита культуры – более 30 дней;</li>
        <li>Мощное профилактическое и лечебное действие;</li>
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
                <strong>Спо­соб, вре­мя об­ра­бот­ки</strong>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,4-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Пшеница яровая и озимая</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Мучнистая роса, ржавчина бурая, ржавчина стеблевая, септориоз,
                  пиренофороз, комплекс пятнистостей колоса (септориоз,
                  темно-бурый гельминтоспориоз и др.)
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,4-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Ячмень яровой</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Мучнистая роса, ржавчина карликовая, ржавчина стеблевая,
                  сетчатая пятнистость, ринхоспориоз, комплекс пятнистостей
                  колоса (септориоз, гельминтоспориозы, ринхоспориоз и др.)
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="uneven" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,4-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Свекла сахарная</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Церкоспороз, мучнистая роса, рамуляриоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации для профилактики или при
                  проявлении первых признаков одного из заболеваний, по мере
                  необходимости с интервалом 14-16 дней.
                </span>
                <span>Расход рабочей жидкости - 200-400 л/га.</span>
              </td>
            </tr>
          </tbody>
        </table>
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
      </div>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Рекс Дуо, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Рекс Дуо, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default reksduoks;
