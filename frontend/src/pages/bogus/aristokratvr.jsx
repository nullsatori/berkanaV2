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

const aristokratvr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2018/11/berkanabio-aristokrat-vr.jpg"></a>
        480 г/л{" "}
        <a href="https://berkanabio.ru/category/glifosata-kisloty-v-vide-izopropilaminnoj-soli/">
          глифосата кислоты (в виде изопропиламинной соли)
        </a>
      </strong>
      Системный гербицид общеистребительного действия для борьбы с широким
      спектром однолетних и многолетних злаковых и двудольных сорняков, а также
      древесно-кустарниковой растительностью.
      <h2>Преимущества</h2>
      <ul>
        <li>
          Уникальный гербицид для уничтожения любых сорняков, включаяих корневую
          систему.
        </li>
        <li>
          Используется при возделывании практически всех сельскохозяйственных
          культур.
        </li>
        <li>
          Обладает высокой эффективностью воздействия, вызывает гибель как
          надземной, так и подземной частей сорных растений.
        </li>
        <li>
          Практически не проникает в растения из почвы, поэтому его можно
          использовать до посева (посадки) и до всходов культур.
        </li>
        <li>Не ограничивает севооборот.</li>
        <li>
          Применяется при любых положительных температурах воздуха до
          наступления устойчивых заморозков.
        </li>
        <li>
          Идеальный партнер для баковых смесей с гербицидами из группы
          феноксикислот и сульфонилмочевин.
        </li>
      </ul>
      <h3>Механизм действия</h3>
      Гербицид поглощается растением в течение 4-6 часов, проникая через листья
      и другие зеленые части растения, перераспределяется по всему растению,
      включая корневую систему. Аристократ блокирует синтез незаменимых
      ароматических аминокислот, что ведет к гибели всего растения.
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
              <span>1,5-4</span>
            </td>
            <td>
              <span>Пары</span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в период их активного роста.
              </span>
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
              <span>
                Опрыскивание вегетирующих сорняков в период их активного роста.
              </span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-4</span>
            </td>
            <td>
              <span>
                Поля, предназначенные под посев различных яровых культур
              </span>
            </td>
            <td>
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков осенью в послеуборочный
                период или весной за 2 недели до посева яровых культур.
              </span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4-6</span>
            </td>
            <td>
              <span>
                Поля, предназначенные под посев различных яровых культур
              </span>
            </td>
            <td>
              <span>Многолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков осенью в послеуборочный
                период или весной за 2 недели до посева яровых культур.
              </span>
              <span>Расход рабочей жидкости – 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,25-4,5</span>
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
              <span>Однолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в период их активного роста.
              </span>
              <span>Расход рабочей жидкости – 100-200 л/га.</span>
              <span>
                Не допускается сбор грибов и ягод в сезон проведения обработки
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4,5-6</span>
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
              <span>Многолетние злаковые и двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание вегетирующих сорняков в период их активного роста.
              </span>
              <span>Расход рабочей жидкости – 100-200 л/га.</span>
              <span>
                Не допускается сбор грибов и ягод в сезон проведения обработки
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/lysterra/">LYSTERRA</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Аристократ, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Аристократ, ВР"
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

export default aristokratvr;
