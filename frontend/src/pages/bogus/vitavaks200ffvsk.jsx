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

const vitavaks200ffvsk = () => {
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
        <a href="https://berkanabio.ru/category/karboksin/">Карбоксин</a> 200
        г/л + <a href="https://berkanabio.ru/category/tiram/">Тирам</a> (ТМТД)
        200 г/л
      </strong>
      Комбинированный протравитель для защиты семян зерновых культур, кукурузы,
      проса от головни, плесневения семян, корневых гнилей, льна долгунца от
      антракноза, крапчатости и других болезней.
      <h2>Преимущества</h2>
      <ul>
        <li>Применяется на широком спектре культур.</li>
        <li>
          Эффективный контроль болезней зерновых культур: пыльная, твердая,
          каменная головня, гельминтоспориозная и фузариозная корневые гнили,
          плесневение семян.
        </li>
        <li>Удобная в использовании жидкая препаративная форма.</li>
        <li>
          Стимулирует дружное прорастание семян, появление всходов и развитие
          корневой системы.
        </li>
        <li>
          Способствует получению более однородных побегов, увеличивает потенциал
          урожая.
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
            <td>
              <span>2,5-3</span>
            </td>
            <td>
              <span>Пшеница яровая, пшеница озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, гельминтоспориозные и фузариозные корневые
                гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>Пшеница яровая, пшеница озимая</span>
            </td>
            <td>
              <span>Пыльная головня</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,5-3</span>
            </td>
            <td>
              <span>Ячмень яровой, ячмень озимый</span>
            </td>
            <td>
              <span>
                Каменная головня, гельминтоспориозные и фузариозные корневые
                гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>Ячмень яровой, ячмень озимый</span>
            </td>
            <td>
              <span>Пыльная головня,ложная пыльная головня</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,5</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Фузариозная корневая гниль, стеблевая головня, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,0-2,5</span>
            </td>
            <td>
              <span>Кукуруза (кроме кукурузы на зеленый корм)</span>
            </td>
            <td>
              <span>
                Пузырчатая головня, пыльная головня, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 5 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4</span>
            </td>
            <td>
              <span>Просо</span>
            </td>
            <td>
              <span>Головня метелки</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10-15 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Антракноз, крапчатость</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 5 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>Картофель семенной (кроме раннеспелых сортов)</span>
            </td>
            <td>
              <span>Ризоктониоз</span>
            </td>
            <td>
              <span>Предпосадочная обработка клубней.</span>
              <span>Расход рабочей жидкости - до 10 л/т</span>
            </td>
          </tr>
        </tbody>
      </table>
      Производитель: 
      <a href="https://berkanabio.ru/category/arista-lajfsajens/">
        Ариста ЛайфСайенс
      </a>
      Упаковка: 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Витавакс 200 ФФ, ВСК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Витавакс 200 ФФ, ВСК"
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

export default vitavaks200ffvsk;
