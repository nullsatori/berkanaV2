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

const ampligomks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2021/02/berkanabio-ampligo-mks.jpg"></a>
        <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
          Лямбда-цигалотрин 50 г/л
        </a>{" "}
        +{" "}
        <a href="https://berkanabio.ru/category/hlorantraniliprol-100-g-l/">
          Хлорантранилипрол 100 г/л
        </a>
      </strong>
      Мощный инновационный инсектицид, предназначенный для эффективного контроля
      стеблевого кукурузного мотылька на кукурузе, а также листогрызущих
      гусениц, тлей, яблонной плодожорки на яблоне.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>Двойной механизм действия: комбинация двух действующих веществ.</li>
        <li>
          Эффективно контролирует все стадии вредителя: имаго – яйцо – гусеница,
          что предупреждает повреждение кукурузы вредителем.
        </li>
        <li>
          «Нокдаун»-эффект и продолжительная активность – начинает действовать
          через 1 час, защищает более 20 дней.
        </li>
        <li>
          Высокая термостабильность – эффективно работает в широком диапазоне
          температур, от +10° С до +30° С.
        </li>
        <li>
          Уникальная препаративная форма – АМПЛИГО содержит микро-ЗЕОН капсулы –
          стабильность действия при неблагоприятных условиях.
        </li>
        <li>
          Отличная дождеустойчивость – эффективен при выпадении осадков через 1
          час после обработки.
        </li>
        <li>Предотвращает образование микотоксинов.</li>
        <li>Обладает репеллентными свойствами.</li>
        <li>
          Стабилен, на кукурузе достаточно одной обработки, на яблоне – 2
          обработки.
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
            <td>0,2-0,3</td>
            <td>Кукуруза</td>
            <td>Хлопковая совка, луговой мотылек, кукурузный мотылек</td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 200-400
              л/га
            </td>
          </tr>
          <tr>
            <td>0,2-0,3 (А)</td>
            <td>Кукуруза</td>
            <td>Хлопковая совка, луговой мотылек</td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 50 л/га
            </td>
          </tr>
          <tr>
            <td>0,2-0,3 (А)</td>
            <td>Кукуруза</td>
            <td>Кукурузный мотылек</td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 50 л/га
            </td>
          </tr>
          <tr>
            <td>0,2-0,3 0,2-0,3 (А)</td>
            <td>Подсолнечник</td>
            <td>Хлопковая совка, луговой мотылек</td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости при
              наземном опрыскивании- 200-400 л/га, при авиационном опрыскивании
              -50-100 л/га
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Амплиго, МКС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Амплиго, МКС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default ampligomks;