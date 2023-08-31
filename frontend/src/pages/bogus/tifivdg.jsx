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

const tifivdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/11111-1.jpg"></a>
        <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
          Тифенсульфурон-метил
        </a>{" "}
        750 г/кг
      </strong>
      Современный послевсходовый гербицид для борьбы с широколиственными
      сорняками на посевах кукурузы и озимой пшеницы.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Высокая эффективность современного сульфонилмочевинного гербицида,
          Тифи, ВДГ против злостных широколиственных сорняков.
        </li>
        <li>
          Оказывает воздействие на сорняки уже через несколько часов применения.
        </li>
        <li>
          При применении в рекомендуемых дозах Тифи, ВДГ обладает отличной
          селективностью в отношении кукурузы, так как действующее вещество
          быстро разлагается в культуре и в большинстве опытов отмечено
          статистически достоверное повышение урожая при использовании данного
          гербицида.
        </li>
      </ul>
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
              <span>0,01</span>
            </td>
            <td>
              <span>Кукуруза (на зерно)</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и триазинам,
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3-5 листьев культуры и ранние фазы
                роста сорняков в баковой смеси с ПАВ Микс, Ж (200 мл/га).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,015</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>Однолетние двудольные, в т.ч. устойчивые к</span>
              <span>2,4-Д, сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной в фазе кущения культуры в смеси с
                ПАВ Микс, Ж (200 мл/га).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,02-0,025</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>Однолетние двудольные, в т.ч. устойчивые к</span>
              <span>2,4-Д, сорняки</span>
            </td>
            <td>
              <span>Опрыскивание посевов весной в фазе кущения культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,01-0,015</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в т.ч. устойчивые к 2,4-Д,
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной в фазе кущения культуры в смеси с
                ПАВ Микс, Ж (200 мл/га).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,015-0,02</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в т.ч. устойчивые к 2,4-Д,
                сорняки
              </span>
            </td>
            <td>
              <span>Опрыскивание посевов весной в фазе кущения культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,006-0,008</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание посевов в фазе</span>
              <span>
                1-2 настоящих листьев культуры и ранние фазы роста сорняков в
                смеси с ПАВ Микс, Ж
              </span>
              <span>(200 мл/га). Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,01-0,015</span>
            </td>
            <td>
              <span>Лен-долгунец (только семенные посевы)</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т. ч. устойчивые к МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной в фазе “елочки” культуры в смеси с
                ПАВ Микс, Ж (200 мл/га).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,01-0,025</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т. ч. устойчивые к МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>Опрыскивание посевов весной в фазе “елочки” культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,025</span>
            </td>
            <td>
              <span>Лен масличный</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т. ч. устойчивые к МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>Опрыскивание посевов весной в фазе “елочки” культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/rosagrohim/">Росагрохим</a>
      <strong>Упаковка: </strong>0,5 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Тифи, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Тифи, ВДГ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default tifivdg;
