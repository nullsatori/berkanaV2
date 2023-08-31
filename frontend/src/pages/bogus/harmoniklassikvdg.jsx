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

const harmoniklassikvdg = () => {
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
        187,5 г/кг + Хлоримурон-этил 187,5 г/кг
      </strong>
      Послевсходовый двухкомпонентный гербицид для контроля двудольных сорняков
      в посевах сои.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Высокоэффективен против большинства видов важнейших однолетних и ряда
          многолетних двудольных сорняков в посевах сои.
        </li>
        <li>
          Идеально подходит для полей, засоренных крестоцветными сорняками,
          щирицей, дурнишником.
        </li>
        <li>
          Синергизм двух действующих веществ обеспечивает высокую
          продолжительность действия.
        </li>
        <li>
          Отличный партнер для баковых смесей. Позволяет уменьшить дозировку
          гербицидов-партнеров в баковых смесях. Может служить основой для
          составления баковых смесей с противозлаковыми гербицидами.
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
              <span>0,025-0,035</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов начиная с фазы первого тройчатого листа сои
                и ранние фазы роста сорняков. Не обрабатывать растения сои в
                состоянии стресса. Следует соблюдать ограничения по
                севообороту:в случае пересева высевать только сою. Спустя три
                месяца можно высевать озимые зерновые культуры. Весной -
                зерновые колосовые, овес, кукурузу, горох. На вторую весну -
                подсолнечник, рапс и упомянутые выше культуры. На третью весну -
                свеклу, картофель, лук.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,035-0,05</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>
                Однолетние и некоторые многолетние (осот полевой) двудольные
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов начиная с фазы первого тройчатого листа сои
                и ранние фазы роста сорняков. Не обрабатывать растения сои в
                состоянии стресса. Следует соблюдать ограничения по севообороту:
                в случае пересева высевать только сою. Спустя три месяца можно
                высевать озимые зерновые культуры. Весной - зерновые колосовые,
                овес, кукурузу, горох. На вторую весну - подсолнечник, рапс и
                упомянутые выше культуры. На третью весну - свеклу, картофель,
                лук.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,025-0,05</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>
                Однолетние и некоторые многолетние (осот полевой) двудольные
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов начиная с фазы первого тройчатого листа сои
                и ранние фазы роста сорняков в смеси с ПАВ Тренд 90, Ж
              </span>
              <span>
                (200 мл/га). Не обрабатывать растения сои в состоянии стресса.
                Следует соблюдать ограничения по севообороту: в случае пересева
                высевать только сою. Спустя три месяца можно высевать озимые
                зерновые культуры. Весной - зерновые колосовые, овес, кукурузу,
                горох. На вторую весну - подсолнечник, рапс и упомянутые выше
                культуры. На третью весну - свеклу, картофель, лук.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/djupon/">Дюпон</a>
      <strong>Упаковка: </strong>0,5 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Хармони Классик, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Хармони Классик, ВДГ"
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

export default harmoniklassikvdg;
