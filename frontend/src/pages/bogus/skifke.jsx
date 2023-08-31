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

const skifke = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2020/07/berkanabio_skif-ke.jpg"></a>
      <a href="https://berkanabio.ru/category/propikonazol/">
        <strong>Пропиконазол</strong>
      </a>
      <strong> 250 г/л</strong>
      Высокоэффективный фунгицид класса триазолов для защиты зерновых культур от
      комплекса болезней листьев и колоса.
      <h2>Преимущества</h2>
      Скиф является высокоэффективным фунгицидом класса триазолов для защиты
      зерновых культур от комплекса болезней листьев и колоса. Обладает
      профилактическим лечебным и искореняющим механизмом действия. При
      профилактическом опрыскивании защитный эффект сохраняется на протяжении 3
      – 4 недель. Этого времени достаточно, чтобы защитить посевы в наиболее
      критическую фазу развития болезни. Длительный период действия и
      стимулирующие свойства препарата можно наблюдать и по внешним признакам:
      листья и колос сохраняют зеленый цвет, продолжая накапливать урожай в
      течение дальнейших 10 суток.
      <h2>Норма расхода</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния</strong>
            </td>
            <td colspan="2">
              <strong>Куль­ту­ра</strong>
            </td>
            <td colspan="2">
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>
                Спо­соб, вре­мя об­ра­бот­ки, осо­бен­нос­ти при­ме­не­ния
              </strong>
            </td>
            <td>
              <strong>Срок ожи­да­ния (крат­ность об­ра­бо­ток)</strong>
            </td>
            <td>
              <strong>
                Сро­ки вы­хо­да для руч­ных (ме­ха­ни­зи­ро­ван­ных ра­бот)
              </strong>
            </td>
          </tr>
          <tr>
            <td>0,5</td>
            <td colspan="2" width="144">
              Пшеница яровая, озимая
            </td>
            <td colspan="2" width="142">
              Мучнистая роса, ржавчина бурая, ржавчина стеблевая, ржавчина
              желтая, септориоз, гельминтоспориозная пятнистость
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га
            </td>
            <td>40(1-2)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,5</td>
            <td colspan="2" width="144">
              Ячмень яровой и озимый
            </td>
            <td colspan="2" width="142">
              Сетчатая пятнистость, мучнистая роса, ржавчина карликовая,
              ржавчина желтая, ржавчина (линейная) стеблевая,ринхоспориоз
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га
            </td>
            <td>40(1-2)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,5</td>
            <td colspan="2" width="144">
              Рожь озимая
            </td>
            <td colspan="2" width="142">
              Ржавчина бурая, ржавчина стеблевая, септориоз, ринхоспориоз,
              церкоспореллёз, мучнистая роса
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га
            </td>
            <td>40(1-2)</td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>0,5</td>
            <td colspan="2" width="144">
              Овес
            </td>
            <td colspan="2" width="142">
              Мучнистая роса, корончатая ржавчина, красно-бурая пятнистость
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га
            </td>
            <td>40(1)</td>
            <td>-(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/neoport/">Neoport</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Скиф, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Скиф, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default skifke;
