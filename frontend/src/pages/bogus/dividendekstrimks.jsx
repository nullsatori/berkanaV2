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

const dividendekstrimks = () => {
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
      <a href="https://berkanabio.ru/category/difenokonazol/">Дифеноконазол</a>{" "}
      92 г/л +{" "}
      <a href="https://berkanabio.ru/category/mefenoksam/">Мефеноксам</a> 23 г/л
      Новый высокоэффективный системный фунгицид для предпосевной обработки
      семян зерновых культур.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Контроль питиозной корневой гнили зерновых культур, единственный
          препарат для обработки семян на рынке средств защиты.
        </li>
        <li>
          Высочайший контроль гельминтоспориозной и альтернариозной инфекции за
          счет содержания одного из самых эффективных триазольных фунгицидов –
          дифеноконазола.
        </li>
        <li>
          Гибкость в выборе глубины высева – благодаря использованию действующих
          веществ, не вызывающих задержки развития всходов.
        </li>
        <li>
          Длительный период защитного действия за счет использования увеличенной
          концентрации действующего вещества.
        </li>
        <li>
          Инновационная препаративная формуляция, созданная с применением
          передовой технологии «Формула М».
        </li>
      </ul>
      <h2>Нор­ма при­ме­не­ния пре­па­ра­та</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния</strong>
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
              <span>0,5</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>Твердая головня</span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Фузариозная корневая гниль, гельминтоспориозная корневая гниль,
                плесневение семян, в том числе альтернариозная семенная инфекция
              </span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-0,8</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>Пыльная головня, септориоз, питиозная корневая гниль</span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,75</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, пыльная головня, фузариозная корневая гниль,
                гельминтоспориозная корневая гниль, плесневение семян, в том
                числе альтернариозная семенная инфекция; септориоз, мучнистая
                роса, бурая ржавчина (на ранних фазах развития)
              </span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
        </tbody>
      </table>
       <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Дивиденд Экстрим, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Дивиденд Экстрим, КС"
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

export default dividendekstrimks;
