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

const ajvengoke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/04/berkanabio-ajvengo-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
          Альфа-циперметрин
        </a>{" "}
        100 г/л
      </strong>
      Инсектицид из группы синтетических пиретроидов, предназначенный для борьбы
      с широким спектром насекомых-вредителей, в том числе с проблемными и
      специфическими вредителями.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>рекомендован для применения в личных подсобных хозяйствах;</li>
        <li>активен против абсолютного большинства насекомых-вредителей;</li>
        <li>
          обладает быстрым губительным действием на вредителей, в том числе при
          неблагоприятных
        </li>
        <li>погодных условиях;</li>
        <li>практически безопасен для медоносных пчел;</li>
        <li>эффективен на всех стадиях развития насекомых;</li>
        <li>устойчив к смыванию осадками;</li>
        <li>применяется в малых дозах.</li>
      </ul>
      <h2>Норма расхода</h2>
      <div class="pre_header">
        <div id="header_content_prewrap">
          <div class="header_content_wrap" id="header_content_wrap">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Нор­ма</b>
                    <b>при­ме­не­ния</b>
                    <b>пре­па­ра­та</b>
                  </td>
                  <td>
                    <b>Куль­ту­ра,</b>
                    <b>об­ра­ба­ты­ва­емый объ­ект</b>
                  </td>
                  <td>
                    <b>Вред­ный объ­ект</b>
                  </td>
                  <td>
                    <b>Спо­соб, вре­мя об­ра­бот­ки,</b>
                    <b>осо­бен­нос­ти при­ме­не­ния</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,1-0,15</span>
                  </td>
                  <td>
                    <span>Пшеница</span>
                  </td>
                  <td>
                    <span>Клоп вредная черепашка</span>
                  </td>
                  <td>
                    <span>Опрыскивание в период вегетации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,1</span>
                  </td>
                  <td>
                    <span>Пшеница</span>
                  </td>
                  <td>
                    <span>
                      <span>Блошки</span>
                      <span>,</span>
                      <span> тли</span>
                      <span>, </span>
                      <span>цикадки</span>
                      <span>, </span>
                      <span>трипсы</span>
                      <span>, пьявица</span>
                    </span>
                  </td>
                  <td>
                    <span>Опрыскивание в период вегетации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,1</span>
                  </td>
                  <td>
                    <span>Ячмень</span>
                  </td>
                  <td>
                    <span>Пьявица</span>
                  </td>
                  <td>
                    <span>Опрыскивание в период вегетации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,1-0,15</span>
                  </td>
                  <td>
                    <span>
                      Рапс (семена, масло), горчица (кроме горчицы на масло)
                    </span>
                  </td>
                  <td>
                    <span>
                      <span>Рапсовый цветоед</span>
                      <span>, </span>
                      <span>крестоцветные блошки</span>
                    </span>
                  </td>
                  <td>
                    <span>Опрыскивание в период вегетации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,07-0,1</span>
                  </td>
                  <td>
                    <span>Картофель</span>
                  </td>
                  <td>
                    <span>Колорадский жук</span>
                  </td>
                  <td>
                    <span>Опрыскивание в период вегетации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,1</span>
                  </td>
                  <td>
                    <span>Свекла сахарная и кормовая</span>
                  </td>
                  <td>
                    <span>
                      <span>Свекловичная листовая тля</span>
                      <span>, свекловичная минирующая муха</span>
                    </span>
                  </td>
                  <td>
                    <span>Опрыскивание в период вегетации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,1</span>
                  </td>
                  <td>
                    <span>Горох</span>
                  </td>
                  <td>
                    <span>
                      <span>Гороховая зерновка</span>
                      <span>, </span>
                      <span>гороховая плодожорка</span>
                      <span>, </span>
                      <span>гороховая тля</span>
                    </span>
                  </td>
                  <td>
                    <span>Опрыскивание в период вегетации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,15-0,2</span>
                  </td>
                  <td>
                    <span>Люцерна (семенные посевы)</span>
                  </td>
                  <td>
                    <span>
                      <span>Долгоносики</span>
                      <span>, клопы, </span>
                      <span>тли</span>
                    </span>
                  </td>
                  <td>
                    <span>Опрыскивание в фазе бутонизации.</span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>0,3</span>
                  </td>
                  <td>
                    <span>Пастбища, дикая растительность</span>
                  </td>
                  <td>
                    <span>Саранчовые</span>
                  </td>
                  <td>
                    <span>
                      Опрыскивание в период развития личинок. Срок возможного
                      пребывания людей на обработанных площадях не ранее 3 дней
                      после обработки.
                    </span>
                    <span>Расход рабочей жидкости - 200-400 л/га</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/rosagrohim/">РосАгроХим</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Айвенго, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Айвенго, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default ajvengoke;
