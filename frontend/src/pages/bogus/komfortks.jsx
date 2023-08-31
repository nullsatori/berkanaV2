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

const komfortks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/06/komfort-ks-500.jpeg"></a>
        <a href="https://berkanabio.ru/category/karbendazim/">Карбендазим</a>{" "}
        500 г/л
      </strong>
      Высокоэффективный системный фунгицид для обработки семян и посевов
      зерновых культур и сахарной свеклы.
      <h2>Преимущество</h2>
      <ul>
        <li>двойное назначение – обработка семян и опрыскивание посевов;</li>
        <li>
          незаменим в борьбе с головневыми болезнями и корневыми гнилями пшеницы
          и ячменя;
        </li>
        <li>обладает как лечебным, так и профилактическим действием;</li>
        <li>повышает всхожесть семян и сохранность всходов;</li>
        <li>длительный период защитного действия;</li>
        <li>отсутствие фитотоксичности;</li>
        <li>низкие нормы применения;</li>
        <li>удобная в применении препаративная форма;</li>
        <li>устойчив к осадкам;</li>
        <li>широкое «окно» применения;</li>
        <li>низкая стоимость обработки;</li>
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
                <span>0,3-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Пшеница, ячмень, рожь</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Корневые, прикорневые гнили, предотвращение полегания
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5-0,6</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Пшеница, ячмень, рожь</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Мучнистая роса, гельминтоспориоз</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 300 л/га.</span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,6-0,8</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Свекла сахарная</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Церкоспороз, мучнистая роса</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости - 200-400 л/га.</span>
              </td>
            </tr>
            <tr class="even">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>1-1,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Рожь озимая</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Фузариозная корневая гниль, снежная плесень, стеблевая головня
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Протравливание семян.</span>
                <span>Расход рабочей жидкости - 10 л/т.</span>
              </td>
            </tr>
            <tr class="uneven" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>1-1,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Пшеница, ячмень озимые, яровые</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Пыльная головня, твердая головня, церкоспореллезная,
                  фузариозная корневые гнили, снежная плесень
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Протравливание семян.</span>
                <span>Расход рабочей жидкости - 10 л/т.</span>
              </td>
            </tr>
          </tbody>
        </table>
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/lysterra/">LYSTERRA</a>
        <strong>Упаковка:</strong> 5 л
      </div>
       
    </div>
  );

  return (
    <>
      <Head>
        <title>Комфорт, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Комфорт, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default komfortks;
