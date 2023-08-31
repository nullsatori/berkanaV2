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

const lamadorks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/03/berkanabiolamador-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/protiokonazol/">
          Протиоконазол
        </a>{" "}
        250 г/л +{" "}
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a>{" "}
        150 г/л
      </strong>
      Новый системный фунгицид для обработки семян пшеницы озимой, пшеницы
      яровой, ячменя ярового, ячменя озимого, овса и озимой ржи с целью защиты
      от комплекса инфекционных заболеваний, находящихся в семенах, почве, а
      также возбудителей инфекций, передающихся аэрогенным путем.
      <h2>Преимущества</h2>
      <ul>
        <li>Синергизм двух молекул.</li>
        <li>Защита от корневых гнилей.</li>
        <li>Контроль снежной плесени.</li>
        <li>Надежное действие на головню.</li>
        <li>Нет фитотоксичности.</li>
        <li>Положительное влияние на морфологию и физиологию растения.</li>
        <li>Выше засухоустойчивость и сильнее зимостойкость.</li>
        <li>Отличный старт для высокого урожая.</li>
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
            <td>0,15-0,2</td>
            <td>Пшеница яровая, озимая</td>
            <td>
              Твердая и пыльная головня, фузариозная, гельминтоспориозная и
              ризоктониозная корневые гнили, септориоз, плесневение семян
            </td>
            <td>
              Протравливание семян перед посевом. Расход рабочей жидкости - 10
              л/т.
            </td>
          </tr>
          <tr>
            <td>0,15-0,2</td>
            <td>Ячмень яровой, озимый</td>
            <td>
              Пыльная головня, каменная головня, ложная пыльная головня,
              гельминтоспориозная и фузариозная корневые гнили, сетчатая
              пятнистость, плесневение семян
            </td>
            <td>
              Протравливание семян перед посевом. Расход рабочей жидкости - 10
              л/т.
            </td>
          </tr>
          <tr>
            <td>0,15-0,2</td>
            <td>Рожь озимая</td>
            <td>
              Стеблевая головня, тифулез, гельминтоспориозная и фузариозная
              корневые гнили, плесневение семян
            </td>
            <td>
              Протравливание семян перед посевом. Расход рабочей жидкости - 10
              л/т.
            </td>
          </tr>
          <tr>
            <td>0,15-0,2</td>
            <td>Овес</td>
            <td>
              Пыльная, покрытая головня, гельминтоспориозная и фузариозная
              корневые гнили, красно-бурая пятнистость, плесневение семян
            </td>
            <td>
              Протравливание семян перед посевом. Расход рабочей жидкости - 10
              л/т.
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bajer/">Байер КропСайенс АГ</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Ламадор, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Ламадор, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default lamadorks;
