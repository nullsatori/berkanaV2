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

const tabuvsk = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/03/berkanabio-tabu-vsk.jpg"></a>
        <a href="https://berkanabio.ru/category/imidakloprid/">Имидаклоприд</a>{" "}
        500 г/л
      </strong>
      Инсектицидный системный протравитель семян и клубней сельскохозяйственных
      культур от вредителей всходов и почвообитающих вредителей.
      <h2>Преимущества</h2>
      <ul>
        <li>защита растений на самой уязвимой стадии проростков и всходов;</li>
        <li>
          контроль комплекса вредителей, повреждающих всходы, надземную часть
          растений и их корневую систему;
        </li>
        <li>эффективность вне зависимости от условий внешней среды;</li>
        <li>продолжительный период защитного действия (до 45 дней);</li>
        <li>
          экономия средств за счет отмены нескольких инсектицидных опрыскиваний
          по вегетации;
        </li>
        <li>
          уничтожение популяций вредителей, выработавших устойчивость к
          препаратам на основе пиретроидов и ФОС;
        </li>
        <li>совместимость с фунгицидными протравителями.</li>
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
              <span>0,8-1</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Блошки</span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости - до 11 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>Вредители всходов</span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости - до 11 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>10-13</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Комплекс вредителей всходов</span>
            </td>
            <td>
              <span>
                Обработка семян непосредственно перед посевом или
                заблаговременно (до 1 года) для фракции 4,5-5,5 мм.
              </span>
              <span>Расход рабочей жидкости - до 23 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>12-15</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Комплекс вредителей всходов</span>
            </td>
            <td>
              <span>
                Обработка семян непосредственно перед посевом или
                заблаговременно (до 1 года) для фракции 4,5-5,5 мм.
              </span>
              <span>Расход рабочей жидкости - до 23 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>6-8</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>Крестоцветные блошки</span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости - до 18 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,08-0,1</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Проволочники, колорадский жук</span>
            </td>
            <td>
              <span>Обработка клубней.</span>
              <span>Расход рабочей жидкости - до 10 л/т клубней</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,4</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Проволочники, колорадский жук</span>
            </td>
            <td>
              <span>Опрыскивание дна борозды во время посадки.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Пшеница, ячмень</span>
            </td>
            <td>
              <span>Хлебные блошки, внутристеблевые мухи</span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости - до 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-0,8</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Хлебная жужелица</span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости - до 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>6-7</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>Проволочники</span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости - 10-17 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>5-6</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>Проволочники</span>
            </td>
            <td>
              <span>Обработка семян.</span>
              <span>Расход рабочей жидкости - 10-16 л/т</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/avgust/">Август</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Табу, ВСК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Табу, ВСК" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default tabuvsk;
