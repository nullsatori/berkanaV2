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

const alkorsuperke = () => {
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
        Пропиконазол 250 г/л +{" "}
        <a href="https://berkanabio.ru/category/ciprokonazol/">Ципроконазол</a>{" "}
        80 г/л
      </strong>
      Комбинированный фунгицид системного действия для защиты зерновых колосовых
      культур и сахарной свеклы, максимальная эффективность и высокий урожай.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Широкий спектр действия: подавляет все основные болезни зерновых
          культур и сахарной свёклы в период вегетации.
        </li>
        <li>
          Универсальное и гибкое применение: все основные зерновые культуры
          (пшеница яровая и озимая, ячмень яровой и озимый, рожь озимая, овес) и
          сахарная свёкла, независимо от стадии развития культуры в период
          вегетации.
        </li>
        <li>Обеспечение качества урожая.</li>
        <li>Быстрое начальное действие и долговременная защита.</li>
        <li>Эффективное профилактическое и лечебное действие.</li>
        <li>Низкие нормы расхода.</li>
        <li>Отличная дождеустойчивость.</li>
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
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Ржавчина бурая, ржавчина желтая, ржавчина стеблевая, мучнистая
                роса, септориоз листьев и колоса, пиренофороз
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Гельминтоспориозные пятнистости (темно-бурая, сетчатая,
                полосатая), мучнистая роса, ржавчина карликовая, ржавчина
                стеблевая, ринхоспориоз
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, ржавчина бурая, ржавчина стеблевая,
                ринхоспориоз, септориоз
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>Ржавчина корончатая, красно-бурая пятнистость</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,7</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Церкоспороз, фомоз, мучнистая роса</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое - при появлении первых
                признаков заболевания, второе - через 10-14 дней (при
                необходимости).
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
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
        <title>Алькор Супер, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Алькор Супер, КЭ"
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

export default alkorsuperke;
