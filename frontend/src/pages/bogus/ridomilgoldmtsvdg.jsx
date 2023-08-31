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

const ridomilgoldmtsvdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/06/berkanabio-ridomil-gold-mc-vdg.jpg"></a>
        <a href="https://berkanabio.ru/category/mankoceb/">Манкоцеб</a> 640 г/кг
        + <a href="https://berkanabio.ru/category/mefenoksam/">Мефеноксам</a> 40
        г/кг
      </strong>
      Фунгицид системного и контактного действия, эффективен против возбудителей
      фитофтороза и альтернариоза картофеля и томата, пероноспороза огурца и
      лука, милдью и антракноза винограда.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Здоровые растения даже в условиях высокого риска развития болезни;
        </li>
        <li>
          Максимальный контроль инфекции в период активного роста и развития
          культуры;
        </li>
        <li>
          Длительная защита полностью всего растения, включая необработанные
          части: новый прирост листа, точка роста, стебель, клубни картофеля,
          ягоды винограда, плоды томата;
        </li>
        <li>
          Здоровый, неповрежденный фитофторозом и пероноспорозом урожай
          картофеля, овощных культур и винограда;
        </li>
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
                <span>2,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Картофель</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Фитофтороз, альтернариоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300-500 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>2,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Томат открытого грунта</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Фитофтороз, альтернариоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300-500 л/га.</span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>2,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Виноград</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Милдью</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 800-1000 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>2,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Огурец открытого грунта</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Пероноспороз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 800 л/га.</span>
              </td>
            </tr>
            <tr class="uneven" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>2,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Лук (кроме лука на перо)</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Пероноспороз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300-500 л/га.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      <strong>Упаковка: </strong>1 кг/10×1 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Ридомил Голд МЦ, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Ридомил Голд МЦ, ВДГ"
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

export default ridomilgoldmtsvdg;
