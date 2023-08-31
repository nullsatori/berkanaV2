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

const dajmondsuperks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/02/berkanabio_dajmond-super-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/difenokonazol/">
          Дифеноконазол
        </a>{" "}
        30 г/л +{" "}
        <a href="https://berkanabio.ru/category/ciprokonazol/">Ципроконазол</a>{" "}
        6,3 г/л
      </strong>
      Универсальный двухкомпонентный системный фунгицид для предпосевной
      обработки семян зерновых культур.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Максимальная эффективность в борьбе с головневыми болезнями и
          корневыми гнилями на пшенице, ржи, овсе и ячмене, включая
          пивоваренный.
        </li>
        <li>
          Широкий спектр действия, по широте спектра действия превосходит
          большинство препаратов для обработки семян, при этом проникает в
          растения постепенно и действует дольше как на внутреннюю, так и на
          внешнюю инфекцию.
        </li>
        <li>Гибкость в сроках применения.</li>
        <li>
          Допускается как непосредственное, так и заблаговременное
          протравливание.
        </li>
        <li>
          Концентрат суспензии, с добавлением сигнального красителя и
          прилипателя, вспомогательные компоненты обеспечивают высокие
          эксплуатационные свойства препарата.[6]
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
              <span>0,75-1</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Твердая головня, гельминтоспориозная и фузариозная корневые
                гнили, септориоз, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>Пыльная головня</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>
                Пыльная головня, твердая головня, септориоз, гельминтоспориозная
                и фузариозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>Пыльная головня, ложная (черная) пыльная головня</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Каменная головня, сетчатая пятнистость, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>Фузариозная и гельминтоспориозная корневые гнили</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>Ячмень озимый</span>
            </td>
            <td>
              <span>
                Пыльная и каменная головня, ложная (черная) пыльная головня,
                темно-бурая и сетчатая пятнистости, гельминтоспориозная и
                фузариозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>
                Пыльная головня, покрытая головня, красно-бурая пятнистость,
                плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>Гельминтоспориозная и фузариозная корневые гнили</span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Гельминтоспориозная и фузариозная корневые гнили, стеблевая
                головня, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
        ГК «ЗемлякоФФ»
      </a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Даймонд Супер, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Даймонд Супер, КС"
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

export default dajmondsuperks;
