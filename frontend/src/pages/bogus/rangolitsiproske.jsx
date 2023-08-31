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

const rangolitsiproske = () => {
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
      <a href="https://berkanabio.ru/category/propikonazol/">
        Пропиконазол 250 г/л
      </a>{" "}
      +{" "}
      <a href="https://berkanabio.ru/category/ciprokonazol/">
        Ципроконазол 80 г/л
      </a>
      Cистемный и контактный фунгицид для защиты зерновых культур от широкого
      спектра инфекций.
      <h3>Преимущества препарата</h3>
      <ul>
        <li>
          Обладает профилактическим, лечебным и продолжительным защитным
          действием.
        </li>
        <li>
          Высокоэффективен против комплекса заболеваний зерновых культур вне
          зависимости от стадии развития инфекции.
        </li>
        <li>
          Благодаря системному действию быстро проникает в растение, обеспечивая
          незамедлительную защиту, и, спустя час после применения, практически
          не смывается дождем.
        </li>
        <li>
          Препарат не фитотоксичен, один из изомеров пропиконазола имеет
          росторегулирующее действие на зерновых культурах.
        </li>
        <li>
          Благодаря сочетанию двух действующих веществ одного химического
          класса, проявляется синергетический эффект и, как следствие, более
          эффективное действие и снижение норм расхода препарата.
        </li>
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
            <td>0,4-0,5</td>
            <td>Пшеница озимая, яровая</td>
            <td>
              Ржавчина бурая, ржавчина стеблевая, ржавчина желтая, мучнистая
              роса, септориоз листьев и колоса, пиренофороз
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Рожь озимая</td>
            <td>
              Мучниста роса, ржавчина бурая, ржавчина стеблевая, ринхоспориоз,
              септориоз
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Ячмень озимый, яровой</td>
            <td>
              Ржавчина карликовая, мучнистая роса, сетчатая пятнистость,
              темно-бурая пятнистость, полосатая пятнистость, ринхоспориоз
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Овес</td>
            <td>Корончатая ржавчина, красно-бурая пятнистость</td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>0,5-0,75</td>
            <td>Свекла сахарная</td>
            <td>Церкоспороз, мучнистая роса</td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое- при появление первых
                признаков заболевания, второе – через 10-15 дней (при
                необходимости).
              </span>
              <span>Расход рабочей жидкости-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/rangoli-cipros-ke/">КЧХК</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Ранголи-Ципрос, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Ранголи-Ципрос, КЭ"
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

export default rangolitsiproske;
