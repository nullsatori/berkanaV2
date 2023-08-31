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

const zamiremv = () => {
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
        <a href="https://berkanabio.ru/category/prohloraz/">Прохлораз</a> 267
        г/л +{" "}
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a>{" "}
        133 г/л
      </strong>
      Системный фунгицид для защиты зерновых колосовых культур от грибковых
      заболеваний.
      <h2>Преимущества</h2>
      <ul>
        <li>
          препарат широкого спектра биологической эффективности с удачным
          объединением двух активных
        </li>
        <li>веществ системного и трансламинарного действия;</li>
        <li>имеет хорошо выраженный стоп-эффект;</li>
        <li>
          обеспечивает надежный контроль наиболее распространенных возбудителей
          болезней зерновых:
        </li>
        <li>
          мучнистой росы, ржавчины бурой, септориоза листьев и колоса,
          пиренофороза, фузариоза колоса и др.
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
            <td>
              <span>1-1,2</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, ржавчина бурая, ржавчина желтая, септориоз
                листьев и колоса, пиренофороз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации в фазах выход в трубку – начало
                колошения; против фузариоза колоса: конец колошения – начало
                цветения.
              </span>
              <span>Расход рабочей жидкости – 200- 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>Фузариоз колоса</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации в фазах выход в трубку – начало
                колошения; против фузариоза колоса: конец колошения – начало
                цветения.
              </span>
              <span>Расход рабочей жидкости – 200- 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,2</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Мучнистая роса, карликовая ржавчина, полосатая и сетчатая
                пятнистость
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1,2</span>
            </td>
            <td>
              <span>Пшеница яровая, озимая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, ржавчина бурая, желтая, септориоз листьев и
                колоса, пиренофороз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации в фазы выхода  в трубку – начало
                колошения; против фузариоза колоса: конец колошения – начало
                цветения.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1,2</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Мучнистая роса, карликовая ржавчина, ринхоспориоз,
                гельминтоспориозные пятнистости листьев: сетчатая, темно-бурая,
                полосатая
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости-200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Адама Рус
      <strong>Упаковка:</strong>  5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Замир, ЭМВ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Замир, ЭМВ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default zamiremv;
