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

const statusgrandvdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabio_status-grand.jpg"></a>
        <a href="https://berkanabio.ru/category/tribenuron-metil/">
          Трибенурон-метил
        </a>{" "}
        500 г/кг +{" "}
        <a href="https://berkanabio.ru/category/florasulam/">Флорасулам</a> 104
        г/кг
      </strong>
      Высокоселективный системный послевсходовый гербицид для защиты зерновых
      культур от двудольных сорняков.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Один из самых широких диапазонов сроков применения среди известных
          гербицидов на зерновых, благодаря исключительной селективности к
          культурам. На зерновых колосовых Статус Гранд, ВДГ можно вносить от
          начала кущения до выхода флагового листа.
        </li>
        <li>
          Является эталоном эффективности в борьбе с подмаренником цепким,
          обеспечивая контроль сорняка на стадиях выше 5 мутовок.
        </li>
        <li>
          В максимальных нормах расхода обеспечивает высокую эффективность на
          переросшие чувствительные сорняки при применении в фазу трубкования
          культуры.
        </li>
        <li>
          Обладает сильным гербицидным действием на сорняки, устойчивые к
          гербицидам из класса сульфонилмочевин.
        </li>
        <li>
          Можно без опасений вносить холодной весной, поскольку, в отличие от
          гормональных гербицидов препарат не вызывает токсичности.
        </li>
        <li>
          Быстро разлагается в почве, поэтому не существует ограничений в
          отношении последующих культур при обычной ротации в севообороте.
        </li>
        <li>
          Воздействет на ферменты, имеющиеся только у растений (подавляет
          делениие клеток), а поэтому практически безвреден для животного мира,
          пользователей и окружения.
        </li>
        <li>
          Является хорошим партнером для баковых смесей с препаратами из
          различных химических классов и групп, а также удобрений.
        </li>
        <li>Позволяет значительно снизить гербицидную нагрузку на почву;</li>
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
              <span>0,03-0,04</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые и озимые</span>
            </td>
            <td>
              <span>
                Однолетние двудольные сорняки, в том числе устойчивые к 2,4-Д и
                2М-4Х и некоторые многолетние двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов от фазы кущения культуры до фазы
                формирования второго междоузлия и ранние фазы роста сорняков.
                Озимые обрабатываются весной.
              </span>
              <span>Расход рабочей жидкости – 200 – 300 л/га</span>
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
      <strong>Упаковка: </strong>0,6 г
    </div>
  );

  return (
    <>
      <Head>
        <title>Статус Гранд, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Статус Гранд, ВДГ"
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

export default statusgrandvdg;
