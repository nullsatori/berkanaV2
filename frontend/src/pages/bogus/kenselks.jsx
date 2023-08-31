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

const kenselks = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2020/07/kensel-berkanabio.jpg"></a>
      <a href="https://berkanabio.ru/category/flutriafol/">Флутриафол</a> 250
      г/л Системный фунгицид для обработки пшеницы озимой и яровой, ячменя
      озимого и ярового, сахарной свеклы, яблонь.
      <h3>Преимущества</h3>
      Системный фунгицид длительного действия для защиты зерновых культур и
      сахарной свеклы против комплекса наиболее распространенных болезней в
      период вегетации. Быстрое перемещение в растущие ткани обеспечивает
      длительное профилактическое действие. Высокоэффективен против широкого
      спектра вредоносных заболеваний при низких нормах расхода. Начинает
      действовать сразу после обработки.
      <h3>Механизм действия</h3>
      Системный фунгицид защитного и куративного (лечащего) действия способен
      быстро проникать в растение и передвигаться по тканям к месту локализации
      инфекции, искореняя заболевание за счет ингибирования процесса
      деметилирования биосинтеза стеролов и нарушения избирательности
      проницаемости клеточных мембран патогенна.
      <h3>Скорость воздействия</h3>
      Препарат начинает действовать в течение 1–2 часов после обработки.
      Подавления развития гриба при наружных инфекциях (мучнистая роса,
      ржавчина…) происходит через несколько часов, а при внутренних
      (септориоз..) – в течение 10-12 дней.
      <h2>Нор­ма расхода и применение</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма</strong>
              <strong>при­ме­не­ния</strong>
              <strong>пре­па­ра­та</strong>
            </td>
            <td>
              <strong>Куль­ту­ра,</strong>
              <strong>об­ра­ба­ты­ва­емый объ­ект</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб, вре­мя об­ра­бот­ки,</strong>
              <strong>осо­бен­нос­ти при­ме­не­ния</strong>
            </td>
            <td>
              <strong>Срок</strong>
              <strong>ожи­да­ния</strong>
              <strong>(крат­ность</strong>
              <strong>об­ра­бо­ток)</strong>
            </td>
            <td>
              <strong>Сро­ки</strong>
              <strong>вы­хо­да</strong>
              <strong>для руч­ных</strong>
              <strong>(ме­ха­ни­зи­ро­ван­ных</strong>
              <strong>ра­бот)</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>0,5</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Ржавчина бурая, стеблевая,  желатя, мучнистая роса, септориоз,
                пиренофроз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации в фазы флаговый лист-колошение.
              </span>
              <span>Расход рабочей жидкости-300 л/га</span>
            </td>
            <td>
              <span>50(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Мучнистая роса, ржавчина карликовая, стеблевая и бурая,
                пятнистости сетчатая и темно-бурая, ринхоспориоз  
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации в фазы флаговый лист-выдвижение
                колоса.
              </span>
              <span>Расход рабочей жидкости-300 л/га</span>
            </td>
            <td>
              <span>50(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,25</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
               <span>Церкоспороз, мучнистая роса, фомоз</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: при появлениее первых признаков
                одного из заболеваний, последующее в случае необходимости с
                интервалом 10-14 дней.
              </span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
            <td>
              <span>30(1-2)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/kensel-ks/">КЧХК</a>
      <strong>Упаковка</strong>: 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Кэнсел, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Кэнсел, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default kenselks;
