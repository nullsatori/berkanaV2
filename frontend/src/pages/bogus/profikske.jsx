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

const profikske = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/06/berkanabio_profiks-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/propikonazol/">Пропиконазол</a>{" "}
        250 г/л
      </strong>
      Системный фунгицид для защиты зерновых колосовых культур от широкого
      комплекса болезней.
      <h2>Преимущество</h2>
      <ul>
        <li>Обладает длительным защитным и лечащим действием.</li>
        <li>
          Имеет широкий спектр действия, подавляет многие виды вредоносных
          фитопатогенных грибов.
        </li>
        <li>
          Обладает высокой биологической активностью и небольшими нормами
          расхода.
        </li>
        <li>
          Один из изомеров пропиконазола обладает росторегулирующей активностью,
          поэтому после обработки отмечается усиление роста и развития
          культурных растений.
        </li>
        <li>Препарат не фитотоксичен;</li>
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
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Пшеница яровая и озимая</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Мучнистая роса, ржавчина бурая, ржавчина стеблевая, ржавчина
                  желтая, септориоз, гельминтоспориозная пятнистость
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости – 300 л/га.</span>
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
                  Сетчатая пятнистость, мучнистая роса, ржавчина карликовая,
                  ржавчина желтая, ржавчина (линейная) стеблевая, ринхоспориоз
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости – 300 л/га.</span>
              </td>
            </tr>
            <tr class="uneven">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Рожь озимая</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Ржавчина бурая, ржавчина стеблевая, септориоз, ринхоспориоз,
                  церкоспореллёз, мучнистая роса
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости – 300 л/га.</span>
              </td>
            </tr>
            <tr class="even" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Овес</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>
                  Мучнистая роса, корончатая ржавчина, красно-бурая пятнистость
                </span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>Опрыскивание в период вегетации.</span>
                <span>Расход рабочей жидкости – 300 л/га.</span>
              </td>
            </tr>
          </tbody>
        </table>
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
        <strong>Упаковка:</strong> 5 л
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Профикс, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Профикс, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default profikske;
