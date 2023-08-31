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

const grandsilultraks = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2021/02/grandsil_ultra_berkanabio.jpg"></a>
      <a href="https://berkanabio.ru/category/imazalil/">Имазалил 20 г/л</a> +{" "}
      <a href="https://berkanabio.ru/category/tebukonazol/">
        Тебуконазол 45 г/л
      </a>{" "}
      +{" "}
      <a href="https://berkanabio.ru/category/flutriafol/">Флутриафол 75 г/л</a>
      Системный фунгицид для обработки семян зерновых и технических культур.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Наличие трех действующих веществ с различными механизмами действия
          обеспечивает комплексную и надежную защиту.
        </li>
        <li>
          От почвенных патогенов, внутренней и поверхностной семенной инфекции.
        </li>
        <li>От заболеваний передающихся аэрогенно.</li>
        <li>Отличная прилипаемость препарата.</li>
        <li>
          Максимальный синергетический эффект против трудно контролируемым
          болезней (фузариозные и гельминтоспориозные корневые гнили, снежная
          плесень и др).
        </li>
        <li>Высокая скорость проникновения препарата.</li>
        <li>
          Быстрое куративное (лечебное) и длительное профилактическое действие.
        </li>
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
            <td>0,4</td>
            <td>Пшеница яровая и озимая</td>
            <td>Твердая головня</td>
            <td>
              Протравливание перед посевом или заблаговременно. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Пшеница яровая и озимая</td>
            <td>
              Пыльная головня, фузариозная и гельминтоспориозная корневые гнили,
              мучнистая роса, септориоз (на ранних стадиях), плесневение семян
            </td>
            <td>
              Протравливание перед посевом или заблаговременно. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Пшеница озимая</td>
            <td>Фузариозная снежная плесень</td>
            <td>
              Протравливание перед посевом или заблаговременно. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Ячмень яровой</td>
            <td>
              Каменная головня, пыльная головня, ложная пыльная головня,
              гельминтоспориозная и фузариозная корневые гнили, сетчатая
              пятнистость, плесневение семян
            </td>
            <td>
              Протравливание перед посевом или заблаговременно. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Овес</td>
            <td>
              Пыльная головня, покрытая головня, плесневение семян, красно-бурая
              пятнистость, гельминтоспориозная и фузариозная корневые гнили
            </td>
            <td>
              Протравливание перед посевом или заблаговременно. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Рожь озимая</td>
            <td>
              Стеблевая головня, фузриозная корневая гниль, фузариозная снежная
              плесень, плесеневение семян
            </td>
            <td>
              Протравливание перед посевом или заблаговременно. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/kchhk/">КЧХК</a>
      <strong>Упаковка:</strong> 20 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Грандсил Ультра, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Грандсил Ультра, КС"
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

export default grandsilultraks;
