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

const bentusvr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio_bentus-vr.jpg"></a>
        <a href="https://berkanabio.ru/category/bentazon/">Бентазон</a> 480 г/л
      </strong>
      Селективный гербицид контактного действия для борьбы с однолетними
      двудольными сорняками в посевах сельскохозяйственных культур. Препарат
      позволяет бороться с однолетними двудольными сорняками в посевах
      сельскохозяйственных культур в послевсходовый период.
      <h3>Механизм действия</h3>
      Действующее вещество обладает контактным действием. При попадании в
      организм растения действующее вещество в хлоропластах формирует белковые
      радикалы, которые вызывают окисление белков, также происходит разрушение
      пигментов в хлоропластах. В результате этого растения сорняков погибают.
      <h2>Норма расхода</h2>
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
              <span>2-4</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая, рожь, ячмень, овес</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в т.ч. устойчивые к 2,4-Д и МЦПА
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной с начала кущения зерновых культур в
                ранние фазы роста сорняков (2-4 листа). Расход рабочей жидкости
                - 200-300 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-4</span>
            </td>
            <td>
              <span>Пшеница, ячмень яровые с подсевом клевера</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в том числе устойчивые к МЦПА
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов после развития 1<sup>го</sup> тройчатого
                листа у клевера (в фазе кущения зерновых).
              </span>
              <span>Расход рабочей жидкости 200-300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>Пшеница, ячмень яровые с подсевом люцерны</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в том числе устойчивые к МЦПА
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов после развития 1-2 настоящих листьев
                люцерны (в фазе кущения зерновых).
              </span>
              <span>Расход рабочей жидкости 200-300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Горох на зерно</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в том числе устойчивые к МЦПА
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 5-6 листьев культуры и ранние фазы
                роста сорняков. Принимать во внимание сортовую чувствительность.
              </span>
              <span>Расход рабочей жидкости 200-300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-3</span>
            </td>
            <td>
              <span>Нут</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в том числе устойчивые к МЦПА
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-3 листа культуры и ранние фазы
                роста сорняков.
              </span>
              <span>Расход рабочей жидкости 200-300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-3</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в том числе дурнишник
                обыкновенный
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов, начиная с фазы 1-го настоящего листа
                культуры в ранние фазы роста сорняков (2-6 листьев).
              </span>
              <span>Расход рабочей жидкости 200-300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-4</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в том числе устойчивые к МЦПА
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе елочки культуры в ранние фазы роста
                сорняков (3-5 листьев).
              </span>
              <span>Расход рабочей жидкости 200-300 л/га.</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/neoport/">Neoport</a>
      <strong>Упаковка: </strong>20 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Бентус, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Бентус, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default bentusvr;
