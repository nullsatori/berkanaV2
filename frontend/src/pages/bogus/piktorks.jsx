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

const piktorks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/06/piktor-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/boskalid/">Боскалид</a> 200 г/л
        +{" "}
        <a href="https://berkanabio.ru/category/dimoksistrobin/">
          Димоксистробин
        </a>{" "}
        200 г/л
      </strong>
      Двухкомпонентный фунгицид для контроля экономически значимых болезней
      рапса и подсолнечника.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Эффективный контроль основных болезней рапса и подсолнечника: серая
          гниль, белая гниль (склеротиниоз) – подсолнечник; альтернариоз, серая
          гниль, фомоз, белая гниль (склеротиниоз) – рапс.
        </li>
        <li>Усиление ростовых процессов в растениях.</li>
        <li>Усиление фотосинтетической активности.</li>
        <li>Повышение усвояимости и потребления азота.</li>
        <li>Повышение устойчивости к стрессам: биотическим; абиотическим.</li>
        <li>Устойчив к смыванию осадками.</li>
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
                <span>Рапс озимый, яровой</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Альтернариоз, белая гниль</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации при появлении первых признаков
                  заболевания.
                </span>
                <span>Расход рабочей жидкости - 300-400 л/га.</span>
              </td>
            </tr>
            <tr class="even" id="finish_row">
              <td class="width_12_prc t_a_center_f_s_11">
                <span>0,5</span>
              </td>
              <td class="width_20_prc left_border left_border">
                <span>Подсолнечник</span>
              </td>
              <td class="width_19_prc left_border left_border">
                <span>Альтернариоз, белая гниль, серая гниль</span>
              </td>
              <td class="width_27_prc left_border left_border">
                <span>
                  Опрыскивание в период вегетации при появлении первых признаков
                  заболевания.
                </span>
                <span>Расход рабочей жидкости - 300-400 л/га.</span>
              </td>
            </tr>
          </tbody>
        </table>
        <strong>Производитель: </strong>
        <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
        <strong>Упаковка: </strong>1 кг
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Пиктор, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Пиктор, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default piktorks;
