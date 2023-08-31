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

const kajmanfortevdg = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio_kajman-forte-vdg.jpg"></a>
        <a href="https://berkanabio.ru/category/glifosata-kisloty-v-vide-izopropilaminnoj-soli/">
          Глифосат (изопропиламинная соль)
        </a>{" "}
        687 г/кг
      </strong>
      Гербицид сплошного действия на основе глифосата с высокой концентрацией.
      Используется для обработки паров, полей под посев яровых культур и земель
      несельскохозяйственного назначения.
      <h2>Преимущества</h2>
      <ul>
        <li>Новая пепаративная форма.</li>
        <li>Увеличенное содержание действующего вещества.</li>
        <li>Низкие нормы расхода препарата.</li>
        <li>Удобен в применении и использовании.</li>
        <li>Высокая экономическая эффективность препарата.</li>
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
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>Спо­соб, вре­мя об­ра­бот­ки,</strong>
              <strong>осо­бен­нос­ти при­ме­не­ния</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>1-2</span>
            </td>
            <td>
              <span>Поля предназначенные под посев яровых</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в конце лета или осенью в
                послеуборочный период.
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Поля предназначенные под посев яровых</span>
            </td>
            <td>
              <span>Многолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в конце лета или осенью в
                послеуборочный период.
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-3,5</span>
            </td>
            <td>
              <span>Поля предназначенные под посев яровых</span>
            </td>
            <td>
              <span>
                Злостные многолетние сорняки (свинорой, вьюнок полевой, бодяк
                полевой
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в конце лета или осенью в
                послеуборочный период.
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1-2</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>Многолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-3,5</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>
                Злостные многолетние сорняки (свинорой, вьюнок полевой, бодяк
                полевой и другие корне- отпрысковые)
              </span>
            </td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-3</span>
            </td>
            <td>
              <span>
                Земли несельскохозяйственного назначения (охранные зоны линий
                злектропередач и просеки, трассы газо- и нефтепроводов, насыпи и
                полосы отчуждения железных и шоссейных дорог, аэродромы)
              </span>
            </td>
            <td>
              <span>
                Все виды нежелательных травянистых растений (за исключением
                относительно устойчивых вейника, тростника и других), лиственные
                древесно-кустарниковые породы (осина, береза, ольха)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующей нежелательной растительности.
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га.</span>
              <span>
                В ссзон обработки запрещается сбор ягод и грибов на обработанных
                территориях.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-4</span>
            </td>
            <td>
              <span>
                Земли несельскохозяйственного назначения (охранные зоны линий
                злектропередач и просеки, трассы газо- и нефтепроводов, насыпи и
                полосы отчуждения железных и шоссейных дорог, аэродромы)
              </span>
            </td>
            <td>
              <span>
                Относительно устойчивые нежелательные травя н истые растения
                (вейник, тростник и другие), лиственные древесно-кустарниковые
                породы (ива, клен, ясень, вяз, акация)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующей нежелательной растительности.
              </span>
              <span>Расход рабочей жидкости - 100-200 л/га.</span>
              <span>
                В ссзон обработки запрещается сбор ягод и грибов на обработанных
                территориях.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> 
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Упаковка: </strong>20 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Кайман Форте, ВДГ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Кайман Форте, ВДГ"
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

export default kajmanfortevdg;
