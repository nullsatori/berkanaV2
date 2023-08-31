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

const ankertrioks = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/02/berkanabio_anker-trio-ks.jpg"></a>
        <a href="https://berkanabio.ru/category/imazalil/">Имазалил</a> 40 г/л +{" "}
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a> 60
        г/л +{" "}
        <a href="https://berkanabio.ru/category/tiabendazol/">Тиабендазол</a> 60
        г/л
      </strong>
      Комбинированный системный протравитель семян зерновых колосовых культур
      для борьбы со всеми основными болезнями.
      <h2>Преимущества</h2>
      <ul>
        <li>производится в России;</li>
        <li>
          спектр действия препарата значительно расширен по сравнению с
          однокомпонентными и двухкомпонентными протравителями;
        </li>
        <li>борется с поверхностной и внутренней семенной инфекцией;</li>
        <li>
          выпускается в жидкой форме и, следовательно, при протравливании не
          образует пыль;
        </li>
        <li>большой период защитного действия;</li>
        <li>низкая вероятность возникновения резистентности у патогенов.</li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <thead>
          <tr>
            <td>
              <strong>Нор­ма при­ме­не­ния пре­па­ра­та</strong>
            </td>
            <td>
              <strong>Куль­ту­ра, об­ра­ба­ты­ва­емый объ­ект</strong>
            </td>
            <td>
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td>
              <strong>
                Спо­соб, вре­мя об­ра­бот­ки, осо­бен­нос­ти при­ме­не­ния
              </strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Твердая головня, пыльная головня, фузариозная и
                гельминтоспориозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Ячмень яровой и озимый</span>
            </td>
            <td>
              <span>
                Каменная головня, пыльная головня, ложная пыльная головня,
                полосатая и темно-бурая пятнистости, фузариозная и
                гельминтоспориозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Фузариозная и гельминтоспориозная корневые гнили, тифулез,
                плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4-0,5</span>
            </td>
            <td>
              <span>Овес</span>
            </td>
            <td>
              <span>
                Пыльная головня, покрытая головня, плесневение семян,
                красно-бурая пятнистость, гельминтоспориозная и фузариозная
                корневые гнили
              </span>
            </td>
            <td>
              <span>
                Протравливание семян перед посевом или заблаговременно.
              </span>
              <span>Расход рабочей жидкости - 10 л/т.</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong> Neoport
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Анкер Трио, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Анкер Трио, КС"
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

export default ankertrioks;
