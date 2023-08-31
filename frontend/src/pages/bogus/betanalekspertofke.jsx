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

const betanalekspertofke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio-betanal-ekspert-of-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/desmedifam/">Десмедифам</a> 71
        г/л +{" "}
        <a href="https://berkanabio.ru/category/fenmedifam/">Фенмедифам</a> 91
        г/л +{" "}
        <a href="https://berkanabio.ru/category/etofumezat/">Этофумезат</a> 112
        г/л
      </strong>
      Селективный гербицид для послевсходового контроля однолетних двудольных
      сорняков (включая виды щирицы) и некоторых злаковых сорняков (куриное
      просо, щетинники, метлица полевая) в посевах сахарной, столовойи кормовой
      свёклы.
      <h2>Преимущества</h2>
      <ul>
        <li>Первая формуляция на основе β-технологии.</li>
        <li>Быстрое проникновение в сорное растение.</li>
        <li>
          Универсальность в применении вне зависимости от условий внесения.
        </li>
        <li>Широкий спектр действия – более 40 видов сорняков.</li>
        <li>Высокая селективность к культуре.</li>
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
              <span>3</span>
            </td>
            <td>
              <span>
                Свекла сахарная, кормовая, столовая (кроме пучкового товара)
              </span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. щирица, и некоторые однолетние
                злаковые сорняки
              </span>
            </td>
            <td>
              <span>
                Однократное опрыскивание посевов в фазе 4 настоящих листьев
                культуры и ранние фазы роста сорных растений.
              </span>
              <span>Расход рабочей жидкости - 200 -300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5</span>
            </td>
            <td>
              <span>
                Свекла сахарная, кормовая, столовая (кроме пучкового товара)
              </span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. щирица, и некоторые однолетние
                злаковые сорняки
              </span>
            </td>
            <td>
              <span>
                Последовательно опрыскивание посевов в фазе 2-4 листьев сорных
                растений (по первой и второй волне).
              </span>
              <span>Расход рабочей жидкости - 200 -300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>
                Свекла сахарная, кормовая, столовая (кроме пучкового товара)
              </span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. щирица, и некоторые однолетние
                злаковые сорняки
              </span>
            </td>
            <td>
              <span>
                Последовательное опрыскивание посевов в фазе семядолей сорных
                растений (по первой, второй и третьей волне).
              </span>
              <span>Расход рабочей жидкости – 200 - 300 л/га</span>
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
        <title>Бетанал Эксперт ОФ, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Бетанал Эксперт ОФ, КЭ"
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

export default betanalekspertofke;
