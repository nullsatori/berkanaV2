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

const mikrovit4helatmedi = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2021/04/berkanabio-mikrovit-4-helat-medi.jpeg"></a>
      Микровит-4 Хелат меди – высококонцентрированное удобрение, предназначенное
      для корневого и внекорневого питания растений для компенсации недостатка
      меди.
      <h2>Состав</h2>
      <ul>
        <li>Сера (SO3) – 30 г/л</li>
        <li>Азот общий – 6 г/л</li>
        <li>Медь Cu – 60 г/л</li>
      </ul>
      Кислотность: 5,5-6,5. Плотность: 1,1-1,2 г/см3 при 18 °C.
      <h2>Норма расхода и применение</h2>
      <table>
        <tbody>
          <tr>
            <td rowspan="2">
              <strong>Сельскохозяйственная культура</strong>
            </td>
            <td colspan="2">
              <strong>Нормы расхода:</strong>
            </td>
            <td rowspan="2">
              <strong>Сроки применения</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>препарат</strong>
            </td>
            <td>
              <strong>рабочий р-р</strong>
            </td>
          </tr>
          <tr>
            <td rowspan="4">
              Озимые и яровые зерновые культуры (пшеница, ячмень, рожь,
              тритикале, овес, рис)
            </td>
            <td rowspan="4">0,3-0,8 л/га</td>
            <td rowspan="4">200-300 л/га</td>
            <td>Некорневая подкормка в фазе кущения*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе трубкования*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе флагового листа*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе колошения*</td>
          </tr>
          <tr>
            <td>
              Зернобобовые культуры (горох, бобы, соя, нут, люпин, фасоль,
              чечевица)
            </td>
            <td>0,3-0,6 л/га</td>
            <td>200-300 л/га</td>
            <td>
              Некорневая подкормка в фазе 3-5 листьев, высоты всходов 10-12 см,
              начала ветвления*
            </td>
          </tr>
          <tr>
            <td rowspan="2">Рапс, горчица, козец, редька масличная</td>
            <td rowspan="2">0,5-1,5 л/га</td>
            <td rowspan="2">200-300 л/га</td>
            <td>Некорневая подкормка в период формирования стебля*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе бутонизации*</td>
          </tr>
          <tr>
            <td rowspan="2">Кукуруза, сорго, просо</td>
            <td rowspan="2">0,4-1,0 л/га</td>
            <td rowspan="2">200-300 л/га</td>
            <td>Некорневая подкормка в фазе3-5 листьев*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе 6-9 листьев*</td>
          </tr>
          <tr>
            <td>Овощные культуры</td>
            <td>0,3-1,0 л/га</td>
            <td>200-500 л/га</td>
            <td>2-3 некорневых подкормки с интервалом 2 недели</td>
          </tr>
          <tr>
            <td rowspan="3">Картофель</td>
            <td rowspan="3">0,5-1,0 л/га</td>
            <td rowspan="3">200-400 л/га</td>
            <td>Некорневая подкормка при высоте всходов 10-15 см*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазу бутонизации (закладки клубней)*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазу роста клубней*</td>
          </tr>
          <tr>
            <td rowspan="3">Плодовые культуры, виноград</td>
            <td rowspan="3">0,5-3,0 л/га</td>
            <td rowspan="3">500-1000 л/га</td>
            <td>Некорневая подкормка при возобновлении весенней вегетации*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка после цветения*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в период роста плодов*</td>
          </tr>
          <tr>
            <td rowspan="2">Ягодные культуры</td>
            <td rowspan="2">0,5-1,0 л/га</td>
            <td rowspan="2">300-600 л/га</td>
            <td>Некорневая подкормка при возобновлении вегетации*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка после цветения*</td>
          </tr>
          <tr>
            <td>Прочие сельскохозяйственные культуры</td>
            <td>0,1-1,5 л/га</td>
            <td>200-300 л/га</td>
            <td>
              Некорневая подкормка по показаниям почвенной или листовой
              диагностики
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              Гидропоника, малообъемные технологии, корневая подкормка
            </td>
            <td colspan="2" rowspan="2">
              Корректировка концентрации элемента питания в маточном растворе
            </td>
            <td>Компонент для приготовления маточного раствора</td>
          </tr>
          <tr>
            <td>Корневая подкормка (внесение через системы полива)</td>
          </tr>
        </tbody>
      </table>
      * Возможно одновременно в смеси со средствами защиты растений и
      водорастворимыми удобрениями после проверки на совместимость.
      <strong>
        Внимание! Не смешивать с продуктами, производными от кальция без
        предварительного теста.
      </strong>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/elitnye-agrosistemy/">
        Элитные Агросистемы
      </a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Микровит-4 Хелат Меди - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Микровит-4 Хелат Меди"
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

export default mikrovit4helatmedi;
