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

const altoturboke = () => {
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
        <a href="https://berkanabio.ru/category/propikonazol/">Пропиконазол</a>{" "}
        250 г/л +{" "}
        <a href="https://berkanabio.ru/category/ciprokonazol/">Ципроконазол</a>{" "}
        160 г/л
      </strong>
      Мгновенный «стоп-эффект», уникальное лечащее действие.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Мгновенный стоп-эффект. Препаративная форма АЛЬТО ТУРБО спроектирована
          таким образом, что высокая эффективность продукта проявляется
          независимо от погодных условий, а действие на возбудителей заболеваний
          начинается уже через 20 минут после контакта с ними. Высокая
          системность действующих веществ и уникальная препаративная форма
          позволяют остановить развитие патогена уже через час после обработки;
          полная его гибель наступает в среднем на 3–5-е сутки.
        </li>
        <li>
          Длительный период защитного действия. Это является очень значимым
          преимуществом в условиях, когда обработки проводятся по факту или при
          эпифитотийном развитии бурой ржавчины, септориоза или пиренофороза.
          Современные ингредиенты, входящие в состав АЛЬТО ТУРБО, позволяют
          создать высокий запас прочности продукта с неизменной эффективностью
          при любых погодных условиях.
        </li>
        <li>
          Форсированная формуляция. Использование повышенных концентраций
          поверхностно-активных веществ, адгезивов и сольвентов позволяет
          получить качественное распределение препарата на поверхности листа и
          его быстрое проникновение вовнутрь. 14 активных вспомогательных
          веществ создают условия для полной реализации фотостабильности и
          дождеустойчивости формуляции АЛЬТО ТУРБО.
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
              <span>0,3-0,5 0,3-0,5 (А)</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Ржавчина бурая, ржавчина желтая, ржавчина стеблевая, септориоз
                листьев и колоса, пиренофороз, мучнистая роса
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости – до - 300 л/га, при авиаприменении 50
                л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,5 0,3-0,5 (А)</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Гельминтоспориозные пятнистости (темно-бурая, сетчатая),
                мучнистая роса, ржавчина карликовая, ринхоспориоз
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости – до - 300 л/га, при авиаприменении 50
                л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,7</span>
            </td>
            <td>
              <span>Сахарная свекла</span>
            </td>
            <td>
              <span>Мучнистая роса, альтернариоз, церкоспороз, фомоз</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации. Расход рабочей жидкости –
                200-300 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Альто Турбо, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Альто Турбо, КЭ"
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

export default altoturboke;
