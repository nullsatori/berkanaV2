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

const evrohimn18p18k18 = () => {
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
      <strong>Водорастворимое удобрение </strong>
      Разработанно для комплексного питания культур в любую фазу роста. Особенно
      эффективны в периоды воздействия стрессов: засухи, переувлажнения,
      повреждения болезнями и вредителями. Рекомендуется применять в баковых
      смесях совместно с ХСЗР: 2–4 обработки для сахарной свеклы, 1–3 – для
      зерновых колосовых и кукурузы.
      <h2>Состав</h2>
      <ul>
        <li>NPK 18:18:18 + 3MgО</li>
        <li>
          (S-3%, MgO-3%, B-0,02%, Cu-0,005%, Mn-0,005%, Zn-0,01%, Fe-0,07%,
          Mo-0,004%)
        </li>
      </ul>
      <h3>Применение</h3>
      Использование готовых водорастворимых NPK исключает необходимость
      смешивания монопродуктов, что значительно экономит время, снижает трудо- и
      энергозатраты, а главное - сохраняет урожай, так как исключает ошибки при
      расчете пропорции компонентов. Продукция от «ЕвроХим» - набор марок с
      различным соотношением питательных макро- и мезоэлементов, дополнительно
      обогащенных бором, медью, марганцем, цинком, железом и молибденом, для
      любых стадий развития культур. Они полностью растворяются в воде, обладают
      100%-ной биодоступностью, в т. ч. за счет хелатирования микроэлементов.
      <h3>Норма расхода</h3>
      2,0 - 4,0
      <strong>Производитель:</strong> ЕвроХим
      <strong>Упаковка:</strong> 25 кг
    </div>
  );

  return (
    <>
      <Head>
        <title>Еврохим N18-P18-K18 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Еврохим N18-P18-K18"
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

export default evrohimn18p18k18;