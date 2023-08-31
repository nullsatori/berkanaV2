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

const legatke = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio_legat-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/kletodim/">Клетодим</a> 240 г/л
      </strong>
      Высокоэффективный системный гербицид для борьбы с однолетними и
      многолетними злаковыми сорняками в посевах сахарной свеклы, подсолнечника,
      сои.
      <h2>Преимущество</h2>
      <ul>
        <li>
          Применяется только в смеси с адъювантом, усиливающим гербицидное
          действие препарата.
        </li>
        <li>
          В баковых смесях с гербицидами обладает эффектом синергизма, что
          позволяет снижать рекомендованные дозировки всех компонентов смеси.
        </li>
        <li>Нет ограничения по фазам развития культуры.</li>
        <li>
          При использовании Легата в чистом виде и в баковых смесях растительное
          масло вводится в бак в последнюю очередь.
        </li>
        <li>
          Обработку растений проводить в утренние или вечерние часы при
          температуре 10-25 С.
        </li>
      </ul>
      <h3>Механизм действия</h3>
      Проникает через листья и стебли растения, перемещается к точкам роста и
      блокирует синтез липидов и ацетил карбоксилазы, за счет чего рост растений
      прекращается, происходит отмирание точек роста.
      <h3>Спектр гербицидной активности</h3>
      Легат подавляет все виды однолетних злаковых сорняков, включая самосевы
      зерновых и кукурузы, а также многолетние злаки, в том числе гумай, пырей,
      свинорой.
      <h3>Взаимодействие с другими препаратами</h3>
      Отмечен некоторый антагонизм в баковых смесях с бентазоном. Отличное
      взаимодействие с инсектицидами, а также противодвудольными гербицидами на
      основе бромоксинила, МЦПА, десмедифама, фенмедифама, этофумезата,
      трифлусульфурона, метамитрона, клопиралида.
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
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Свекла сахарная, соя, картофель, подсолнечник, рапс</span>
            </td>
            <td>
              <span>
                Однолетние злаковые сорняки (просо куриное, виды щетинника)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-6 листьев у сорняков с добавлением
                200 мл/га ПАВ Дар-90, Ж (900 г/л этоксилат изодецилового
                спирта). 
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Свекла сахарная, соя, картофель, подсолнечник, рапс</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 2-6 листьев у сорняков с добавлением
                200 мл/га ПАВ Дар-90, Ж (900 г/л этоксилат изодецилового
                спирта). 
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Свекла сахарная, соя, картофель, подсолнечник, рапс</span>
            </td>
            <td>
              <span>
                Многолетние злаковые сорняки, в том числе пырей ползучий
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея ползучего 10-20 см
                независимо от фазы развития культуры с добавлением 200 мл/га ПАВ
                Дар-90, Ж (900 г/л этоксилат изодецилового спирта). 
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>
                Многолетние злаковые сорняки, в том числе пырей ползучий
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея ползучего 10-20 см
                независимо от фазы развития культуры с добавлением 200 мл/га ПАВ
                Дар-90, Ж (900 г/л этоксилат изодецилового спирта). 
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/pestitsidy/neoport/">Neoport</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Легат, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Легат, КЭ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default legatke;
