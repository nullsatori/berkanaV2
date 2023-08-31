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

const rizoplanzh = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/34534534a.jpeg"></a>
        Pseudomonas fluorescens штамм АР-33 1 млрд КОЕ/мл
      </strong>
      Биологический препарат, который эффективен против гельминтоспориозной
      гнили, мучнистой росы, бурой ржавчины, пятнистостей, фитофтороза
      картофеля, серой и плодовой гнилей на плодовых и ягодниках, черной ножки,
      слизистого и сосудистого бактериозов капусты, обладает биостимулирующим и
      фунгицидным действиями.
      <h2>Преимущества</h2>
      <ul>
        <li>
          способствует повышению урожайности на 10-12 %, по сравнению с
          контрольными значениями;
        </li>
        <li>
          повышает сопротивляемость растений к болезням и неблагоприятным
          воздействиям;
        </li>
        <li>может применяться в любую фазу развития растений;</li>
        <li>
          способствует повышению качества зерна – содержание белка в зерне
          увеличивается на 10-15-20%;
        </li>
        <li>повышает всхожесть семян;</li>
        <li>
          улучшает плодородие почвы, способствует восстановлению микробиоценоза;
        </li>
        <li>
          не вызывает привыкания к данному препарату, что позволяет проводить
          обработки неоднократно, до получения положительного результата;
        </li>
        <li>способствует получению экологически чистых продуктов;</li>
        <li>
          совместим с основными химическими препаратами, кроме ртутьсодержащих.
        </li>
      </ul>
      <h2>Норма расхода</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Нор­ма</strong>
            </td>
            <td colspan="2">
              <strong>Куль­ту­ра</strong>
            </td>
            <td colspan="3">
              <strong>Вред­ный объ­ект</strong>
            </td>
            <td colspan="2">
              <strong>Спо­соб и вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5 -1,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Пшеница озимая</span>
            </td>
            <td colspan="3" width="154">
              <span>Бурая ржавчина, септориоз, мучнистая роса</span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Пшеница яровая</span>
            </td>
            <td colspan="3" width="154">
              <span>Мучнистая роса, ржавчина бурая, септориоз</span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Пшеница яровая</span>
            </td>
            <td colspan="3" width="154">
              <span>
                Гельминтоспориозная корневая гниль, фузариозная корневая гниль,
                плесневение семян
              </span>
            </td>
            <td colspan="2" width="192">
              <span>
                Протравливание семян в день посева или за 1-2 дня до посева.
              </span>
              <span>Расход рабочей жидкости - 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Ячмень яровой</span>
            </td>
            <td colspan="3" width="154">
              <span>
                Мучнистая роса, темно-бурая пятнистость, сетчатая пятнистость,
                ринхоспориоз
              </span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 200 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Ячмень яровой</span>
            </td>
            <td colspan="3" width="154">
              <span>
                Гельминтоспориозная корневая гниль, фузариозная корневая гниль,
                сетчатая и темно-бурая пятнистости, плесневение семян
              </span>
            </td>
            <td colspan="2" width="192">
              <span>
                Протравливание семян в день посева или за 1-2 дня до посева.
              </span>
              <span>Расход рабочей жидкости - 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Свекла сахарная</span>
            </td>
            <td colspan="3" width="154">
              <span>Церкоспороз, мучнистая роса, пероноспороз</span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Картофель</span>
            </td>
            <td colspan="3" width="154">
              <span>Фитофтороз, ризоктониоз,макроспориоз</span>
            </td>
            <td colspan="2" width="192">
              <span>Обработка клубней до или во время посадки.</span>
              <span>Расход рабочей жидкости - 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Капуста</span>
            </td>
            <td colspan="3" width="154">
              <span>Черная ножка, сосудистый бактериоз</span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>5,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Яблоня</span>
            </td>
            <td colspan="3" width="154">
              <span>Парша, монилиоз</span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1000 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Виноград</span>
            </td>
            <td colspan="3" width="154">
              <span>Милдью, оидиум, серая гниль</span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 800-1000 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4,0</span>
            </td>
            <td colspan="2" width="142">
              <span>Земляника</span>
            </td>
            <td colspan="3" width="154">
              <span>Серая гниль</span>
            </td>
            <td colspan="2" width="192">
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости - 300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/agrokom/">ООО "АгроКом"</a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Ризоплан, Ж - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Ризоплан, Ж" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default rizoplanzh;
