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

const agritoksvk = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio-agritoks-vk.jpeg"></a>
        МЦПА (диметиламинная+калиевая+натриевая соли) 500 г/л
      </strong>
      Cелективный системный гербицид для борьбы с двудольными сорняками в
      посевах зерновых колосовых (в т.ч. ячменя с подсевом клевера), льна,
      картофеля, гороха и других культур.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Разрешен к применению на большом количестве сельскохозяйственных
          культур.
        </li>
        <li>
          Эффективен против наиболее распространённых и вредоносных сорняков:
          малолетних двудольных и многолетних корнеотпрысковых.
        </li>
        <li>Высокоэффективный компонент баковых смесей.</li>
      </ul>
      <h3>Механизм действия</h3>
      Гербицид системного действия. Агритокс поглощается листьями и воздействует
      на наземные органы и корневую систему сорняков. Препарат подавляет синтез
      ростовых веществ и ферментов, угнетает процессы фотосинтеза и дыхания.
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
              <span>Пшеница, ячмень, рожь озимые</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры до выхода в трубку
                весной.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1,5</span>
            </td>
            <td>
              <span>Пшеница, ячмень, овес яровые</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры до выхода в трубку.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1,2</span>
            </td>
            <td>
              <span>Просо</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры до выхода в трубку.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,8</span>
            </td>
            <td>
              <span>Горох на зерно</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3-5 настоящих листьев культуры (при
                высоте растений гороха 10-15 см). Запрещается обрабатывать
                культуру во время цветения.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,2</span>
            </td>
            <td>
              <span>Картофель (среднеспелые и позднеспелые сорта)</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до всходов культуры или при высоте ботвы
                картофеля 10-15 см.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе “елочки” при высоте культуры 3-10
                см.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1,2</span>
            </td>
            <td>
              <span>Клевер полевой, ползучий</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание растений в год посева после появления у культуры
                1-го тройчатого листа.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1,2</span>
            </td>
            <td>
              <span>Клевер полевой (семенные посевы)</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в год сбора урожая семян в течение 2-3
                недель от начала отрастания до эмбриональной закладки соцветий у
                культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1,2</span>
            </td>
            <td>
              <span>Клевер полевой под покровом ячменя</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 1-2-го тройчатого листьев клевера (в
                фазе кущения ячменя).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>Тимофеевка луговая</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание посевов в фазе кущения культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>
                Кострец безостый, лисохвост луговой, райграс высокий, овсяница
                луговая
              </span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание сорняков в год посева культуры, начиная с фазы 1-2
                листьев до выхода в трубку культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>Сенокосные угодья и пастбища</span>
            </td>
            <td>
              <span>Вредные и ядовитые двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков и нежелательной
                растительности.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bajer/">Байер</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Агритокс, ВК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Агритокс, ВК" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default agritoksvk;
