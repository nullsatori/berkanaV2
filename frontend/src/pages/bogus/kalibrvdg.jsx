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

const kalibrvdg = () => {
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
        <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
          Тифенсульфурон-метил
        </a>{" "}
        500 г/кг +{" "}
        <a href="https://berkanabio.ru/category/tribenuron-metil/">
          Трибенурон-метил
        </a>{" "}
        250 г/кг
      </strong>
      Высокоэффективный премиум-гербицид для тотального контроля двухдольных
      сорняков в посевах зерновых культур.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Тотальный контроль всего спектра двудольных сорняков, включая злостные
          трудноискоренимые (подмаренник, вьюнок, василек, амброзия и др.).
        </li>
        <li>
          Два инновационных д.в. из класса сульфонилмочевин от компании Дюпон
          входят в состав препарата.
        </li>
        <li>Идеальное решение при высокой засоренности посевов.</li>
        <li>Безопасен для любых последующих культур севооборота.</li>
        <li>Широкий диапазон сроков применения.</li>
        <li>Высокая селективность к обрабатываемой культуре.</li>
        <li>Зарегистрирован как для авиа-, так и для наземного применения.</li>
        <li>
          Высокая биологическая эффективность в экстремальных погодных условиях
          благодаря внешнему адъюванту;
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
              <span>0,03-0,05</span>
              <span>0,03-0,05 (А)</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые</span>
            </td>
            <td>
              <span>Однолетние двудольные, в т.ч. устойчивые к</span>
              <span>
                2,4-Д и МЦПА, и некоторые многолетние двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-3 листьев – кущения культуры и
                ранние фазы роста сорных растений с добавлением ПАВ 200 мл/га
                Тренд 90, Ж (особенно в сухих, жарких условиях применения).
              </span>
              <span>
                Расход рабочей жидкости: наземное опрыскивание – 200 – 300 л/га,
                при авиаобработке – 50-75 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03-0,05</span>
              <span>0,03-0,05 (А)</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые</span>
            </td>
            <td>
              <span>Однолетние двудольные, в т.ч. устойчивые к</span>
              <span>
                2,4-Д и МЦПА, и некоторые многолетние двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе выхода в трубку (1-2 междоузлия)
                культуры и ранние фазы роста сорных растений с добавлением ПАВ
                200 мл/га Тренд 90, Ж (особенно в сухих, жарких условиях
                применения) в случае необходимости, если погодные условия не
                позволили провести обработку раньше этого срока.
              </span>
              <span>
                Расход рабочей жидкости: наземное опрыскивание – 200 – 300 л/га,
                при авиаобработке – 50-75 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03-0,05</span>
              <span>0,03-0,05 (А)</span>
            </td>
            <td>
              <span>Пшеница и ячмень озимые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной в фазе кущения культуры и ранние
                фазы роста сорных растений с добавлением 200 мл/га Тренд 90, Ж
                (особенно в сухих, жарких условиях применения).
              </span>
              <span>
                Расход рабочей жидкости: наземное опрыскивание – 200 – 300 л/га,
                при авиаобработке – 50-75 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03-0,05</span>
              <span>0,03-0,05 (А)</span>
            </td>
            <td>
              <span>Пшеница и ячмень озимые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной в фазе выхода в трубку (1-2
                междоузлия) культуры и ранние фазы роста сорных растений с
                добавлением 200 мл/га Тренд 90, Ж (особенно в сухих, жарких
                условиях применения) в случае необходимости, если погодные
                условия не позволили провести обработку раньше этого срока.
              </span>
              <span>
                Расход рабочей жидкости: наземное опрыскивание – 200 – 300 л/га,
                при авиаобработке – 50-75 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
      <div class="table_content_wrap">
        <strong>Производитель: </strong>
        <a href="https://berkanabio.ru/category/fmc/">FMC</a>
      </div>
      <div></div>
      <div class="table_content_wrap">
        <strong>Упаковка:</strong> 500 г
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Калибр, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Калибр, ВДГ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default kalibrvdg;
