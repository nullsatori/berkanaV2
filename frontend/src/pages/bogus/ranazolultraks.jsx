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

const ranazolultraks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2020/07/berkanabio_ranazol-ultra-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a>{" "}
        120 г/л
      </strong>
      Концентрированный системный фунгицид, эффективный против широкого спектра
      заболеваний зерновых колосовых культур.
      <h2>Преимущества</h2>
      Концентрированный фунгицид защитного и лечебного действия из группы
      триазола для протравливания семян пшеницы яровой и озимой, ячменя ярового
      и озимого, овса и ржи озимой, эффективный против широкого спектра
      заболеваний (твердая головня, стеблевая головня, пыльная головня, корневая
      гниль, септориоз, фузариозная снежная плесень, красно-бурая пятнистость,
      гельминтоспориозная и фузариозная корневые гнили, каменная головня).
      Тебуконазол относится к азольным фунгицидам, ингибирует превращение
      ланостерина в эргостерин, специфический стерин, входящий в состав
      клеточных мембран грибов. Подавление синтеза эргостерина приводит к
      необратимым нарушениям в клеточных мембранах гриба и в результате – к
      гибели грибного организма.
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
              <span>0,2-0,25</span>
            </td>
            <td>
              <span>Пшеница яровая, озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, пыльная головня, фузариозная и
                гельминтоспориозная корневые гнили, плесневение семян,
                септориоз, снежная плесень
              </span>
            </td>
            <td>
              <span>Протравливание семян перед посевом.</span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(-)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,25</span>
            </td>
            <td>
              <span>Ячмень яровой, озимый</span>
            </td>
            <td>
              <span>
                Каменная головня, пыльная головня, ложная пыльная головня,
                сетчатая пятнистость, гельминтоспориозная и фузариозная корневые
                гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>Протравливание семян перед посевом.</span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(-)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,25</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>
                Пыльная головня, покрытая головня, плесневение семян,
                красно-бурая пятнистость, плесневение семян
              </span>
            </td>
            <td>
              <span>Протравливание семян перед посевом.</span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(-)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,25</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Фузариозная и гельминтоспориозная корневые гнили, снежная
                плесень, плесневение семян
              </span>
            </td>
            <td>
              <span>Протравливание семян перед посевом.</span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
            <td>
              <span>-(1)</span>
            </td>
            <td>
              <span>-(-)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/neoport/">Neoport</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Раназол Ультра, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Раназол Ультра, КС"
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

export default ranazolultraks;
