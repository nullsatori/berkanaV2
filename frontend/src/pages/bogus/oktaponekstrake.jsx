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

const oktaponekstrake = () => {
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
      2,4-Д (2,4-Дихлорфеноксиуксусная кислота) 500 г/л 2,4-Д к-ты Гербицид на
      основе малолетучих эфиров 2,4-Д (С8) для борьбы с однолетними и некоторыми
      многолетними (осоты и др. двудольными сорняками в посевах зерновых и
      других культур.
      <h2>Преимущества</h2>
      <ul>
        <li>Низкие нормы расхода 0,6 – 0,9 л/га против 1 – 1,6 л/га.</li>
        <li>
          Более эффективное действие на трудноискореняемые корнеотпрысковые
          сорняки: виды осота, молокан татарский, вьюнок полевой и др.
        </li>
        <li>
          Более высокая скорость проникновения действующего вещества через
          кутикулярные мембраны листьев.
        </li>
        <li>
          Надежная результативность независимо от температуры и относительной
          влажности воздуха. Осадки выпавшие спустя 1 час после опрыскивания, не
          влияют на эффективность гербецидного действия;
        </li>
        <li>Нагрузка на единицу площади по 2,4-Д кислоте ниже в 2 – 3 раза.</li>
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
            <td>0,6-0,8</td>
            <td>Пшеница озимая, рожь</td>
            <td>Однолетние и некоторые многолетние двудольные сорняки</td>
            <td>
              Опрыскивание посевов рано весной в фазе кущения культуры. Расход
              рабочей жидкости - 50-150 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,6-0,8</td>
            <td>Пшеница яровая, ячмень</td>
            <td>Однолетние и некоторые многолетние двудольные сорняки</td>
            <td>
              Опрыскивание посевов в фазе кущения культуры. Расход рабочей
              жидкости - 50-150 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,6-0,75</td>
            <td>Кукуруза</td>
            <td>Однолетние и некоторые многолетние двудольные сорняки</td>
            <td>
              Опрыскивание посевов в фазе 3-5 листьев культуры. Расход рабочей
              жидкости - 50-150 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,6-0,8</td>
            <td>Тимофеевка луговая, райграс высокий, овсяница луговая</td>
            <td>Однолетние и некоторые многолетние двудольные сорняки</td>
            <td>
              Опрыскивание посевов в фазе 2-3 листьев до выхода в трубку. Расход
              рабочей жидкости - 50-150 л/га
            </td>
            <td>-(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,4-0,8</td>
            <td>Ежа сборная, кострец безостый, лисохвост луговой</td>
            <td>Однолетние и некоторые многолетние двудольные сорняки</td>
            <td>
              Опрыскивание посевов в фазе кущения культуры. Расход рабочей
              жидкости - 50-150 л/га
            </td>
            <td>-(1)</td>
            <td>-(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> АХК-АГРО
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Октапон экстра, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Октапон экстра, КЭ"
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

export default oktaponekstrake;
