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

const piketke = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2021/02/piket-ke-berkanabio.jpg"></a>
      <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
        Альфа-циперметрин 100 г/л
      </a>
      Быстродействующий универсальный инсектицид контактно-кишечного действия.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Альфа-циперметрин относится к группе высокоэффективных синтетических
          пиретроидов и обладает стабильным контактно-кишечным действием.
        </li>
        <li>
          Пикет воздействует на нервную систему вредного насекомого, вызывая
          паралич всех органов, а затем и его гибель, кроме того, препарат
          обладает отпугивающим эффектом.
        </li>
        <li>
          Пикет зарегистрирован и разрешен к применению для борьбы с широким
          спектром вредителей на сельскохозяйственных и лесных культурах, в
          борьбе с вредителями запасов на складах и перерабатывающих
          предприятиях, его отличает от других пиретроидов низкая (100 – 150
          г/га) норма расхода препарата.
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
            <td>0,1-0,15</td>
            <td>Пшеница</td>
            <td>Клоп вредная черепашка</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости -200- 400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,1</td>
            <td>Пшеница</td>
            <td>Блошки, тли, цикадки, трипсы, пьявица</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,1</td>
            <td>Ячмень</td>
            <td>Пьявица</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,15</td>
            <td>Люцерна (семенные посевы)</td>
            <td>Долгоносики, клопы, тли</td>
            <td>
              <span>Опрыскивание в фазе бутонизации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,15</td>
            <td>Пастбища, дикая растительность</td>
            <td>Саранчовые</td>
            <td>
              <span>Опрыскивание в период развития личинок.</span>
              <span>
                Расход рабочей жидкости - 200-400 л/га. Срок возможного
                пребывания людей на обработанных площадях не ранее 20 дней после
                обработки. Сбор грибов и ягод после обработок дикой
                растительности в сезон обработок не допускается
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/kchhk/">КЧХК</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Пикет, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Пикет, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default piketke;