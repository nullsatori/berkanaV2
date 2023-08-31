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

const shamanke = () => {
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
      <a href="#">Хлорпирифос</a> 500 г/л + <a href="#">Циперметрин</a> 50 г/л
      Инсектицид широкого спектра действия, который защищает культуру даже при
      неблагоприятных условиях.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Обладает кишечным, контактным, фумигантным, локально-системным и
          репеллентным действиями.
        </li>
        <li>
          Инсектицид длительного защитного действия, благодаря чему можно
          снизить количество опрыскиваний за сезон.
        </li>
        <li>
          Действует на взрослых особей и на личинок на всех стадиях развития.
        </li>
        <li>
          Препарат обладает фумигантным свойством и великолепно уничтожает
          скрытоживущих насекомых (листовертки, минирующие моли и др.).
        </li>
        <li>
          Уничтожает клещей, устойчивых к фосфорорганическим инсектицидам, таким
          как Би 58, Метафос и др.
        </li>
        <li>
          Превосходит по эффективности другие инсектициды при наличии густого
          полога культуры или ее листвы, когда трудно обеспечить доступ к
          находящимся под листьями насекомым.
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
              <span>0,75-1</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>Хлебная жужелица</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
            <td>
              <span>30(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>Клоп вредная черепашка, хлебные жуки, пьявицы, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
            <td>
              <span>30(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75</span>
            </td>
            <td>
              <span>Ячмень</span>
            </td>
            <td>
              <span>Пьявицы</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
            <td>
              <span>30(2)</span>
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
              <span>Рапс</span>
            </td>
            <td>
              <span>Крестоцветные блошки</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
            <td>
              <span>30(2)</span>
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
              <span>Рапс</span>
            </td>
            <td>
              <span>
                Рапсовый цветоед, стеблевой и семенной скрытнохоботники
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
            <td>
              <span>30(2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Neoport
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Шаман, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Шаман, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default shamanke;
