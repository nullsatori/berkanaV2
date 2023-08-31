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

const tirtps = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/03/berkanabio_tir-tps.jpg"></a>
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a> 25
        г/л + <a href="https://berkanabio.ru/category/tiram/">Тирам</a> (ТМТД)
        400 г/л
      </strong>
      Универсальный протравитель семян контактно-системного действия.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Широкий спектр действия против патогенных микроорганизмов, в том числе
          возбудителей корневой гнили зерновых бактериальной этиологии.
        </li>
        <li>
          Надежно защищает зерновые колосовые культуры, как от семенной
          инфекции, так и от вторичного заражения из почвы.
        </li>
        <li>Обладает лечебным действием.</li>
        <li>
          Регулярное применение препарата не приводит к появлению резистентных
          штаммов патогенов.
        </li>
        <li>
          Гарантирует длительную защиту культур с начальных фаз вегетации.
        </li>
        <li>
          Протравливание Тиром обеспечивает появление дружных и здоровых всходов
          культур.
        </li>
      </ul>
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
            <td>1-1,2</td>
            <td>Пшеница яровая и озимая</td>
            <td>
              Твердая головня, гельминтоспориозная и фузариозная корневые гнили,
              плесневение семян
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>1,2</td>
            <td>Пшеница яровая и озимая</td>
            <td>Пыльная головня, септориоз</td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>1-1,2</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Каменная головня, гельминтоспориозная и фузариозная корневые
              гнили, плесневение семян
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>1,2</td>
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
            <td>1-1,2</td>
            <td>Рожь озимая</td>
            <td>
              Стеблевая головня, гельминтоспориозная и фузариозная корневые
              гнили, плесневение семян
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>1,2</td>
            <td>Рожь озимая</td>
            <td>
              Фузариозная снежная плесень (при слабом и умеренном развитии
              болезни)
            </td>
            <td>
              Протравливание семян за 7-14 дней до посева. Расход рабочей
              жидкости - 10 л/т.
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Тир, ТПС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Тир, ТПС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default tirtps;
