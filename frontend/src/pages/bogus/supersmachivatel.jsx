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

const supersmachivatel = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2021/04/berkanabio-supersmachivatel-scaled.jpeg"></a>
      Суперсмачиватель – адъювант, применяемый в качестве добавки к рабочему
      раствору пестицидов и агрохимикатов для повышения их эффективности, за
      счёт лучшего распределения по поверхности растений и ускорения
      проникновения препаратов в растительные ткани.
      <h2>Состав</h2>
      <ul>
        <li>Неионогенный ПАВ ≤ 15%</li>
        <li>Пропиленгликоль &lt;15%</li>
        <li>Молочная кислота &lt;1%</li>
        <li>EDTA &lt;1%</li>
        <li>Полиэфирная модифицированная силиконовая жидкость &gt;30%.</li>
      </ul>
      Кислотность: 7,0-7,1 Плотность: 1,02 г/см3 при 18 ºС Неионогенные ПАВ
      обеспечивает препарату:
      <ul>
        <li>химическую стойкостью в жесткой воде;</li>
        <li>хорошую совместимостью с компонентами баковой смеси;</li>
        <li>высокую скоростью биоразлагаемости.</li>
      </ul>
      Пропиленгликоль работает в качестве увлажнителя, что повышает
      эффективность обработок в засушливый период, особенно с включением в
      баковые смеси элементов питания, за счет:
      <ul>
        <li>повышения водоудерживающей способностью раствора;</li>
        <li>
          снижения точки гигроскопичности (поглощение влаги из воздуха
          происходит при более низкой атмосферной влажности);
        </li>
        <li>пролонгации высыхания раствора.</li>
      </ul>
      Силиконовая жидкость обеспечивает эффект «супер-смачивания» у препарата,
      за счет чего:
      <ul>
        <li>максимально снижает поверхностное натяжение капель раствора;</li>
        <li>способствует меньшему сносу рабочего раствора ветром;</li>
        <li>
          увеличивает площадь покрытия препаратом надземных органов растений;
        </li>
        <li>увеличивает скорость проникновения препаратов в ткани растения;</li>
        <li>повышает устойчивость к смыванию осадками;</li>
        <li>повышает эффективность СЗР и удобрений.</li>
      </ul>
      Применяя суперсмачиватель с/х производитель:
      <ul>
        <li>
          повышает эффективность контактных пестицидов за счет лучшего
          распределения по растениям и вредителям;
        </li>
        <li>
          получает дополнительный физический инсектицидный эффект за счет
          закупорки дыхалец насекомых;
        </li>
        <li>
          позволяет снизить нормы применения системных пестицидов и гербицидов
          за счет более активного проникновения в ткани растения;
        </li>
        <li>
          позволяет снизить нормы листовых подкормок, за счет лучшего
          распределения по растению и повышению проникающей способности;
        </li>
        <li>
          повышает иммунитет растения и устойчивость к болезням и вредителям за
          счет содержащегося в составе кремния в органической форме.
        </li>
      </ul>
      <h2>Норма расхода и рекомендации</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Способ применения</strong>
            </td>
            <td>
              <strong>Концентрация рабочего раствора</strong>
            </td>
          </tr>
          <tr>
            <td>
              Некорневые обработки с расходом рабочего раствора до 100 л/га
            </td>
            <td>0,075-0,1% (75-100 мл/100 л раствора)</td>
          </tr>
          <tr>
            <td>
              Некорневые обработки с расходом рабочего раствора 150-300 л/га
            </td>
            <td>0,05-0,075% (50-75 мл/100 л раствора)</td>
          </tr>
          <tr>
            <td>
              Некорневые обработки с расходом рабочего раствора более 500 л/га
            </td>
            <td>0,02-0,05% (20-50 мл/100 л раствора)</td>
          </tr>
          <tr>
            <td>
              Некорневая обработка с целью подавления вредителей путем
              механической закупорки дыхалец
            </td>
            <td>0,1% (100 мл/100 л раствора)</td>
          </tr>
          <tr>
            <td>
              При капельном поливе, для повышения текучести раствора при большой
              протяженности системы
            </td>
            <td>0,01-0,02% (10-20 мл/100 л раствора)</td>
          </tr>
          <tr>
            <td colspan="2">
              <em>
                <strong>Внимание:</strong> максимальный эффект
                «супер-смачивания» достигается при 0,1% концентрации (100 мл/100
                л раствора). Дальнейшее увеличение концентрации к повышению
                свойств смачивания не приводит.
              </em>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/elitnye-agrosistemy/">
        Элитные Агросистемы
      </a>
      <strong>Упаковка: </strong>1 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Суперсмачиватель - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Суперсмачиватель"
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

export default supersmachivatel;
