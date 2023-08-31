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

const globalvr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio_global-vr-.jpg"></a>
        <a href="https://berkanabio.ru/category/imazamoks/">Имазамокс</a> 40 г/л
      </strong>
      Гербицид для борьбы с однолетними и многолетними двудольными и злаковыми
      сорняками в посевах бобовых культур и в посевах подсолнечника, устойчивого
      к имидозолинам.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Максимально широкий спектр уничтожения злаковых и двудольных сорняков,
          в том числе всех рас заразихи.
        </li>
        <li>Новый стандарт защиты ИМИ-подсолнечника.</li>
        <li>Больший эффект – меньше последействия.</li>
        <li>Обладает как контактным, так и почвенным действием.</li>
        <li>Высокая избирательность по отношению к культурным растениям.</li>
        <li>
          Воздействует на ферменты, имеющиеся только у растений, а поэтому
          практически безвреден для животных и человека.
        </li>
        <li>
          Совместим в баковых смесях с инсектицидами, фунгицидами. регуляторами
          роста и микроудобрениями.
        </li>
      </ul>
      Норма расхода
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
              <span>Соя</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в ранние фазы роста сорняков (1-3 настоящих
                листа) и 1-3 настоящих листа культуры.
              </span>
              <span>
                На следующий год можно высевать все культуры, кроме сахарной
                свеклы (безопасный интервал между применением гербицида и
                посевом свеклы – 16 месяцев.
              </span>
              <span>Расход рабочей жидкости – 200 – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>Горох (при выращивании на зерно)</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в ранние фазы роста сорняков (1-3 настоящих
                листа) и 1-3 настоящих листа культуры.
              </span>
              <span>
                На следующий год можно высевать все культуры, кроме сахарной
                свеклы (безопасный интервал между применением гербицида и
                посевом свеклы – 16 месяцев.
              </span>
              <span>Расход рабочей жидкости – 200 – 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-1,5</span>
            </td>
            <td>
              <span>
                Подсолнечник, сорта и гибриды, устойчивые к имидазолинам на
                семена и масло
              </span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в ранние фазы роста сорняков (2-4 листа) и
                4-5 настоящих листа культуры.
              </span>
              <span>Ограничения по севообороту:</span>
              <span>
                можно высевать пшеницу, рожь не ранее, чем через 4 месяца;
                люцерну, сою, ячмень, овес, кукурузу, горох – через 9 месяцев,
                сахарную и столовую свеклу, рапс – через 16 месяцев.
              </span>
              <span>Расход рабочей жидкости – 200 – 300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
        ЗемлякоФФ
      </a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Глобал, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Глобал, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default globalvr;
