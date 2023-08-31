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

const gezagardks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio-gezagard-ks.jpg"></a>
        Прометрин 500 г/л
      </strong>
      Гербицид для защиты картофеля, овощных, технических и других культур от
      однолетних двудольных и злаковых сорняков.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Базовый гербицид для построения программ защиты овощных и технических
          культур от сорняков.
        </li>
        <li>
          Широкий спектр действия против однолетних двудольных и некоторых
          злаковых сорняков, в том числе ряда трудноискоренимых.
        </li>
        <li>
          Отсутствие влияния на последующие культуры в севообороте: препарат
          полностью разлагается в почве в течение периода вегетации.
        </li>
        <li>Широкое «технологическое окно» в сроках применения.</li>
        <li>
          Высокая избирательность при рекомендованных нормах расхода для многих
          культур, которые одновременно возделываются в хозяйстве.
        </li>
        <li>Высокая экономическая отдача.</li>
        <li>
          Длительное защитное действие гарантирует эффективность в течение всего
          сезона.
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
              <span>1,5-3</span>
            </td>
            <td>
              <span>Морковь</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до посева, до всходов культуры или посевов в
                фазе 1-2 настоящих листьев.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,5-3</span>
            </td>
            <td>
              <span>Горох (зерно), чеснок (кроме на перо)</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,5-3,5</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3,5</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>Чина, кормовые бобы</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>Фасоль, вика</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы за 2-3 дня до появления всходов культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Петрушка (для зелени), сельдерей, укроп</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до всходов культуры или посевов в фазе 1-2
                настоящих листьев культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Петрушка (для корнеплодов)</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до всходов культуры или посевов в фазе 1-2
                настоящих листьев культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3,5</span>
            </td>
            <td>
              <span>Кукуруза с подсевом подсолнечника</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до посева, одновременно с посевом или до
                всходов культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3,5</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы одновременно с посевом или до всходов
                культуры, но не менее, чем за 60 дней до уборки урожая.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Кориандр</span>
            </td>
            <td>
              <span>Однолетние двудольные и злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до всходов культуры, но не менее, чем за 60
                дней до уборки урожая.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Гезагард, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Гезагард, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default gezagardks;
