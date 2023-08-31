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

const tornado500vr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio-tornado-500-vr.jpg"></a>
        500 г/л 
        <a href="https://berkanabio.ru/category/glifosata-kisloty-v-vide-izopropilaminnoj-soli/">
          Глифосат (изопропиламинная соль)
        </a>
      </strong>
      Универсальный гербицид сплошного действия с повышенным содержанием
      действующего вещества.
      <h2>Преимущества</h2>
      <ul>
        <li>
          большее количество действующего вещества в препаративной форме,
          меньшая норма расхода;
        </li>
        <li>
          полное уничтожение практически всех видов однолетних и многолетних
          двудольных и злаковых сорняков и
        </li>
        <li>древесно-кустарниковой растительности;</li>
        <li>полная безопасность применения в севообороте.</li>
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
              <span>1,5-3</span>
            </td>
            <td>
              <span>
                Поля, предназначенные под посев яровых зерновых, овощных,
                картофеля, бобовых, технических (в т.ч. льна), масличных,
                бахчевых, цветочных, декоративных, газонных и других яровых
                культур
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
              <span>
                Расход рабочей жидкости - 100-200 л/га, при авиационной
                обработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-4</span>
            </td>
            <td>
              <span>
                Поля, предназначенные под посев яровых зерновых, овощных,
                картофеля, бобовых, технических (в т.ч. льна), масличных,
                бахчевых, цветочных, декоративных, газонных и других яровых
                культур
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
              <span>
                Расход рабочей жидкости - 100-200 л/га, при авиационной
                обработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-3</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>
                Однолетние и многолетние злаковые и двудольные сорняки
              </span>
            </td>
            <td>
              <span>Опрыскивание сорняков в период их активного роста.</span>
              <span>
                Расход рабочей жидкости - 100-200 л/га, при авиационной
                обработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-3</span>
            </td>
            <td>
              <span>Поля, предназначенные под посев</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков весной до посева или до
                всходов культуры.
              </span>
              <span>
                Расход рабочей жидкости - 100-200 л/га, при авиационной
                обработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-4</span>
            </td>
            <td>
              <span>Поля, предназначенные под посев</span>
            </td>
            <td>
              <span>
                Многолетние злаковые и двудольные сорняки, в т.ч. злостные
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков весной до посева или до
                всходов культуры.
              </span>
              <span>
                Расход рабочей жидкости - 100-200 л/га, при авиационной
                обработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,2-4,3</span>
            </td>
            <td>
              <span>
                Земли несельскохозяйственного назначения (охранные зоны линий
                электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
                полосы отчуждения железных и шоссейных дорог, аэродромы и другие
                промышленные территории)
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
                Опрыскивание вегетирующих сорняков весной до посева или до
                всходов культуры.
              </span>
              <span>
                Расход рабочей жидкости - 100-200 л/га, при авиационной
                обработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4,3-5,4</span>
            </td>
            <td>
              <span>
                Земли несельскохозяйственного назначения (охранные зоны линий
                электропередач и просеки, трассы газо- и нефтепроводов, насыпи и
                полосы отчуждения железных и шоссейных дорог, аэродромы и другие
                промышленные территории)
              </span>
            </td>
            <td>
              <span>
                Относительно устойчивые нежелательные травянистые растения
                (вейник, тростник и другие), лиственные древесно-кустарниковые
                породы (ива, клен, ясень, вяз, акация и другие)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков весной до посева или до
                всходов культуры.
              </span>
              <span>
                Расход рабочей жидкости - 100-200 л/га, при авиационной
                обработке - 25-50 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/avgust/">Август</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Торнадо 500, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Торнадо 500, ВР"
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

export default tornado500vr;
