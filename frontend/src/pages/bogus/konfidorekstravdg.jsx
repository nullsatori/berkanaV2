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

const konfidorekstravdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/05/konfidor-ekstra-vdg.jpg"></a>
        <a href="https://berkanabio.ru/category/imidakloprid/">Имидаклоприд</a>{" "}
        700 г/кг
      </strong>
      Системный инсектицид контактно-кишечного действия класса хлорникотинилов
      против сосущих и грызущих вредителей. Эффективен как при почвенном
      внесении так и при опрыскиваниях.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          высокая активность против вредителей, устойчивых к фосфорорганическим
          и пиретроидным инсектицидам;
        </li>
        <li>
          системные свойства, что позволяет бороться со скрытно живущими
          вредителями;
        </li>
        <li>
          быстрое поражение вредителей за счет выраженного кишечно-контактного
          действия. Эффект
        </li>
        <li>наблюдается в течение первых часов после обработки;</li>
        <li>возможность совместного внесения с минеральными удобрениями;</li>
        <li>устойчивость к смыву.</li>
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
              <span>0,07-0,1</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Хлебная жужелица</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,05</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Вредная черепашка, хлебные жуки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости -200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Трипсы</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости -200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03</span>
            </td>
            <td>
              <span>Ячмень</span>
            </td>
            <td>
              <span>Хлебные блошки, пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости -200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>Пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости -200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03-0,05</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Колорадский жук</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости -200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,125</span>
            </td>
            <td>
              <span>Картофель (семенные посевы)</span>
            </td>
            <td>
              <span>Тли - переносчики вирусов</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации при появлении вредителя.
              </span>
              <span>Расход рабочей жидкости -200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bajer/">Байер</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Конфидор Экстра, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Конфидор Экстра, ВДГ"
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

export default konfidorekstravdg;
