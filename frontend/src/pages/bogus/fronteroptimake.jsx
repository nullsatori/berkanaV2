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

const fronteroptimake = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/fronter-optima-ke.jpg"></a>
        Диметенамид-П 720 г/л
      </strong>
      Гербицид против однолетних злаковых и некоторых двудольных сорняков.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Один из самых широких спектров действия среди почвенных гербицидов.
        </li>
        <li>Уничтожает и сдерживает длительное время первую волну сорняков.</li>
        <li>Безопасен для последующих культур в севообороте.</li>
      </ul>
      <h2>Механизм действия</h2>
      Диметенамид поглощается корнями прорастающих сорняков и приводит к их
      отмиранию. Молодые сорняки,уже проросшие к моменту внесения,также
      отмирают.
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
              <span>0,8-1,2</span>
            </td>
            <td>
              <span>
                Кукуруза (на зерно), соя, подсолнечник, свекла сахарная,
                столовая (кроме пучкового товара), кормовая
              </span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до посева или до всходов культуры.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,5</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих растений, начиная с фазы двух
                настоящих листьев свеклы в ранние фазы роста сорных растений
                первой и второй волны.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Фронтьер Оптима, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Фронтьер Оптима, КЭ"
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

export default fronteroptimake;
