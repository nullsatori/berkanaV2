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

const selskoehozjajstvovevropuprineslimigrantysblizhnegovostoka = () => {
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
      <em>
        Генетики помогут закончить многолетнюю дискуссию о происхождении
        сельского хозяйства в Европе.
      </em>
      Переход от охоты и собирательства к земледелию и скотоводству называют
      «неолитической революцией». Она привела к значительному росту населения,
      образованию городов и первых цивилизаций. Появившись на Ближнем Востоке
      около 12 тыс. лет назад, сельское хозяйство довольно быстро пересекло море
      и оказалось в Европе. Последние 50 лет учёные спорят о том, как это
      произошло: попали ли скотоводство и земледелие на новый континент вместе с
      ближневосточными «фермерами» или в результате обмена идеями? Дикорастущая
      пшеница-однозернянка. Этот вид пшеницы был окультурен одним из первых.
      Фото: Kamelia Kostadinova.Дикорастущая пшеница-однозернянка. Этот вид
      пшеницы был окультурен одним из первых. Фото: Kamelia Kostadinova. Две
      работы, опубликованные в конце ноября, кажется, способны поставить точку в
      дискуссии. В первой статье, опубликованной в журнале Nature, приводятся
      данные масштабного исследования древней ДНК. Большой коллектив
      исследователей проанализировал геномы 230 древних людей, который жили в
      западной части Евразии между 6500 и 300 годами до н.э. Авторы работы
      провели также первый полногеномный анализ ДНК неолитических «фермеров» с
      Ближнего Востока. Оказалось, что ближневосточные земледельцы были прямыми
      предками своих европейских «коллег». Впрочем, в генах последних есть и
      небольшой «отпечаток» европейских охотников-собирателей. Авторы второй
      статьи, препринт которой опубликован на сайте bioRxiv, пришли к похожим
      выводам. Они сравнили ДНК, извлечённые из останков пятерых людей эпохи
      неолита из северо-западной Турции и северной Греции, живших во время
      появления сельского хозяйства в Европе. Анализ показал поразительное
      генетическое сходство между «фермерами» Греции, Анатолии и Центральной
      Европы. Как видим, «распространителями» сельского хозяйства опять
      выступают земледельцы из Ближнего Востока. Но не стоит думать, что
      земледельцы, придя в Европу, сразу вытеснили местных охотников и
      собирателей. Как показывает недавняя работа, потомки первых европейцев и
      земледельцы-мигранты жили бок о бок на протяжении более двух тысяч лет.
      Всё это время охотники-собиратели сохраняли свой образ жизни. Полученные
      результаты согласуются с данными археологии, антропологии, лингвистики, а
      также других генетических исследований последних лет, согласно которым
      земледелие и скотоводство распространялось на новые территории путём
      миграции людей, а не идей. Конкретные же маршруты, которыми шли скотоводы
      и земледельцы, предстоит ещё уточнить. Не так давно исследователи из
      Испании и Великобритании предложили «морской путь» распространения
      сельского хозяйства. Они обнаружили тесную генетическую связь между
      древним населением Ближнего Востока и жителями Кипра и Крита, которая
      подтверждается, по мнению авторов гипотезы, общими чертами в архитектуре и
      сходством в погребальных сооружениях. Кроме того, на возможность такой
      связи указывают и результаты радиоуглеродной датировки кипрских находок –
      около 10,6 тысячи лет назад. Иными словами, земледелие появилось на Кипре
      и Крите через небольшое время после его возникновения. Первыми
      земледельцами-мигрантами, вероятно, были небольшие группы
      колонистов-мореплавателей, а не сухопутные путешественники. Между тем,
      хотя авторы «морского пути» и считают его наиболее вероятным и ранним
      способом распространения сельского хозяйства, они не отрицают гипотезу об
      «анатолийском» пути первых «фермеров». Оба маршрута могли быть тесно
      связаны. Автор: Егор Антонов Источник:{" "}
      <a href="https://www.nkj.ru/news/27690/">
        https://www.nkj.ru/news/27690/ (Наука и жизнь, Сельское хозяйство в
        Европу принесли «мигранты» с Ближнего Востока)
      </a>
    </div>
  );

  return (
    <>
      <Head>
        <title>
          Сельское хозяйство в Европу принесли «мигранты» с Ближнего Востока -
          Berkana
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Сельское хозяйство в Европу принесли «мигранты» с Ближнего Востока"
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

export default selskoehozjajstvovevropuprineslimigrantysblizhnegovostoka;
