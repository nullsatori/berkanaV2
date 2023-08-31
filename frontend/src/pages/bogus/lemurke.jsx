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

const lemurke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2020/08/berkanabio_lemur-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/kvizalofop-p-tefuril/">
          Квизалофоп-П-тефурил
        </a>{" "}
        40 г/л
      </strong>
      Однокомпонентный послевсходовый системный гербицид для борьбы с
      однолетними и многолетними злаковыми сорняками в посевах овощных, кормовых
      и технических культур.
      <h2>Механизм действия</h2>В течение 1 часа проникает во все растения
      (корневище, точки роста, листья) и останавливает рост и угнетает сорные
      растения.
      <h2>Совместимость с другими препаратами</h2>
      Препарат совместим с широким рядом противдвудольных гербицидов кроме
      высокощелочных продуктов. Необходима проверка совместимости при
      использовании. При применении баковых смесей, если нет других указаний,
      предпочтителен следующий порядок добавления продуктов: водорастворимые
      гранулы (ВГ, ВРГ), смачивающиеся порошки (СП), концентраты суспензий фло
      (КС, ВСК), концентраты эмульсий (КЭ), водорастворимые концентраты (ВК).
      Каждый продукт вносится в наполненный до половинны бак опрыскивателя и
      тщательно размешивается, после чего можно внести новый продукт.
      <h2>Норма расхода и применение</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния</strong>
            </td>
            <td>
              <strong>Куль­ту­ра</strong>
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
            <td>0,75-1</td>
            <td>
              Свекла сахарная, кормовая, подсолнечник, соя, нут, лен-долгунец,
              лук (кроме лука на перо), морковь, капуста белокочанная,
              картофель, рапс
            </td>
            <td>
              Однолетние злаковые сорняки (виды щетинника, просо куриное, просо
              сорнополевое)
            </td>
            <td>
              Опрыскивание посевов в фазе 2-4 листьев сорняков независимо от
              фазы развития культуры. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>1-1,5</td>
            <td>
              Свекла сахарная, кормовая, подсолнечник, соя, нут, лен-долгунец,
              лук (кроме лука на перо), морковь, капуста белокочанная,
              картофель, рапс
            </td>
            <td>Многолетние злаковые сорняки (пырей ползучий)</td>
            <td>
              Опрыскивание посевов при высоте сорняков 10-15 см независимо от
              фазы развития культуры. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>60(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,75-1</td>
            <td>Нут</td>
            <td>
              Однолетние злаковые сорняки (виды щетинника, просо куриное, просо
              сорнополевое)
            </td>
            <td>
              Опрыскивание посевов в фазе 2-4 листьев сорняков независимо от
              фазы развития культуры. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>50(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>1-1,5</td>
            <td>Нут</td>
            <td>Многолетние злаковые сорняки (пырей ползучий)</td>
            <td>
              Опрыскивание посевов при высоте сорняков 10-15 см независимо от
              фазы развития культуры. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>50(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,75-1</td>
            <td>Свекла кормовая, лен-долгунец</td>
            <td>
              Однолетние злаковые сорняки (виды щетинника, просо куриное, просо
              сорнополевое)
            </td>
            <td>
              Опрыскивание посевов в фазе 2-4 листьев сорняков независимо от
              фазы развития культуры. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>-(1)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>1-1,5</td>
            <td>Свекла кормовая, лен-долгунец</td>
            <td>Многолетние злаковые сорняки (пырей ползучий)</td>
            <td>
              Опрыскивание посевов при высоте сорняков 10-15 см независимо от
              фазы развития культуры. Расход рабочей жидкости – 200-300 л/га
            </td>
            <td>-(1)</td>
            <td>-(3)</td>
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
        <title>Лемур, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Лемур, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default lemurke;
