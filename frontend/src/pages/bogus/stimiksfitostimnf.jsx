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

const stimiksfitostimnf = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2019/09/stimiks-fitostim-nf.jpeg"></a>
      Защита от заморозков. Заселение поверхности растений и почвы сапрофитной
      микрофлорой защитного и ростостимулирующего действия.
      <h3>Действие препарата</h3>
      Снижает температуру замерзания клеточного сока. Сапрофитные
      микроорганизмы, входящие в состав препарата, проявляют антагонистическую
      активность по отношению к патогенным микроорганизмам: грибам и бактериям.
      Разрушают их токсины, выделяют биологически активные вещества,
      стимулирующие рост растений, фотосинтез и увеличивающие
      стрессоустойчивость.
      <h2>Состав</h2>
      <ul>
        <li>
          Микроорганизмы - продуценты веществ, снижающих температуру замерзания
          клеточного сока.
        </li>
        <li>
          Высокоактивные штаммы микроорганизмов - антагонистов патогенных грибов
          и бактерий.
        </li>
        <li>Свободные аминокислоты.</li>
        <li>Биологически активные вещества.</li>
      </ul>
      <h2>Применение</h2>
      <ul>
        <li>
          Вид обработки: опрыскивание растений за 3 суток до предполагаемого
          заморозка.
        </li>
        <li>Расход препарата: 1 л на 200 л воды.</li>
        <li>Возможно применение вместе с агростимулином.</li>
      </ul>
      <h3>Особенности применения</h3>
      <ul>
        <li>
          Не растворять препарат в холодной воде! Разница температуры воды и
          препарата при разведении не должна превышать 10°С
        </li>
        <li>
          При длительном хранении (особенно при высоких температурах) может
          образовываться осадок, не влияющий на качество препарата. Перед
          применением осадок взболтать.
        </li>
      </ul>
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
        <title>Стимикс®Фитостим NF - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Стимикс®Фитостим NF"
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

export default stimiksfitostimnf;
