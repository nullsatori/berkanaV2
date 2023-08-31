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

const reglonfortevr = () => {
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
        <a href="https://berkanabio.ru/category/dikvat/">Дикват</a> 150 г/л
      </strong>
      Удобная (концентрированная) формуляция позволяет эффективно решать
      проблему быстрой уборки и сохранять качество выращенного урожая.
      <h2>Преимущества</h2>
      <ul>
        <li>Более концентрированная формуляция дикват-иона.</li>
        <li>Повышенная скорость действия.</li>
        <li>
          Благодаря дополнительным адьювантам действующее вещество быстрее
          проникает внутрь растения.
        </li>
        <li>
          Усовершенствованная формуляция исторически сформировавшегося стандарта
          десикации РЕГЛОН СУПЕР.
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
              <span>1-2</span>
            </td>
            <td>
              <span>Картофель продовльственный</span>
            </td>
            <td>
              <span>Однолетние  двудольные и злаковые сорные растения</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорных растений за 2-3 дня до
                появления всходов культуры.
              </span>
              <span>Расход рабочей жидкости – 200 -300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Реглон Форте, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Реглон Форте, ВР"
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

export default reglonfortevr;
