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

const triagroks = () => {
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
      <a href="https://berkanabio.ru/category/azoksistrobin/">Азоксистробин</a>{" "}
      100 г/л +{" "}
      <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a> 120
      г/л +{" "}
      <a href="https://berkanabio.ru/category/tebukonazol/">Ципроконазол</a> 40
      г/л Комбинированный препарат, протравитель зерна и фунгицид.
      <h2>Преимущества</h2>
      Сочетание этих компонентов в одном препарате позволяет эффективно бороться
      не только с грибными инфекциями зерна, но и с бактериальными, а также
      решать проблему стресс-факторов, таких как засуха, неблагоприятные условия
      перезимовки и другие.
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
              <span>0,8-1</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, бурая ржавчина, стеблевая ржавчина, желтая
                ржавчина, пиренофороз, септориоз листьев и колоса
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации; против фузариоза и черни колоса
                в фазу конец колошения – начало цветения. Расход рабочей
                жидкости -300л/га
              </span>
            </td>
            <td>
              <span>40(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>Фузариоз и чернь колоса</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации; против фузариоза и черни колоса
                в фазу конец колошения – начало цветения. Расход рабочей
                жидкости -300л/га
              </span>
            </td>
            <td>
              <span>40(1)</span>
            </td>
            <td>
              <span>-(3)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Мучнистая роса, ржавчина карликовая, ржавчина стеблевая,
                сетчатая пятнистость, темно- бурая пятнистость, ринхоспориоз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации. Расход рабочей жидкости – 300
                л/га
              </span>
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
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Пыльная головня, твердая головня фузариозная и
                гельминтоспориозная корневые гнили, снежная плесень, плесневение
                семян, в том числе альтернариозная семенная инфекция, мучнистая
                роса (на ранних стадиях развития)
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно. Расход
                рабочей жидкости – 10л/т
              </span>
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
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Пыльная головня, ложная пыльная головня, каменная головня,
                гельминтоспориозная и фузариозная корневые гнили, сетчатая
                пятнистость, плесневение семян, в том числе альтернариозная
                семенная инфекция
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно. Расход
                рабочей жидкости – 10л/т
              </span>
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
              <span>0,2-0,3</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Пузырчатая и пыльная головня соцветий, корневые и стеблевые
                гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно. Расход
                рабочей жидкости – 10л/т
              </span>
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
      <strong>Производитель:</strong> Агрохим ХХI
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>ТриАгро, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="ТриАгро, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default triagroks;
