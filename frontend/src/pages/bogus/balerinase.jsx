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

const balerinase = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabio-balerina-se.jpg"></a>
        <a href="https://berkanabio.ru/category/2-4-d-2-etilgeksilovyj-efir/">
          2,4-Д (2-этилгексиловый эфир)
        </a>{" "}
        410 г/л +{" "}
        <a href="https://berkanabio.ru/category/florasulam/">Флорасулам</a> 7,4
        г/л
      </strong>
      Cистемный гербицид против однолетних двудольных, в том числе устойчивых к
      2,4-Д и МЦПА, и некоторых многолетних корнеотпрысковых сорняков в посевах
      зерновых культур, кукурузы, проса и сорго.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          высокая эффективность против широкого спектра двудольных сорняков, в
          т. ч. подмаренника, ромашки, осота и
        </li>
        <li>молочая лозного;</li>
        <li>высокая скорость действия;</li>
        <li>
          широкое «окно» применения (до фазы второго междоузлия зерновых культур
          и в фазе 3 – 5 листьев кукурузы);
        </li>
        <li>
          отсутствие последействия и возможность применения во всех типах
          севооборотов;
        </li>
      </ul>
      <h3>Норма расхода</h3>
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
              <span>0,3-0,5</span>
            </td>
            <td>
              <span>Пшеница озимая и яровая, ячмень яровой</span>
            </td>
            <td>
              <span>
                Однолетние сорняки, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры и ранние фазы роста
                сорняков. Озимые обрабатываются весной.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5</span>
            </td>
            <td>
              <span>Пшеница озимая и яровая, ячмень яровой</span>
            </td>
            <td>
              <span>
                Однолетние сорняки, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе выхода в трубку (1-2 междоузлия)
                культуры и ранние фазы роста сорняков (с учетом чувствительности
                сортов) в случае преобладания подмаренника цепкого; если
                погодные условия не позволили произвести обработку раньше срока.
                Озимые обрабатывают весной.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,5</span>
            </td>
            <td>
              <span>Кукуруза (в том числе на силос и масло)</span>
            </td>
            <td>
              <span>
                Однолетние сорняки, в т.ч. устойчивые к 2,4-Д, и некоторые
                многолетние двудольные
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3-5 листьев культуры и ранние фазы
                роста сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,5</span>
            </td>
            <td>
              <span>Просо</span>
            </td>
            <td>
              <span>
                Однолетние сорняки, в т.ч. устойчивые к 2,4-Д, и некоторые
                многолетние двудольные
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры и ранние фазы роста
                сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,5</span>
            </td>
            <td>
              <span>Сорго</span>
            </td>
            <td>
              <span>
                Однолетние сорняки, в т.ч. устойчивые к 2,4-Д, и некоторые
                многолетние двудольные
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3-6 листьев культуры и ранние фазы
                роста сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,5</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>
                Однолетние сорняки, в том числе устойчивые к 2,4-Д и 2М-4Х (виды
                ромашки, горца), и некоторые многолетние двудольные (осот,
                бодяк)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в период кущения – выход в трубку (1-2
                междоузлия) культуры. Расход рабочей жидкости – 50-300 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_content_wrap">
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/avgust/">Август</a>
      </div>
      <strong>Упаковка:</strong> 5 л  
    </div>
  );

  return (
    <>
      <Head>
        <title>Балерина, СЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Балерина, СЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default balerinase;
