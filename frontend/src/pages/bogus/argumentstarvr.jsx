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

const argumentstarvr = () => {
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
      <a href="https://berkanabio.ru/category/glifosat-kalijnaya-sol/">
        Глифосат (калийная соль 540 г/л)
      </a>
      Высокоэффективный системный гербицид сплошного действия против всех видов
      вегетирующих сорняков, а также древесно-кустарниковой растительности.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Позволяет существенно экономить горючее за счет уменьшения количества
          механических обработок против сорняков, а так же при использовании
          системы «no till»;
        </li>
        <li>
          Эффективно уничтожает сорняки, как на поверхности, так и в почве,
          уничтожая корневую систему;
        </li>
        <li>
          Высокая биологическая активность при более низких нормах расхода среди
          различных форм глифосата;
        </li>
        <li>Не обладает почвенной активностью;</li>
        <li>Экологически безопасен для человека и окружающей среды;</li>
        <li>Экономически выгоден.</li>
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
            <td colspan="2" width="138">
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,4-2,8</td>
            <td colspan="2" width="147">
              Плодовые, виноградники
            </td>
            <td>Однолетние злаковые и двудольные сорняки</td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков весной или летом (при условии
                защиты культуры).
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>2,8-3,7</td>
            <td colspan="2" width="147">
              Плодовые, виноградники
            </td>
            <td>Многолетние злаковые и двудольные сорняки</td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков весной или летом (при условии
                защиты культуры).
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1,4-2,8</td>
            <td colspan="2" width="147">
              Пары
            </td>
            <td>Однолетние и многолетние злаковые и двудольные сорняки</td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>1,4-2,8</td>
            <td colspan="2" width="147">
              Земли несельскохозяйственного назначения (охранные зоны линий
              электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
              полосы отчуждения железных и шоссейных дорог, аэродромы и др.
              промышленные территории)
            </td>
            <td>
              Однолетние и чувствительные многолетние нежелательные злаковые и
              травянистые растения
            </td>
            <td>
              <span>Опрыскивание нежелательной растительности.</span>
              <span>
                Расход рабочей жидкости - 100-200 л/га. Запрещается пребывание
                людей на обработанных территориях, в т.ч. для сбора ягод и
                грибов, в сезон проведения обработки
              </span>
            </td>
          </tr>
          <tr>
            <td>2-3</td>
            <td colspan="2" width="147">
              Земли несельскохозяйственного назначения (охранные зоны линий
              электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
              полосы отчуждения железных и шоссейных дорог, аэродромы и др.
              промышленные территории)
            </td>
            <td>
              Все виды нежелательных травянистых растений (за исключением
              относительно устойчивых вейника, тростника и других), лиственные
              древесно-кустарниковые породы (осина, береза, ольха)
            </td>
            <td>
              <span>Опрыскивание нежелательной растительности.</span>
              <span>
                Расход рабочей жидкости - 100-200 л/га. Запрещается пребывание
                людей на обработанных территориях, в т.ч. для сбора ягод и
                грибов, в сезон проведения обработки
              </span>
            </td>
          </tr>
          <tr>
            <td>3-5</td>
            <td colspan="2" width="147">
              Земли несельскохозяйственного назначения (охранные зоны линий
              электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
              полосы отчуждения железных и шоссейных дорог, аэродромы и др.
              промышленные территории)
            </td>
            <td>
              Относительно устойчивые нежелательные травянистые растения
              (вейник, тростник и другие), лиственные древесно-кустарниковые
              породы (ива, клен, ясень, вяз, акация и другие)
            </td>
            <td>
              <span>Опрыскивание нежелательной растительности.</span>
              <span>
                Расход рабочей жидкости - 100-200 л/га. Запрещается пребывание
                людей на обработанных территориях, в т.ч. для сбора ягод и
                грибов, в сезон проведения обработки
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/kchhk/">КЧХК</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Аргумент Стар, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Аргумент Стар, ВР"
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

export default argumentstarvr;
