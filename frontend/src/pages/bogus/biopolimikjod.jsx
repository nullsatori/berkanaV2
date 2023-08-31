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

const biopolimikjod = () => {
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
      <a
        href="https://berkanabio.ru/wp-content/uploads/2020/10/3333aab9d3d.png"
        rel="attachment wp-att-3338"
      ></a>
      Для внекорневой подкормки всех сельскохозяйственных культур, обладает ярко
      выраженными фунгицидными свойствами.
      <h3>Преимущество</h3>
      <ul>
        <li>
          Обладает фунгибактерицидными и противовирусными свойствами, подавляет
          грибковые и бактериальные заболевания растений;
        </li>
        <li>
          Принимает участие в регулировке функционирования ферментных систем
          растения;
        </li>
        <li>Способствует цветению и плодоношению;</li>
        <li>
          Улучшает качество урожая и повышает урожай сельскохозяйственных
          культур;
        </li>
      </ul>
      <h3>Норма расхода</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Способ внесения</strong>
            </td>
            <td>
              <strong>Доза применения </strong>
            </td>
            <td>
              <strong>Норма расхода рабочего раствора </strong>
            </td>
          </tr>
          <tr>
            <td>Внекорневая подкормка растений</td>
            <td>0,2-0,4 л/га</td>
            <td>50-200 л/га (800-1000 л/га плодово-ягодные культуры)</td>
          </tr>
        </tbody>
      </table>
      <strong>Внимание! </strong>Не превышать регламентированную норму
      препарата! Применяется для дезинфекции теплиц 100 мл на 100 м<sup>2</sup>
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/ooo-nvp-bashinkom/">
        ООО “НВП БашИнком”
      </a>
      <strong>Канистра:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Биополимик Йод - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Биополимик Йод"
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

export default biopolimikjod;
