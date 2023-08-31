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

const ekstrahelatkompleksnyj = () => {
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
      <a
        href="https://berkanabio.ru/wp-content/uploads/2020/10/888888883-1.png"
        rel="attachment wp-att-3368"
      ></a>
      Для предпосевной обработки семян, внекорневой и корневой подкормок с/х
      культур. Дополнительная информация: Совместим со всеми пестицидами,
      жидкими и водорастворимыми удобрениями, хорошо растворим в рабочем
      растворе. Примечание: доза препарата может быть увеличена до 1,5 кг/га при
      низком содержании микроэлементов в почве и планировании высокого урожая.
      Для коррекции питания рекомендуется листовая диагностика с использованием
      переносной лаборатории «ФИТОСКАН».
      <h3>Состав</h3>
      <table>
        <tbody>
          <tr>
            <td>
              Магний (Mg), г/кг, не менее 20 Сера (S), г/кг, не менее 50 Азот
              (N), г/кг, не менее 10 Медь (Cu), г/кг, не менее 10 Цинк (Zn),
              г/кг, не менее 30
            </td>
            <td>
              Марганец (Mn), г/кг, не менее 10 Молибден (Mo), г/кг не менее 5
              Железо (Fe), г/кг, не менее 5 Кобальт (Co), г/кг, не менее 5
              Массовая доля влаги, %, не более 12,0
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Норма расхода и способ применения</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Культура</strong>
            </td>
            <td>
              <strong>Способ внесения</strong>
            </td>
            <td>
              <strong>Доза применения </strong>
            </td>
            <td>
              <strong>Норма расхода рабочего раствора</strong>
            </td>
          </tr>
          <tr>
            <td>Для всех культур</td>
            <td>Предпосевная обработка семян</td>
            <td>0,2-0,3 кг/т</td>
            <td>10 л/т</td>
          </tr>
          <tr>
            <td>Для всех культур</td>
            <td>Внекорневая и корневая подкормки</td>
            <td>0,5-1,0 кг/га</td>
            <td>50-200 л/га 800-1000 л/га</td>
          </tr>
        </tbody>
      </table>
      Примечание: доза препарата может быть увеличена до 1,5 кг/га при низком
      содержании микроэлементов в почве и планировании высокого урожая
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/ooo-nvp-bashinkom/">
        ООО “НВП БашИнком”
      </a>
      <strong>Упаковка:</strong> 5 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Экстра Хелат Комплексный - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Экстра Хелат Комплексный"
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

export default ekstrahelatkompleksnyj;
