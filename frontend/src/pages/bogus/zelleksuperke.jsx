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

const zelleksuperke = () => {
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
        <a href="https://berkanabio.ru/category/galoksifop-r-metil/">
          Галоксифоп-Р-метил
        </a>{" "}
        104 г/л к-ты
      </strong>
      Послевсходовый гербицид для полного уничтожения всех видов злаковых
      сорняков в посевах двудольных культур.
      <h2>Преимущество</h2>
      <ul>
        <li>Эффективно уничтожает все злаковые сорняки.</li>
        <li>Превращает в труху корневища пырея ползучего.</li>
        <li>Отличается высокой селективностью к двудольным культурам.</li>
        <li>Является важным компонентом многих баковых смесей.</li>
        <li>Эффективно уничтожает самосев зерновых колосовых культур.</li>
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
              <span>0,5</span>
            </td>
            <td>
              <span>
                Свекла сахарная, кормовая, подсолнечник, соя, лен-долгунец
              </span>
            </td>
            <td>
              <span>
                Однолетние злаковые (просо куриное, просо сорно-полевое, виды
                щетинника) сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание сорняков в период их активного роста (в фазе от 2-6
                листьев до кущения).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Свекла сахарная, кормовая</span>
            </td>
            <td>
              <span>Многолетние злаковые (пырей ползучий) сорняки</span>
            </td>
            <td>
              <span>Опрыскивание посевов при высоте сорняков 10-15 см.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Многолетние злаковые (пырей ползучий) сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте льна не менее 12 см (12-18 см) в
                период активного роста сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Эхинацея пурпурная 1-го года вегетации</span>
            </td>
            <td>
              <span>Однолетние и многолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание плантаций в фазе 2-4 настоящих листьев культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Маклея сердцевидная 1-го года вегетации</span>
            </td>
            <td>
              <span>Однолетние и многолетние злаковые сорняки</span>
            </td>
            <td>
              <span>Опрыскивание плантаций после приживания рассады.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Наперстянка шерстистая</span>
            </td>
            <td>
              <span>Однолетние и многолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание плантаций в период активного роста сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание в фазе 2-3 листьев сорных растений, независимо от
                фазы развития культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>Пырей ползучий</span>
            </td>
            <td>
              <span>
                Опрыскивание при высоте 10-15 см пырея ползучего, независимо от
                фазы развития культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,75</span>
            </td>
            <td>
              <span>Посевы, посадки сосны, ели в питомниках</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов и посадок в период активного роста
                сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Посевы, посадки сосны, ели в питомниках</span>
            </td>
            <td>
              <span>Многолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов и посадок в период активного роста
                сорняков.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/dau-agrosaenses/">
        Дау АгроСаенсес
      </a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Зеллек-супер, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Зеллек-супер, КЭ"
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

export default zelleksuperke;
