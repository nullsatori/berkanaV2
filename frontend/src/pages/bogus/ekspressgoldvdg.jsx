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

const ekspressgoldvdg = () => {
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
        187,5 г/кг +{" "}
        <a href="https://berkanabio.ru/category/tribenuron-metil/">
          Трибенурон-метил
        </a>{" "}
        562,5 г/кг
      </strong>
      Селективный послевсходовый гербицид для борьбы с двудольными сорняками в
      посевах подсолнечника.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Улучшенное действие на проблемные однолетние двудольные сорняки,
          включая трудноискоренимые (виды осотов, мари, горцев, амброзия,
          дурнишник, канатник Теофраста);
        </li>
        <li>
          Оказывает угнетающее воздействие на заразиху. Гибкость сроков (2–8
          листьев культуры) и норм внесения (40 г/га или дробно 20 + 20 г/га);
        </li>
        <li>
          Высокая селективность к специализированным гибридам подсолнечника,
          устойчивым к гербициду Экспресс Голд;
        </li>
        <li>Безопасность для любых последующих культур севооборота;</li>
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
            <td>0,04</td>
            <td>
              Подсолнечник, гибриды устойчивые к гербициду Экспресс, ВДГ и
              Экспресс Голд, ВДГ
            </td>
            <td>
              Однолетние и некоторые многолетние двудольные сорные растения
            </td>
            <td>
              Опрыскивание посевов в фазе от 2-4 до 6-8 листьев подсолнечника и
              ранние фазы роста сорных растений в смеси с 200 мл/га ПАВ ТРЕНД
              90, Ж (900 г/л этоксилата изоцилового спирта).Расход рабочей
              жидкости- 200 – 300 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,02</td>
            <td>
              Подсолнечник, гибриды устойчивые к гербициду Экспресс, ВДГ и
              Экспресс Голд, ВДГ
            </td>
            <td>
              Однолетние и некоторые многолетние двудольные сорные растения
            </td>
            <td>
              Опрыскивание посевов в фазе 2-4 и 6-8 листьев подсолнечника и
              ранние фазы роста сорных растений в смеси с 200 мл/га ПАВ ТРЕНД
              90, Ж (900 г/л этоксилата изодецилового спирта). Расход рабочей
              жидкости- 200 – 300 л/га
            </td>
            <td>60(2)</td>
            <td>-(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/fmc/">FMC</a>
      <strong>Упаковка: </strong>0,25 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Экспресс Голд, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Экспресс Голд, ВДГ"
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

export default ekspressgoldvdg;
