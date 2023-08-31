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

const triafolks = () => {
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
        <a href="https://berkanabio.ru/category/flutriafol/">Флутриафол</a> 250
        г/л
      </strong>
      Системный и контактный фунгицид для защиты зерновых культур, сахарной
      свеклы и винограда от широкого спектра инфекций.
      <h2>Преимущество</h2>
      Флутриафол фунгицид имеет самую высокую скорость перемещения по тканям
      растения среди триазоловых веществ. Благодаря этому действующее вещество
      мгновенно проникает к пораженному месту и быстро блокирует процесс
      избирательной проницаемости мембран клеток патогена. Данная особенность
      дает возможность искоренить заболевание на начальной стадии и обеспечить
      долгосрочную безопасность засеянных участков.
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
                <strong>Вред­ный объ­ект </strong>
              </td>
              <td>
                <strong>Спо­соб, вре­мя об­ра­бот­ки</strong>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Пшеница яровая и озимая</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Ржавчина бурая, ржавчина стеблевая, ржавчина желтая, мучнистая
                  роса, септориоз, пиренофороз, фузариоз колоса
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Ячмень яровой и озимый</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Мучнистая роса, ржавчина карликовая, ржавчина желтая
                  (линейная), ржавчина стеблевая, сетчатая пятнистость,
                  темно-бурая пятнистость, ринхоспориоз
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание посевов в период вегетации.</span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,1-0,15</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Яблоня</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Парша, мучнистая роса</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации в фазы: зеленый конус, розовый
                  бутон, после цветения (опадение 75 % лепестков), мелкие плоды
                  с интервалом 10-14 дней.
                </span>
                <span>Расход рабочей жидкости -1000-1200 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,25</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Свекла сахарная</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Церкоспороз, мучнистая роса, фомоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации: при появлении первых
                  признаков одного из заболеваний, последующее в случае
                  необходимости с интервалом 10-14 дней.
                </span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="uneven" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,125</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Виноград</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Оидиум</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации в фазы: до цветения, после
                  цветения, последующие с интервалом 10-14 дней.
                </span>
                <span>Расход рабочей жидкости - 500-1000 л/га.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/afd-kemikals/">АФД Кемикалс</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Триафол, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Триафол, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default triafolks;
