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

const akantopljusks = () => {
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
      <a href="#">Пикоксистробин</a> 200 г/л +{" "}
      <a href="https://berkanabio.ru/category/ciprokonazol/">Ципроконазол</a> 80
      г/л Двухкомпонентный фунгицид с выраженным физиологическим действием для
      защиты зерновых колосовых культур.
      <h2>Преиущества препарата</h2>
      <ul>
        <li>
          Премиум-фунгицид, отвечает наивысшим требованиям фунгицидной защиты в
          интенсивных технологиях производства зерновых.
        </li>
        <li>
          Уникальное воздействие препарата в парообразной фазе позволяет
          наиболее полно реализовать потенциал фунгицидной защиты.
        </li>
        <li>
          Максимизирует урожайность и улучшает показатели качества урожая за
          счет защитного действия и выраженного физиологического эффекта.
        </li>
        <li>Уменьшает чувствительность культуры к стрессовым факторам.</li>
        <li>
          Наличие двух компонентов с различными механизмами действия
          предотвращает возникновение резистентных штаммов патогенов.
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
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, ржавчина бурая, ржавчина желтая, септориоз,
                пиренофороз, темно-бурая пятнистость
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое - профилактическое или
                при появлении первых признаков одного из заболеваний,
                последующее - при необходимости с интервалом 14 дней; против
                фузариоза колоса - конец колошения - начало цветения.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га.</span>
            </td>
            <td>
              <span>40(1-2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>Фузариоз колоса</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое - профилактическое или
                при появлении первых признаков одного из заболеваний,
                последующее - при необходимости с интервалом 14 дней; против
                фузариоза колоса - конец колошения - начало цветения.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га.</span>
            </td>
            <td>
              <span>40(1-2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Мучнистая роса, ржавчина карликовая, ржавчина желтая, септориоз,
                сетчатая пятнистость, темно-бурая пятнистость, ринхоспориоз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации профилактически или при
                появлении первых признаков одного из заболеваний.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га.</span>
            </td>
            <td>
              <span>40(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>Красно-бурая пятнистость</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации профилактически или при
                появлении первых признаков одного из заболеваний.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га.</span>
            </td>
            <td>
              <span>40(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Церкоспороз, мучнистая роса</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое – профилактическое,
                последующие – с интервалом 14 дней.
              </span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
            <td>
              <span>28(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Пузырчатая головня, фузариозно-гельминтоспориозная стеблевая
                гниль, плесневение початков
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: видимое образование междоузлий
                - выбрасывание метелки – цветение.
              </span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
            <td>
              <span>41(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>
                Белая гниль корзинок, серая гниль корзинок, сухая ризопусная
                гниль корзинок, септориоз листьев, альтернариоз, фомоз,
                фомопсис, ржавчина, ложная мучнистая роса
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: 6-8 листьев или при высоте
                растений 60-80 см – бутонизация.
              </span>
              <span>Расход рабочей жидкости – 300-400 л/га</span>
            </td>
            <td>
              <span>40(1-2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>
                Пероноспороз, церкоспороз, септориоз, аскохитоз, антракноз,
                фузариозное увядание
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: бутонизация – начало цветения.
              </span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
            <td>
              <span>40(1-2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7</span>
            </td>
            <td>
              <span>Рис</span>
            </td>
            <td>
              <span>Пирикуляриоз</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: появление флаг-листа наало
                выметывания метелки. Расход рабочей жидкости – 300 л/га; при
                авиационной обработке – 50-100 л/га. Сброс воды с рисовых чеков
                производится перед уборкой через 30 дней после обработки
                препаратом
              </span>
            </td>
            <td>
              <span>55 (1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7 (А)</span>
            </td>
            <td>
              <span>Рис</span>
            </td>
            <td>
              <span>Пирикуляриоз</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: появление флаг-листа наало
                выметывания метелки. Расход рабочей жидкости – 300 л/га; при
                авиационной обработке – 50-100 л/га. Сброс воды с рисовых чеков
                производится перед уборкой через 30 дней после обработки
                препаратом
              </span>
            </td>
            <td>
              <span>55 (1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Рапс яровой</span>
            </td>
            <td>
              <span>Склеротиниоз, альтернариоз, фомоз</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: при появлении первых признаков
                болезни или начало образования стручков. Расход рабочей жидкости
                – 300-400 л/га
              </span>
            </td>
            <td>
              <span>40 (1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Рапс озимый</span>
            </td>
            <td>
              <span>Склеротиниоз, альтернариоз, фомоз</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: осенью 5-6 листьев,
                весной-вытягивание стеблей. Расход рабочей жидкости – 300-400
                л/га
              </span>
            </td>
            <td>
              <span>40 (2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-0,7</span>
            </td>
            <td>
              <span>Горох</span>
            </td>
            <td>
              <span>Аскохитоз, ржавчина</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: бутонизация. Расход рабочей
                жидкости – 300-400 л/га
              </span>
            </td>
            <td>
              <span>39 (1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Corteva
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Аканто Плюс, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Аканто Плюс, КС"
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

export default akantopljusks;
