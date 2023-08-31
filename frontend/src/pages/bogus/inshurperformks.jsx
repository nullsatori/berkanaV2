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

const inshurperformks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/02/inshur-perform-ks.png"></a>
        <a href="https://berkanabio.ru/category/piraklostrobin/">
          Пираклостробин
        </a>{" "}
        40 г/л +{" "}
        <a href="https://berkanabio.ru/category/tritikonazol/">Тритиконазол</a>{" "}
        80 г/л
      </strong>
      Фунгицидный протравитель семян зерновых культур с выраженным
      физиологическим эффектом.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Комбинация действующих веществ с системной (тритиконазол) и
          локально-системной (пираклостробин) активностью обеспечивает защиту от
          пыльной и твёрдой головни, корневых и прикорневых гнилей различной
          этиологии.
        </li>
        <li>
          Благодаря выраженному физиологическому эффекту способствует получению
          дополнительно урожая за счет:
        </li>
        <li>усиленного усвоения азота и поглощения воды на ранних стадиях;</li>
        <li>
          увеличения устойчивости к стрессовым условиям – засухам и заморозкам.
        </li>
        <li>
          Высокий уровень безопасности для зерновых культур в период прорастания
          семян.
        </li>
        <li>
          Гибкость в выборе срока протравливания семян (от 1 часа до 18 месяцев
          до посева).
        </li>
        <li>
          Иншур Перформ стимулирует формирование мощной корневой системы
          молодыми растениями, что позволяет зерновым культурам лучше переносить
          засуху и заморозки.
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
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Твердая головня, пыльная головня, гельминтоспориозная и
                фузариозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян с увлажнением перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 8-10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, пыльная головня, гельминтоспориозная,
                фузариозная, ризоктониозная и офиоболезная корневые гнили,
                плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян с увлажнением перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 8-10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Каменная головня, пыльная головня, гельминтоспориозная и
                фузариозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян с увлажнением перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 8-10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Ячмень озимый</span>
            </td>
            <td>
              <span>
                Каменная головня, пыльная головня, фузариозная корневая гниль,
                плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян с увлажнением перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 8-10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Стеблевая головня, гельминтоспориозная и фузариозная корневые
                гнили, плесневение семян, снежная плесень
              </span>
            </td>
            <td>
              <span>
                Протравливание семян с увлажнением перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости - 8-10 л/т.</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/basf/">Basf</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Иншур Перформ, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Иншур Перформ, КС"
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

export default inshurperformks;
