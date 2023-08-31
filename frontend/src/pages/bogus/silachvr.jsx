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

const silachvr = () => {
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
      <strong>Глифосат (калийная соль) 540 г/л</strong>
      Cистемный гербицид сплошного действия на основе калийной соли глифосата
      для применения на парах, в плодовых насаждениях, виноградниках, а также
      землях несельскохозяйственного использования для уничтожения однолетних и
      многолетних сорняков, а также древесно-кустарниковой растительности.
      <h3>Механизм действия</h3>
      Действующее вещество быстро поглощается надземной частью сорных растений,
      проникает во все органы, включая корневую систему. Блокирует синтез
      ароматических кислот, нарушает фотосинтез и дыхание, что приводит к гибели
      надземных органов и корневой системы.
      <h2>Норма расхода</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
            </td>
            <td colspan="2">
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
          <tr>
            <td>1,4-2,5</td>
            <td colspan="2" width="147">
              Поля. Предназначенные под посев различных культур (зерновые,
              картофель, бахчевые, технические (в том числе лен), масличные,
              цветочные декоративные культуры)
            </td>
            <td>Однолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание вегетирующих сорняков в конце лета или осенью в
              послеуборочный период. Расход рабочей жидкости – 100-200 л/га
            </td>
          </tr>
          <tr>
            <td>2,5-4</td>
            <td colspan="2" width="147">
              Поля. Предназначенные под посев различных культур (зерновые,
              картофель, бахчевые, технические (в том числе лен), масличные,
              цветочные декоративные культуры)
            </td>
            <td>Многолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание вегетирующих сорняков в конце лета или осенью в
              послеуборочный период. Расход рабочей жидкости – 100-200 л/га
            </td>
          </tr>
          <tr>
            <td>1,4-2,8</td>
            <td colspan="2" width="147">
              Пары
            </td>
            <td>Однолетние и многолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание вегетирующих сорняков в период их активного роста.
              Расход рабочей жидкости – 100-200 л/га
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
              двудольные травянистые растения
            </td>
            <td>
              Опрыскивание нежелательной сорной растительности. Расход рабочей
              жидкости – 100-200 л/га. Запрещается сбор ягод и грибов, в сезон
              обработки
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
              Опрыскивание нежелательной сорной растительности. Расход рабочей
              жидкости – 100-200 л/га. Запрещается сбор ягод и грибов, в сезон
              обработки
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
              Опрыскивание нежелательной сорной растительности. Расход рабочей
              жидкости – 100-200 л/га. Запрещается сбор ягод и грибов, в сезон
              обработки
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/garant-optima/">Гарант Оптима</a>
    </div>
  );

  return (
    <>
      <Head>
        <title>Силач, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Силач, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default silachvr;