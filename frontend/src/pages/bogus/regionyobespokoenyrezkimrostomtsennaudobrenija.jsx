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

const regionyobespokoenyrezkimrostomtsennaudobrenija = () => {
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
        По данным Росстата, наибольший рост зафиксирован по азотно-фосфорным
        удобрениям
      </em>
      Власти ряда регионов обеспокоены ростом цен на минеральные удобрения в
      последние месяцы. По словам курирующего АПК замгубернатора Краснодарского
      края Андрея Коробки, буквально за месяц по отдельным позициям, в том числе
      на азотно-фосфорные удобрения, они увеличились на 20−30% по сравнению с
      2017 годом. Кубанские власти подготовили обращение в Минсельхоз России с
      просьбой оказать содействие в стабилизации ситуации. «Аграрии региона
      считают такое увеличение стоимости необоснованным. И необходимо на
      федеральном уровне выяснить, за счет чего оно произошло, — сказал
      «Агроинвестору» Коробка. — Если оно действительно не имеет под собой
      оснований, то нужно принимать меры по сдерживанию цен, если же обосновано,
      то необходимо разъяснить сельхозпроизводителям, каковы его причины». Такое
      увеличение может негативно отразиться как на экономике аграриев, так и в
      целом на результате их работы в будущем сезоне. «Осенняя посевная кампания
      уже на подходе. И по объективным причинам не все сельхозпроизводители края
      успели к ней подготовиться, в том числе закупить минеральные удобрения.
      Экономия на составляющих для сева может привести к недобору урожая в
      будущем сезоне. А это удар и по продовольственной безопасности, и по
      экономике аграриев. Для Краснодарского края как ведущего аграрного региона
      страны это недопустимо», — подчеркивает Андрей Коробка. Минеральные
      удобрения дорожают и в других регионах, включая Ставрополье и Дагестан,
      пишет газета «Коммерсантъ». Как сообщили изданию в Минсельхозе Дагестана,
      за последние два месяца рост цен составил 15−20%. Там добавили, что
      изменение цен сейчас происходит практически каждую декаду. По данным
      Минсельхоза Ставропольского края, за последний год цены на минеральные
      удобрения практически по всем позициям выросли более чем на 100%. Так,
      например, аммиачная селитра только за последний месяц подорожала с 12 тыс.
      руб./т до 13,9 тыс. руб./т. Пресс-служба Минсельхоза на вопросы
      «Агроинвестора» не ответила, пообещав предоставить позицию ведомства
      позднее. Получить комментарий от Российской ассоциации производителей
      удобрений не удалось. Между тем, данные Росстата подтверждают
      обеспокоенность аграриев: за последний год минеральные удобрения
      подорожали на 15−28%. Так, средняя цена производителей на минеральные
      азотные удобрения в июле составила 10,2 тыс. руб./т — с начала года они
      подорожали примерно на 200 руб./т, однако по сравнению с июлем 2017-го —
      более чем на 2 тыс. руб./т или на 25%. Цена на фосфорные удобрения
      изменилась с 11,8 тыс. руб./т в январе до 12,85 тыс. руб./т в июле этого
      года, данные за прошлый год в базе статведомства недоступны. По калийным
      удобрениям Росстат фиксирует почти двукратное снижение стоимости по
      сравнению с январем (20,2 тыс. руб./т) до 10,2 тыс. руб./т в июле, однако
      это на 15% больше, чем в июле 2017-го. Средняя стоимость трехкомпонентных
      удобрений выросла с 13,1 тыс. руб./т в начале 2018-го до 15,5 тыс. руб./т
      в июле. Год назад они стоили 12,9 тыс. руб./т. Азотно-фосфорные удобрения
      в январе стоили 19,7 тыс. руб./т, в июле средние цены на них превысили
      23,9 тыс. руб./т, тогда как годом ранее они были почти на 28% ниже.
      Девальвация рубля заставляет производителей удобрений поднимать цены, а
      также способствует росту отгрузок продукции на экспорт, который приносит
      более высокую прибыль в пересчете на рубли, напоминает директор экспертной
      группы Veta Дмитрий Жарский. «Рубль, потерявший с начала года 17% к
      доллару, а также бензин, подорожавший на 13%, не могли не привести по
      крайней мере к 20%-ному росту стоимости удобрений, ведь производители
      закладывают в цены не только текущие расходы, но и будущую ожидаемую
      нестабильность цен и увеличение налоговой нагрузки», — сказал он
      «Агроинвестору». По оценке Жарского, на долю удобрений в себестоимости
      сельхозпродукции приходится, в зависимости от вида агрокультуры, от 10% до
      27%. Следовательно, рост цен на удобрения на 20% может привести к
      удорожанию конечного продукта на 2−6%. По оценке исследовательской
      компании «Текарт», российское производство минеральных удобрений (азотные,
      фосфорные, калийные) увеличилось с 17,8 млн т в 2012 году до 22,1 млн т в
      2017-м (в пересчете на 100% действующего вещества). Среднегодовой темп
      роста за этот период составил 4,4%. Лидирующие позиции в структуре выпуска
      принадлежат азотным удобрениям. Их производство по итогам 2017 года
      составило 10 млн т — более 45% от всего объема. По данным Минсельхоза,
      российские аграрии в прошлом году внесли 3,1 млн т д. в. минеральных
      удобрений, что на 11% больше показателя 2016-го. Источник: 
      <a href="http://www.agroinvestor.ru" rel="noopener" target="_blank">
        www.agroinvestor.ru
      </a>
    </div>
  );

  return (
    <>
      <Head>
        <title>
          Регионы обеспокоены резким ростом цен на удобрения - Berkana
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Регионы обеспокоены резким ростом цен на удобрения"
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

export default regionyobespokoenyrezkimrostomtsennaudobrenija;
