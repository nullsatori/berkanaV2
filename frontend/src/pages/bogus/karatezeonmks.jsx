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

const karatezeonmks = () => {
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
        <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
          Лямбда-цигалотрин
        </a>{" "}
        50 г/ л
      </strong>
      Пиретроидный инсектицид для защиты сельскохозяйственных культур от
      комплекса вредителей, включая клещей, а также для дезинсекции
      зернохранилищ и прилегающих территорий.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>Широкий спектр действия</li>
        <li>
          Высокоэффективен против широкого спектра вредителей на всех жизненных
          стадиях, от личинки до имаго.
        </li>
        <li>Улучшенная формуляция</li>
        <li>
          Микрокапсулированная суспензия; защита от УФ-лучей; высокая точка
          возгорания; отсутствие запаха; единственная на рынке
          быстровысвобождающаяся микрокапсулированная препаративная форма
          (размер капсул по ЗеОН-технологии 0,1–10 μm, сделанных по обычной
          технологии – 20–50 μm).
        </li>
        <li>Высокая экономическая эффективность</li>
        <li>
          Высокая дождеустойчивость и фотостабильность обеспечивают более
          длительную защиту даже при неблагоприятных условиях, что в сочетании с
          биологической эффективностью и низкой стоимостью гектарной нормы
          гарантирует высокую экономическую отдачу.
        </li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <thead>
          <tr>
            <td>
              <span>
                <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
              </span>
            </td>
            <td>
              <span>
                <strong>Куль­ту­ра</strong>
              </span>
            </td>
            <td>
              <span>
                <strong>Вред­ный объ­ект</strong>
              </span>
            </td>
            <td>
              <span>
                <b>
                  {" "}
                  <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
                </b>
              </span>
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
              <span>Хлебные жуки, трипсы, Блошки, цикадки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
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
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15 (А)</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Клоп вредная черепашка, тли, пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
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
              <span>Злаковые галлицы</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
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
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15-0,2 (А)</span>
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
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Кукуруза (на зерно)</span>
            </td>
            <td>
              <span>Хлопковая совка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,3 (А)</span>
            </td>
            <td>
              <span>Кукуруза (на зерно)</span>
            </td>
            <td>
              <span>Хлопковая совка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Кукуруза (на зерно)</span>
            </td>
            <td>
              <span>Кукурузный мотылек</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,125</span>
            </td>
            <td>
              <span>Горох</span>
            </td>
            <td>
              <span>
                Гороховый комарик, тли, трипсы, клубеньковые долгоносики
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>Паутинный клещ</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Горчица</span>
            </td>
            <td>
              <span>Рапсовый цветоед</span>
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
              <span>Рапс</span>
            </td>
            <td>
              <span>Рапсовый цветоед</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
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
          </tr>
          <tr>
            <td>
              <span>0,1-0,15</span>
            </td>
            <td>
              <span>Яблоня</span>
            </td>
            <td>
              <span>Яблонный цветоед</span>
            </td>
            <td>
              <span>Опрыскивание до цветения.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
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
        <title>Каратэ Зеон, МКС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Каратэ Зеон, МКС"
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

export default karatezeonmks;
