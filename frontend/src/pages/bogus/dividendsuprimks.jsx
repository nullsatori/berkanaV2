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

const dividendsuprimks = () => {
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
        <a href="https://berkanabio.ru/category/difenokonazol/">
          Дифеноконазол
        </a>{" "}
        36,92 г/л +{" "}
        <a href="https://berkanabio.ru/category/mefenoksam/">Мефеноксам</a> 3,08
        г/л +{" "}
        <a href="https://berkanabio.ru/category/tiametoksam/">Тиаметоксам</a>{" "}
        (Актара) 92,3 г/л
      </strong>
      Высокоэффективный инсектицид для защиты пшеницы от вредителей.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Эффективная защита всходов пшеницы от широкого спектра вредителей и
          болезней.
        </li>
        <li>
          Готовая препаративная формуляция инсектофунгицидного протравителя
          полностью исключает возможные ошибки при приготовлении баковых смесей.
        </li>
        <li>
          Более длительный период защитного действия по сравнению с
          протравителем ДИВИДЕНД СТАР, КС за счет увеличенной концентрации
          дифеноконазола.
        </li>
        <li>
          Контроль более широкого спектра возбудителей корневых гнилей за счет
          включения мефеноксама.
        </li>
        <li>
          Отсутствие ретардантного эффекта и возможной задержки появления
          всходов.
        </li>
        <li>
          Стимулирующее действие препарата на корневую систему и надземную часть
          проростков.
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
              <span>2-2,5</span>
            </td>
            <td>
              <span>Пшеница яровая, озимая</span>
            </td>
            <td>
              <span>
                Хлебная жужелица, хлебные блошки , злаковые мухи, цикадки
              </span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости – до 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-2,5</span>
            </td>
            <td>
              <span>Пшеница яровая, озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, фузариозная корневая гниль, гельминтоспориозная
                корневая гниль, плесневение семян, в т.ч. альтернариозная
                семенная инфекция, септориоз, мучнистая роса (на ранних стадиях
                развития)
              </span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости – до 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,5</span>
            </td>
            <td>
              <span>Пшеница яровая, озимая</span>
            </td>
            <td>
              <span>Пыльная головня, питиозная корневая гниль</span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости – до 10 л/т</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Дивиденд Суприм, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Дивиденд Суприм, КС"
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

export default dividendsuprimks;
