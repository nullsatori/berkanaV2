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

const banvelvr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabio-banvel-vr.jpg"></a>
        480 г/л{" "}
        <a href="https://berkanabio.ru/category/dikamba/">дикамбы кислоты</a>
      </strong>
      Cелективный системный гербицид для послевсходового применения против
      однолетних и некоторых многолетних широколистных сорняков на зерновых
      культурах и кукурузе.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>Высокая экономическая эффективность.</li>
        <li>
          Высокая биологическая эффективность против широкого спектра двудольных
          сорняков, включая наиболее опасные из них.
        </li>
        <li>
          Системное действие – препарат проникает в растение как через зеленые
          части, так и через корневую систему.
        </li>
        <li>Подавляет сорняки, устойчивые к 2,4-Д, МЦПА и триазинам.</li>
        <li>Идеальный партнер для баковых смесей.</li>
        <li>
          Обладает выраженным синергизмом с препаратами на основе 2,4-Д, МЦПА,
          сульфонилмочевин, триазинами, глифосатами.
        </li>
        <li>
          Предотвращает возникновение резистентности к препаратам из других
          химических классов (сульфонилмочевины, глифосаты).
        </li>
        <li>Отличная избирательность по отношению к культуре.</li>
        <li>Отсутствие ограничений по применению препарата в севообороте.</li>
        <li>Полное разложение в почве в течение периода вегетации.</li>
        <li>Удобная в применении жидкая препаративная форма;</li>
      </ul>
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
            <td colspan="2" width="138">
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
              <span>0,15-0,3</span>
            </td>
            <td colspan="2" width="147">
              <span>Пшеница, рожь, овес, ячмень</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и 2М-4Х, и
                некоторые многолетние двудольные, включая виды осота (бодяк и
                др.), сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе кущения культуры, 2-4 листьев у
                однолетних и 15 см высоты у многолетних сорных растений.
              </span>
              <span>Расход рабочей жидкости – 150-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,8</span>
            </td>
            <td colspan="2" width="147">
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в том числе устойчивые к 2,4-Д и
                триазинам, и некоторые многолетние двудольные, включая виды
                осота (бодяк), сорные растения
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в фазе 3-5 листьев культуры, 2-4 листьев у
                однолетних и 15 см высоты у многолетних сорных растений.
              </span>
              <span>Расход рабочей жидкости – 150-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,6-2</span>
            </td>
            <td colspan="2" width="147">
              <span>Сенокосные угодья, пастбища</span>
            </td>
            <td>
              <span>Чемерица, лютик, виды щавеля, борщевик</span>
            </td>
            <td>
              <span>Опрыскивание вегетирующих сорняков весной.</span>
              <span>Расход рабочей жидкости – 150-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,6-3,1</span>
            </td>
            <td colspan="2" width="147">
              <span>Сенокосные угодья, пастбища</span>
            </td>
            <td>
              <span>Чемерица, лютики, щавель, борщевик и др.</span>
            </td>
            <td>
              <span>Опрыскивание вегетирующих сорняков осенью.</span>
              <span>Расход рабочей жидкости - 150-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,6-3,1</span>
            </td>
            <td colspan="2" width="147">
              <span>Земли несельскохозяйственного пользования</span>
            </td>
            <td>
              <span>
                Однолетние двудольные и некоторые многолетние двудольные (за
                исключением горчака ползучего) сорняки
              </span>
            </td>
            <td>
              <span>Опрыскивание вегетирующих сорняков.</span>
              <span>Расход рабочей жидкости - 150-400 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_content_wrap">
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      </div>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Банвел, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Банвел, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default banvelvr;
