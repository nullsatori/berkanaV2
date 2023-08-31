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

const kilratsupergr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/fe67e750ee9f19.png"></a>
        <a href="https://berkanabio.ru/category/brodifakum/">Бродифакум</a> 2,5
        г/л
      </strong>
      Препарат предназначен для уничтожения обыкновенной и восточно-европейской,
      общественной и водяной полёвки на всех культурах открытого грунта, а также
      серой крысы и домовой мыши в практике дератизации на объектах различных
      категорий.
      <h2>Преимущества</h2>
      Основным недостатком существующих концентратов бродифакума является низкая
      поедаемость приманок на его основе. В препарате Килрат Супер данная
      проблема решена за счет дополнительных аттрактантов. В состав препарата
      входит горький компонент, предохраняющий приманки на основе Килрат Супер
      от поедания теплокровными и снижающий опасность случайного отравления
      людей и нецелевых видов животных. Препарат вызывает понижение
      свертываемости крови, а через 3-8 суток приводит к гибели грызунов.
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
              <span>20 мл/кг приманки, до 4 кг/га, 10 г/нору</span>
            </td>
            <td>
              <span>
                Все культуры открытого грунта, включая озимые зерновые,
                многолетние травы, плодовые культуры
              </span>
            </td>
            <td>
              <span>
                Обыкновенная, восточно-европейская и общественная полевки
              </span>
            </td>
            <td>
              <span>
                Перемешивание с приманочным продуктом (пшеницей, лущенным овсом,
                резанным картофелем, морковью, свеклой сахарной или яблоками),
                внесение приманки в норы, другие укрытия, трубки, приманочные
                ящики специальными аппликаторами при плотности заселения от
                10-20 нор/га до 400 нор/га при защите плодовых или других
                культур - от начала заселения по мере необходимости, с
                интервалами между обработками две недели, не более 2-х обработок
                подряд с одним приманочным продуктом. При контроле всех грызунов
                - чередование с препаратами иного механизма действия. В
                условиях, исключающих поедание человеком или другими
                теплокровными
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>20 г/нору</span>
            </td>
            <td>
              <span>
                Все культуры открытого грунта, включая озимые зерновые,
                многолетние травы, плодовые культуры
              </span>
            </td>
            <td>
              <span>Водяная полевка</span>
            </td>
            <td>
              <span>
                Перемешивание с приманочным продуктом (пшеницей, лущенным овсом,
                резанным картофелем, морковью, свеклой сахарной или яблоками),
                внесение приманки в норы, другие укрытия, трубки, приманочные
                ящики специальными аппликаторами при плотности заселения от
                10-20 нор/га до 400 нор/га при защите плодовых или других
                культур - от начала заселения по мере необходимости, с
                интервалами между обработками две недели, не более 2-х обработок
                подряд с одним приманочным продуктом. При контроле всех грызунов
                - чередование с препаратами иного механизма действия. В
                условиях, исключающих поедание человеком или другими
                теплокровными
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                10-20 г/нору, укрытия, до 50 г в трубки и приманочные ящики
              </span>
            </td>
            <td>
              <span>
                Помещения различного назначения и прилегающие территории
              </span>
            </td>
            <td>
              <span>Серая крыса, домовая мышь</span>
            </td>
            <td>
              <span>
                Перемешивание с приманочным продуктом (пшеницей, лущенным овсом,
                резанным картофелем, морковью, свеклой сахарной или яблоками,
                мясными и рыбными продуктами). От начала заселения, от 3-х до
                5-ти метров между точками раскладки в зависимости от численности
                грызунов, добавление приманки по мере ее поедания грызунами в
                течение 2-х недель. При контроле всех грызунов чередование с
                препаратами иного механизма действия. В условиях, исключающих
                поедание человеком или другими теплокровными
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производство: </strong>
      <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
        ЗемлякоФФ
      </a>
      <strong>Упаковка: </strong>1 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Килрат Супер, ГР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Килрат Супер, ГР"
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

export default kilratsupergr;
