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

const betanal22ke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/betanal-22-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/desmedifam/">Десмедифам</a> 160
        г/л + Фенмедифам 160 г/л
      </strong>
      Селективный гербицид для послевсходового контроля однолетних двудольных
      сорняков (включая виды щирицы) в посевах сахарной, столовой и кормовой
      свёклы.
      <h2>Преимущества</h2>
      <ul>
        <li>Широкий спектр действия.</li>
        <li>Высокая селективность к культуре.</li>
        <li>Гибкие нормы расхода.</li>
      </ul>
      <h3>Механизм действия</h3>
      Десмедифам и фенмедифам относятся к группе бикарбаматов, действие которых
      заключается в ингибировании реакции Хилла – ключевой реакции фотосинтеза.
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
              <span>3</span>
            </td>
            <td>
              <span>
                Свекла сахарная, столовая (кроме пучкового товара), кормовая
              </span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорные растения (включая виды щирицы)
              </span>
            </td>
            <td>
              <span>
                Однократное опрыскивание посевов в фазе 4 настоящих листьев
                культуры и ранние фазы роста сорных растений.
              </span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5</span>
            </td>
            <td>
              <span>
                Свекла сахарная, столовая (кроме пучкового товара), кормовая
              </span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорные растения (включая виды щирицы)
              </span>
            </td>
            <td>
              <span>
                Последовательное опрыскивание посевов в фазе 2-4 листьев сорных
                растений (по первой и второй волне).
              </span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>
                Свекла сахарная, столовая (кроме пучкового товара), кормовая
              </span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорные растения (включая виды щирицы)
              </span>
            </td>
            <td>
              <span>
                Последовательное опрыскивание посевов вфазе семядолей сорных
                растений ( по первой, второй и третьей волне).
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bajer/">Байер</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Бетанал 22, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Бетанал 22, КЭ"
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

export default betanal22ke;