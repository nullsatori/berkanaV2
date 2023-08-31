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

const tanosvdg = () => {
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
        <a href="https://berkanabio.ru/category/famoksadon/">Фамоксадон</a> 250
        г/л +{" "}
        <a href="https://berkanabio.ru/category/cimoksanil/">Цимоксанил</a> 250
        г/л
      </strong>
      Двухкомпонентный фунгицид лечебного и профилактического действия для
      защиты картофеля, подсолнечника, лука, томатов и винограда.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Комплексный фунгицид с профилактическим, лечебным и антиспорулирующим
          действием;
        </li>
        <li>
          Контролирует комплекс болезней и обладает озеленяющим эффектом на
          подсолнечнике;
        </li>
        <li>Оказывает лечебное действие даже через 1–2 дня после заражения;</li>
        <li>
          Отсутствуют устойчивые формы патогенов, что делает Танос обязательным
          фунгицидом в антирезистентных программах;
        </li>
        <li>
          Удобная препаративная форма – гранулы не пылят, не замерзают, не
          кристаллизуются и хорошо растворяются в воде;
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
                <span>0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Картофель</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Фитофтороз, альтернариоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации: первое - в начале смыкания
                  рядков; второе - в период бутонизации; третье - в конце
                  цветения; четвертое - рост ягод и клубней.
                </span>
                <span>Расход рабочей жидкости - 400 л/га.</span>
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
                <span>Милдью</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации: первое - профилактическое (до
                  цветения), последующие - с интервалом 8-12 дней.
                </span>
                <span>Расход рабочей жидкости - 1000 л/га.</span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Томат открытого грунта</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Фитофтороз, альтернариоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации: первое - профилактическое,
                  последующие - с интервалом 8-12 дней.
                </span>
                <span>Расход рабочей жидкости - 400 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Подсолнечник</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Белая гниль, серая гниль, ложная мучнистая роса, фомопсис,
                  фомоз
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации в фазах: 4-6 настоящих листьев
                  (профилактическое) и бутонизации.
                </span>
                <span>Расход рабочей жидкости - 400 л/га.</span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,4</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Подсолнечник</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Белая гниль, серая гниль, ложная мучнистая роса, фомопсис,
                  фомоз
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации в фазах: 4-6 настоящих листьев
                  (профилактическое), бутонизации и начала цветения.
                </span>
                <span>Расход рабочей жидкости - 400 л/га.</span>
              </td>
            </tr>
            <tr class="even" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Лук (кроме лука перо)</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Пероноспороз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации: первое - профилактическое,
                  последующие - с интервалом 8-12 дней.
                </span>
                <span>Расход рабочей жидкости - 400-600 л/га.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/djupon/">Дюпон</a>
      <strong>Упаковка:</strong> пакет 2 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Танос, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Танос, ВДГ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default tanosvdg;
