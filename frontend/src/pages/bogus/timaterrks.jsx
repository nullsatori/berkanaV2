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

const timaterrks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2020/07/berkanabio_timaterr-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/tiametoksam/">Тиаметоксам</a>{" "}
        350 г/л
      </strong>
      Системный неоникотиноидный инсектицид контактно-кишечного действия для
      защиты зерновых культур от широкого спектра вредителей.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Благодаря оптимальной растворимости тиаметоксам без потерь поглощается
          корневой системой растения, и обеспечивает длительную (до 45 дней)
          защиту, как от почвенных, так и от наземных вредителей.
        </li>
        <li>Обладает высокой скоростью воздействия на вредящие организмы.</li>
        <li>
          Благодаря клотианидину, который является метаболитом тиаметоксама,
          обеспечивает надежную защиту семени и отрастающей корневой системы.
        </li>
        <li>
          Защита не только прорастающих семян, но и вегетирующих растений, тем
          самым снижается кратность обработок в течение вегетационного периода.
        </li>
        <li>
          Высокая инсектицидная активность препарата и его перераспределение по
          поверхности и внутри растения обуславливает его эффективность против
          сосущих и грызущих насекомых.
        </li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Культура</strong>
            </td>
            <td>
              <strong>Вредный объект</strong>
            </td>
            <td>
              <strong>Норма расхода, л/т</strong>
            </td>
            <td>
              <strong>Норма расхода рабочей жидкости, л/т</strong>
            </td>
            <td>
              <strong>Способ, время обработки</strong>
            </td>
          </tr>
          <tr>
            <td>Пшеница, ячмень</td>
            <td>Хлебная жужелица, злаковые мухи, хлебные блошки, цикадки</td>
            <td>0,5 - 1,0</td>
            <td>10</td>
            <td>
              Протравливание семян перед посевом или заблаговременно (за 1-2
              недели)
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/granum/">Гранум</a>
      <strong>Упаковка:</strong> 5 л.
    </div>
  );

  return (
    <>
      <Head>
        <title>Тиматерр, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Тиматерр, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default timaterrks;
