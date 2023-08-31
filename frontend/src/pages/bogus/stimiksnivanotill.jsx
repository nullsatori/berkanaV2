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

const stimiksnivanotill = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/stimiks-nivano-till.jpeg"></a>
        Получен путем сложного управляемого микробного гидролиза
      </strong>
      Разложение растительных остатков. Подавление роста патогенной
      бактериальной и грибной микрофлоры на соломе и в почве. Инактивация
      микробных токсинов и пестицидов в почве. Улучшение минерального питания
      растений. Разуплотнение почвы. Профилактика корнееда.
      <h3>Действие препарата</h3>
      Разлагает и минерализует все компоненты пожнивных остатков: целлюлозу,
      гемицеллюлозу, пектин и пр. Однако эффект деструкции заметно ниже, чем у
      других Стимиксов Нива. Заселяет почву и растительные остатки агрономически
      ценными и почвообразующими микроорганизмами, вытесняющими из почвы и
      растительных остатков возбудителей снежной плесени, склеротиниоза,
      мучнистой росы, корневых гнилей грибного и смешанного
      бактериально-грибного происхождения, а также - бурой, стеблевой и жёлтой
      ржавчины. Нейтрализует микробные токсины. Инактивирует молекулы
      ядохимикатов путем разрыва их сложных длинных цепочек на короткие
      фрагменты.
      <h2>Состав</h2>
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
      <h2>Применение</h2>
      <ul>
        <li>Вид обработки: опрыскивание растительных остатков.</li>
        <li>Применяется в смеси с активатором.</li>
        <li>Расход препарата: 2 л/га (1 л закваски + 1 л активатора)</li>
        <li>
          Объем рабочей жидкости: от 150 до 450 л/га в зависимости от влажности
          почвы и растительных остатков.
        </li>
        <li>Количество обработок: 1-2</li>
      </ul>
      <h3>Особенности применения</h3>
      Не растворять препарат в холодной воде! Разница температуры воды и
      препарата при разведении не должна превышать 10°С. Стимикс<sup>®</sup>
      НиваNo-tillнаносится на пожнивные остатки путем опрыскивания. ВАЖНО!
      Препарат наносить в ранние утренние, вечерние или ночные часы, не допуская
      работы под прямыми солнечными лучами. В пасмурную погоду ограничений по
      времени обработки нет. При длительном хранении (особенно при высоких
      температурах) может образовываться осадок, не влияющий на качество
      препарата. Перед применением осадок взболтать.
      <h3>Безопасность</h3>
      4-й класс опасности (малоопасный продукт). В случае попадания на кожу -
      смыть водой с мылом. При попадании в глаза - промыть большим количеством
      воды. При случайном проглатывании - прополоскать рот, выпить воды с
      измельченным активированным углем. При применении, хранении и
      транспортировке соблюдать требования и меры предосторожности, согласно
      СанПин 1.2.2584-10.
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/biocentr-stavropole/">
        ООО НПО Центр биотехнологий “Биоцентр Ставрополье”
      </a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Стимикс® НиваNo-till - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Стимикс® НиваNo-till"
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

export default stimiksnivanotill;
