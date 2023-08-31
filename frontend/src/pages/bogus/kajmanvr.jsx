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

const kajmanvr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio_kajman-vr.jpg"></a>
        <a href="https://berkanabio.ru/category/glifosata-kisloty-v-vide-izopropilaminnoj-soli/">
          Глифосат (изопропиламинная соль)
        </a>{" "}
        360 г/л
      </strong>
      Cистемный гербицид сплошного действия для уничтожения всей нежелательной
      растительности, включая одно- и многолетние травы, и древесные растения.
      Активен против пырея ползучего, вьюнка, мышея и ряда других растений
      (около 300 видов) при примене­нии в вегетацию.
      <h2>Преимущества</h2>
      <ul>
        <li>действует на все виды нежелательной растительности;</li>
        <li>
          великолепно решает проблему борьбы с пыреем ползучим и другими
          многолетними сорняками;
        </li>
        <li>незаменим при рекультивации залежей;</li>
        <li>облегчает борьбу с сорняками в парах;</li>
        <li>не обладает последействием на культуры севооборота.</li>
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
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>2-4</span>
            </td>
            <td>
              <span>
                Поля, предназначенные под посев различных культур (яровые
                зерновые, овощные, картофель, технические, масличные, бахчевые,
                а также семенные посевы однолетних цветочных)
              </span>
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
              <span>4-6</span>
            </td>
            <td>
              <span>
                Поля, предназначенные под посев различных культур (яровые
                зерновые, овощные, картофель, технические, масличные, бахчевые,
                а также семенные посевы однолетних цветочных)
              </span>
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
              <span>6-8</span>
            </td>
            <td>
              <span>
                Поля, предназначенные под посев различных культур (яровые
                зерновые, овощные, картофель, технические, масличные, бахчевые,
                а также семенные посевы однолетних цветочных)
              </span>
            </td>
            <td>
              <span>
                Злостные многолетние (свинорой, вьюнок полевой, бодяк полевой и
                др.) сорняки
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
              <span>2-4</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4-6</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>Многолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>6-8</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>
                Злостные многолетние (свинорой, вьюнок полевой, бодяк полевой и
                др.) сорняки
              </span>
            </td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-4</span>
            </td>
            <td>
              <span>
                Земли несельскохозяйственного назначения (охранные зоны линий
                электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
                полосы отчуждения железных и шоссейных дорог, аэродромы и др.
                промышленные территории)
              </span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в период их активного роста.
              </span>
              <span>Расход рабочей жидкости– 100-200 л/га.</span>
              <span>
                Не допускается сбор ягод и грибов в сезон проведения обработки
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4-6</span>
            </td>
            <td>
              <span>
                Земли несельскохозяйственного назначения (охранные зоны линий
                электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
                полосы отчуждения железных и шоссейных дорог, аэродромы и др.
                промышленные территории)
              </span>
            </td>
            <td>
              <span>Многолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в период их активного роста.
              </span>
              <span>Расход рабочей жидкости– 100-200 л/га.</span>
              <span>
                Не допускается сбор ягод и грибов в сезон проведения обработки
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Упаковка: </strong>20 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Кайман, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Кайман, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default kajmanvr;
