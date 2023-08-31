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

const borejsk = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/04/berkanabio-borej-sk.jpg"></a>
        <a href="https://berkanabio.ru/category/imidakloprid/">Имидаклоприд</a>{" "}
        150 г/л +{" "}
        <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
          Лямбда-цигалотрин
        </a>{" "}
        50 г/л
      </strong>
      Двухкомпонентный инсектицид для борьбы с широким спектром грызущих и
      сосущих вредителей, включая скрытоживущих.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          оригинальная комбинация двух действующих веществ, отличающихся по
          механизму действия
        </li>
        <li>сочетание быстроты действия и продолжительного периода защиты</li>
        <li>тройное действие – контактное, кишечное и системное</li>
        <li>
          уничтожение скрытоживущих вредителей и питающихся на нижней стороне
          листьев
        </li>
        <li>
          эффективность против популяций вредителей, устойчивых к пиретроидам и
          фосфорорганическим соединениям
        </li>
        <li>
          устойчивость к длительному воздействию интенсивных солнечных лучей и
          жаре.
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
              <span>0,08-0,1</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>
                Клоп вредная черепашка, тли, хлебные жуки, пшеничный
                трипс, хлебные блошки
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,08-0,1</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Хлебные блошки</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,08-0,1</span>
            </td>
            <td>
              <span>Ячмень</span>
            </td>
            <td>
              <span>
                Пьявицы, шведские мухи, пшеничный трипс, стеблевые
                пилильщики, тли
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,08-0,1</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>Крестоцветные блошки</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,08-0,1</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>
                Рапсовый пилильщик, рапсовый цветоед, рапсовый семенной
                скрытнохоботник
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,12</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Свекловичные блошки, долгоносики</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,12</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Свекловичная листовая тля, луговой мотылек</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Пастбища</span>
            </td>
            <td>
              <span>Саранчовые</span>
            </td>
            <td>
              <span>
                Опрыскивание в период развития личинок. Срок возможного
                пребывания людей на обработанных площадях не ранее 30 дней после
                обработки; сбор грибов и ягод после обработок дикой
                растительности в сезон обработки не допускается.
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12-0,15</span>
            </td>
            <td>
              <span>Горох, горошек овощной</span>
            </td>
            <td>
              <span>
                Гороховая зерновка, гороховая плодожорка, гороховая тля
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,08-0,12</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Колорадский жук</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,08-0,12</span>
            </td>
            <td>
              <span>Томат открытого грунта</span>
            </td>
            <td>
              <span>Колорадский жук</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,25</span>
            </td>
            <td>
              <span>Лук</span>
            </td>
            <td>
              <span>Луковая муха</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12-0,14</span>
            </td>
            <td>
              <span>Лук</span>
            </td>
            <td>
              <span>Трипсы</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Морковь</span>
            </td>
            <td>
              <span>Морковная муха</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12-0,14</span>
            </td>
            <td>
              <span>Морковь</span>
            </td>
            <td>
              <span>Морковная листоблошка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,14</span>
            </td>
            <td>
              <span>Капуста</span>
            </td>
            <td>
              <span>
                Капустная моль, капустная
                совка, капустная и репнаябелянки, капустная тля, крестоцветные
                блошки
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3</span>
            </td>
            <td>
              <span>Яблоня</span>
            </td>
            <td>
              <span>Яблонная плодожорка, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 800-1500 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3</span>
            </td>
            <td>
              <span>Виноград</span>
            </td>
            <td>
              <span>Гроздевая листовертка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 800-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1(А)</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>
                Вредная черепашка, тли, хлебные жуки, пшеничный трипс, хлебные
                блошки
              </span>
            </td>
            <td>
              <span>Авиационное опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 25-50 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1(А)</span>
            </td>
            <td>
              <span>
                Пастбища, дикая растительность, участки, заселенные саранчовыми
              </span>
            </td>
            <td>
              <span>Саранчовыми</span>
            </td>
            <td>
              <span>
                Авиационное опрыскивание в период развития личинок. Срок
                возможного пребывания людей на обработанных площадях не ранее 30
                дней после обработки; сбор грибов и ягод после обработок дикой
                растительности в сезон обработок не допускается.
              </span>
              <span>Расход рабочей жидкости – 25-50 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/avgust/">Август</a>
      <strong>Упаковка:</strong> 1 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Борей, СК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Борей, СК" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default borejsk;
