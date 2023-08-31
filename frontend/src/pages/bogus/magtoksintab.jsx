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

const magtoksintab = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/mmmm956a72.png"></a>
        Фосфид магния 660 г/кг
      </strong>
      Фумигант на основе фосфида магния. Магтоксин фирмы Detia Degesch GmbH
      представляет собой фумигант, состоящий из фосфида магния, карбамата
      аммония и парафина. Производится в виде круглых таблеток и пилюль весом
      соответственно 3г и 0,6г. Под воздействием атмосферного воздуха Магтоксин
      выделяет фосфид водорода, cкорость выделения зависит от температуры и
      влажности воздуха.
      <h2>Преимущества</h2>
      Магтоксин обладает великолепной инсектицидной активностью. Он быстро
      проникает сквозь упаковочные материалы, а также внутрь герметично
      запакованных товаров. Фосфид водорода эффективно уничтожает взрослых
      вредителей запасов зерновых (долгоносика амбарного и рисового, точильщика
      зернового, капрового жука, огневку южную амбарную, виды зерновой моли и
      пр.), а также когда они находятся в стадиях яиц, личинок и куколок. Аммиак
      и углекислый газ действуют как защитные газы. Так как Магтоксин
      разлагается почти полностью, то остаточная пыль практически не содержит
      неразложившегося металлического фосфида, в отличие от продуктов,
      содержащих фосфид алюминия. Магтоксин разлагается намного быстрее, нежели
      продукты, содержащие фосфид алюминия. Максимальная концентрация
      выделенного Магтоксином фосфида водорода достигается уже спустя 24–36
      часов. Для сравнения, за одинаковый промежуток времени и при одинаковых
      условиях (влажность 60% и температура 20°С) продукты на основе фосфида
      алюминия выделяют около 72% фосфида водорода, в то время как фосфид магния
      выделяется полностью. Норма расхода
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
              <span>9 г/т</span>
            </td>
            <td>
              <span>
                Зерно продовольственное, семенное, фуражное, насыпью в силосах
                элеваторов (партии массой не более 200 т, насыпью до 2,5 м) и
                затаренное в мешки под пленкой
              </span>
            </td>
            <td>
              <span>Насекомые - вредители запасов</span>
            </td>
            <td>
              <span>
                Фумигация при температуре зерна выше 15 °С. В элеваторах -
                введение таблеток в поток зерна с помощью дозаторов. Под пленкой
                - раскладка таблеток на подложки. Экспозиция - 5 суток. ПКЭ - 25
                г·ч/м<sup>3</sup>. Дегазация - не менее 10 суток. Реализация при
                остатке фосфина не выше МДУ. Допуск людей после полного
                проветривания и при содержании фосфина в воздухе рабочей зоны не
                выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                6 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>
                Зерно продовольственное, семенное, фуражное в трюмах судов в
                пути следования с насыпью зерна высотой до 4-6 м во внутренних
                портах России
              </span>
            </td>
            <td>
              <span>Насекомые - вредители запасов</span>
            </td>
            <td>
              <span>
                Фумигация при температуре зерна выше 15 °С. Погружение таблетокв
                зерно на глубину до 2 м в специальных газонепроницаемых капсулах
                в смеси с зерном в соотношении 1:4 по массе равномерно по
                площади трюма. Экспозиция - 3 суток. ПКЭ - 25 г·ч/м<sup>3</sup>.
                Проветривание в рейсе или на рейде перед разгрузкой не менее
                часа. Дегазация зерна после разгрузки не менее 8 суток.
                Реализация при остатке фосфина в зерне не выше МДУ. Допуск людей
                после полного проветривания и при содержании фосфина в воздухе
                рабочей зоны не выше ПДК
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Детиа Дегеш ГмбХ
      <strong>Упаковка: </strong>0,9 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Магтоксин, ТАБ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Магтоксин, ТАБ"
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

export default magtoksintab;
