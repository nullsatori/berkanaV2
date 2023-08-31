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

const barerkolorks = () => {
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
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a> 60
        г/л
      </strong>
      Cистемный фунгицид широкого спектра действия для предпосевной обработки
      семян зерновых колосовых культур. Высокоэффективный фунгицид защитного и
      лечебного действия из группы триазолов для протравливания семян пшеницы
      яровой и озимой, ячменя ярового и озимого, овса и ржи озимой, эффективный
      против широкого спектра заболеваний (твердая, стеблевая и пыльная головня,
      гельминтоспориозная и фузариозная корневые гнили, прикорневые гнили,
      септориоз, фузариозная снежная плесень, красно-бурая и сетчатая
      пятнистости). Тебуконазол относится к азольным фунгицидам ингибирует
      превращение ланостерина в эргостерин, специфический стерин, входящий в
      состав клеточных мембран грибов. Подавление синтеза эргостерина приводит к
      необратимым нарушениям в клеточных мембранах гриба и в результате – к
      гибели грибного организма. Препарат не применяется в баковых смесях с
      другими препаратами.
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
            <td>0,4-0,5</td>
            <td>Пшеница яровая и озимая</td>
            <td>
              Пыльная головня, фузариозная и гельминтоспо-риозная корневые
              гнили, плесневение семян
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4</td>
            <td>Пшеница яровая и озимая</td>
            <td>Твердая головня</td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,5</td>
            <td>Пшеница озимая</td>
            <td>Фузариозная снежная плесень</td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4</td>
            <td>Ячмень яровой и озимый</td>
            <td>Каменная головня</td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,5</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Пыльная головня, ложная пыльная головня, сетчатая пятнистость
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Гельминтоспориозная и фузариозная корневые гнили, плесневение
              семян
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
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
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Рожь озимая</td>
            <td>
              Фузариозная корневая гниль, гельминтоспориозная корневая гниль,
              плесневение семян
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,5</td>
            <td>Рожь озимая</td>
            <td>Стеблевая головня</td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Союзагрохим,{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Канистра:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Барьер Колор, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Барьер Колор, КС"
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

export default barerkolorks;
