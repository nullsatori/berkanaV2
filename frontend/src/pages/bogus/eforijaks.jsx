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

const eforijaks = () => {
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
        <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
          Лямбда-цигалотрин
        </a>{" "}
        106 г/л +{" "}
        <a href="https://berkanabio.ru/category/tiametoksam/">Тиаметоксам</a>{" "}
        (Актара) 141 г/л
      </strong>
      Комбинированный инсектицид для листовых обработок, сочетающий системное и
      контактное действие тиаметоксама и лямбда-цигалотрина против комплекса
      сосущих и листогрызущих насекомых.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Высокая эффективность против скрытноживущих, сосущих и листогрызущих
          вредителей.
        </li>
        <li>Сокращение количества обработок за сезон.</li>
        <li>Сохранение инсектицидной эффективности в сухую и жаркую погоду.</li>
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
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Хлебная жужелица</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
              <span>0,1-0,2 (А)</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>
                Клоп вредная черепашка, хлебные жуки, внутристеблевые мухи,
                злаковые тли, пшеничный трипс, хлебные блошки
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
              <span>0,1-0,2 (А)</span>
            </td>
            <td>
              <span>Ячмень</span>
            </td>
            <td>
              <span>Пьявица, внутристеблевые мухи, злаковые тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
              <span>0,1 (А)</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>Пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Капуста</span>
            </td>
            <td>
              <span>Капустная тля</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Капуста</span>
            </td>
            <td>
              <span>Капустная моль, капустная совка, белянки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Горох</span>
            </td>
            <td>
              <span>Гороховая тля</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Горох</span>
            </td>
            <td>
              <span>Гороховая плодожорка, гороховая зерновка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">
        <span>Сингента</span>
      </a>
      <strong>Упаковка:</strong> 1 л, 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Эфория, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Эфория, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default eforijaks;
