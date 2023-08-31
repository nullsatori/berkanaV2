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

const ljumaksse = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2019/08/12121-1.jpg"></a>
      <a href="https://berkanabio.ru/category/mezotrion/">Мезотрион</a> 37,5 г/л
      + <a href="https://berkanabio.ru/category/s-metolahlor/">С-Метолахлор</a>{" "}
      375 г/л +{" "}
      <a href="https://berkanabio.ru/category/terbutilazin/">
        Тербутилазин 125 г/л
      </a>
      Уникальный гербицид для защиты кукурузы, позволяющий контролировать многие
      виды злаковых и двудольных сорняков в течение всего сезона, благодаря
      однократной обработке.
      <h2>Преимущество</h2>
      <ul>
        <li>Максимальное использование потенциала гибридов кукурузы.</li>
        <li>Полный контроль однолетних сорняков одной обработкой.</li>
        <li>Широкий спектр контроля сорняков, включая широколистные.</li>
        <li>Широкое окно применения: довсходовое и ранневсходовое.</li>
        <li>Длительный период почвенной защиты (до 12 недель).</li>
        <li>Высокая селективность.</li>
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
              <span>3-4</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до посевов, до всходов или после всходов
                культуры (до фазы 3-го листа).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Люмакс, СЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Люмакс, СЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default ljumaksse;