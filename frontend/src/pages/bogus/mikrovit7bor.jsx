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

const mikrovit7bor = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2021/04/6_img_kanistra_page.jpeg"></a>
      Микровит-7 Бор – высококонцентрированное удобрение, предназначенное для
      корневого и внекорневого питания растений для компенсации недостатка бора.
      <h2>Свойства</h2>
      <ul>
        <li>Бор – 130 г/л</li>
        <li>Азот – 48 г/л</li>
      </ul>
      Кислотность: 6,0-9,0. Плотность: 1,2-1,35 г/см3 при 18°C.
      <h2>Норма расхода и рекомендации</h2>
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
            <td>
              Зернобобовые культуры (горох, бобы, соя, нут, люпин, фасоль,
              чечевица)
            </td>
            <td>0,4-1,0 л/га</td>
            <td>200-300 л/га</td>
            <td>Некорневая подкормка в фазе бутонизации*</td>
          </tr>
          <tr>
            <td rowspan="3">Рапс, горчица, козец, редька масличная</td>
            <td rowspan="3">0,5-1,5 л/га</td>
            <td rowspan="3">200-300 л/га</td>
            <td>Некорневая подкормка в фазу 3-5 настоящих листьев*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в период формирования стебля*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе бутонизации*</td>
          </tr>
          <tr>
            <td>Кукуруза, сорго, просо</td>
            <td>0,4-1,0 л/га</td>
            <td>200-300 л/га</td>
            <td>Некорневая подкормка в фазе 6-9 листьев*</td>
          </tr>
          <tr>
            <td rowspan="4">
              Сахарная, кормовая, столовая свекла, морковь, брюква, турнепс
            </td>
            <td rowspan="4">0,5-1,5 л/га</td>
            <td rowspan="4">200-400 л/га</td>
            <td>Некорневая подкормка в фазе 3-4 настоящих листьев*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в период смыкания рядков*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в период смыкания междурядий*</td>
          </tr>
          <tr>
            <td>
              Некорневая подкормка за 20 дней до уборки (на сахаристость)*
            </td>
          </tr>
          <tr>
            <td rowspan="2">Подсолнечник</td>
            <td rowspan="2">0,5-1,5 л/га</td>
            <td rowspan="2">200-300 л/га</td>
            <td>Некорневая подкормка в фазе3-5 листьев*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе 6-9 листьев*</td>
          </tr>
          <tr>
            <td rowspan="2">Лен</td>
            <td rowspan="2">0,3-1,0 л/га</td>
            <td rowspan="2">200-300 л/га</td>
            <td>Некорневая подкормка в фазе «елочки»*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе бутонизации*</td>
          </tr>
          <tr>
            <td rowspan="2">Овощные культуры</td>
            <td rowspan="2">0,5-1,5 л/га</td>
            <td rowspan="2">200-500 л/га</td>
            <td>Некорневая подкормка в период бутонизации*</td>
          </tr>
          <tr>
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
            <td rowspan="2">Бахчевые культуры</td>
            <td rowspan="2">0,3-1,0 л/га</td>
            <td rowspan="2">200-300 л/га</td>
            <td>Некорневая подкормка в фазу бутонизации*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазу роста плодов</td>
          </tr>
          <tr>
            <td>Кормовые травы</td>
            <td>0,5-1,0 л/га</td>
            <td>200-300 л/га</td>
            <td>
              Некорневая подкормка в момент бутонизации (на семеноводческих
              посевах)*
            </td>
          </tr>
          <tr>
            <td rowspan="3">Плодовые культуры, виноград</td>
            <td rowspan="3">0,5-2,0 л/га</td>
            <td rowspan="3">500-1000 л/га</td>
            <td>Некорневая подкормка перед цветением*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазу начала созревания*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка после сбора урожая*</td>
          </tr>
          <tr>
            <td rowspan="2">Ягодные культуры</td>
            <td rowspan="2">0,5-1,5 л/га</td>
            <td rowspan="2">300-600 л/га</td>
            <td>Некорневая подкормка перед цветением*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка после сбора урожая*</td>
          </tr>
          <tr>
            <td>Прочие сельскохозяйственные культуры</td>
            <td>0,1-1,5 л/га</td>
            <td>200-300 л/га</td>
            <td>
              Некорневая подкормка по показаниям почвенной или листовой
              диагностики*
            </td>
          </tr>
          <tr>
            <td>Гидропоника, малообъемные технологии, корневая подкормка</td>
            <td>0,07-0,25 л/1000 л маточного раствора</td>
            <td>в зависимости от нормы полива</td>
            <td>Компонент для приготовления маточного раствора*</td>
          </tr>
        </tbody>
      </table>
      * Возможно одновременно в смеси со средствами защиты растений и
      водорастворимыми удобрениями после проверки на совместимость. В
      большинстве случаев применение препарата наиболее актуально перед
      цветением, в период накопления сахаров и в период закладки плодовых почек.
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
        <title>Микровит-7 Бор - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Микровит-7 Бор"
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

export default mikrovit7bor;
