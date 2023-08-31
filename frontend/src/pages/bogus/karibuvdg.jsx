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

const karibuvdg = () => {
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
        <a href="https://berkanabio.ru/category/triflusulfuron-metil/">
          Трифлусульфурон-метил
        </a>{" "}
        500 г/кг
      </strong>
      Надежный контроль сорняков в посевах сахарной свеклы.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Препарат Карибу обеспечивает надежный контроль сорняков в посевах
          сахарной свеклы, обеспечивая безопасность на всех этапах развития
          сахарной свеклы.
        </li>
        <li>
          Высокая селективность к культуре Карибу достигается за счет
          высокотехнологичного производства действующего вещества на заводе в
          США. Синтезируемый трифлусульфурон-метил проходит строгий контроль на
          предмет чистоты синтеза, что гарантирует отсутствие вредных примесей.
        </li>
        <li>
          Простое и безопасное применение благодаря удобной упаковке.
          Водорастворимый пакет обеспечивает не только удобство в применении, но
          и отсутствие проблем с утилизацией тары.
        </li>
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
              <span>0,03</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе семядоли – 2 настоящих листа
                сорняков и при необходимости повторно через 7-15 дней по второй
                волне сорняков в фазе 2 настоящих листьев в смеси с 200 мл/га
                Тренд 90, Ж.
              </span>
              <span>Расход рабочей жидкости – 200 – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе семядоли – 2 настоящих листа
                сорняков по первой, второй и третьей волне сорняков в смеси с
                200 мл/га Тренд 90, Ж.
              </span>
              <span>Расход рабочей жидкости – 200 – 300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/fmc/">FMC</a>
      <strong>Упаковка: </strong>0,6 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Карибу, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Карибу, ВДГ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default karibuvdg;