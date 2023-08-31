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

const mikrovit6kremnij = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2021/04/berkanabio-mikrovit-6-kremnij.jpeg"></a>
      Микровит-6 Кремний – это эффективный корректор дефицита калия и кремния в
      жидком виде. Применяется во всех типах систем капельного орошения или
      посредством листовых подкормок.
      <h2>Состав</h2>
      Калиий (К2О) – 200 г/л Кремний (Si2O) – 130 г/л Физическое состояние:
      желтоватая жидкость плотностью 1,2-1,3 г/см3 при 18°С. Кислотность:
      показатель активности водородных ионов (рН 1% водного раствора) – 9,5 –
      10,5. Плотность: 1,2-1,3 г/см3 при 18°C.
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
            <td rowspan="3">
              Озимые и яровые зерновые культуры (пшеница, ячмень, рожь,
              тритикале, овес, рис)
            </td>
            <td rowspan="3">0,1-1,0 л/га</td>
            <td rowspan="3">200-300 л/га</td>
            <td>Некорневая подкормка в фазе кущения*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе трубкования*</td>
          </tr>
          <tr>
            <td> Некорневая подкормка в фазе флагового листа*</td>
          </tr>
          <tr>
            <td rowspan="2">
              Зернобобовые культуры (горох, бобы, соя, нут, люпин, фасоль,
              чечевица)
            </td>
            <td rowspan="2">0,2-1,0 л/га</td>
            <td rowspan="2">200-300 л/га</td>
            <td>
              Некорневая подкормка в фазе 3-5 листьев, высоты всходов 10-12 см,
              начала ветвления*
            </td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазе бутонизации*</td>
          </tr>
          <tr>
            <td>Кукуруза, сорго, просо</td>
            <td>0,1-1,0 л/га</td>
            <td>200-300 л/га</td>
            <td>Некорневая подкормка в фазе 6-9 листьев*</td>
          </tr>
          <tr>
            <td rowspan="2">
              Сахарная, кормовая, столовая свекла, морковь, брюква, турнепс
            </td>
            <td rowspan="2">0,15-1,0 л/га</td>
            <td rowspan="2">200-400 л/га</td>
            <td>Некорневая подкормка в период смыкания рядков*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в период смыкания междурядий*</td>
          </tr>
          <tr>
            <td>Подсолнечник</td>
            <td>0,1-0,8 л/га</td>
            <td>200-300 л/га</td>
            <td>
              Некорневая подкормка в фазе 6-9 листьев. Некорневая подкормка в
              фазе3-5 листьев*
            </td>
          </tr>
          <tr>
            <td>Лен</td>
            <td>0,15-0,8 л/га</td>
            <td>200-300 л/га</td>
            <td>Некорневая подкормка в фазе «елочки»*</td>
          </tr>
          <tr>
            <td>Овощные культуры</td>
            <td>0,05-1,0 л/га</td>
            <td>200-500 л/га</td>
            <td>2-3 некорневых подкормки с интервалом 2 недели</td>
          </tr>
          <tr>
            <td rowspan="3">Картофель</td>
            <td rowspan="3">0,15-0,5 л/га</td>
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
            <td rowspan="3">Бахчевые культуры</td>
            <td rowspan="3">0,2-0,8 л/га</td>
            <td rowspan="3">200-300 л/га</td>
            <td>Некорневая подкормка в фазу роста плетей*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазу бутонизации*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазу роста плодов</td>
          </tr>
          <tr>
            <td rowspan="3">Плодовые культуры, виноград</td>
            <td rowspan="3">0,5-1,0 л/га</td>
            <td rowspan="3">500-1000 л/га</td>
            <td>Некорневая подкормка после цветения*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в период роста плодов*</td>
          </tr>
          <tr>
            <td>Некорневая подкормка в фазу начала созревания*</td>
          </tr>
          <tr>
            <td>Ягодные культуры</td>
            <td>0,3-0,7- л/га</td>
            <td>300-600 л/га</td>
            <td>Некорневая подкормка после цветения*</td>
          </tr>
          <tr>
            <td>Цветочно-декоративные культуры</td>
            <td>0,02-0,15 л/га</td>
            <td>200-400 л/га</td>
            <td>
              Некорневые подкормки во время вегетации по потребности с
              интервалом не чаще раз в 2 недели*
            </td>
          </tr>
          <tr>
            <td>Газонные травы</td>
            <td>0,1-0,3 л/га</td>
            <td>200-300 л/га</td>
            <td>
              Некорневые подкормки 2-5 раз за вегетацию с интервалом 20 дней*
            </td>
          </tr>
          <tr>
            <td>Прочие сельскохозяйственные культуры</td>
            <td>0,2-0,6 л/га</td>
            <td>200-300 л/га</td>
            <td>
              1-2 некорневых подкормки в период активного роста вегетативных
              органов
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              Гидропоника, малообъемные технологии, корневая подкормка
            </td>
            <td rowspan="2">0,05-0,3 л/1000 л маточного раствора</td>
            <td rowspan="2">в зависимости от нормы полива</td>
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
        Внимание! Не смешивать с гуматами без предварительного теста.
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
        <title>Микровит-6 Кремний - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Микровит-6 Кремний"
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

export default mikrovit6kremnij;
