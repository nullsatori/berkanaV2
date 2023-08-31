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

const rimanolvdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio_rimanol-vdg.jpg"></a>
        <a href="https://berkanabio.ru/category/rimsulfuron/">Римсульфурон</a>{" "}
        250 г/кг
      </strong>
      Высокоэффективный послевсходовый гербицид группы сульфонил-мочевины для
      защиты картофеля и кукурузы от однолетних двудольных, а также однолетних и
      многолетних злаковых сорняков.
      <h2>Преимущество</h2>
      Риманол – селективный гербицид системного действия для подавления
      однолетних двудольных и многолетних двудольных и злаковых сорняков при
      послевсходовом применении. Внесение Риманола полностью заменяет
      довсходовую и предпосевную программы обработки гербицидами.
      <h3>Механизм действия</h3>
      Риманол проникает в растения, главным образом, через листья, поэтому его
      эффективность не зависит от содержания влаги в почве. После обработки
      Риманол быстро перемещается к меристемным тканям корневой системы и
      листьев. Риманол прекращает деление клеток восприимчивых сорняков путем
      воздействия на ферментную систему.
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
              <span>0,04</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-6 листьев культуры и ранние фазы
                роста сорняков в смеси с
              </span>
              <span>200 мл/га ПАВ Дар-90, Ж.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,05</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Многолетние и однолетние злаковые и двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-6 листьев культуры при высоте
                злаковых сорняков 10-15 см и в фазе розетки осотов в смеси с
              </span>
              <span>200 мл/га ПАВ Дар-90, Ж.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03+0,02</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Многолетние и однолетние злаковые и двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-6 листьев культуры. Двукратное
                дробное опрыскивание по первой и второй волне сорняков (интервал
                10-20 дней) в смеси с 200 мл/га ПАВ Дар-90, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,05</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>
                Многолетние (пырей ползучий), однолетние злаковые и некоторые
                двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посадок после окучивания в ранние фазы развития
                (1-4 листа) однолетних сорняков и при высоте пырея 10-15 см в
                смеси с 200 мл/га ПАВ Дар-90, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03+0,02</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>
                Многолетние (пырей ползучий), однолетние злаковые и некоторые
                двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посадок после окучивания по первой волне и повторно
                по второй волне сорняков, при высоте пырея 10-15 см в смеси с
                200 мл/га ПАВ Дар-90, Ж (отдельно для каждой обработки).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/neoport/">Neoport</a>
      <strong>Упаковка: </strong>0,1 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Риманол, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Риманол, ВДГ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default rimanolvdg;
