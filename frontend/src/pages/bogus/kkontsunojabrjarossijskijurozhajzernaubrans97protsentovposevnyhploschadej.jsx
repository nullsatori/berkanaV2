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

const kkontsunojabrjarossijskijurozhajzernaubrans97protsentovposevnyhploschadej =
  () => {
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
          Глава Минсельхоза РФ призвал максимально активизировать уборку в
          регионах Центральной России и Поволжья
        </em>
        Развитие отраслей растениеводства и животноводства, а также реализацию
        госпрограммы комплексного развития сельских территорий обсудили 29
        ноября на очередном заседании оперштаба в Минсельхозе России.
        Мероприятие с участием представителей федеральных и региональных
        ведомств, госкомпаний, а также отраслевых союзов и бизнеса, провел
        министр сельского хозяйства Дмитрий Патрушев. Глава Минсельхоза отметил,
        что в целом, несмотря на объективные сложности, показатели АПК в 2022
        году по большинству направлений достаточно уверенные. Урожай зерна убран
        с 97% площади, собрано 155,5 млн тонн. В отдельных регионах Центральной
        России и Поволжья продолжается уборка кукурузы, подсолнечника и сахарной
        свёклы. Министр призвал представителей субъектов в этих округах
        максимально активизироваться, аккумулировать все ресурсы и помочь
        аграриям. Озимый сев в настоящее время проведен на площади 17,7 млн га.
        Отдельно Дмитрий Патрушев подчеркнул необходимость своевременного и
        качественного учета урожая, который должен отражаться во ФГИС «Зерно» и
        региональных органах статистики. Кроме того, с 1 января 2023 года
        начинается этап внесения информации о продуктах переработки зерна,
        сначала – в добровольном порядке, а с 1 марта – в обязательном.
        Переработчикам необходимо своевременно подготовится к новому этапу, при
        этом у них есть возможность прохождения обучения на базе «Центра
        Агроаналитики». Также на заседании обсудили вопросы оперативного
        доведения средств господдержки до аграриев, подготовки к весенним
        полевым работам 2023 года и формирования структуры посевных площадей,
        наращивания объемов производства в животноводстве и другие темы.
        Источник: www.agroxxi.ru
      </div>
    );

    return (
      <>
        <Head>
          <title>
            К концу ноября российский урожай зерна убран с 97 процентов посевных
            площадей - Berkana
          </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout style={(headerStyle, pathStyle)}>
          <HeadNav
            pageName="К концу ноября российский урожай зерна убран с 97 процентов посевных площадей"
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

export default kkontsunojabrjarossijskijurozhajzernaubrans97protsentovposevnyhploschadej;
