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

const avantiks100ke = () => {
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
        <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
          Клоквинтосет-мексил
        </a>{" "}
        27 г/л +{" "}
        <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
          Феноксапроп-П-этил
        </a>{" "}
        100 г/л
      </strong>
      Высокоселективный гербицид для послевсходовой обработки посевов пшеницы
      против широкого спектра злаковых сорняков.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Высокая эффективность против всего спектра злаковых сорняков, включая
          овсюг и щетинник.
        </li>
        <li>Высокая селективность к обрабатываемой культуре.</li>
        <li>Быстрое проникновение в растение.</li>
        <li>Широкий диапазон сроков применения.</li>
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
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (виды щетинника, просо куриное,
                просо сорно-полевое)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в ранние фазы развития (2-3 листа) сорняков
                независимо от фазы развития культуры.
              </span>
              <span>Расход рабочей жидкости - 150-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,7</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>Овсюг</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в ранние фазы развития (2-3 листа) сорняков
                независимо от фазы развития культуры.
              </span>
              <span>Расход рабочей жидкости - 150-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-0,9</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (овсюг, щетинники, просо куриное)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов по вегетирующим сорнякам, начиная с фазы
                2-х листьев до конца кущения (независимо от фазы развития
                культуры). При использовании максимальной нормы применения
                гербицида на селекционных и семеноводческих посевах пшеницы
                учитывать устойчивость сортов.
              </span>
              <span>Расход рабочей жидкости - 150-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-0,75</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (овсюг, метлица щетинники,
                просовидные)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной по вегетирующим сорнякам, начиная с
                фазы 2-х листьев до конца кущения (независимо от фазы развития
                культуры). При использовании максимальной нормы применения
                гербицида на селекционных и семеноводческих посевах пшеницы
                учитывать устойчивость сортов.
              </span>
              <span>Расход рабочей жидкости - 150-200 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
        ЗемлякоФФ
      </a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Авантикс 100, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Авантикс 100, КЭ"
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

export default avantiks100ke;
