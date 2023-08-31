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

const dualgoldke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio-dual-gold-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/s-metolahlor/">С-Метолахлор</a>{" "}
        960 г/л
      </strong>
      Селективный гербицид для защиты всходов пропашных культур.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Высокая эффективность против однолетних злаковых и ряда важнейших
          двудольных сорняков.
        </li>
        <li>Отличная избирательность.</li>
        <li>
          Надежная защита культур в ранний, наиболее критический период
          развития, исключающая конкуренцию со стороны сорной растительности.
        </li>
        <li>
          Продолжительный период действия, обеспечивающий оптимальную защиту от
          сорняков.
        </li>
        <li>Отсутствие фитотоксичности даже в случае передозировки.</li>
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
              <span>1,3-2</span>
            </td>
            <td>
              <span>Свекла сахарная, столовая</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до посева или до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,3</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до посева или до всходов культуры с
                последующим опрыскиванием вегетирующих сорных растений первой
                волны (в фазе семядолей двудольных сорняков и до 2-х листьев
                злаковых).
              </span>
              <span>Расход рабочей жидкости 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе семядолей двудольных и до 2-х
                листьев злаковых (по первой и второй волне).
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,3-1,6</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до посева или до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,6</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание почвы до посева или до всходов культуры, или после
                всходов культуры до фазы 3-го листа.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,3-1,6</span>
            </td>
            <td>
              <span>Капуста белокочанная посевная</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы после посева до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,3-1,6</span>
            </td>
            <td>
              <span>Капуста белокочанная рассадная</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посадок через 3-10 дней после высадки рассады в
                грунт.
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,3-1,6</span>
            </td>
            <td>
              <span>Соя, рапс яровой, кукуруза (на зерно)</span>
            </td>
            <td>
              <span>Однолетние злаковые и некоторые двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание почвы до посева или до всходов культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Дуал Голд, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Дуал Голд, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default dualgoldke;
