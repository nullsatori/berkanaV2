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

const goliafvr = () => {
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
        <strong>Глифосат (калийная соль) 540 г/л</strong>
      </a>
      Универсальный гербицид сплошного действия. Системный послевсходовый
      гербицид для очистки полей от однолетних и многолетних двудольных, в т.ч.
      коренепаросткових сорняков в посевах зерновых колосовых культур и
      кукурузы.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>имеет высокую биологическую эффективность действия;</li>
        <li>
          возможно применение в фазе кущения зерновых колосовых и в фазе 3-5
          листьев кукурузы;
        </li>
        <li>
          отсутствуют последствия применения гербицида для последующих культур;
        </li>
        <li>эффективен против широкого спектра двудольных видов сорняков;</li>
        <li>незаменим «партнер» в баковых смесях.</li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Нор­ма</strong>
            </td>
            <td colspan="2">
              <strong>Куль­ту­ра</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
          <tr>
            <td>1,4-2,8</td>
            <td colspan="2" width="147">
              Плодовые, виноградники
            </td>
            <td>Однолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание вегетирующих сорняков весной или летом (при условии
              защиты культуры). Расход рабочей жидкости – 100-200 л/га
            </td>
          </tr>
          <tr>
            <td>2,8-3,7</td>
            <td colspan="2" width="147">
              Плодовые, виноградники
            </td>
            <td>Многолетние злаковые и двудольные сорняки</td>
            <td>
              Опрыскивание вегетирующих сорняков весной или летом (при условии
              защиты культуры). Расход рабочей жидкости – 100-200 л/га
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
              полосы отчуждения железных и шоссейных дорог, аэродромы и другие
              промышленные территории)
            </td>
            <td>
              Однолетние и чувствительные многолетние нежелательные злаковые и
              двудольные травянистые растения
            </td>
            <td>
              Опрыскивание нежелательной сорной растительности. Расход рабочей
              жидкости – 100-200 л/га. Запрещается сбор ягод и грибов в сезон
              обработки
            </td>
          </tr>
          <tr>
            <td>2-3</td>
            <td colspan="2" width="147">
              Земли несельскохозяйственного назначения (охранные зоны линий
              электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
              полосы отчуждения железных и шоссейных дорог, аэродромы и другие
              промышленные территории)
            </td>
            <td>
              Все виды нежелательных травянистых растений (за исключением
              относительно устойчивых вейника, тростника), лиственные
              древесно-кустарниковые породы (осина, береза, ольха)
            </td>
            <td>
              Опрыскивание нежелательной сорной растительности. Расход рабочей
              жидкости – 100-200 л/га. Запрещается сбор ягод и грибов в сезон
              обработки
            </td>
          </tr>
          <tr>
            <td>3-5</td>
            <td colspan="2" width="147">
              Земли несельскохозяйственного назначения (охранные зоны линий
              электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
              полосы отчуждения железных и шоссейных дорог, аэродромы и другие
              промышленные территории)
            </td>
            <td>
              Относительно устойчивые нежелательные травянистые растения
              (вейник, тростник), лиственные древесно-кустарниковые породы (ива,
              клен, ясень, вяз, акация)
            </td>
            <td>
              Опрыскивание нежелательной сорной растительности. Расход рабочей
              жидкости – 100-200 л/га. Запрещается сбор ягод и грибов в сезон
              обработки
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/agrohimhhi/">АгрохимХХI</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Голиаф, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Голиаф, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default goliafvr;
