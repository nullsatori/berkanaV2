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

const stimiksfitostimsoja = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2019/09/stimiks-fitostim-soyaa.jpeg"></a>
      Инокуляция семян сои симбиотическими (ризобиальными) микроорганизмами.
      Увеличение всхожести семян. Обеспечение азотного питания растений.
      Повышение устойчивости к засухе.
      <h3>Действие препарата</h3>
      Обеспечивает семя необходимым количеством ризобиального материала для
      успешной инокуляции. Стимулирует биосинтез нуклеиновых кислот и активность
      ферментов в семени и проростке.
      <h2>Состав</h2>
      <ul>
        <li>Живые микробные культуры, в т.ч. Bradyrhizobium japonicum</li>
        <li>Свободные аминокислоты</li>
        <li>Биологически активные вещества</li>
      </ul>
      <h2>Применение</h2>
      <ul>
        <li>
          Вид обработки: предпосевная обработка семян методом протравливания
        </li>
        <li>Расход препарата: 350 мл на гектарную норму семян</li>
        <li>Объем рабочей жидкости: 10-15(до 30)л/т семян</li>
      </ul>
      <h3>Особенности применения</h3>
      Не растворять препарат в холодной воде! Разница температуры воды и
      препарата при разведении не должна превышать 10°С. При длительном хранении
      (особенно при высоких температурах) может образовываться осадок, не
      влияющий на качество препарата. Перед применением осадок взболтать.
      Препарат рекомендуется использовать в баковой смеси со Стимиксом Семя.
      Категорически запрещается использовать препарат в баковой смеси с
      антибиотиками.
      <h3>Безопасность</h3>
      <strong>4-й класс опасности</strong> (малоопасный продукт). В случае
      попадания на кожу - смыть водой с мылом. При попадании в глаза - промыть
      большим количеством воды. При случайном проглатывании - прополоскать рот,
      выпить воды с измельченным активированным углем. При применении, хранении
      и транспортировке соблюдать требования и меры предосторожности, согласно
      СанПин  1.2.2584-10.
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
        <title>Стимикс®Фитостим Соя - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Стимикс®Фитостим Соя"
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

export default stimiksfitostimsoja;
