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

const rossijasozdaetsobstvennyjflotkrupnotonnazhnyhmorskihzernovozov = () => {
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
      Минсельхоз РФ инициирует разработку проектной документации на
      строительство судов-зерновозов Создание собственного грузового флота для
      экспорта российского продовольствия является одной из стратегических задач
      и важным фактором развития агропромышленного комплекса в Российской
      Федерации. Актуальность этого вопроса существенно возросла в текущем году
      в условиях санкционного давления и отказа многих международных
      перевозчиков от сотрудничества с Россией. Стоит отметить, что на зерновую
      продукцию приходится более трети экспорта отечественной продукции АПК, при
      этом основным способом транспортировки являются именно морские перевозки
      (более 80%). В первую очередь, необходимо строительство крупнотоннажных
      судов для поставок на дальние расстояния. На сегодняшний день потребность
      российских экспортеров составляет 61 зерновоз, из которых 27
      грузоподъемностью 40 тыс. тонн и 34 – на 60 тыс. тонн. В связи с этим
      Минсельхоз России инициирует процесс разработки проектной документации для
      таких судов. Соответствующий заказ по договоренности с ведомством в
      ближайшее время объявит компания Росагролизинг. В дальнейшем по
      подготовленным проектам будет осуществляться строительство на российских
      верфях. При этом Минсельхозом рассматривается возможность оказания
      заказчикам судов государственной поддержки. Стоимость строительства, а
      также потребность в бюджетных средствах будут определены по результатам
      технического проектирования и подбора комплектующего оборудования.
      Создание парка отечественных судов позволит уйти от зависимости от
      зарубежных перевозчиков, решить ключевой вопрос логистики и сформировать
      основу для дальнейшего развития экспорта продукции АПК. Источник:
      www.agroxxi.ru
    </div>
  );

  return (
    <>
      <Head>
        <title>
          Россия создает собственный флот крупнотоннажных морских зерновозов -
          Berkana
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Россия создает собственный флот крупнотоннажных морских зерновозов"
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

export default rossijasozdaetsobstvennyjflotkrupnotonnazhnyhmorskihzernovozov;
