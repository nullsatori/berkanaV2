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

const lamadorproks = () => {
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
        <a href="https://berkanabio.ru/category/protiokonazol/">
          Протиоконазол
        </a>{" "}
        100 г/л +{" "}
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a> 60
        г/л + Флуопирам 20 г/л
      </strong>
      Трехкомпонентный системный фунгицид для обработки семян ячменя ярового и
      озимого.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Ламадор Про – новое слово в комплексе защиты ячменя от сетчатой
          пятнистости.
        </li>
        <li>
          Обеспечивает надежную защиту от корневых гнилей и всех видов
          головневых заболеваний.
        </li>
        <li>Синергизм действия трех высокоэффективных действующих вещест</li>
        <li>
          Оказывает положительное влияние на морфологию и физиологию растений.
        </li>
        <li>Высокоселективен к культуре.</li>
        <li>Отсутствует риск возникновения резистентности.</li>
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
            <td>0,4-0,5</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Каменная головня, пыльная головня, ложная пыльная головня,
              гельмитоспориозная и фузариозная корневые гнили, плесневение
              семян, сетчатая пятнистость
            </td>
            <td>
              Протравливание семян перед посевом. Расход рабочей жидкости – до
              10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,5</td>
            <td>Ячмень яровой и озимый</td>
            <td>Пыльная головня, ложная пыльная головня</td>
            <td>
              Протравливание семян перед посевом. Расход рабочей жидкости – до
              10 л/т
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bajer/">Baer</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Ламадор Про, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Ламадор Про, КС"
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

export default lamadorproks;
