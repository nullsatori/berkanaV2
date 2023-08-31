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

const bifasks = () => {
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
        <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
          Альфа-циперметрин
        </a>{" "}
        100 г/л +{" "}
        <a href="https://berkanabio.ru/category/imidakloprid/">Имидаклоприд</a>{" "}
        300 г/л
      </strong>
      Инновационный двухкомпонентный инсектицид контактно-системного действия
      для защиты от комплекса вредителей.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Надежно защищает молодые побеги и листья, которые отрастают уже после
          обработки, благодаря сильно выраженному системному действию;
        </li>
        <li>
          Отсутствие резистентности у вредителей благодаря сочетанию двух
          действующих веществ с принципиально разными механизмами действия;
        </li>
        <li>
          Высокоактивен против абсолютного большинства насекомых-вредителей;
        </li>
        <li>
          Сочетание быстрого "нокдаун-эффекта" с пролонгированной защитой;
        </li>
        <li>Безопасность для растений, потребителей и окружающей среды</li>
        <li>Применение не зависит от температуры окружающей среды;</li>
        <li>Дополнительная антистрессовая защита;</li>
        <li>Отсутствие фитотоксичности;</li>
        <li>Низкая норма расхода.</li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
            </td>
            <td>
              <strong>Куль­ту­ра, об­ра­ба­ты­ва­емый объ­ект</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>
                Спо­соб, вре­мя об­ра­бот­ки, осо­бен­нос­ти при­ме­не­ния
              </strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Вредная черепашка</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации. Расход рабочей жидкости –
                200-400 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/alfahimgrupp/">АльфаХимгрупп</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Бифас, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Бифас, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default bifasks;
