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

const stimiksfitostimb = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2019/09/stimiks-fitostim-b.jpeg"></a>
      Заселение поверхности растений и почвы сапрофитной микрофлорой защитного и
      ростостимулирующего действия. Стимулирование процесса почвообразования.
      Улучшение минерального питания растений.
      <h3>Действие препарата</h3>
      Сапрофитные микроорганизмы, входящие в состав препарата, проявляют
      антагонистическую активность по отношению к патогенным микроорганизмам:
      грибам и бактериям, разрушают их токсины. Выделяют биологически активные
      вещества, стимулирующие рост растений, фотосинтез и увеличивающие
      стрессоустойчивость.  Увеличивают содержание основных элементов питания в
      ризосфере.
      <h2>Состав</h2>
      <ul>
        <li>
          Высокоактивные штаммы азотфиксирующих, фосфатмобилизующих,
          молочнокислых и фотосинтезирующих микроорганизмов - антагонистов
          патогенных грибов и бактерий.
        </li>
        <li>Свободные аминокислоты.</li>
        <li>Биологически активные вещества.</li>
      </ul>
      <h2>Применение</h2>
      <ul>
        <li>
          Вид обработки: некорневая подкормка, полив под корень, капельное
          орошение.
        </li>
        <li>
          Расход препарата:  0,5 - 1 л/га (до 9 л/га при капельном поливе)
        </li>
        <li>Объем рабочей жидкости: 200-250 л/га</li>
        <li>Количество обработок: 1-7</li>
      </ul>
      <h3>Особенности применения</h3>
      Не растворять препарат в холодной воде! Разница температуры воды и
      препарата при разведении не должна превышать 10°С. Фитостим Б
      рекомендуется применять как самостоятельно, так и в баковых смесях со
      Стимиксом Стандарт и другими Стимиксами, гербицидами, и другими,
      совместимыми с ним пестицидами, растворами минеральных удобрений и
      стимуляторами роста.
      <h3>Безопасность</h3>
      4-й класс опасности (малоопасный продукт). В случае попадания на кожу -
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
        <title>Стимикс®Фитостим Б - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Стимикс®Фитостим Б"
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

export default stimiksfitostimb;