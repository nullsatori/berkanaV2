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

const dianatvr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/07/berkanabio-dianat-vr.jpg"></a>
        <a href="https://berkanabio.ru/category/dikamba/">
          Дикамба (диметиламинная соль)
        </a>{" "}
        480 г/л
      </strong>
      Это активное и эффективное уничтожение вредоносной флоры, защита культуры
      на высшем уровне.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          двойная защита и двойной эффект, благодаря двухкомпонентному качеству
          активного вещества;
        </li>
        <li>
          эффективное оружие в борьбе с проблемными, трудно поддающимися
          искоренению сорняками;
        </li>
        <li>экономичная формула препарата;</li>
        <li>быстрое проникновение в организм растения-сорняка;</li>
        <li>
          при смешивании с другими препаратами взаимно усиливает уничтожающий
          эффект;
        </li>
        <li>не токсичен для последующих культур севооборота;</li>
        <li>не вызывает у растений даже малейшей резистентности;</li>
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
              <span>0,15-0,3</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая, ячмень, рожь, овес</span>
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
                однолетних и 15 см высоты у многолетних сорняков. Применяется
                как самостоятельно, так и в качестве добавки к 2,4-Д и МЦПА.
              </span>
              <span>Расход рабочей жидкос-ти - 150-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,15-0,3 (А)</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая, ячмень, рожь, овес</span>
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
                однолетних и 15 см высоты у многолетних сорняков.
              </span>
              <span>
                Расход рабочей жидкости при авиаобработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,8</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и триазинам, и
                некото-рые многолетние двудольные, включая виды осота (бодяк и
                др.), сорняки
              </span>
            </td>
            <td>
              <span>
                Применяется как самостоятельно, так и в качестве добавки к 2,4-Д
                и МЦПА при опрыскивании посевов в фазе 3-5 листьев культуры, 2-4
                листьев у однолетних и 15 см высоты у многолетних сорняков.
              </span>
              <span>Расход рабочей жидкости - 150-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,8 (А)</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и триазинам, и
                некото-рые многолетние двудольные, включая виды осота (бодяк и
                др.), сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивании посевов в фазе 3-5 листьев культуры и 15 см высоты
                у многолетних сорняков.
              </span>
              <span>
                Расход рабочей жидкости при авиаобработке - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,6-2</span>
            </td>
            <td>
              <span>Сенокосы</span>
            </td>
            <td>
              <span>Чемерица, лютики, виды щавеля, борщевик и др.</span>
            </td>
            <td>
              <span>Опрыскивание вегетирующих сорняков весной.</span>
              <span>
                Расход рабочей жидкости - 150-400 л/га, при авиаобработке -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,6-2 (А)</span>
            </td>
            <td>
              <span>Сенокосы</span>
            </td>
            <td>
              <span>Чемерица, лютики, виды щавеля, борщевик и др.</span>
            </td>
            <td>
              <span>Опрыскивание вегетирующих сорняков весной.</span>
              <span>
                Расход рабочей жидкости - 150-400 л/га, при авиаобработке -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,6-3,1</span>
            </td>
            <td>
              <span>Сенокосы</span>
            </td>
            <td>
              <span>Чемерица, лютики, виды щавеля, борщевик и др.</span>
            </td>
            <td>
              <span>Опрыскивание вегетирующих сорняков осенью.</span>
              <span>
                Расход рабочей жидкости - 150-400 л/га, при авиаобработке -
                25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,6-3,1 (А)</span>
            </td>
            <td>
              <span>Сенокосы</span>
            </td>
            <td>
              <span>Чемерица, лютики, виды щавеля, борщевик и др.</span>
            </td>
            <td>
              <span>Опрыскивание вегетирующих сорняков осенью.</span>
              <span>
                Расход рабочей жидкости - 150-400 л/га, при авиаобработке -
                25-50 л/га
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table_content_wrap">
        <strong>Производитель:</strong>{" "}
        <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
      </div>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Дианат, ВР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Дианат, ВР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default dianatvr;
