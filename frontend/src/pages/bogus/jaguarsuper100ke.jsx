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

const jaguarsuper100ke = () => {
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
      Ягуар Супер 100 обеспечивает эффективное уничтожение наиболее
      распространенного и вредоносного сорного злака – овсюга обыкновенного.
      Также Ягуар Супер борется с широко распространенными просовидными
      сорняками: виды проса и щетинника, которые иногда становятся основной
      проблемой в посевах зерновых. Обработка посевов препаратом Ягуар Супер 100
      позволяет осуществлять контроль основных экономически значимых видов
      злаковых сорняков независимо от фазы развития культуры.
      <h3>Механизм действия</h3>
      Препарат поглощается наземными органами растения в течение 1-2 часов после
      применения и накапливается в точках роста. На биохимич­еском уровне
      гербицид ингибирует биосинтез жирных кислот в меристемных тканях злаковых
      сорняков, препятствуя образованию клеточных мембран в точках роста.
      Отмирание точек роста ведет к прекращению роста и гибели сорных злаков.
      Антидот ускоряет в организме культурных растений процесс распада
      действующего вещества препарата до нетоксичных метаболитов, которые не
      оказывают негативного действия на культуру.
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
                Однолетние злаковые (виды щетинника, просо куриное, просо
                сорнополевое) сорняки
              </span>
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
                Однолетние злаковые (овсюг, щетинники, просо куриное) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов по вегетирующим сорнякам в фазе, начиная от
                2-х листьев до конца кущения независимо от фазы развития
                культуры. При использовании максимальной нормы применения
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
                Однолетние злаковые (овсюг, виды щетинника, метлица,
                просовидные) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов по вегетирующим сорнякам в фазе, начиная от
                2-х листьев до конца кущения независимо от фазы развития
                культуры. При использовании максимальной нормы применения
                гербицида на селекционных и семеноводческих посевах пшеницы
                учитывать устойчивость сортов.
              </span>
              <span>Расход рабочей жидкости - 150-200 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/neoport/">Neoport</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Ягуар Супер 100, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Ягуар Супер 100, КЭ"
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

export default jaguarsuper100ke;
