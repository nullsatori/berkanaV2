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

const serpvrk = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio_serp-vrk.jpg"></a>
        Имазетапир 100 г/л
      </strong>
      Системный высокоэффективный послевсходовый гербицид для уничтожения
      широкого спектра однолетних злаковых и двудольных сорняков на посевах сои.
      <h2>Спектр действия препарата</h2>
      Препарат уничтожает большинство однолетних злаковых и однолетних
      двудольных сорняков.
      <h2>Механизм действия</h2>
      Действующее вещество проникает через корни и листья растений, блокирует в
      чувствительных растениях синтез протеина, что ведет к прекращению роста
      клеток и гибели сорняков. При довсходовом использовании у двудольных
      сорняков рост прекращается в фазе двух листьев, у злаковых сорняков – в
      фазе колеоптиля. При использовании препарата после всходов культурных
      растений рост сорняков останавливается через несколько часов после
      обработки. Однако, признаки действия могут быть незаметны на протяжении
      первых дней после использования препарата. Полная гибель сорняков
      наступает в течении 3-6 недель после обработки.
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
            <td>0,5-0,8</td>
            <td>Соя</td>
            <td>
              Однолетние и многолетние злаковые и однолетние двудольные сорняки,
              в т.ч. виды амброзии
            </td>
            <td>
              Опрыскивание почвы до посева (с заделкой), до всходов или
              опрыскивание посевов в фазе всходов- двух тройчатых листьев
              культуры. Ограничения по севообороту: при пересеве в год
              применения рекомендуется высевать озимую пшеницу, на следующий год
              – кукурузу, яровые и озимые зерновые, через два года – все
              культуры без ограничений. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>78(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,5-0,75</td>
            <td>
              Нут, горох на зерно, горох овощной на семена и для промышленной
              переработки
            </td>
            <td>
              Однолетние и многолетние злаковые и однолетние двудольные сорняки,
              в т.ч. виды амброзии
            </td>
            <td>
              Опрыскивание почвы в течение 2-3 дней после посева или
              опрыскивание вегетирующих растений в фазу всходов 3-6 листьев
              культуры. Ограничения по севообороту: при пересеве в год
              применения рекомендуется высевать озимую пшеницу, на следующий год
              – кукурузу, яровые и озимые зерновые, через два года – все
              культуры без ограничений. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>40(1)</td>
            <td>-(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/pestitsidy/neoport/">Neoport</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Серп, ВРК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Серп, ВРК" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default serpvrk;
