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

const dospeh3ks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/02/11222-1.jpg"></a>
        <a href="https://berkanabio.ru/category/imazalil/">Имазалил</a> 40 г/л +{" "}
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a> 60
        г/л +{" "}
        <a href="https://berkanabio.ru/category/tiabendazol/">Тиабендазол</a> 60
        г/л
      </strong>
      Высокоэффективный трехкомпонентный системный фунгицид для обработки семян
      зерновых культур.
      <h3>Преимущества</h3>
      <ul>
        <li>
          высокая эффективность против широкого спектра наиболее вредоносных
          болезней зерновых культур;
        </li>
        <li>
          наличие трех взаимодополняющих действующих веществ гарантирует высокую
          стабильность фунгицидной активности в любых условиях
        </li>
        <li>обладает как лечебным, так и профилактическим действием;</li>
        <li>длительный период защитного действия;</li>
        <li>полное отсутствие фитотоксичности;</li>
        <li>уникальная рецептура;</li>
        <li>повышает всхожесть семян и ускоряет появление всходов;</li>
        <li>способствует развитию мощной корневой системы зерновых культур;</li>
        <li>низкие нормы применения;</li>
        <li>удобная в применении препаративная форма;</li>
        <li>оптимальное соотношение цены и качества.</li>
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
            <td>0,4</td>
            <td>Пшеница яровая, озимая</td>
            <td>
              Твердая головня, пыльная головня, гельминтоспориозная и
              фузариозная корневые гнили, септориоз, плесневение семян,
              мучнистая роса (на ранних фазах)
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
            <td>-(1)</td>
            <td>-(-)</td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Пшеница озимая</td>
            <td>Фузариозная снежная плесень</td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
            <td>-(1)</td>
            <td>-(-)</td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Ячмень яровой, озимый</td>
            <td>
              Каменная головня, пыльная головня, пыльная ложная головня,
              гельминтоспориозная и фузариозная корневые гнили, плесневение
              семян, сетчатая и темно-бурая пятнистости
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
            <td>-(1)</td>
            <td>-(-)</td>
          </tr>
        </tbody>
      </table>
      Производство:{" "}
      <a href="https://berkanabio.ru/category/lysterra/">Lysterra</a>
      Упаковка: 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Доспех 3, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Доспех 3, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default dospeh3ks;
