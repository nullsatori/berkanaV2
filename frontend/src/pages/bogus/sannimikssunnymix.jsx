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

const sannimikssunnymix = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2019/09/do.jpg"></a>
      Специально подобранное микроудобрение для всех сельскохозяйственных
      культур, которое органично сочетает натуральный комплекс макро- и микро-
      элементов в хелатной форме, направлен на устранение дефицита элементов
      питания в критические фазы развития растения. Sunny Mix® «Универсальный» –
      это комплексное удобрение третьего поколения, которое содержит
      инновационную систему SuperChelate®.
      <h2>Преимущества</h2>
      <ul>
        <li>
          улучшение требуемых показателей – повышение урожайности, белка,
          клейковины, сахаров и жиров;
        </li>
        <li>снижение стрессового воздействия пестицидов на культуру;</li>
        <li>
          повышение иммунного статуса и способности усвоения питательных веществ
          из почвы и внесенных удобрений;сбалансированное питание в критический
          период развития и биостимулирующее действие на культуру;
        </li>
        <li>
          получение ранней и высококачественной продукции благодаря
          сбалансированному соотношению питательных веществ;
        </li>
        <li>
          быстрый и равномерный рост растений за счет высокой эффективности
          усвоения всех питательных веществ и оптимальной концентрации элементов
          питания.
        </li>
      </ul>
      <h2>Состав</h2>
      Органические кислоты – 25 г/л, Аминокислоты – 25 г/л, Стимуляторы роста
      иммунитета растений – 10 г/л, Прилипатель, сурфактанты, гумектанты.
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/ooo-biona/">ООО "Биона"</a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>СанниМикс (SunnyMix®) - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="СанниМикс (SunnyMix®)"
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

export default sannimikssunnymix;
