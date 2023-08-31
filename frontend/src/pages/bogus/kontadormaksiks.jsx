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

const kontadormaksiks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/03/berkanabio_kontador-maksi.jpg"></a>
        <a href="https://berkanabio.ru/category/imidakloprid/">Имидаклоприд</a>{" "}
        600 г/л
      </strong>
      Системный инсектицид для предпосевной обработки семян. Эффективно
      подавляет развитие вредителей (имаго и личинки): равнокрылых, трипсов,
      чешуекрылых, жуков и других.
      <h2>Механизм действия</h2>
      Имидаклоприд лучше всего проникает в организм насекомого с пищей. По
      достижению нервной системы он блокирует постсинаптические холинэргические
      рецепторы, чувствительные к нитотину и расположенные у насекомых в
      центральной нервной системе. Признаки поражения (мелкое и частое дрожание
      брюшной части, тремор, непроизвольная тряска всего тела с последующей
      прострацией и параличом) появляются у насекомых через 2-3 часа после
      обработки. Гибель насекомых происходит через несколько часов, в крайнем
      случае, через 24 часа.
      <h2>Норма расхода</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
            </td>
            <td>
              <strong>Куль­ту­ра, об­ра­ба­ты­ва­емый объ­ект</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>
                Спо­соб, вре­мя об­ра­бот­ки, осо­бен­нос­ти при­ме­не­ния
              </strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0,6-0,75</td>
            <td>Пшеница озимая</td>
            <td>Хлебная жужелица</td>
            <td>Обработка семян. Расход рабочей жидкости – 10 л/т</td>
          </tr>
          <tr>
            <td>0,3-0,6</td>
            <td>Пшеница, ячмень</td>
            <td>Внутристеблевые мухи, хлебные блошки</td>
            <td>Обработка семян. Расход рабочей жидкости – 10 л/т</td>
          </tr>
          <tr>
            <td>3-6</td>
            <td>Рапс</td>
            <td>Крестоцветные блошки</td>
            <td>Обработка семян. Расход рабочей жидкости – 10-18 л/т</td>
          </tr>
          <tr>
            <td>5-9</td>
            <td>Кукуруза</td>
            <td>Проволочники и ложнопроволочники, внутристеблевые мухи</td>
            <td>Обработка семян. Расход рабочей жидкости – 10-16 л/т</td>
          </tr>
          <tr>
            <td>8-12</td>
            <td>Подсолнечник</td>
            <td>Проволочники и ложнопроволочники</td>
            <td>Обработка семян. Расход рабочей жидкости – 10-17 л/т</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Neoport
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Контадор Макси, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Контадор Макси, КС"
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

export default kontadormaksiks;