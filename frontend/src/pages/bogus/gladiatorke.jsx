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

const gladiatorke = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2020/07/gladiator_berkanabio.jpg"></a>
      <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
        Лямбда-цигалотрин
      </a>{" "}
      50 г/л Инсектицид против широкого спектра сельскохозяйственных вредителей.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Не проводить обработки в жаркие часы дня, а также по влажной листовой
          поверхности или когда ожидаются осадки в течение 1 часа после
          обработки.
        </li>
        <li>
          Для предупреждения резистентности рекомендуется чередовать применение
          инсектицидов из разных химических групп, различающихся по механизму
          действия.
        </li>
        <li>Обладает репеллентным действием для пчел.</li>
        <li>
          Применяется для уничтожения листогрызущих и сосущих насекомых, включая
          клещей.
        </li>
        <li>
          Обладает продолжительным защитным действием при высокой солнечной
          инсоляции.
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
              <span>0,2</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Хлебные жуки, трипсы, блошки, цикадки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(1)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Клоп вредная черепашка, тли, пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15-0,2</span>
            </td>
            <td>
              <span>Ячмень</span>
            </td>
            <td>
              <span>
                Мухи, пьявица, цикадки, трипсы, стеблевые пилильщики, тли
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Горчица (кроме горчицы на масло)</span>
            </td>
            <td>
              <span>Рапсовый цветоед</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(1)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Яблоня</span>
            </td>
            <td>
              <span>Плодожорки, листовертки, клещи</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 1000-1500 л/га</span>
            </td>
            <td>
              <span>40(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Вишня (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
            <td>
              <span>-(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5</span>
            </td>
            <td>
              <span>Земляника (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300-500 л/га</span>
            </td>
            <td>
              <span>-(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Малина (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
            <td>
              <span>-(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,4</span>
            </td>
            <td>
              <span>Смородина (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, листовертки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
            <td>
              <span>-(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3</span>
            </td>
            <td>
              <span>Крыжовник (маточники)</span>
            </td>
            <td>
              <span>Паутинный клещ, тли, пилильщики</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
            <td>
              <span>-(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
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
              <span>14(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Капуста</span>
            </td>
            <td>
              <span>
                Капустная совка, белянки, капустная моль, крестоцветные блошки
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
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Неплодоносящие сады, лесозащитные полосы</span>
            </td>
            <td>
              <span>Американская белая бабочка</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации. Срок возможного пребывания
                людей на обработанных площадях - не ранее 30 дней после
                обработки.
              </span>
              <span>Расход рабочей жидкости - 1000-1500 л/га</span>
            </td>
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,32-0,48</span>
            </td>
            <td>
              <span>Виноград</span>
            </td>
            <td>
              <span>Листовертки, клещи</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1000 л/га</span>
            </td>
            <td>
              <span>30(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>Рапсовый цветоед</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>20(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Блошки</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
            <td>
              <span>-(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15</span>
            </td>
            <td>
              <span>Люцерна</span>
            </td>
            <td>
              <span>
                Клопы, тли, долгоносики, листоблошки, толстоножка люцерновая
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
            <td>
              <span>-(2)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Пастбища, дикая растительность</span>
            </td>
            <td>
              <span>Саранчовые нестадные</span>
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
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Пастбища, дикая растительность</span>
            </td>
            <td>
              <span>Саранчовые стадные (личинки младших возрастов)</span>
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
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Пастбища, дикая растительность</span>
            </td>
            <td>
              <span>Саранчовые стадные (личинки старших возрастов)</span>
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
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(4)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/kchhk/">КЧХК</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Гладиатор, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Гладиатор, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default gladiatorke;
