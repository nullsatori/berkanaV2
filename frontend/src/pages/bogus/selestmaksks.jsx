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

const selestmaksks = () => {
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
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a> 15
        г/л +{" "}
        <a href="https://berkanabio.ru/category/tiametoksam/">Тиаметоксам</a>{" "}
        (Актара) 125 г/л +{" "}
        <a href="https://berkanabio.ru/category/fludioksonil/">Флудиоксонил</a>{" "}
        25 г/л
      </strong>
      Комбинированный инсектофунгицидный протравитель семян пшеницы и ячменя.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Сбалансированная защита от вредителей и болезней на начальном этапе
          роста растения
        </li>
        <li>
          Готовый к применению инсектофунгицидный протравитель семян зерновых
          культур
        </li>
        <li>
          Максимальная выгода на посевах различного назначения и сроков сева
        </li>
        <li>Дополнительный эффект – стимулирует развитие корневой системы</li>
        <li>
          Усовершенствованная препаративная форма «Формула «М» обеспечивает
          надежное сохранение препарата на семенах от момента нанесения до
          высева и существенное снижение пыления обработанных семян, повышает их
          сыпучесть.
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
              <span>1,5-2</span>
            </td>
            <td>
              <span>Пшеница, ячмень</span>
            </td>
            <td>
              <span>
                Хлебная жужелица, злаковые мухи, хлебные
                блошки , цикадки, проволочники
              </span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-1,75</span>
            </td>
            <td>
              <span>Пшеница яровая, озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, фузариозная корневая гниль, гельминтоспориозная
                корневая гниль, плесневение семян
              </span>
            </td>
            <td>
              <span>Обработка семян. Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>Пшеница яровая, озимая</span>
            </td>
            <td>
              <span>Пыльная головня</span>
            </td>
            <td>
              <span>Обработка семян. Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-1,75</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Твердая (каменная) головня, гельминтоспориозная корневая гниль,
                фузариозная корневая гниль, плесневение семян
              </span>
            </td>
            <td>
              <span>Обработка семян. Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>Пыльная головня</span>
            </td>
            <td>
              <span>Обработка семян. Расход рабочей жидкости – 10 л/т</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      <strong>Упаковка:</strong> 20 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Селест Макс, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Селест Макс, КС"
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

export default selestmaksks;
