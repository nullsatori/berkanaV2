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

const stimiksstandartzerno = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/stimiks-standart-zerno.jpeg"></a>
        Получен путем сложного управляемого микробного гидролиза
      </strong>
      Борьба с болезнями бактериальной и смешанной бактериально-грибной природы
      зерновых культур. Повышение урожайности и устойчивости к стрессам (жара,
      заморозки, засуха и т.п. ). Стимулирование роста и развития растений.
      Снятие эффекта "гербицидной ямы". Повышение качества зерна.
      <h2>Действие препарата</h2>
      Устраняет блокаду белкового синтеза, остановленного токсинами возбудителей
      базального бактериоза. Инактивирует токсины. Усиливает фотосинтез.
      Восстанавливает нарушенный транспорт сахаров.
      <h3>Состав препарата</h3>
      <ul>
        <li>Свободные аминокислоты - не менее 15 г/л</li>
        <li>Соли гуминовых кислот - не менее 20 г/л</li>
        <li>Живые микробные культуры</li>
        <li>Органический кремний</li>
        <li>Биологически активные вещества</li>
      </ul>
      <h2>Применение</h2>
      Вид обработки: некорневая подкормка Расход препарата: 1л/га Объем рабочей
      жидкости: 200-250 л/га Количество обработок: 1-7
      <h3>Особенности применения</h3>
      Не растворять препарат в холодной воде! Разница температуры воды и
      препарата при разведении не должна превышать 10°С При длительном хранении
      (особенно при высоких температурах) может образовываться осадок, не
      влияющий на качество препарата. Перед применением осадок взболтать.
      Препарат может использоваться в баковой смеси с химическими пестицидами и
      минеральными удобрениями. Рекомендуется тщательное перемешивание смеси в
      опрыскивателе. Не смешивать Стимикс Стандарт с медьсодержащими
      препаратами, кальциевой селитрой и другими кальцийсодержащими материалами
      в виду того, что часть компонентов препарата может выпасть в осадок. При
      использовании комплексов NPK + микроэлементы предпочтительно провести их
      предварительное растворение и смешивание на растворных узлах. КАСы можно
      использовать непосредственно при заполнении водой бака опрыскивателя. Не
      рекомендуется использовать раствор удобрений, имеющий кислую реакцию (рН
      ниже 5-5,5). Повысить рН можно путем добавления в раствор удобрений
      мочевины или углекислого аммония в количестве от 2 кг и более на 200 л
      воды. В схемах обработки растений с применением антибиотиков рекомендуется
      раздельное применение антибиотика и Стимикс Стандарт.
      <h3>Безопасность</h3>
      4-й класс опасности (малоопасный продукт). В случае попадания на кожу -
      смыть водой с мылом. При попадании в глаза - промыть большим количеством
      воды. При случайном проглатывании - прополоскать рот, выпить воды с
      измельченным активированным углем. При применении, хранении и
      транспортировке соблюдать требования и меры предосторожности, согласно
      СанПин 1.2.2584-10.
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/biocentr-stavropole/">
        ООО НПО Центр биотехнологий «Биоцентр Ставрополье»
      </a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Стимикс® Стандарт. Зерно - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Стимикс® Стандарт. Зерно"
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

export default stimiksstandartzerno;
