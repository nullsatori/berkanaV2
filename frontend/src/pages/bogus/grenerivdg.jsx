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

const grenerivdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabio-greneri-vdg.jpg"></a>
        <a href="https://berkanabio.ru/category/tribenuron-metil/">
          Трибенурон-метил
        </a>{" "}
        750 г/кг
      </strong>
      Грбицид на основе сульфонилмочевины, для борьбы с однолетними и
      многолетними двудольными сорняками на посевах зерновых культур.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>исключительно низкие нормы расхода;</li>
        <li>эффективное подавление сорняков, в т.ч. устойчивых к 2,4-Д;</li>
        <li>
          действие препарата практически не ограничивается температурными
          режимами и почвенными условиями;
        </li>
        <li>высокая технологичность препарата;</li>
        <li>действительно низкая стоимость гектарной нормы;</li>
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
              <span>0,015-0,02</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые, овес</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х,
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-3 листьев - начала кущения
                культуры и ранние фазы роста сорняков.
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаобработке - 50
                л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,015-0,02 (А)</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые, овес</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х,
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-3 листьев - начала кущения
                культуры и ранние фазы роста сорняков.
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаобработке - 50
                л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,02-0,025</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые и озимые, овес</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х,
                сорняки и бодяк полевой
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры и ранние фазы роста
                сорняков. Озимые обрабатывают весной.
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаобработке - 50
                л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,02-0,025 (А)</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые и озимые, овес</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х,
                сорняки и бодяк полевой
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры и ранние фазы роста
                сорняков. Озимые обрабатывают весной.
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаобработке - 50
                л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_content_wrap">
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/rosagrohim/">РосАгроХим</a>
      </div>
      <strong>Упаковка:</strong> 250 г
    </div>
  );

  return (
    <>
      <Head>
        <title>Грэнери, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Грэнери, ВДГ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default grenerivdg;
