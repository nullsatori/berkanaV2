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

const terradimke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2021/02/berkanabio_terradim-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/dimetoat/">Диметоат 400 г/л</a>
      </strong>
      Высокоэффективный системный инсектоакарицид широкого спектра действия для
      борьбы с большинством вредителей сельскохозяйственных культур и клещами.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Высокая биологическая активность против широкого спектра насекомых,
          вредителей.
        </li>
        <li>
          Высокая эффективность против вредителей на разных стадиях развития.
        </li>
        <li>Обладает выраженным системным действием.</li>
        <li>Продолжительное защитное действие.</li>
        <li>Возможность применения в баковых смесях с фунгицидами.</li>
        <li>Действует в широком температурном диапазоне.</li>
        <li>Идеальное сочетание цена/качество.</li>
      </ul>
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
            <td>1-1,5</td>
            <td>Пшеница</td>
            <td>Хлебная жужелица</td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1-1,5</td>
            <td>Пшеница</td>
            <td>
              Клоп вредная черепашка, пьявица, внутристеблевые мухи, тли, трипсы
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1-1,2</td>
            <td>Рожь, ячмень</td>
            <td>Пьявица, внутристеблевые мухи, тли, трипсы</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1-1,2</td>
            <td>Овес</td>
            <td>Внутристеблевые мухи, тли,</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,5-1</td>
            <td>Зернобобовые культуры</td>
            <td>Бобовая огневка, гороховая плодожорка, тли,</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,8-2</td>
            <td>Яблоня, груша</td>
            <td>
              Щитовки, ложнощитовки, клещи, листовертки, тли, медяница,
              моли, плодожорки, листогрызущие гусеницы, жуки
            </td>
            <td>
              <span>Опрыскивание до и после цветения.</span>
              <span>Расход рабочей жидкости - 1000-1500 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,5-1</td>
            <td>Свекла сахарная</td>
            <td>
              Клоп, листовая тля, минирующие муха и моль, клещи, цикадки,
              мертвоеды, блошки
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,5-1</td>
            <td>Овощные культуры (семенные посевы)</td>
            <td>Клещи, тли, трипсы, клопы</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>2-2,25</td>
            <td>Картофель (семенные посевы)</td>
            <td>Тли</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1,5-2</td>
            <td>Картофель (семенные посевы)</td>
            <td>Картофельная моль</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,5-1</td>
            <td>Люцерна (семенные посевы)</td>
            <td>Клопы, тли, люцерновая толстоножка, клещи</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,5-1</td>
            <td>Лен-долгунец</td>
            <td>Плодожорки, трипсы, совка-гамма</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1,2-2</td>
            <td>
              Конопля технического назначения (сорта, разрешенные для
              выращивания в России)
            </td>
            <td>Листовертки, тли</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1,5</td>
            <td>Кенаф</td>
            <td>Клопы, тли</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,6-1,2</td>
            <td>Малина (маточники)</td>
            <td>Клещи, тли, цикадки, галлицы</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1,2-1,6</td>
            <td>Смородина (питомники, маточники)</td>
            <td>Листовертки, галлицы, тли</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,8</td>
            <td>Люпин (семенные посевы)</td>
            <td>Стеблевая минирующая муха, тли</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/granum/">Гранум</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Террадим, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Террадим, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default terradimke;
