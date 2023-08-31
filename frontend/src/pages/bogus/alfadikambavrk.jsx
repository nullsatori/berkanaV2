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

const alfadikambavrk = () => {
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
        <a href="https://berkanabio.ru/category/dikamba/">
          Дикамба (диметиламинная соль)
        </a>{" "}
        480 г/л
      </strong>
      Послевсходовый селективный гербицид системного действия для уничтожения
      однолетних и некоторых многолетних двудольных, в т.ч. устойчивых к 2,4 Д и
      МЦПА, сорняков.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Альфа-Дикамба – классический гербицид для защиты зерновых, который
          очищает поле от одно-и многолетних коренепаросткових сорняков под
          следующие культуры в севообороте.
        </li>
        <li>
          Оптимальный партнер для баковых смесей препаратов групп: 2,4-Д,
          сульфонилмочевины, триазина, глифосат, поскольку предотвращает
          резистентности и усиливает действие благодаря ярко выраженному
          синергизму.
        </li>
        <li>
          Имеет широкий диапазон действия уничтожает более 200 видов сорняков, в
          том числе березку полевую, виды осота, латук и т.д.
        </li>
        <li>
          Проникая в растение как через ее зеленые части, так и через корневую
          систему.
        </li>
        <li>
          При применении в баковых смесях с гербицидами группы сульфонилмочевины
          (в полудозах) уменьшает их влияние почти до минимума, не снижая
          эффективности.
        </li>
        <li>Полностью разлагается в почве в течение периода вегетации.</li>
      </ul>
      <h3>Норма расхода</h3>
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
              <span>0,15-0,3</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные, включая виды осота (бодяк)
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры, 2-4 листьев у
                однолетних и 15 см высоты у многолетних сорняков.
              </span>
              <span>Расход рабочей жидкости – 150-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
      <div class="table_content_wrap">
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/alfahimgrupp/">АльфаХимгрупп</a>
      </div>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Альфа-Дикамба, ВРК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Альфа-Дикамба, ВРК"
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

export default alfadikambavrk;
