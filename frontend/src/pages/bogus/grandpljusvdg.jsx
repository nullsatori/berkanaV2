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

const grandpljusvdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabi_grand-pljus.jpg"></a>
        <a href="https://berkanabio.ru/category/tribenuron-metil/">
          Трибенурон-метил
        </a>{" "}
        750 г/кг
      </strong>
      Высокоэффективный послевсходовый гербицид
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Обладает высокой эффективностью и высокой из¬бирательностью дейавия в
          отношении зерновых культур.
        </li>
        <li>
          Гранд Плюс имеет широкий спектр воздействия на сорняки, устойчив к
          гербицидам гормонального действия 2.4 Д поэтому его можно применять
          против большинства видов сорных трав, в том числе устойчивых к другим
          гербицидам. Можно без опасений вносить холодной весной, поскольку, в
          отличие от гормональных гербицидов, препарат не вызывает токсичности.
        </li>
        <li>
          Быстро разлагается в почве, поэтому не существует ограничений в
          отношении последующих культур при обычной ротации в севообороте.
        </li>
        <li>
          Воздействует на ферменты, имеющиеся только у растений (подавляет
          деление клеток), а поэтому практически безвреден для животного мира,
          пользователей и их окружения. Гранд Плюс является гербицидом
          системного действия, который поглощается листьями.
        </li>
        <li>Позволяет существенно снизить гербицидную нагрузку на почву;</li>
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
              <span>Расход рабочей жидкости - 200-300 л/га</span>
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
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,025-0,05</span>
            </td>
            <td>
              <span>Подсолнечник, устойчивый к трибенурон-метилу</span>
            </td>
            <td>
              <span>Однолетние и некоторые многолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевовв фазе от 2-4 до 6-8 настоящих листьев
                культуры и ранние фазы роста сорняков (2-4 листа). В случае
                необходимости пересева высевать зерновые культуры. Расход
                рабочей жидкости – 200-300 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_content_wrap">
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
          ЗемлякоФФ
        </a>
      </div>
      <strong>Упаковка:</strong> 500 г
    </div>
  );

  return (
    <>
      <Head>
        <title>Гранд Плюс, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Гранд Плюс, ВДГ"
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

export default grandpljusvdg;
