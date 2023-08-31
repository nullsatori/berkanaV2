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

const aktellikke = () => {
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
        <a href="https://berkanabio.ru/category/pirimifos-metil/">
          Пиримифос-метил
        </a>{" "}
        (Актеллик) 500 г/л
      </strong>
      Несистемный фосфорорганический инсектоакарицид кишечно-контактного
      действия для защиты складских помещений и запасов зерна при хранении от
      комплекса амбарных вредителей
      <h2>Преимущества препарата</h2>
      <ul>
        <li>Сфера применения: дезинсекция зданий и зернохранили.</li>
        <li>Высокая скорость подавления вредителей запасов.</li>
        <li>
          Уничтожение вредителей и предотвращение их повторного появления.
        </li>
        <li>
          Высокая персистентность на инертных поверхностях, благодаря которой
          обеспечивается длительный период активности, что очень важно для
          защиты от амбарных вредителей запасов при хранении, складских
          помещений и объектов здравоохранения.
        </li>
      </ul>
      <h3>Механизм действия отличается от пиретроидных инсектицидов</h3>
      <ul>
        <li>содержит пиримифос-метил (фосфорорганическая группа);</li>
        <li>надежное средство контроля вредителей в труднодоступных местах.</li>
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
              <span>
                0,4 мл/м<sup>2</sup>
              </span>
            </td>
            <td>
              <span>
                Незагруженные складские помещения и оборудование
                зерноперерабатывающих и пищевых предприятий
              </span>
            </td>
            <td>
              <span>Вредители запасов</span>
            </td>
            <td>
              <span>
                Опрыскивание. Расход рабочей жидкости – до 50 мл/м<sup>2</sup>.
                Допуск людей в незагруженные помещения и загрузка складов через
                3 суток после обработки при условии отсутствия действующего
                вещества в воздухе рабочей зоны или его содержания не
                превышает ПДК. Допуск людей в помещение ранее 3 суток после
                обработки возможен в средствах индивидуальной защиты кожи и
                органов дыхания
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                0,8 мл/м<sup>2</sup>
              </span>
            </td>
            <td>
              <span>
                Территория зерноперерабатывающих предприятий и зернохранилищ в
                хозяйствах
              </span>
            </td>
            <td>
              <span>Вредители запасов</span>
            </td>
            <td>
              <span>
                Опрыскивание. Допуск людей в незагруженные помещения и загрузка
                складов через 3 суток после обработки при условии отсутствия
                действующего вещества в воздухе рабочей зоны или его содержания
                не превышает ПДК. Допуск людей в помещение ранее 3 суток после
                обработки возможен в средствах индивидуальной защиты кожи и
                органов дыхания. Расход рабочей жидкости – 200 мл/м<sup>2</sup>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>16 мл/т</span>
            </td>
            <td>
              <span>Зерно продовольственное, семенное, фуражное</span>
            </td>
            <td>
              <span>Вредители запасов</span>
            </td>
            <td>
              <span>
                Опрыскивание. Расход рабочей жидкости – до 500 мл/т зерна.
                Использование зерна на продовольственные и фуражные цели при
                содержании остатков препарата не выше МДУ. После обработки зерна
                срок допуска людей в зернохранилище не ранее 1 сутки
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>
      <a href="https://berkanabio.ru/category/singenta/">
        <span> Сингента</span>
      </a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Актеллик, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Актеллик, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default aktellikke;
