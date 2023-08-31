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

const psevdobakterin3zh = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/76kea.jpeg"></a>
        Pseudomonas aureofaciens 2х109 КОЕ/мл
      </strong>
      Эффективный биологический фунгицид, основным действующим компонентом
      которого являются живые клетки штамма Pseudomonas aureofaciens ВКМ В-2391
      Д. Жидкий биопрепарат защитного и стимулирующего действия. Имеет высокую
      биологическую активность против целого ряда заболеваний, обладает, помимо
      фунгицидной, высокой бактерицидной и ростостимулирующей активностью,
      снимает стресс растений, вызванный химическими пестицидами и повышает
      содержание клейковины в зерне. Рекомендуется для регионов с высокой
      влажностью и теплиц.
      <h2>Преимущества</h2>
      <ul>
        <li>Не вызывает резистентности.</li>
        <li>Не требует периода ожидания.</li>
        <li>
          Штамм препарата более эффективен, по сравнению с аналогичными
          продуктами.
        </li>
        <li>Оказывает нормализующей действие на почвенную микробиоту.</li>
        <li>
          Снижает стоимость защитных мероприятий, за счет собственной низкой
          цены.
        </li>
        <li>Повышает содержание клейковины в зерне.</li>
        <li>
          Обладает помимо фунгицидной, высокой бактерицидной и
          ростостимулирующей активностью.
        </li>
        <li>
          Снижает стресс у растений, вызванный действием химических пестицидов.
        </li>
        <li>Повышает качество сельскохозяйственной продукции.</li>
        <li>Совместим с пестицидами и агрохимикатами.</li>
        <li>
          Препарат не токсичен, безвреден для человека и теплокровных животных.
        </li>
      </ul>
      <h2>Норма расхода</h2>
      <table class="aligncenter" width="100%">
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
              <span>0,2</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Фузариозная и гельминтоспориозная корневые гнили, плесневение
                семян (при слабом развитии болезней)
              </span>
            </td>
            <td>
              <span>Обработка  семян  за 1-2 суток до посева.</span>
              <span>Расход рабочей жидкости - 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Пшеница яровая</span>
            </td>
            <td>
              <span>
                Мучнистая роса, бурая ржавчина (при слабом развитии болезней)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации в фазы конец кущения – начало
                выхода в трубку.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Фузариозная и гельминтоспориозная корневые гнили, плесневение
                семян (при слабом развитии болезней)
              </span>
            </td>
            <td>
              <span>Обработка  семян  за 1-2 суток до посева.</span>
              <span>Расход рабочей жидкости - 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,1</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Мучнистая роса, бурая ржавчина (при слабом развитии болезней)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации в фазы конец кущения – начало
                выхода в трубку.
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Ризоктониоз (при слабом развитии болезни)</span>
            </td>
            <td>
              <span>Обработка  клубней  за 1-2 суток до посева.</span>
              <span>Расход рабочей жидкости - 10 л/т</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,4</span>
            </td>
            <td>
              <span>Картофель</span>
            </td>
            <td>
              <span>Фитофтороз (при слабом развитии болезни)</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое – профилактическое в
                фазу смыкания рядков, второе – с интервалом 10-15 дней.
              </span>
              <span>Расход рабочей жидкости – 400-600 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bionovatik/">Bionovatik</a>
      <strong>Упаковка:</strong> 1 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Псевдобактерин-3, Ж - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Псевдобактерин-3, Ж"
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

export default psevdobakterin3zh;
