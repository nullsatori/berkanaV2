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

const nopasaranks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabionopasaran-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/imazamoks/">Имазамокс</a> 25 г/л
        + Метазахлор 375 г/л
      </strong>
      Гербицид для уничтожения широкого спектра сорняков на рапсе с помощью
      послевсходовой обработки.
      <h2>Преимущество</h2>
      Высокий уровень эффективности против широчайшего спектра злаковых и
      двудольных сорняков. Улучшение качества: уничтожение сорняков, влияющих на
      содержание глюкозинолатов и сорной примеси. Удобство и простота
      применения: одна обработка после всходов, без заделки в почву, гибкие
      сроки.
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
              <span>0,8-1,2</span>
            </td>
            <td>
              <span>Рапс яровой, устойчивый к имидазолинам</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих растений в фазу 2-6 листьев культуры и
                ранние фазы развития сорняков с добавлением ПАВ ДАШ – 0,5% от
                объема рабочей жидкости.
              </span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2-1,5</span>
            </td>
            <td>
              <span>Рапс озимый, устойчивый к Нопасаран, КС</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание  вегетирующих растений осенью в фазе 2-6 листьев
                культуры в ранние фазы развития сорняков в смеси с ПАВ ДАШ при
                соотношении компонентов 1:1 (1,2-1,5 л/га).
              </span>
              <span>
                Безопасный интервал между применением препарата и высевом
                овощных, крестоцветных культур, картофеля и сахарной свеклы
                составляет 16 месяцев.
              </span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2-1,5</span>
            </td>
            <td>
              <span>Рапс озимый, устойчивый к Нопасаран, КС</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание  вегетирующих растений  весной до фазы вытягивания
                стебля в ранние фазы развития сорняков в смеси с ПАВ ДАШ при
                соотношении компонентов 1:1 (1,2-1,5 л/га).
              </span>
              <span>
                Безопасный интервал между применением препарата и высевом
                овощных, крестоцветных культур, картофеля и сахарной свеклы
                составляет 16 месяцев.
              </span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Нопасаран, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Нопасаран, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default nopasaranks;