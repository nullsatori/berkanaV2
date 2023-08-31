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

const kloritvr = () => {
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
        <a href="https://berkanabio.ru/category/klopiralid/">Клопиралид</a> 300
        г/л
      </strong>
      Системный гербицид для борьбы с видами осота, бодяка, ромашки, горца,
      латука, гречишки вьюнковой.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Высокоэффективный и незаменимый гербицид для борьбы с
          трудноискоренимыми и злостными сорняками в посевах свеклы – виды
          осота, бодяка, латука, горца, ромашки и др.
        </li>
        <li>Уничтожает как надземную, так и подземную часть сорных.</li>
        <li>
          Отличается высокой избирательной способностью к защищаемым культурам
          (сахарная свекла, зерновые, рапс, кукуруза и др.).
        </li>
        <li>
          Проявляет высокую биологическую эффективность, обеспечивает защиту в
          течение всего срока вегетации.
        </li>
        <li>
          Прекрасно совмещается и применяется в баковых смесях с препаратами
          бетанальной группы – Вымпел 2 и
        </li>
        <li>
          Вымпел 3, гербицидами против двудольных сорняков (Метарон, Флуорон) и
          граминицидами (Галлон).
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
              <span>0,16-0,5</span>
            </td>
            <td>
              <span>Пшеница озимая и яровая, ячмень</span>
            </td>
            <td>
              <span>
                Виды ромашки, горца, гречишка вьюнковая, виды бодяка, осота,
                латука
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазу кущения - до выхода в трубку
                культуры. Озымые культуры обрабатываются весной.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,5</span>
            </td>
            <td>
              <span>Сахарная свекла</span>
            </td>
            <td>
              <span>
                Виды ромашки, горца, гречишка вьюнковая, виды бодяка, осота,
                латука
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазу 1-3 пары настоящих листьев культуры.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Виды ромашки, горца, гречишка вьюнковая, виды бодяка, осота,
                латука
              </span>
            </td>
            <td>
              <span>Опрыскивание посевов в фазу 3-5 листьев культуры.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,3-0,4</span>
            </td>
            <td>
              <span>Рапс яровой (семенные посевы)</span>
            </td>
            <td>
              <span>Виды осота, ромашки, горца</span>
            </td>
            <td>
              <span>
                Опрыскивание в фазе 3-4 настоящих листьев рапса ярового.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-0,6</span>
            </td>
            <td>
              <span>Земляника</span>
            </td>
            <td>
              <span>
                Многолетние двудольные (осоты, щавель, одуванчик) и некоторые
                однолетние двудольные (виды ромашки, горца)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков после сбора урожая.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,16-0,66</span>
            </td>
            <td>
              <span>Газоны (территория спортивных сооружений)</span>
            </td>
            <td>
              <span>Виды ромашки, осота, гречишки, одуванчик</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков после, первого укоса.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га.</span>
              <span>
                Запрещается пребывание людей на обработанных территориях в
                течение 3-х дней после обработки.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Клорит, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Клорит, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default kloritvr;
