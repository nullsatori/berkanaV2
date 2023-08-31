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

const aksialke = () => {
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
        <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
          Клоквинтосет-мексил
        </a>{" "}
        11,25 г/л + Пиноксаден 45 г/л
      </strong>
      Послевсходовый гербицид избирательного действия на основе пиноксадена для
      защиты пшеницы и ячменя от злаковых сорняков.
      <h2>Преимущества</h2>
      <strong>Эффективность</strong>
      <ul>
        <li>100%-ный контроль овсюга в посевах зерновых.</li>
        <li>Высокая эффективность по всему спектру злаковых сорняков.</li>
      </ul>
      <strong>Надежность</strong>
      <ul>
        <li>Высокая селективность к культуре.</li>
        <li>Отсутствие ограничений по севообороту.</li>
      </ul>
      <strong>Гибкость</strong>
      <ul>
        <li>
          Лучший партнер для баковой смеси (ЛАНЦЕЛОТ 450, ВДГ, ДЕРБИ 175, СК,
          ЛИНТУР, ВДГ, АЛЬТО СУПЕР, КЭ).
        </li>
        <li>Широкое окно применения.</li>
        <li>
          Повышенная устойчивость к осадкам (не смывается через 30–60 минут
          после обработки).
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
              <span>0,7-1,3</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Однолетние злаковые (виды щетинника, просо куриное, просо
                сорнополевое, овсюг, метлица полевая, лисохвост и др.) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной, начиная с фазы 2 листьев до конца
                кущения однолетних злаковых сорняков (независимо от фазы
                развития культуры).
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаприменении -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1,3 (А)</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Однолетние злаковые (виды щетинника, просо куриное, просо
                сорнополевое, овсюг, метлица полевая, лисохвост и др.) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной, начиная с фазы 2 листьев до конца
                кущения однолетних злаковых сорняков (независимо от фазы
                развития культуры).
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаприменении -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Однолетние злаковые (виды щетинника, просо куриное, просо
                сорнополевое, овсюг и др.) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов начиная с фазы 2 листьев до конца кущения
                однолетних злаковых сорняков (независимо от фазы развития
                культуры).
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаприменении -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1 (А)</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Однолетние злаковые (виды щетинника, просо куриное, просо
                сорнополевое, овсюг и др.) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов начиная с фазы 2 листьев до конца кущения
                однолетних злаковых сорняков (независимо от фазы развития
                культуры).
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаприменении -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Ячмень озимый</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (виды щетинника, просо куриное,
                просо сорнополевое, овсюг, метлица полевая, лисохвост)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной, начиная с фазы 2 листьев до конца
                кущения однолетних злаковых сорняков (независимо от фазы
                развития культуры).
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаприменении -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1 (А)</span>
            </td>
            <td>
              <span>Ячмень озимый</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (виды щетинника, просо куриное,
                просо сорнополевое, овсюг, метлица полевая, лисохвост)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной, начиная с фазы 2 листьев до конца
                кущения однолетних злаковых сорняков (независимо от фазы
                развития культуры).
              </span>
              <span>
                Расход рабочей жидкости - 200-300 л/га, при авиаприменении -
                25-50 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Байер
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Аксиал, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Аксиал, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default aksialke;
