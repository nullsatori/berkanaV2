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

const romulvdg = () => {
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
      <strong>Римсульфурон 250 г/кг</strong>
      Избирательный системный гербицид для борьбы с однолетними и многолетними
      двудольными сорняками на посевах кукурузы и картофеля.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Надежный гербицид для эффективной борьбы с однолетними и многолетними
          двудольными сорняками.
        </li>
        <li>
          Ромул имеет гибкие сроки и нормы применения, возможно дробное внесение
          гербицида, что позволяет контролировать несколько волн сорняков.
        </li>
        <li>
          Ромул обладает высокой биологической активностью и низкими нормами
          расхода (30-50 г/га).
        </li>
        <li>Ромул выпускается в удобной препаративной форме.</li>
        <li>
          Ромул совместим со многими гербицидами. Применение баковых смесей
          значительно расширяет спектр действия препарата на многолетние
          двудольные сорняки.
        </li>
      </ul>
      <h2>Механизм действия</h2>
      <ul>
        <li>
          Ромул принадлежит к новому поколению гербицидов на основе
          сульфонилмочевин.
        </li>
        <li>
          Действующее вещество после опрыскивания проникает в растение и быстро
          перемещается к точкам роста.
        </li>
        <li>
          Римсульфурон ингибирует процесс синтеза незаменимых аминокислот в
          растении. Через несколько дней на растениях отмечается выраженная
          хлоротичность и искривление листьев и побегов. Полная гибель сорняков
          наступает через 10-20 дней после обработки.
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
            <td>0,04</td>
            <td>Кукуруза (на зерно)</td>
            <td>Однолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание посевов в фазе 2-6 листьев культуры и ранние фазы
              роста сорняков в смеси с 200 мл/га ПАВ Неон 99 (Неонол АФ
              <sub>9-12</sub>).Расход рабочей жидкости - 200-300 л/га
            </td>
            <td>60(1)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,05</td>
            <td>Кукуруза (на зерно)</td>
            <td>Многолетние и однолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание посевов в фазе 2-6 листьев культуры при высоте
              злаковых сорняков 10-15 см и в фазе розетки осотов в смеси с 200
              мл/га ПАВ Неон 99 (Неонол АФ<sub>9-12</sub>).Расход рабочей
              жидкости - 200-300 л/га
            </td>
            <td>60(1)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,03+0,02</td>
            <td>Кукуруза (на зерно)</td>
            <td>Многолетние и однолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание посевов в фазе 2-6 листьев культуры. Двукратное
              дробное опрыскивание по первой и второй волне сорняков (интервал
              10-20 дней) в смеси с 200 мл/га ПАВ Неон 99 (Неонол АФ
              <sub>9-12</sub>) (отдельно для каждой обработки).Расход рабочей
              жидкости - 200-300 л/га
            </td>
            <td>60(2)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,05</td>
            <td>Картофель</td>
            <td>
              Многолетние (пырей), однолетние злаковые и некоторые двудольные
              сорняки
            </td>
            <td>
              Опрыскивание посадок после окучивания в ранние фазы развития (1-4
              листа) однолетних сорняков и при высоте пырея 10- 15 см в смеси с
              200 мл/га ПАВ Неон 99 (Неонол АФ<sub>9-12</sub>).Расход рабочей
              жидкости - 200-300 л/га
            </td>
            <td>60(1)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,03+0,02</td>
            <td>Картофель</td>
            <td>
              Многолетние (пырей), однолетние злаковые и некоторые двудольные
              сорняки
            </td>
            <td>
              Опрыскивание посадок после окучивания по первой и второй волне
              сорняков (интервал 10-20 дней) в смеси с 200 мл/га ПАВ Неон 99
              (Неонол АФ<sub>9-12</sub>) (отдельно для каждой обработки). Расход
              рабочей жидкости - 200-300 л/га
            </td>
            <td>60(2)</td>
            <td>7(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Гранум
      <strong>Упаковка: </strong>0,1 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Ромул, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Ромул, ВДГ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default romulvdg;
