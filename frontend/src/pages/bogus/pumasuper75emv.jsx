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

const pumasuper75emv = () => {
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
        <a href="https://berkanabio.ru/category/mefenpir-dietil/">
          Мефенпир-диэтил
        </a>{" "}
        75 г/л +{" "}
        <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
          Феноксапроп-П-этил
        </a>{" "}
        69 г/л
      </strong>
      Высокоселективный гербицид для послевсходовой обработки ячменя и пшеницы
      против широкого спектра однолетних злаковых сорняков.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Высокая эффективность: активность против широкого спектра злаковых
          сорняков.
        </li>
        <li>Селективность к обрабатываемой культуре: наличие антидота.</li>
        <li>Широкий диапозон сроков применения.</li>
        <li>
          Отсутствие ограничений для применения в севообороте: быстрая
          деградация в почве.
        </li>
        <li>
          Надежность: подтверждена опытом широкого применения в различных
          почвенно-климатических зонахпо всему миру.
        </li>
        <li>Регистрация для наземного применения и авиаобработок.</li>
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
              <span>0,6</span>
              <span>0,6 (А)</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>Щетинник зеленый</span>
            </td>
            <td>
              <span>
                Опрыскивание по вегетирующим сорнякам, начиная с фазы 2 листьев
                до конца кущения (независимо от фазы развития культуры).
              </span>
              <span>
                Расход рабочей жидкости - 150-200 л/га, при авиаприменении –
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1</span>
              <span>0,8-1 (А)</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (овсюг, виды щетинника, просо
                куриное)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов по вегетирующим сорнякам, начиная с фазы 2
                листьев до конца кущения (независимо от фазы развития культуры).
              </span>
              <span>
                Расход рабочей жидкости 150-200 л/га, при авиаприменении – 25-50
                л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1</span>
              <span>0,8-1 (А)</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (овсюг, виды щетинника, просо
                куриное)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов по вегетирующим сорнякам, начиная с фазы 2
                листьев до конца кущения (в фазе кущения культуры).
              </span>
              <span>
                Расход рабочей жидкости - 150-200 л/га, при авиаприменении –
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1</span>
              <span>0,8-1 (А)</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (овсюг, метлица обыкновенная, виды
                щетинника, просо куриное)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной по вегетирующим сорнякам, начиная с
                фазы 2 листьев до конца кущения (независимо от фазы развития
                культуры).
              </span>
              <span>
                Расход рабочей жидкости - 150-200 л/га, при авиаприменении –
                25-50 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/bajer/">Байер</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Пума Супер 7.5, ЭМВ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Пума Супер 7.5, ЭМВ"
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

export default pumasuper75emv;
