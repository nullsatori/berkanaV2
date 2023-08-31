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

const donatvr = () => {
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
      <strong>Дикват 150 г/л</strong>
      Неселективный контактный гербицид и десикант, применяется для
      предуборочной десикации подсолнечника, способствует быстрому созреванию
      урожая и облегчает его уборку.
      <h3>Преимущества препарата</h3>
      <ul>
        <li>обеспечивает быстрое и равномерное созревание;</li>
        <li>регистрация для авиационного применения;</li>
        <li>
          самый быстрый из десикантов – к уборке можно приступать уже через 5-7
          дней после обработки;
        </li>
        <li>повышение качества семян и уменьшение затрат на их сушку;</li>
        <li>сокращает потери семян при уборке;</li>
        <li>быстро разлагается в растении;</li>
        <li>
          кроме культурных растений высушивает сорняки, что облегчает уборку.
        </li>
      </ul>
      <h3>Норма расхода</h3>
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
            <td>2</td>
            <td>Подсолнечник</td>
            <td>Десикация</td>
            <td>
              Опрыскивание в начале побурения корзинок. Расход рабочей жидкости
              –200-300 л/га, при авиаобработке – 100 л/га
            </td>
            <td>10(1)</td>
            <td>-(10)</td>
          </tr>
          <tr>
            <td>2 (А)</td>
            <td>Подсолнечник</td>
            <td>Десикация</td>
            <td>
              Опрыскивание в начале побурения корзинок. Расход рабочей жидкости
              –200-300 л/га, при авиаобработке – 100 л/га
            </td>
            <td>10(1)</td>
            <td>-(10)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Рапс яровой и озимый</td>
            <td>Десикация</td>
            <td>
              Опрыскивание посевов при побурении семян в стручках среднего
              яруса. Расход рабочей жидкости –200-300 л/га, при авиаобработке –
              100 л/га
            </td>
            <td>10(1)</td>
            <td>-(10)</td>
          </tr>
          <tr>
            <td>2 (А)</td>
            <td>Рапс яровой и озимый</td>
            <td>Десикация</td>
            <td>
              Опрыскивание посевов при побурении семян в стручках среднего
              яруса. Расход рабочей жидкости –200-300 л/га, при авиаобработке –
              100 л/га
            </td>
            <td>10(1)</td>
            <td>-(10)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/garant-optima/">Гарант Оптима</a>
    </div>
  );

  return (
    <>
      <Head>
        <title>Донат, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Донат, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default donatvr;
