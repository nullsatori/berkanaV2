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

const tsunamike = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2020/07/berkanabio_cunami-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
          Альфа-циперметрин
        </a>{" "}
        100 г/л
      </strong>
      Инсектицид против широкого спектра сельскохозяйственных вредителей.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Обладает высокой биологической активностью против всех систематических
          групп вредных насекомых, в том числе устойчивых к фосфорорганическим
          инсектицидам.
        </li>
        <li>
          Эффективен на всех стадиях развития насекомых, кроме стадии яиц.
        </li>
        <li>
          Обладает нокдаун-эффектом, мгновенно действуя на нервную систему
          вредителей.
        </li>
        <li>
          Характеризуется высокой скоростью токсического воздействия, в том
          числе при неблагоприятных погодных условиях.
        </li>
      </ul>
      <h2>Нор­ма расхода и применение</h2>
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
            <td>
              <strong>Срок ожи­да­ния (крат­ность об­ра­бо­ток)</strong>
            </td>
            <td>
              <strong>
                Сро­ки вы­хо­да для руч­ных (ме­ха­ни­зи­ро­ван­ных ра­бот)
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
              <span>Клоп вредная черепашка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Блошкитли, цикадки, трипсы, пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Ячмень</span>
            </td>
            <td>
              <span>Пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Рапс (семена, масло), горчица (кроме масла)</span>
            </td>
            <td>
              <span>Рапсовый цветоед, крестоцветные блошки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,07-0,1</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Колорадский жук</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Свекла сахарная и кормовая</span>
            </td>
            <td>
              <span>
                Свекловичная листовая тля, свекловичная минирующая муха
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>45(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Горох</span>
            </td>
            <td>
              <span>
                Гороховая зерновка, гороховая плодожорка, гороховая тля
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15-0,2</span>
            </td>
            <td>
              <span>Люцерна (семенные посевы)</span>
            </td>
            <td>
              <span>Долгоносики, клопы, тли</span>
            </td>
            <td>
              <span>Опрыскивание в фазе бутонизации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3</span>
            </td>
            <td>
              <span>Пастбища, дикая растительность</span>
            </td>
            <td>
              <span>Саранчовые</span>
            </td>
            <td>
              <span>
                Опрыскивание в период развития личинок. Срок возможного
                пребывания людей на обработанных площадях не ранее 3 дней после
                обработки.
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Гранум
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Цунами, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Цунами, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default tsunamike;
