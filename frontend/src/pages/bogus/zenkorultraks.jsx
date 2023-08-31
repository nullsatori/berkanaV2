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

const zenkorultraks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabiozenkor-ultra.jpg"></a>
        Метрибузин 600 г/л
      </strong>
      Селективный системный гербицид широкого спектра действия для борьбы с
      двудольными и однолетними злаковыми сорняками.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Эффективен против широкого спектра однолетних двудольных и злаковых
          сорняков.
        </li>
        <li>Широкое окно применения: до всходов и после всходов культуры.</li>
        <li>
          Эффективен как в при довсходовом внесении, так и по взошедшим
          сорнякам.
        </li>
        <li>Продолжительный период защитного действия.</li>
        <li>Идеальный партнер для баковых смесей.</li>
        <li>Новая удобная препаративная форма.</li>
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
              <span>1,3-1,6</span>
            </td>
            <td>
              <span>Томат рассадный</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до высадки рассады.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2</span>
            </td>
            <td>
              <span>Томат рассадный</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание сорняков через 15-20 дней после высадки рассады.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8</span>
            </td>
            <td>
              <span>Томат посевной</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание посевов в фазе 2-4 листьев культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3 + 0,5</span>
            </td>
            <td>
              <span>Томат посевной</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов последовательно в фазе 1-2 и 3-5 листьев
                культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1,6</span>
            </td>
            <td>
              <span>Картофель (кроме раннеспелого)</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-0,9</span>
            </td>
            <td>
              <span>Картофель (кроме раннеспелого)</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание при высоте ботвы до 5 см.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-1,2 + 0,35</span>
            </td>
            <td>
              <span>Картофель (кроме раннеспелого)</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до всходов культуры с последующей обработкой
                при высоте ботвы 5 см.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6 - 1</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
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
        <title>Зенкор Ультра, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Зенкор Ультра, КС"
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

export default zenkorultraks;
