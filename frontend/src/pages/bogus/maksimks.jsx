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

const maksimks = () => {
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
        <a href="https://berkanabio.ru/category/fludioksonil/">Флудиоксонил</a>{" "}
        25 г/л
      </strong>
      Фунгицид для предпосевной обработки клубней семенного картофеля, семян
      зерновых колосовых и других культур против патогенов, передающихся через
      семена и почву.
      <h2>Преимущества</h2>
      Максимум удобства:
      <ul>
        <li>допускается заблаговременная обработка;</li>
        <li>
          удобная в применении новая жидкая препаративная форма с добавлением
          сигнального красителя позволяет контролировать качество обработки
          (формула М).
        </li>
      </ul>
      Максимум универсальности:
      <ul>
        <li>
          один препарат для обработки клубней картофеля, семян зерновых, гороха,
          сои, подсолнечника,
        </li>
        <li>
          зерновых, сахарной свеклы, посадочного материала цветочных культур;
        </li>
        <li>
          идеальный компонент для создания смесей с другими фунгицидными и
          инсектицидными препаратами для обработки семян;
        </li>
        <li>
          допускается последовательное использование с ризоторфином при
          предпосевной обработке сои.
        </li>
      </ul>
      Максимум эффективности:
      <ul>
        <li>
          уникальное действующее вещество, аналог пирролнитрина – природного
          антимикотического вещества;
        </li>
        <li>
          один из самых эффективных препаратов для защиты многих культур от
          видов гнилей (фузариоза, фомоза), ризоктониоза и других заболеваний,
          передающихся через почву.
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
              <span>1,5-2</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Снежная плесень, твердая головня, гельминтоспориозная и
                фузариозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости – до 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>
                Фузариозная корневая гниль, питиозная корневая гниль, аскохитоз,
                фузариоз, плесневение семян, церкоспориоз
              </span>
            </td>
            <td>
              <span>Протравливание семян перед посевом.</span>
              <span>Расход рабочей жидкости - 6-8 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Горох на зерно</span>
            </td>
            <td>
              <span>
                Фузариозная, афаномицетная, питиозная корневые гнили,
                фузариозное увядание, аскохитоз, серая гниль, плесневение семян
              </span>
            </td>
            <td>
              <span>Протравливание семян перед посевом.</span>
              <span>Расход рабочей жидкости - 6-8 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Стеблевая головня, снежная плесень, гельминтоспориозная и
                фузариозная корневые гнили, плесневение семян
              </span>
            </td>
            <td>
              <span>Протравливание семян перед посевом.</span>
              <span>Расход рабочей жидкости - 6-8 л/т.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Картофель семенной</span>
            </td>
            <td>
              <span>
                Гнили при хранении: фузариоз, фомоз, альтернариоз, антракноз,
                мокрая гниль, парша серебристая, черная ножка
              </span>
            </td>
            <td>
              <span>Опрыскивание клубней перед закладкой на хранение.</span>
              <span>Расход рабочей жидкости – до 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Картофель семенной</span>
            </td>
            <td>
              <span>Ризоктониоз, фузариоз</span>
            </td>
            <td>
              <span>Опрыскивание клубней перед закладкой на хранение.</span>
              <span>Расход рабочей жидкости – до 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>5-10</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>
                Корнеед всходов (грибы родов фома, питиум, ризоктония,
                афаномицес, фузариум), плесневение семян
              </span>
            </td>
            <td>
              <span>Дражирование семян перед посевом</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>5</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>
                Фомопсис, ложная мучнистая роса, серая, белая, сухая, сухая
                ризопусная, фузариозная гнили, альтернариоз
              </span>
            </td>
            <td>
              <span>
                Протравливание семян непосредственно перед посевом или
                заблаговременно (до 1 года).
              </span>
              <span>Расход рабочей жидкости – до 15 л/т</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Syngenta</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Максим, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Максим, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default maksimks;
