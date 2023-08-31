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

const fatrinke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/05/berkanabio_fatrin-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
          Альфа-циперметрин
        </a>{" "}
        100 г/л
      </strong>
      Высокоэффективный контактно-желудочный инсектицид для защиты зерновых
      колосовых от широкого спектра вредителей.
      <h2>Преимущество</h2>
      Действующее вещество обладает контактно-желудочным действием с высоким
      уровнем начальной токсичности. Действует на вредителей, которые входят в
      непосредственный контакт с препаратом, а также при их питании растениями,
      которые были обработаны инсектицидом. Нарушает процессы обмена ионов
      натрия и калия в присинаптичной мембране, что приводит к чрезмерному
      выделению ацетилхолина при прохождении нервных импульсов через
      синаптическую цепочку. В результате паралича нервной системы вредители
      погибают. Максимальная эффективность препарата наблюдается при применении
      его во время активной вегетации растений. В случае когда культурные
      растения находятся в стрессовом состоянии (прохладные погодные условия,
      заморозки, засуха и повышение температуры) системное действие инсектицида
      на вредителей существенно уменьшается.
      <h2>Норма расхода</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма</strong>
            </td>
            <td>
              <strong>Куль­ту­ра</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
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
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Блошки, тли, цикадки, трипсы, пьявица</span>
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
              <span>Ячмень</span>
            </td>
            <td>
              <span>Пьявица</span>
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
              <span>
                Рапс (семена, масло), горчица (кроме горчицы на масло)
              </span>
            </td>
            <td>
              <span>Рапсовый цветоед, крестоцветные блошки</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
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
          </tr>
          <tr>
            <td>
              <span>0,15</span>
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
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <span>Neoport</span>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Фатрин, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Фатрин, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default fatrinke;
