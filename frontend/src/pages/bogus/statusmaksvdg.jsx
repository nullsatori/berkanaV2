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

const statusmaksvdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabio_status-maks.jpg"></a>
        <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
          Тифенсульфурон-метил
        </a>{" "}
        500 г/кг +{" "}
        <a href="https://berkanabio.ru/category/tribenuron-metil/">
          Трибенурон-метил
        </a>{" "}
        250 г/кг +{" "}
        <a href="https://berkanabio.ru/category/florasulam/">Флорасулам</a> 80
        г/кг
      </strong>
      Высокоэффективный трехкомпонентный гебицид для защиты зерновых культур от
      комплекса двудольных сорняков с кросс-спектром. Преимущества препарата
      <ul>
        <li>
          Максимальная концентрация действующих веществ низкие нормы расхода.
        </li>
        <li>Новый уровень борьбы с подмаренником цепким.</li>
        <li>Синергизм трех активных компонентов для наибольшего спектра.</li>
        <li>
          Максимальный спектр уничтожения сорняков, в том числе злостных
          многолетних.
        </li>
        <li>
          Уничтожает падалицу предшествующих культур, в том числе устойчивых
          сортов и гибридов к сульфо- нилмочевинам и имидозолинам.
        </li>
        <li>
          Обладает кросс-спектром, эффективен против метлицы обыкновенной и
          всходов злаковых сорняков.
        </li>
        <li>Проявляет синергизм в смесях с противозлаковыми гербицидами.</li>
        <li>Широкое окно применения – вплоть до второго междоузлия.</li>
        <li>Отсутствие последействия за счет быстрого разложения.</li>
        <li>Высокая селективность по отношению к культурным растениям.</li>
        <li>
          Воздействует на ферменты, имеющиеся только у растений, а поэтому
          практически безвреден для насекомых, животных и человека.
        </li>
        <li>
          Совместим в баковых смесях с инсектицидами, фунгицидами, регуляторами
          роста и микроудобрениями;
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
            </td>
            <td>
              <span>Пшеница и ячмень яровые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и МЦПА, и
                некоторые многолетние двудоль-ные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-3 листьев - кущения культуры и
                ранние фазы роста сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03-0,05</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и МЦПА, и
                некоторые многолетние двудоль-ные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе выхода в трубку (1-2 междоузлия)
                культуры и ранние фазы роста сорняков в случае необходимости,
                если погодные условия не позволили провести обработку раньше
                этого срока.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03-0,05</span>
            </td>
            <td>
              <span>Пшеница и ячмень озимые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и МЦПА, и
                некоторые многолетние двудоль-ные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной в фазе  кущения культуры и ранние
                фазы роста сорняков.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,03-0,05</span>
            </td>
            <td>
              <span>Пшеница и ячмень озимые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и МЦПА, и
                некоторые многолетние двудоль-ные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной в фазе выхода в трубку (1-2
                междоузлия) культуры и ранние фазы роста сорняков в случае
                необходимости, если погодные условия не позволили провести
                обработку раньше этого срока.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_content_wrap">
        <strong>Производитель:</strong> 
        <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
          ЗемлякоФФ
        </a>
      </div>
      <strong>Упаковка: </strong>0,6 г
    </div>
  );

  return (
    <>
      <Head>
        <title>Статус Макс, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Статус Макс, ВДГ"
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

export default statusmaksvdg;
