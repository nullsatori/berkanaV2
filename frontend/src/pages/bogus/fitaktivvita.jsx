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

const fitaktivvita = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/fitaktiv-vita.png"></a>
        Витаминно-минеральный комплекс и ряд аминокислот ростостимулирующего
      </strong>
      Эффект от препарата ВИТА особенно заметен, когда растение «устало»,
      находится в стрессе или после стрессов, после передозировки химическими
      препаратами. ВИТА активизирует процессы роста, развития, вновь
      возобновляется цветение, происходит более быстрый налив плодов. Ваши
      растения «вздрогнут»-оживут, процесс плодоношения продолжится. Вид и
      качество Ваших растений Вас удивит, за 11 руб/10 соток, обработка по листу
      - 100 руб/ 1 га
      <h2>Состав</h2>
      Макроэлементы: N- 70,8; P-3,5; K-57,2; Mg-3,2 Микроэлементы: Fe-45; Zn-16;
      Cu-5; Mn-65; Mo-5; B-85; I-5; Co-5 Биологические активные вещества, мг/л:
      2-этил-индол-3-n-пропилено 3,6:1,2{60}фуллерен-50, регулятор роста,
      адаптоген, усиливает иммунную систему растения. 4-(индолил-3) масляная
      кислота-10, стимулятор корневой системы. Никотиновая кислота-40, (витамин
      В) развитие корневой системы, усиливает метаболизм. Тиамин-40, (Витамин
      В1) усиливает метаболизм. Пиридоксин-40, (витамин В6) развитие корневой
      системы. Глицин-40, влияет на комплексную устойчивость, усиление
      фотосинтеза и увеличение хлорофилла, ускорение обменных процессов.
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/npo-binam/">НПО “БИНАМ”</a>
      <strong>Упаковка:</strong> 1 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Фитактив Вита - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Фитактив Вита" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default fitaktivvita;