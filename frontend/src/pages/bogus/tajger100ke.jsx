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

const tajger100ke = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2020/07/tayger_100_berkanabio.jpg"></a>
      <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
        Клоквинтосет-мексил
      </a>{" "}
      27 г/л +{" "}
      <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
        Феноксапроп-П-этил
      </a>{" "}
      100 г/л Гербицид системного спектра действия.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Препарат поглощается наземными частями растения в течении 1-3 часов
          после применения и накапливается в точках роста. На биохимическом
          уровне гербицид ингибирует биосинтез жирных кислот в меристемных
          тканях злаковых сорняков, препятствуя образованию клеточных мембран в
          точках роста.
        </li>
        <li>
          Препарат оказывает гербицидное действие на чувствительные злаки,
          имеющиеся в посевах на момент опрыскивания, и не действует на сорняки,
          появившиеся позднее после обработки (вторая волна сорняков). Поэтому
          важно правильно выбрать сроки применения препарата, когда появится
          основная масса однолетних злаковых сорняков. Обычно одна обработка
          обеспечивает эффективную защиту посевов в течение всего вегетационного
          периода.
        </li>
      </ul>
      <h3>Норма расхода</h3>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
            </td>
            <td>
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
            <td>
              <strong>Срок ожи­да­ния (крат­ность об­ра­бо­ток)</strong>
            </td>
            <td>
              <strong>
                Сро­ки вы­хо­да для руч­ных (ме­ха­ни­зи­ро­ван­ных ра­бот)
              </strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0,4-0,6</td>
            <td>Пшеница яровая</td>
            <td>
              Однолетние злаковые сорняки (виды щетинника, просо куриное, просо
              сорно-полевое)
            </td>
            <td>
              Опрыскивание в ранние фазы развития (2-3 листа) сорняков
              независимо от фазы развития культуры. Расход рабочей жидкости –
              150-200 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,5-0,7</td>
            <td>Пшеница яровая</td>
            <td>Овсюг</td>
            <td>
              Опрыскивание посевов в ранние фазы развития (2-3 листа) сорняков
              независимо от фазы развития культуры. Расход рабочей жидкости –
              150-200 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,6-0,9</td>
            <td>Пшеница яровая</td>
            <td>
              Однолетние злаковые сорняки (овсюг, щетинники, просо куриное)
            </td>
            <td>
              Опрыскивание посевов по вегетирующим сорнякам, начиная с фазы 2-х
              листьев до конца кущения (независимо от фазы развития культуры).
              При использовании максимальной нормы применения гербицида на
              селекционных и семеноводческих посевах пшеницы учитывать
              устойчивость сортов. Расход рабочей жидкости – 150-200 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,6-0,75</td>
            <td>Пшеница озимая</td>
            <td>
              Однолетние злаковые сорняки (овсюг, метлица щетинники,
              просовидные)
            </td>
            <td>
              Опрыскивание посевов весной по вегетирующим сорнякам, начиная с
              фазы 2-х листьев до конца кущения (независимо от фазы развития
              культуры). При использовании максимальной нормы применения
              гербицида на селекционных и семеноводческих посевах пшеницы
              учитывать устойчивость сортов. Расход рабочей жидкости – 150-200
              л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Произвдство: </strong>
      <a href="https://berkanabio.ru/category/kchhk/">КЧХК</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Тайгер 100, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Тайгер 100, КЭ"
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

export default tajger100ke;
