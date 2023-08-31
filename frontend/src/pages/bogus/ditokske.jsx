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

const ditokske = () => {
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
        <a href="https://berkanabio.ru/category/dimetoat/">Диметоат</a> 400 г/л
      </strong>
      Инсектицид, применяемый против широкого спектра вредителей зерновых и
      овощных культур, льне-долгунце, люцерне, кенафе и других культурах.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Препарат обладает системным действием и не смывается дождем уже через
          1 час после обработки.
        </li>
        <li>
          Эффективен против многих видов вредных насекомых, экономически
          целесообразно использовать в период максимальной плотности вредителей
          на поле.
        </li>
        <li>
          Обладает высокой начальной активностью, гибель вредителей наступает в
          течение первых часов после обработки.
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
              <span>1-1,5</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>Хлебная жужелица</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>
                Клоп вредная черепашка, пьявица, внутристеблевые
                мухи, тли, трипсы
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,2</span>
            </td>
            <td>
              <span>Рожь, ячмень</span>
            </td>
            <td>
              <span>Пьявица, внутристеблевые мухи,тли, трипсы</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,2</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>Внутристеблевые мухи, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Зернобобовые культуры</span>
            </td>
            <td>
              <span>Бобовая огневка, гороховая плодожорка, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-2</span>
            </td>
            <td>
              <span>Яблоня, груша</span>
            </td>
            <td>
              <span>
                Щитовки, ложнощитовки, клещи, листовертки, тли, медяница,
                моли, плодожорки, листогрызущие гусеницы, жуки
              </span>
            </td>
            <td>
              <span>Опрыскивание до и после цветения.</span>
              <span>Расход рабочей жидкотси - 1000-1500 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Свекла сахарная, кормовая</span>
            </td>
            <td>
              <span>
                Клопы, листовая тля, минирующие муха и моль, клещи, цикадки,
                мертвоеды, блошки
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Овощные культуры (семенные посевы)</span>
            </td>
            <td>
              <span>Клещи, тли, трипсы, клопы</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-2,25</span>
            </td>
            <td>
              <span>Картофель (семенные посевы)</span>
            </td>
            <td>
              <span>Тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Картофель (семенные посевы)</span>
            </td>
            <td>
              <span>Картофельная моль</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Люцерна (семенные посевы)</span>
            </td>
            <td>
              <span>Клопы, тли, люцерновая толстоножка, клещи</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Плодожорки, трипсы, совка-гамма</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2-2</span>
            </td>
            <td>
              <span>
                Конопля технического назначения (сорта, разрешенные для
                выращивания в России)
              </span>
            </td>
            <td>
              <span>Листовертки, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5</span>
            </td>
            <td>
              <span>Кенаф</span>
            </td>
            <td>
              <span>Клопы, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2-1,6</span>
            </td>
            <td>
              <span>Смородина (маточники, питомники)</span>
            </td>
            <td>
              <span>Листовертки, галлицы, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-1,2</span>
            </td>
            <td>
              <span>Малина (маточники)</span>
            </td>
            <td>
              <span>Клещи, тли, цикадки, галлицы</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8</span>
            </td>
            <td>
              <span>Люпин (семенные посевы)</span>
            </td>
            <td>
              <span>Стеблевая минирующая муха, тли</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
        <span>ФМРус</span>
      </a>
      <strong>Упаковка:</strong> 5, 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Дитокс, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Дитокс, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default ditokske;
