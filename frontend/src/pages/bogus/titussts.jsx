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

const titussts = () => {
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
        <a href="https://berkanabio.ru/category/rimsulfuron/">Римсульфурон</a>{" "}
        250 г/кг
      </strong>
      Послевсходовый гербицид для контроля однолетних и многолетних злаковых и
      большинства двудольных сорняков в посевах кукурузы и картофеля.
      <h2>Преимущество</h2>
      <ul>
        <li>
          проникает в растения главным образом через листья, поэтому его
          эффективность не зависит от содержания влаги в почве;
        </li>
        <li>
          после обработки Титус быстро перемещается по растениям к точкам роста,
          где блокирует ацетолактатсинтазу, уже через несколько часов
          восприимчивые сорняки прекращают рост и больше не конкурируют с
          растениями
        </li>
        <li>картофеля в потреблении влаги и минеральных веществ;</li>
        <li>видимые симптомы появляются через 3-7 дней;</li>
        <li>
          полная гибель чувствительных сорняков происходит через 15 и более
          дней;
        </li>
        <li>
          Титус воздействует на фермент, которого не существует в организмах
          человека и животных, чем объясняется низкая токсичность для
          теплокровных;
        </li>
        <li>
          римсульфурон быстро разлагается в почве, поэтому Титус не накладывает
          ограничений на севооборот при обычной ротации.
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
              <span>0,04</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание посевов в фазе</span>
              <span>
                2-6 листьев культуры и ранние фазы роста сорняков в смеси с 200
                мл/га ПАВ Тренд 90
              </span>
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
              <span>Опрыскивание посевов в фазе</span>
              <span>
                2-6 листьев культуры при высоте злаковых сорняков 10-15 см и в
                фазе розетки осотов в смеси с 200 мл/га ПАВ Тренд 90
              </span>
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
                дробное опрыскивание по первой волне и второй волне сорняков
                (интервал 10-20 дней) в смеси с 200 мл/га ПАВ Тренд 90 (отдельно
                для каждой обработки)
              </span>
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
                Опрыскивание посадок после окучивания, в ранние фазы развития
                (1-4 листа) однолетних сорняков и при высоте пырея 10-15 см в
                смеси с 200 мл/га ПАВ Тренд 90
              </span>
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
                Опрыскивание посадок после окучивания по первой волне сорняков и
                повторно по второй волне сорняков, при высоте пырея 10-
              </span>
              <span>
                15 см в смеси с 200 мл/га ПАВ Тренд 90 (отдельно для каждой
                обработки)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,05</span>
            </td>
            <td>
              <span>Томат посевной</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние злаковые и двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3 листьев культуры и ранние фазы
                роста сорняков в смеси с 200 мл/га ПАВ Тренд 90, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,05+0,05</span>
            </td>
            <td>
              <span>Томат посевной</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние злаковые и двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 3 листьев культуры и ранние фазы
                роста сорняков первой волны и повторной обработкой по второй
                волне сорных растений (интервал 10-20 дней) в смеси с 200 мл/га
                ПАВ Тренд 90, Ж (отдельно для каждой обработки).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,05</span>
            </td>
            <td>
              <span>Томат рассадный</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние злаковые и двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посадок через 15-20 дней после высадки рассады в
                грунт и ранние фазы роста сорняков в смеси с 200 мл/га ПАВ Тренд
                90, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,05+0,05</span>
            </td>
            <td>
              <span>Томат рассадный</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние злаковые и двудольные сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посадок через 15-20 дней после высадки рассады в
                грунт и повторной обработкой по второй волне сорных растений
                (интервал 10-20 дней) в смеси с 200 мл/га ПАВ Тренд 90, Ж
                (отдельно для каждой обработки).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/djupon/">Дюпон</a>
      <strong>Упаковка: </strong>0,5 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Титус, СТС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Титус, СТС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default titussts;
