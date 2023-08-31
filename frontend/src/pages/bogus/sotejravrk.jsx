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

const sotejravrk = () => {
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
      <strong>Имазамокс 33 г/л + Имазапир 15 г/л</strong>
      Гербицид широкого спектра действия для борьбы с сорной растительностью в
      посевах IMI-устойчивого подсолнечника.
      <h2>Преимущества</h2>
      <ul>
        <li>Самый простой способ контроля заразихи в посевах подсолнечника.</li>
        <li>Длительный защитный период.</li>
        <li>
          Эффективен против как однолетних двудольных, так и однолетних злаковых
          сорняков.
        </li>
        <li>
          Контроль проблемных сорняков (в т.ч. амброзия) в посевах подсолнечника
          после всходов культурных растений.
        </li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
            </td>
            <td colspan="3">
              <strong>Куль­ту­ра, об­ра­ба­ты­ва­емый объ­ект</strong>
            </td>
            <td colspan="2">
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td colspan="2">
              <strong>
                Спо­соб, вре­мя об­ра­бот­ки, осо­бен­нос­ти при­ме­не­ния
              </strong>
            </td>
            <td colspan="2">
              <strong>Срок ожи­да­ния (крат­ность об­ра­бо­ток)</strong>
            </td>
            <td>
              <strong>
                Сро­ки вы­хо­да для руч­ных (ме­ха­ни­зи­ро­ван­ных ра­бот)
              </strong>
            </td>
          </tr>
          <tr>
            <td>1-1,2</td>
            <td colspan="3" width="157">
              Подсолнечник (сорта и гибриды, устойчивые к имидазолинонам)
            </td>
            <td colspan="2" width="136">
              Однолетние злаковые и двудольные сорняки
            </td>
            <td colspan="2" width="193">
              Опрыскивание посевов в ранние фазы роста сорняков  (2-4 листьев) и
              4-5 настоящих листьев у культуры. Ограничения по севообороту:
              можно высевать пшеницу, рожь не менее, чем через 4 месяца;
              люцерну, сою, ячмень, овес, кукурузу, горох-через 9 месяцев.
              Картофель, томаты, табак, лук, просо, салат, подсолнечник, огурцы,
              морковь можно высевать через 19 месяцев, сахарную и столовую
              свеклу, рапс – через 26 месяцев. Расход рабочей жидкости – 200-300
              л/га
            </td>
            <td colspan="2" width="78">
              60(1)
            </td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>2</td>
            <td colspan="3" width="157">
              Земли несесельскохозяйственного назначения
            </td>
            <td colspan="2" width="136">
              Борщевик Сосновского
            </td>
            <td colspan="2" width="193">
              Опрыскивание участков засоренных борщевиком Сосновского при его
              высоте 10-15 см. Расход рабочей жидкости – 300 л/га
            </td>
            <td colspan="2" width="78">
              60(1)
            </td>
            <td>-(3)</td>
          </tr>
          <tr>
            <td>2</td>
            <td colspan="3" width="157">
              Земли несесельскохозяйственного назначения
            </td>
            <td colspan="2" width="136">
              Амброзия полыннолистная
            </td>
            <td colspan="2" width="193">
              Опрыскивание участков засоренных амброзией полыннолистной в фазу
              всходов и до высоты 10-15 см. Расход рабочей жидкости – 300 л/га
            </td>
            <td colspan="2" width="78">
              60(1)
            </td>
            <td>-(3)</td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель: </strong>Гранум
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Сотейра, ВРК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Сотейра, ВРК" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default sotejravrk;
