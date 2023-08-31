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

const fjuziladforteke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio-fjuzilad-forte-ke.jpeg"></a>
        Флуазифоп-П-бутил 150 г/л
      </strong>
      Послевсходовый гербицид для подавления однолетних и многолетних злаковых
      сорняков в посевах сахарной и кормовой свеклы и других культур.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Эффективное подавление всех основных однолетних и многолетних злаковых
          сорняков.
        </li>
        <li>
          Регистрация на различных культурах, включая овощные и технические.
        </li>
        <li>Высокая скорость действия.</li>
        <li>Превосходное системное действие.</li>
        <li>
          Возможность применения в широком диапазоне фаз развития культурных
          растений
        </li>
        <li>Низкие нормы расхода.</li>
        <li>Отсутствие отрицательного воздействия на последующие культуры.</li>
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
              <span>0,75-1</span>
            </td>
            <td>
              <span>Люпин желтый кормовой (семенные посевы)</span>
            </td>
            <td>
              <span>Однолетние злаковые</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-4 листьев сорняков (независимо от
                фазы развития культуры).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Люпин желтый кормовой (семенные посевы)</span>
            </td>
            <td>
              <span>Пырей ползучий</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея ползучего 10-15 см
                (независимо от фазы развития культуры).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>
                Свекла сахарная, кормовая, рапс, капуста белокочанная (кроме
                ранних сортов), лук всех генераций (кроме лука на перо),
                картофель (кроме ранних и среднеспелых сортов)
              </span>
            </td>
            <td>
              <span>Однолетние злаковые</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-4 листьев сорняков (независимо от
                фазы развития культуры).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>
                Свекла сахарная, кормовая, рапс, капуста белокочанная (кроме
                ранних сортов), лук всех генераций (кроме лука на перо),
                картофель (кроме ранних и среднеспелых сортов)
              </span>
            </td>
            <td>
              <span>Пырей ползучий</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея ползучего 10-15 см
                (независимо от фазы развития культуры).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Однолетние злаковые</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазу «елочки» льна и 2 -4 листьев
                сорняков.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Пырей ползучий</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазу «елочки» льна и при высоте пырея
                ползучего 10-15 см (независимо от фазы развития культуры.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Клевер ползучий (семенные посевы)</span>
            </td>
            <td>
              <span>Многолетние и однолетние злаковые</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов через 2-3 недели после уборки покровной
                культуры или после ранневесеннего подкашивания травостоя
                культуры.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>Горох (кроме овощного), подсолнечник, соя</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-4 листьев сорняков (независимо от
                фазы развития культуры).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Горох (кроме овощного), подсолнечник, соя</span>
            </td>
            <td>
              <span>Пырей ползучий</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея ползучего 10-15 см
                (независимо от фазы развития культуры).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Фюзилад Форте, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Фюзилад Форте, КЭ"
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

export default fjuziladforteke;
