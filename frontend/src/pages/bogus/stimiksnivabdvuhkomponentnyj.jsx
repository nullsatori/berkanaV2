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

const stimiksnivabdvuhkomponentnyj = () => {
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
        <a
          href="http://berkanabio.ru/wp-content/uploads/2018/12/stimiks-niva-b-285x300.jpg"
          rel="attachment wp-att-1237"
        ></a>
      </strong>
      Ускоренное перегнивание растительных остатков. Подавление роста патогенной
      бактериальной и грибной микрофлоры на соломе и в почве. Инактивация
      микробных токсинов и пестицидов в почве. Улучшение минерального питания
      растений. Разуплотнение почвы. Профилактика корнееда. Очищение почвы от
      химических полютантов.<strong></strong>
      Получен путем сложного управляемого микробного гидролиза.
      <h2>Состав препарата</h2>
      <ul>
        <li>
          Высокоактивные штаммы азотофиксирующих, фосфатмобилизующих,
          молочнокислых, фотосинтезирующих и целлюлозолитических микроорганизмов
          - антагонистов патогенных грибов и бактерий.
        </li>
        <li>Свободные аминокислоты</li>
        <li>Соли гуминовых кислот</li>
        <li>Биологически активные вещества</li>
      </ul>
      <strong>Назначение:</strong> Ускоренное перегнивание растительных
      остатков. Подавление роста патогенной бактериальной и грибной микрофлоры
      на соломе и в почве. Инактивация микробных токсинов и пестицидов в почве.
      Улучшение минерального питания растений. Разуплотнение почвы. Профилактика
      корнееда. Очищение почвы от химических полютантов. Может применяться при
      пониженных положительных температурах воздуха: при +5 - +10°С.
      <strong>Действие препарата:</strong> Интенсивно разлагает и минерализует
      все компоненты пожнивных остатков: целлюлозу, гемицеллюлозу, пектин и пр.
      Заселяет почву и растительные остатки агрономически ценными и
      почвообразующими микроорганизмами, вытесняющими из почвы и растительных
      остатков возбудителей снежной плесени, склеротиниоза, мучнистой росы,
      корневых гнилей грибного и смешанного бактериально-грибного происхождения,
      а также - бурой, стеблевой и жёлтой ржавчины. Нейтрализует микробные
      токсины. Инактивирует молекулы ядохимикатов путем разрыва их сложных
      длинных цепочек на короткие фрагменты.
      <h3>Применение</h3>
      <ul>
        <li>
          Может применяться при низких плюсовых температурах воздуха: от +5°С и
          выше
        </li>
        <li>
          Вид обработки: опрыскивание растительных остатков перед заделкой в
          почву.
        </li>
        <li>Применяется в смеси с активатором.</li>
        <li>Расход препарата: 2 л/га (1 л закваски + 1 л активатора)</li>
        <li>Оба компонента смешивать непосредственно перед применением</li>
        <li>
          Объем рабочей жидкости: от 150 до 450 л/га в зависимости от влажности
          почвы и растительных остатков.
        </li>
        <li>Количество обработок: 1-2</li>
      </ul>
      <h2>Особенности применения</h2>
      <strong>
        <em>
          Не растворять препарат в холодной воде! Разница температуры воды и
          препарата при разведении не должна превышать 10°С!
        </em>
      </strong>
      Стимикс®Нива наносится на солому путем опрыскивания перед её заделкой в
      почву. Возможны два метода применения: как метод раздельного нанесения и
      заделки, так и метод совмещения обеих операций. Оптимальной является
      одновременная обработка пожнивных остатков и заделка их в почву сразу
      после уборки урожая. ВАЖНО! В случае предварительного нанесения препарата
      и последующей заделки растительных остатков препарат наносить в ранние
      утренние, вечерние или ночные часы, не допуская работы под прямыми
      солнечными лучами. При одовременной обработке и заделке растительных
      остатков, а также в пасмурную погоду ограничений по времени обработки нет.
      При длительном хранении (особенно при высоких температурах) может
      образовываться осадок, не влияющий на качество препарата. Перед
      применением осадок взболтать.
      <strong>Безопасность: </strong>4-й класс опасности (малоопасный продукт).
      В случае попадания на кожу - смыть водой с мылом. При попадании в глаза -
      промыть большим количеством воды. При случайном проглатывании -
      прополоскать рот, выпить воды с измельченным активированным углем. При
      применении, хранении и транспортировке соблюдать требования и меры
      предосторожности, согласно СанПин 1.2.2584-10.
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/biocentr-stavropole/">
        ООО НПО Центр биотехнологий “Биоцентр Ставрополье”
      </a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Стимикс® Нива Б (Двухкомпонентный) - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Стимикс® Нива Б (Двухкомпонентный)"
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

export default stimiksnivabdvuhkomponentnyj;
