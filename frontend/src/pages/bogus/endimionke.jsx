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

const endimionke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabio_endimion-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/2-4-d-2-etilgeksilovyj-efir/">
          2,4-Д (2-этилгексиловый эфир)
        </a>{" "}
        564 г/л
      </strong>
      Гербицид для защиты зерновых колосовых культур.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Эфир быстрее проникает в сорные растения и сильнее поражает
          чувствительные виды по сравнению с солями.
        </li>
        <li>
          Активно передвигается по сосудистой системе сорняков от листьев к
          точкам роста побегов и корневой системе, поэтому обладает
          эффективностью против многолетних сорняков (осоты, бодяки).
        </li>
        <li>Эффективен в условиях засухи, не обладает последействием.</li>
        <li>Проявляет гербицидную активность при температуре от +5ºС.</li>
        <li>
          Является отличным компонентом для баковых смесей с гербицидами на
          основе дикамба (гербицид Ларт), трибенурон-метилома (Аргамак),
          римсульфуронома (Римус) и другими;
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
              <span>0,6-0,8</span>
            </td>
            <td>
              <span>Пшеница и ячмень яровые</span>
            </td>
            <td>
              <span>
                Однолетние и некоторые многолетние (бодяк полевой) двудольные
                сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры и ранние фазы роста
                сорняков.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,6-0,8</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>
                Однолетние и некоторые многолетние (бодяк полевой) двудольные
                сорняки
              </span>
            </td>
            <td>
              <span>Опрыскивание посевов в фазе кущения культуры весной.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Эндимион, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Эндимион, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default endimionke;