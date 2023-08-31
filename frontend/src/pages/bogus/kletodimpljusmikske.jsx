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

const kletodimpljusmikske = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabio-kletodim-pljus-miks-ke.jpg"></a>
        <a href="https://berkanabio.ru/category/kletodim/">Клетодим</a> 240 г/л
      </strong>
      Универсальный граминицид для борьбы c любыми злаковыми сорняками.
      <h2>Преимущество</h2>
      <ul>
        <li>
          обладает системным действием, быстро проникает во все части сорняков,
          включая корни и корневища;
        </li>
        <li>
          уничтожает практически все виды однолетних и многолетних злаковых
          сорняков, в том числе злостные (пырей, свинорой, гумай);
        </li>
        <li>
          применяется без ограничения по стадии развития культурных растений;
        </li>
        <li>
          обеспечивает высокую эффективности при малых нормах расхода независимо
          от почвенно-климатических условий;
        </li>
        <li>
          в баковых смесях с противодвудольными гербицидами обладает эффектом
          синергизма, что позволяет снижать рекомендованные дозировки всех
          компонентов смеси.
        </li>
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
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Свекла сахарная, соя</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание сорняков в период их активного роста (в фазе от 2-6
                листьев) с добавлением 0,2-0,4 л/га ПАВ Микс, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Свекла сахарная, соя</span>
            </td>
            <td>
              <span>Многолетние злаковые (пырей ползучий) сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте сорняков 10-20 см с добавлением
                0,7-1 л/га ПАВ Микс, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе “елочки” льна, 2-6 листьев у
                однолетних злаковых сорняков в баковой смеси с 0,2-0,4 л/га ПАВ
                Микс, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
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
              <span>Многолетние злаковые (пырей ползучий) сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе “елочки” льна, при высоте пырея
                ползучего 10-20 см в баковой смеси с 0,7-1 л/га ПАВ Микс, Ж.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание сорняков в фазе 2-6 листьев у сорняков независимо
                от фазы развития культуры с добавлением 0,2-0,4 л/га ПАВ Микс, Ж
                (900 г/л фосфата эфира).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>Многолетние злаковые (пырей ползучий) сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея ползучего 10-20 см
                независимо от фазы развития культуры с добавлением 0,7-1 л/га
                ПАВ Микс, Ж (900 г/л фосфата эфира).
              </span>
              <span>Расход рабочей жидко-сти - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Лен масличный</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе “елочки” льна, 2-6 листьев у
                однолетних злаковых сорняков с добавлением 0,2-0,4 л/га ПАВ
                Микс, Ж (900 г/л фосфата эфира).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Лен масличный</span>
            </td>
            <td>
              <span>Многолетние злаковые (пырей ползучий) сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе “елочки” льна, при высоте пырея
                ползучего 10-20см в баковой смеси с 0,7-1 л/га ПАВ Микс, Ж
              </span>
              <span>(900 г/л фосфата эфира).</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,2-0,4</span>
            </td>
            <td>
              <span>Рапс яровой и озимый</span>
            </td>
            <td>
              <span>Однолетние злаковые сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание сорняков в фазе 2-6 листьев у сорняков независимо
                от фазы развития культуры с добавлением 0,2-0,4 л/га Микс, Ж
                (900 г/л фосфата эфира).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,7-1</span>
            </td>
            <td>
              <span>Рапс яровой и озимый</span>
            </td>
            <td>
              <span>Многолетние злаковые сорняки (пырей ползучий)</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов при высоте пырея ползучего 10-20 см
                независимо от фазы развития культуры с добавлением 0,7-1 л/га
                Микс, Ж (900 г/л фосфата эфира).
              </span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/rosagrohim/">РосАгроХим</a>
      <strong>Упаковка: </strong>5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Клетодим Плюс Микс, КЭ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Клетодим Плюс Микс, КЭ"
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

export default kletodimpljusmikske;
