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

const brodifakum = () => {
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
      <strong>Бродифакум 0,05 г/кг</strong>
      Мощный родентицид второго поколения, предназначен для защиты озимых
      зерновых, многолетних трав, плодово-ягодных и других культур в открытом
      грунте от мышевидных грызунов.
      <h2>Преимущества</h2>
      <ul>
        <li>эффективен при однократном скармливании;</li>
        <li>
          эффективен против чувствительных и устойчивых к варфарину и другим
          ядам грызунов;
        </li>
        <li>готовая к применению и привлекательная для грызунов приманка;</li>
        <li>высокая эффективность при низких нормах расхода;</li>
        <li>
          грызуны предпочитают Бродифакум Гранд, даже если рядом находится
          другой корм или другая приманка;
        </li>
        <li>
          гранулы родентицида Бродифакум Гранд не привлекательны для других
          теплокровных;
        </li>
        <li>
          уничтожает все виды грызунов, в том числе популяции, устойчивые к
          другим родентицидам-антикоагулянтам;
        </li>
        <li>
          гибель грызунов наступает через несколько дней после однократного
          поедания приманки;
        </li>
        <li>
          Бродифакум Гранд не вызывает настороженности у грызунов, грызуны не
          избегают мест раскладки приманки.
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
              <span>До 4 кг/га, 10 г/нору</span>
            </td>
            <td>
              <span>
                Все культуры открытого грунта, включая озимые зерновые и
                плодовые культуры, многолетние травы
              </span>
            </td>
            <td>
              <span>Полевки: обыкновенная и восточно-европейская</span>
            </td>
            <td>
              <span>
                Ручное внесение специальными аппликаторами в норы, трубки,
                приманочные ящики, при плотности заселения от 10-20 нор/га до
                400 нор/га, с интервалами между обработками две недели, не более
                2-х обработок подряд в течение одного сезона. Пестициды других
                групп своим запахом и вкусом могут ухудшить поедание приманки
                грызунами. Одновременное применение с родентицидами другого
                механизма действия нецелесообразно. Рекомендуется чередование
                обработок родентицидами с другим механизмом действия. Условия
                применения исключают поедание человеком или другими нецелевыми
                теплокровными
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> ООО “ВАЛБРЕНТА КЕМИКАЛС”
      <strong>Упаковка: </strong>5 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Бродифакум - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Бродифакум" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default brodifakum;
