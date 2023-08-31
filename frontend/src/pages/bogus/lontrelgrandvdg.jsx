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

const lontrelgrandvdg = () => {
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
        <a href="https://berkanabio.ru/category/klopiralid/">Клопиралид</a> 750
        г/кг
      </strong>
      Послевсходовый гербицид для надежного контроля осотов в посевах сахарной
      свеклы, зерновых, рапса и льна от компании-оригинатора.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Полностью уничтожает злостные корнеотпрысковые сорняки (бодяки,
          осоты).
        </li>
        <li>
          Успешно подавляет амброзию, горцы, ромашку, одуванчик и некоторые
          другие сорняки.
        </li>
        <li>Высокоселективен к возделываемым культурам.</li>
        <li>Идеальный партнер для баковых смесей.</li>
        <li>
          Наиболее совершенная и удобная в применении препаративная форма.
        </li>
      </ul>
      Норма расхода
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
              <span>0,06-0,12</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые и озимые</span>
            </td>
            <td>
              <span>
                Виды ромашки, горца, гречишка вьюнковая, виды бодяка, осота,
                латука
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения - до выхода в трубку
                культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12</span>
            </td>
            <td>
              <span>Рапс яровой и озимый</span>
            </td>
            <td>
              <span>Виды ромашки, горца, бодяка, осота, латука</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3-4 настоящих листьев рапса ярового
                и до появления цветочных бутонов у рапса озимого.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12</span>
            </td>
            <td>
              <span>Рапс яровой и озимый (семенные посевы)</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние двудольные сорняки, в т.ч. виды бодяка
                и осота
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3-4 настоящих листьев рапса ярового
                и до появления цветочных бутонов у рапса озимого.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние двудольные сорняки, в т.ч. виды бодяка
                и осота
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 1-3 пар настоящих листьев культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,04 + 0,08</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние двудольные сорняки, в т.ч. виды бодяка
                и осота
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов, начиная с фазы семядольных листьев
                культуры по сорным растениям первой и второй волны.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12-0,25</span>
            </td>
            <td>
              <span>Газоны(территории спортивных сооружений)</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние двудольные (одуванчик, подорожник,
                щавель, тысячелистник, ромашка и др.) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание газонов по вегетирующим сорнякам после первого
                укоса.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,12</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Виды осота, бодяка, ромашки, горца</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе “елочки” культуры и фазе розетки
                многолетних корнеотпрысковых сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/dau-agrosaenses/">
        Дау АгроСаенсес
      </a>
      <strong>Упаковка: </strong>2 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Лонтрел гранд, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Лонтрел гранд, ВДГ"
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

export default lontrelgrandvdg;
