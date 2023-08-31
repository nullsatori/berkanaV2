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

const galerasuper364vr = () => {
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
        Аминопиралид 17 г/л +{" "}
        <a href="https://berkanabio.ru/category/klopiralid/">Клопиралид</a> 267
        г/л + <a href="https://berkanabio.ru/category/pikloram/">Пиклорам</a>,
        пиклорам (диметилэтаноламинные соли) 80 г/л
      </strong>
      Новый трехкомпонентный селективный послевсходовый гербицид для контроля
      двудольных сорняков, включая проблемные виды, в посевах озимого и ярового
      рапса.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Благодаря наличию трех системных действующих веществ контролирует еще
          более широкий спектр сорной растительности.
        </li>
        <li>
          Уникальная эффективность против подмаренника цепкого на любой стадии
          его развития, а также видов ромашки, гречишки вьюнковой, видов бодяка
          и осота и других трудноискоренимых сорняков.
        </li>
        <li>
          За счет быстрого проникновения во все части сорного растения
          уничтожает корневую систему осотов.
        </li>
        <li>
          Возможность контроля сорняков как в осенний, так и весенний период.
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
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Рапс яровой</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние двудольные сорняки, в т.ч. подмаренник
                цепкий, виды ромашки, горца, щирицы, мари, гречишка вьюнковая,
                виды бодяка и осота
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих растений с фазы 3-6 настоящих листьев
                до появления цветочных бутонов у рапса.
              </span>
              <span>
                При необходимости пересева в сезон применения препарата на том
                же поле можно выращивать кукурузу, сорго, яровые зерновые и
                злаковые травы через 1 месяц после внесения препарата. При этом
                перед посевом необходимо провести глубокую вспашку.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Рапс озимый</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние двудольные сорняки, в т.ч. подмаренник
                цепкий, виды ромашки, горца, щирицы, мари, гречишка вьюнковая,
                виды бодяка и осота
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих растений осенью или весной с фазы 3-6
                настоящих листьев до появления цветочных бутонов у рапса.
              </span>
              <span>
                При необходимости пересева после весеннего применения препарата,
                на том же поле можно выращивать кукурузу, сорго, яровые зерновые
                и злаковые травы через 1 месяц после внесения препарата. При
                этом перед посевом необходимо провести глубокую вспашку.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/dau-agrosaenses/">
        Дау АгроСаенсес
      </a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Галера Супер 364, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Галера Супер 364, ВР"
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

export default galerasuper364vr;
