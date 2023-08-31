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

const tsiperuske = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/05/berkanabio_ciperus-ke.jpg"></a>
        Циперметрин 250 г/л
      </strong>
      Высокоэффективный контактно-кишечный инсектицид широкого спектра действия
      с высокой начальной токсичностью и длительным защитным периодом.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Подавляет широкий спектр вредителей основных сельскохозяйственных
          культур.
        </li>
        <li>Обладает контактным и кишечным действием.</li>
        <li>Имеет высокую скорость воздействия на насекомых.</li>
        <li>Уничтожает вредителей на всех стадиях развития.</li>
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
              <span>0,32</span>
            </td>
            <td>
              <span>Кукуруза (на зерно)</span>
            </td>
            <td>
              <span>Хлопковая совка</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15</span>
            </td>
            <td>
              <span>Кукуруза (на зерно)</span>
            </td>
            <td>
              <span>Кукурузный мотылек</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Пшеница</span>
            </td>
            <td>
              <span>
                Злаковая тля, клопики, пьявицы, блошки, пшеничный трипс, клоп
                вредная черепашка
              </span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,14-0,24</span>
            </td>
            <td>
              <span>Крестоцветные культуры (семенные посевы)</span>
            </td>
            <td>
              <span>
                Рапсовый цветоед, крестоцветные блошки, клопы, белянки, тли
              </span>
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
              <span>Пастбища, участки, заселенные саранчовыми</span>
            </td>
            <td>
              <span>Саранчовые</span>
            </td>
            <td>
              <span>
                Опрыскивание в период развития личинок. Срок возможного
                пребывания людей на обработанных площадях не ранее 15 дней после
                обработки; сбор грибов и ягод после обработок дикой
                растительности в сезон обработки не допускается.
              </span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
        <span>ФМРус</span>
      </a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Циперус, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Циперус, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default tsiperuske;
