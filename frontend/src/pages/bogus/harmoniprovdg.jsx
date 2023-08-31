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

const harmoniprovdg = () => {
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
        <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
          Тифенсульфурон-метил
        </a>{" "}
        750 г/кг
      </strong>
      Просевсходовый смесевой гербицид для борьбы с однолетними широколистными
      сорнякам, находящихся в фазе 2-6 листьев (амброзия полыннолистная в фазе 2
      листьев).
      <h2>Преимущества</h2>
      <ul>
        <li>
          Высокоэффективен против большинства видов важнейших однолетних и ряда
          многолетних двудольных сорняков в посевах сои;
        </li>
        <li>
          Идеально подходит для засоренных крестоцветными сорняками, щирицей,
          дурнишником;
        </li>
        <li>
          Синергизм двух действующих веществ обеспечивает высокую
          продолжительность действия;
        </li>
        <li>Отличный партнер для баковых смесей;</li>
        <li>
          Позволяет уменьшить дозировку гербицидов-партнеров в баковых смесях;
        </li>
        <li>
          Может служить основой для составления баковых смесей с
          противозлаковыми гербицидами. ХАРМОНИ® КЛАССИК проникает в листья
          сорняков и быстро перемещается в зоны роста корней и стеблей.
        </li>
        <li>
          Через несколько часов у чувствительных видов сорняков прекращается
          деление клеток, и их рост останавливается;
        </li>
        <li>
          Видимые симптомы появляются через 3-5 дней, а полная гибель сорняков
          наступает через 10-20 дней.
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
            <td>0,006-0,008</td>
            <td>Соя</td>
            <td>Однолетние двудольные сорные растения</td>
            <td>
              Опрыскивание посевов в фазе 1-2 настоящих листьев культуры и
              ранние фазы роста сорняков в смеси с 200 мл/га ПАВ Тренд 90, Ж
              (900 г/л этоксилат изодецилового спирта). Расход рабочей жидкости
              – 200 – 300 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,01-0,025</td>
            <td>Лен-долгунец</td>
            <td>
              Однолетние двудольные, в том числе устойчивые к МЦПА, сорные
              растения
            </td>
            <td>
              Опрыскивание посевов в фазе «елочки» культуры. Расход рабочей
              жидкости – 200 – 300 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/fmc/">FMC</a>
      <strong>Упаковка: </strong>0,2 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Хармони Про, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Хармони Про, ВДГ"
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

export default harmoniprovdg;
