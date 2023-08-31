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

const filterrke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2020/07/berkanabio_filterr-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/propikonazol/">Пропиконазол</a>{" "}
        250 г/л +{" "}
        <a href="https://berkanabio.ru/category/ciprokonazol/">Ципроконазол</a>{" "}
        80 г/л
      </strong>
      Это системный фунгицид, предназначен для защиты зерновых колосовых культур
      от мучнистой росы, видов ржавчин, пятнистостей листьев, болезней колоса;
      сахарной свеклы – от церкоспороза, мучнистой росы.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Широкий спектр действия: подавляет все основные болезни зерновых
          культур и сахарной свеклы в период вегетации.
        </li>
        <li>
          Универсальное и гибкое применение: все основные зерновые культуры
          (пшеница яровая и озимая, ячмень яровой и озимый, рожь озимая, овес) и
          сахарная свекла. Независимо от стадии развития культуры в период
          вегетации.
        </li>
        <li>Обеспечение качества урожая.</li>
        <li>Быстрое начальное действие и долговременная защита.</li>
        <li>Эффективное профилактическое и лечебное действие.</li>
        <li>Низкие нормы расхода.</li>
        <li>Устойчивость к смыванию дождем.</li>
      </ul>
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
            <td>
              <strong>Срок ожи­да­ния (крат­ность об­ра­бо­ток)</strong>
            </td>
            <td>
              <strong>
                Сро­ки вы­хо­да для руч­ных (ме­ха­ни­зи­ро­ван­ных ра­бот)
              </strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0,4-0,5</td>
            <td>Пшеница яровая и озимая</td>
            <td>
              Ржавчина бурая, ржавчина желтая, ржавчина стеблевая, септориоз
              листьев и колоса, пиренофороз
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га.
            </td>
            <td>40(1)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Гельминтоспориозные пятнистости (темно-бу-рая, сетчатая,
              полосатая), мучнистая роса, ржавчина карликовая, ржавчина
              стеблевая, ринхоспориоз
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га.
            </td>
            <td>40(1)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Рожь озимая</td>
            <td>
              Мучнистая роса, ржавчина бурая, ржавчина стеблевая, ринхоспориоз,
              септориоз
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га.
            </td>
            <td>40(1)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,4-0,5</td>
            <td>Овес</td>
            <td>Корончатая ржавчина, красно-бурая пятнистость</td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га.
            </td>
            <td>40(1)</td>
            <td>7(3)</td>
          </tr>
          <tr>
            <td>0,5-0,7</td>
            <td>Свекла сахарная</td>
            <td>Церкоспороз, фомоз, мучнистая роса</td>
            <td>
              Опрыскивание в период вегетации: первое - при появлении первых
              признаков заболевания, второе - через 10-14 дней (при
              необходимости). Расход рабочей жидкости - 300 л/га.
            </td>
            <td>30(1-2)</td>
            <td>7(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Гранум
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Фильтерр, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Фильтерр, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default filterrke;
