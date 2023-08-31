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

const klonrinke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/04/berkanabio_klonrin-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/zeta-cipermetrin/">
          Зета-циперметрин
        </a>{" "}
        100 г/л +{" "}
        <a href="https://berkanabio.ru/category/klotianidin/">Клотианидин</a>{" "}
        150 г/л
      </strong>
      Системный и контактно-кишечный инсектицид для борьбы с широким спектром
      вредителей на многих культурах.
      <h2>Преимущества препарата</h2>
      <ul>
        <li>
          Обеспечивает уничтожение комплекса вредителей на многих культурах.
        </li>
        <li>
          Содержит два действующих вещества, относящихся к разным химическим
          классам и отличающихся по механизму действия.
        </li>
        <li>
          Обладает быстрым действием на насекомых и длительным периодом защиты
          культуры.
        </li>
        <li>Эффективность против резистентных популяций насекомых.</li>
        <li>
          Клонрин не обладает избирательным действием. И помимо
          специализированных, он также подавляет и многоядных вредителей:
          стеблевого мотылька, озимую совку, совку-гамму, если обработка
          проводится в период начала массовой откладки яиц.
        </li>
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
              <span>0,1-0,2</span>
            </td>
            <td>
              <span>Пшеница озимая</span>
            </td>
            <td>
              <span>Хлебная жужелица</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
              <span>0,1-0,2 (А)</span>
            </td>
            <td>
              <span>Пшеница, ячмень</span>
            </td>
            <td>
              <span>Вредная черепашка, хлебные жуки, трипсы, тли, пьявица</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании — 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
              <span>0,1-0,2 (А)</span>
            </td>
            <td>
              <span>Рапс</span>
            </td>
            <td>
              <span>Рапсовый цветоед</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании — 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>Акациевая огневка, луговой мотылек</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании — 200-400
                л/га, при авиационном - 25-50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Свекловичные блошки, долгоносики</span>
            </td>
            <td>
              <span>Опрыскивание всходов.</span>
              <span>Расход рабочей жидкости - 100-200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Свекловичная листовая тля, луговой мотылек</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1-0,2</span>
              <span>0,1-0,2 (А)</span>
            </td>
            <td>
              <span>
                Пастбища, участки, заселенные cаранчовыми. дикая растительность
              </span>
            </td>
            <td>
              <span>Саранчовые</span>
            </td>
            <td>
              <span>
                Опрыскивание в период массового отрождения личинок. Срок
                возможного пребывания людей на обработанных препаратом площадях
                - не ранее 14 дней, сбор грибов и ягод в сезон обработки не
                разрешается.
              </span>
              <span>
                Расход рабочей жидкости: при наземном опрыскивании - 200- 400
                л/га, при авиационном - 25- 50 л/га
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,06-0,09</span>
              <span>0,06-0,09 (А)</span>
            </td>
            <td>
              <span>Хвойные и лиственные породы</span>
            </td>
            <td>
              <span>
                Хвое- и листогрызущие вредители, в т.ч. непарный
                шелкопряд, сосновый пилильщик и самшитовая огневка
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период развития гусениц и личинок младшего
                возраста. В регионах, где планируется применение препарата, в
                сезон обработки не рекомендуется сбор грибов, ягод, кедровых
                шишек. Заблогавременно, но не менее чем за 10 дней до начала
                обработок, население через средства массовой информации должно
                быть оповещено о необходимых мерах предосторожности, о сроках
                возможного сенокошения и выпаса животных. На границах подлежащих
                обработкам площадей устанавливаются щиты с соответствующей
                информацией.
              </span>
              <span>
                Расход рабочей жидкости 100-200 л/га, при авиаприменении - 10-25
                л/га.
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">ФМРус</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Клонрин, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Клонрин, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default klonrinke;
