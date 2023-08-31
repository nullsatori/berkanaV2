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

const triaktivks = () => {
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
        <a href="https://berkanabio.ru/category/azoksistrobin/">
          Азоксистробин
        </a>{" "}
        100 г/л +{" "}
        <a href="https://berkanabio.ru/category/tebukonazol/">Тебуконазол</a>{" "}
        120 г/л +{" "}
        <a href="https://berkanabio.ru/category/ciprokonazol/">Ципроконазол</a>{" "}
        40 г/л
      </strong>
      Комбинированный трехкомпонентный фунгицид и протравитель для защиты
      зерновых культур и риса от широчайшего комплекса заболеваний.
      <h2>Механизм действия</h2>
      <ul>
        <li>
          Азоксистробин является контактным и трансламинарным фунгицидом
          искореняющего, защитного и лечебного действия. Останавливает
          прорастания спор, рост грибницы и спорообразование патогена за счёт
          ингибирования митохондриального дыхания путем блокирования переноса
          электронов от цитохрома b к цитохрому c1 в комплексе ΙΙΙ дыхательной
          цепи. За счет частичного системного действия фунгицид после обработки
          растения может перераспределяться в пределах близ располагающихся
          листьев.
        </li>
        <li>
          Тебуконазол и ципроконазол обладают выраженным системным действием,
          после обработки активно передвигаются по растению. Ингибируют
          превращение ланостерина в эргостерин, специфический стерин, входящий в
          состав клеточных мембран грибов. Подавление синтеза эргостерина
          приводит к необратимым нарушениям в клеточных мембранах гриба и в
          результате – к гибели грибного организма.
        </li>
      </ul>
      <h2>Преимущества</h2>
      <ul>
        <li>
          Уникальное сочетание действующих веществ из двух химических и разными
          механизмами действия.
        </li>
        <li>
          Высочайшая эффективность против семенных, листостебельных инфекций и
          болезней колоса.
        </li>
        <li>
          Продолжительный срок защитного действия, надежная защита от вторичных
          инфекций, максимальное сохранение листового аппарата культурных
          растений.
        </li>
        <li>
          За счет наличия в составе азоксистробина препарат обладает
          физиологическим эффектом, повышает способность культуры сопротивляться
          стрессовым условиям.
        </li>
        <li>
          Обеспечивает высокое и стабильное качество урожая. Способствует
          получению высококачественного урожая пивоваренного ячменя.
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
            <td>0,8 – 1,0</td>
            <td>Пшеница яровая и озимая</td>
            <td>
              Мучнистая роса, бурая ржавчина, стеблевая ржавчина, желтая
              ржавчина, пиренофороз, септориоз листьев и колоса.
            </td>
            <td>
              Опрыскивание в период вегетации; против фузариоза и черни колоса в
              фазу - конец колошения - начало цветения. Расход рабочей жидкости
              - 300 л/га.
            </td>
          </tr>
          <tr>
            <td>1,0</td>
            <td>Пшеница яровая и озимая</td>
            <td>Фузариоз и чернь колоса</td>
            <td>
              Опрыскивание в период вегетации; против фузариоза и черни колоса в
              фазу - конец колошения - начало цветения. Расход рабочей жидкости
              - 300 л/га.
            </td>
          </tr>
          <tr>
            <td>0,8-1,0</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Мучнистая роса, ржавчина карликовая, ржавчина стеблевая, сетчатая
              пятнистость, темно-бурая пятнистость, ринхоспориоз
            </td>
            <td>
              Опрыскивание в период вегетации. Расход рабочей жидкости - 300
              л/га.
            </td>
          </tr>
          <tr>
            <td>0,2-0,3</td>
            <td>Пшеница яровая и озимая</td>
            <td>
              Пыльная головня, твердая головня, фузариозная и
              гельминтоспориозная корневые гнили, снежная плесень, плесневение
              семян, в том числе числе альтернариозная семенная инфекция,
              мучнистая роса (на ранних фазах развития)
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
          <tr>
            <td>0,2-0,3</td>
            <td>Ячмень яровой и озимый</td>
            <td>
              Пыльная головня, ложная пыльная головня, каменная головня,
              гельминтоспориозная и фузариозная корневые гнили, сетчатая
              пятнистость, плесневение семян, в том числе альтернариозная
              семенная инфекция
            </td>
            <td>
              Протравливание семян перед посевом или заблаговременно. Расход
              рабочей жидкости - 10 л/т.
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/sojuzagrohim/">Союзагрохим</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Триактив, КС - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Триактив, КС" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default triaktivks;
