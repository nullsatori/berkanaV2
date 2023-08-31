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

const maksimpljusks = () => {
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
        25 г/л +{" "}
        <a href="https://berkanabio.ru/category/fludioksonil/">Флудиоксонил</a>{" "}
        25 г/л
      </strong>
      Двухкомпонентный фунгицид с расширенным спектром контролируемых видов
      корневых гнилей для защиты семян озимой пшеницы в условиях оптимальных и
      поздних сроков сева.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Идеальный баланс эффективности против гнилей фузариозной и
          гельминтоспориозной этиологии в условиях осенне-весеннего периода
          развития растений.
        </li>
        <li>
          Уникальная препаративная формула, обеспечивающая гарантированное
          сохранение на семенах полной дозировки активных ингредиентов от
          момента нанесения до высева в поле.
        </li>
        <li>
          Высокая эффективность против инфекционного выпревания различной
          природы.
        </li>
        <li>
          Универсален, как при оптимальных, так и при поздних сроках сева.
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
              <span>1,2-1,5</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, фузариозная, гельминтоспориозная корневые
                гнили, альтернариозная семенная инфекция, снежная плесень,
                плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости – 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2-1,5</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Каменная головня, фузариозная, гельминтоспориозная корневые
                гнили, альтернариозная семенная инфекция, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости – 10 л/т.</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Максим Плюс, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Максим Плюс, КС"
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

export default maksimpljusks;
