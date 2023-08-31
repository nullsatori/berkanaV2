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

const panterake = () => {
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
        <a href="https://berkanabio.ru/category/kvizalofop-p-tefuril/">
          Квизалофоп-П-тефурил
        </a>{" "}
        40 г/л
      </strong>
      Послевсходовый гербицид системного действия, предназначенный для борьбы с
      однолетними злаковыми (просо куриное, сорго полевое, щетинники) и
      многолетними злаковыми (пырей ползучий) сорняками на посевах сахарной,
      столовой и кормовой свеклы, сои, подсолнечника, рапса, льна, овощных
      культур, а также на посадках картофеля.
      <h2>Преимущество</h2>
      <ul>
        <li>
          высокоэффективный гербицид в борьбе с широким спектром злаковых
          сорняков, в том числе и многолетних;
        </li>
        <li>
          гибкие сроки применения гербицида, независимые от фазы развития
          культуры;
        </li>
        <li>
          подавляет злаковые сорняки даже на поздних стадиях их развития;;
        </li>
        <li>предотвращает отрастание корневищных сорняков;</li>
        <li>эффективен при любых почвенно-климатических условиях;</li>
        <li>устойчив к смыванию дождем.</li>
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
              <span>
                Свекла сахарная, кормовая, столовая, подсолнечник, соя,
                лен-долгунец, лук, морковь, капуста белокочанная, томаты
                рассадные и посевные, картофель, рапс
              </span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (виды щетинника, просо куриное,
                просо сорнополевое)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-4 листьев сорняков независимо от
                фазы развития культуры.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>
                Свекла сахарная, кормовая, столовая, подсолнечник, соя,
                лен-долгунец, лук, морковь, капуста белокочанная, томаты
                рассадные и посевные, картофель, рапс
              </span>
            </td>
            <td>
              <span>Многолетние злаковые сорняки (пырей ползучий)</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте сорняков 10-15 см независимо от
                фазы развития культуры.
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
                Горох на зерно, горох овощной для промышленной переработки
              </span>
            </td>
            <td>
              <span>Однолетние злаковые сорные растения</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-4 листьев сорных растений
                независимо от фазы развития культуры. Расход рабочей жидкости –
                200-300 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>
                Горох на зерно, горох овощной для промышленной переработки
              </span>
            </td>
            <td>
              <span>Многолетние злаковые сорные растения (пырей ползучий)</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея 10-15 см независимо от
                фазы развития культуры. Расход рабочей жидкости – 200-300 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/arista-lajfsajens/">Ариста</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Пантера, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Пантера, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default panterake;
