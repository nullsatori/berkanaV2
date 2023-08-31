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

const abakusultrase = () => {
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
        <a href="https://berkanabio.ru/category/piraklostrobin/">
          Пираклостробин
        </a>{" "}
        62,5 г/л +{" "}
        <a href="https://berkanabio.ru/category/epoksikonazol/">
          Эпоксиконазол
        </a>{" "}
        62,5 г/л
      </strong>
      Надежная защита культуры и будущего урожая от широкого спектра
      заболеваний.
      <h2>Преимущества</h2>
      <ul>
        <li>защита зерновых культур от комплекса грибных заболеваний;</li>
        <li>оптимизация жизненных процессов в растении;</li>
        <li>усиление ассимиляции почвенного азота;</li>
        <li>увеличение продуктивности фотосинтеза;</li>
        <li>
          повышение устойчивости растений к неблагоприятным факторам среды;
        </li>
        <li>
          улучшение посевных качеств семян и технологических характеристик
          зерна.
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
              <span>1-1,5</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, бурая ржавчина, стеблевая ржавчина, септориоз
                листьев и колоса, пиренофороз, темно-бурая пятнистость
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации при появлении первых признаков
                болезней.
              </span>
              <span>
                Расход рабочей жидкости при наземном применении - 300 л/га, при
                авиационном - 25-50 л/га.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5 (А)</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, бурая ржавчина, стеблевая ржавчина, септориоз
                листьев и колоса, пиренофороз, темно-бурая пятнистость
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации при появлении первых признаков
                болезней.
              </span>
              <span>
                Расход рабочей жидкости при наземном применении - 300 л/га, при
                авиационном - 25-50 л/га.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>Ячмень яровой, озимый</span>
            </td>
            <td>
              <span>
                Мучнистая роса, карликовая ржавчина, сетчатая пятнистость,
                темно-бурая пятнистость, ринхоспориоз, септориоз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации при появлении первых признаков
                болезней.
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5(А)</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Мучнистая роса, карликовая ржавчина, сетчатая пятнистость,
                темно-бурая пятнистость, ринхоспориоз, септориоз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации при появлении первых признаков
                болезней.
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,25-1,75</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Церкоспороз, мучнистая роса, фомоз</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое – профилактическое или
                при появлении первых признаков одного из заболеваний,
                последующие с интервалом 14-21 день.
              </span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-1,75</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Гельминтоспориоз, фузариоз, прикорневые и стеблевые гнили,
                пузырчатая головня
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое – профилактическое или
                при появлении первых признаков одного из заболеваний,
                последующие с интервалом 14-21 день.
              </span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
      <strong>Упаковка:</strong> 10 л.
    </div>
  );

  return (
    <>
      <Head>
        <title>Абакус Ультра, СЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Абакус Ультра, СЭ"
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

export default abakusultrase;
