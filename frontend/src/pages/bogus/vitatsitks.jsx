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

const vitatsitks = () => {
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
        <a href="https://berkanabio.ru/category/tiabendazol/">Тиабендазол</a> 25
        г/л +{" "}
        <a href="https://berkanabio.ru/category/flutriafol/">Флутриафол</a> 25
        г/л
      </strong>
      Системный фунгицид для предпосевной обработки семян зерновых, кукурузы и
      технических культур (протравитель).
      <h2>Преимущества</h2>
      <ul>
        <li>
          Оказывает лечебное, профилактическое и защитное действие против
          семенных и почвенных возбудителей болезней, а также против инфекций,
          передающихся аэрогенно в начальные стадии развития культур.
        </li>
        <li>
          Защищает культуры на ранних стадиях их развития, когда велика
          вероятность инфицирования растений.
        </li>
        <li>
          Высокоэффективен против возбудителей пыльной головни зерновых культур.
        </li>
        <li>
          Благодаря использованию в препарате двух действующих веществ с
          различными механизмами действия, значительно сдерживается формирование
          резистентности фитопатогенных грибов.
        </li>
        <li>
          Обладает длительным периодом защитного действия, что благоприятным
          образом сказывается на дальнейшем развитии культуры.
        </li>
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
            <td>1,5</td>
            <td>Пшеница яровая и озимая</td>
            <td>
              Твердая головня, фузариозная и гельминтоспориозная корневые гнили,
              плесневение семян, бурая ржавчина, септориоз
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Пшеница яровая и озимая</td>
            <td>Пыльная головня</td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Пшеница озимая</td>
            <td>Фузариозная снежная плесень</td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>1,5-2</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Каменная головня, гельминтоспориозная и фузариозная корневые
              гнили, плесневение семян
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ячмень яровой и озимый</td>
            <td>Пыльная головня</td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>1,5-2</td>
            <td>Овес</td>
            <td>
              Пыльная головня, покрытая головня, красно-бурая пятнистость,
              плесневение семян
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Подсолнечник</td>
            <td>
              Фомопсис, белая гниль (прикорневая форма), серая гниль,
              плесневение семян
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Кукуруза (на зерно)</td>
            <td>
              Пузырчатая головня, пыльная головня, фузариозные корневые и
              прикорневые гнили, плесневение семян
            </td>
            <td>
              Централизованное протравливание семян перед посевом или
              заблаговременно на калибровочных заводах. Расход рабочей жидкости
              - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>1,5-2</td>
            <td>Лен-долгунец</td>
            <td>Антракноз, крапчатость</td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 3-5 л/т.
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Витацит, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Витацит, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default vitatsitks;
