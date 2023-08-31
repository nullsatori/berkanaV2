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

const stimiksfitostimaf = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2019/09/stimiks-fitostim-af.jpeg"></a>
      Оптимизация азотного питания растений. Защита  от почвенных патогенов.
      Повышение устойчивости растения к засухе и другим стрессам. Профилактика
      корнееда.
      <h3>Действие препарата</h3>
      Заселяет корневую систему и ризосферу эпифитными, эндофитными и
       свободноживущими азотофиксирующими бактериями. Обеспечивает растения
      биологическим азотом и фитогормонами микробного происхождения.
      <h2>Состав</h2>
      <ul>
        <li>
          Высокоактивные штаммы азотофиксирующих свободноживущих и
          симбиотических (не ризобиальных) микроорганизмов.
        </li>
        <li>Биологически активные вещества.</li>
      </ul>
      <h2>Применение</h2>
      <ul>
        <li>
          Вид обработки: предпосевная обработка семян методом протравливания
        </li>
        <li>Расход препарата:  1л/т семян</li>
        <li>Объем рабочей жидкости: 10 -15 (до 30) л/т семян</li>
      </ul>
      <h3>Особенности применения</h3>
      Не растворять препарат в холодной воде! Разница температуры воды и
      препарата при разведении не должна превышать 10°С При длительном хранении
      (особенно при высоких температурах) может образовываться осадок, не
      влияющий на качество препарата. Перед применением осадок взболтать.
      Стимикс<sup>®</sup>Фитостим Аf наносится на семена. Может применяться как
      самостоятельно, так и в баковых смесях со Стимиксом Семя, Фитостимом Аs, а
      также вместе с совместимыми химическими фунгицидами, стимуляторами роста и
      минеральными удобрениями.
      <h3>Безопасность</h3>
      4-й класс опасности(малоопасный продукт). В случае попадания на кожу -
      смыть водой с мылом. При попадании в глаза - промыть большим количеством
      воды. При случайном проглатывании - прополоскать рот, выпить воды с
      измельченным активированным углем. При применении, хранении и
      транспортировке соблюдать требования и меры предосторожности, согласно
      СанПин  1.2.2584-10.
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
        <title>Стимикс®Фитостим AF - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Стимикс®Фитостим AF"
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

export default stimiksfitostimaf;