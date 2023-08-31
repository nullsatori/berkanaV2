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

const primase = () => {
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
        <a href="https://berkanabio.ru/category/2-4-d-2-etilgeksilovyj-efir/">
          2,4-Д (2-этилгексиловый эфир)
        </a>{" "}
        300 г/л +{" "}
        <a href="https://berkanabio.ru/category/florasulam/">Флорасулам</a> 6,25
        г/л
      </strong>
      Мощный двухкомпонентный гербицид для защиты посевов зерновых колосовых
      культур и кукурузы от широкого спектра двудольных сорняков.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Имеет широкий спектр действия против однолетних и многолетних
          двудольных сорняков, в том числе устойчивых к 2,4-Д.
        </li>
        <li>
          Эффективен одновременно против подмаренника цепкого и различных видов
          ромашки и осота
        </li>
        <li>Может использоваться при температуре от +5°С.</li>
        <li>
          Отличается длительным сроком внесения – начиная со стадии кущения до
          стадии образования второго междоузлия.
        </li>
        <li>Хорошо подавляет переросшие сорняки.</li>
        <li>
          Действует быстро, поэтому эффект заметен уже через сутки после
          применения;
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
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая, рожь, ячмень яровой</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры и ранние фазы роста
                сорняков. Озимые обрабатывают весной.
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая, рожь, ячмень яровой</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе выхода в трубку (1-2 междоузлия)
                культуры и ранние фазы роста сорняков (с учетом чувствительности
                сортов) в случае преобладания подмаренника цепкого; если
                погодные условия не позволили произвести обработку раньше этого
                срока. Озимые обрабатывают весной.
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,6</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3-5 листьев культуры и ранние фазы
                роста сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 5-7 листьев культуры в случае
                преобладания подмаренника цепкого; если погодные условия не
                позволили произвести обработку раньше этого срока.
              </span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_content_wrap">
        <strong>Производитель: </strong>
        <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      </div>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Прима, СЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Прима, СЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default primase;
