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

const fumifasttab = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/3434rerw.jpg"></a>
        Фосфид алюминия 560 г/кг
      </strong>
      Фумифаст – фумигант широкого спектра действия. Препарат эффективен против
      насекомых и клещей: долгоносики амбарный, рисовый и кукурузный, хрущак
      мучной (виды), рыжий мукоед, капровый жук, кожеед ветчинный, мукоед темный
      и суринамский, зерновой точильщик, жук табачный, козявка мавританская,
      зерновка фасолевая, притворяшка австралийский, мучной малый хрущяк,
      огневка амбарная, огневка тропическая, моль зерновая, клещ амбарный, клещ
      домашний, клещ гнилостный. Препарат действует на грызунов, проникающих на
      склад извне.
      <h2>Преимущества</h2>
      <ul>
        <li>тщательная дезинфекция в кратчайшие сроки;</li>
        <li>высокая фумигантная активность;</li>
        <li>быстрое проникновение во все виды упаковочных материалов;</li>
        <li>прост в применении;</li>
        <li>не влияет на качество обрабатываемой продукции.</li>
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
              <strong>Спо­соб вре­мя об­ра­бот­ки</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>
                5 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>Незагруженные зернохранилища</span>
            </td>
            <td>
              <span>Насекомые-вредители запасов (кроме клещей)</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха выше 15 °С. Экспозиция -5
                суток. Допуск людей и загрузка складов после полного
                проветривания и при содержании фосфина в воздухе рабочей зоны -
                не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                5 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>Незагруженные зернохранилища</span>
            </td>
            <td>
              <span>Хлебные клещи</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха выше 15°C. Раскладка таблеток
                на подложки. Экспозиция - 8-10 суток. Произведение концентрации
                на время экспозиции ПКЭ - 450 г·ч/м<sup>3</sup>. Допуск людей и
                загрузка хранилищ после проветривания и при содержании фосфина в
                воздухе рабочей зоны не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>9 г/т</span>
            </td>
            <td>
              <span>
                Зерно продовольственное, семенное, фуражное насыпью в складах, в
                силосах элеваторов и затаренное в мешки под пленкой
              </span>
            </td>
            <td>
              <span>Насекомые-вредители запасов (кроме клещей)</span>
            </td>
            <td>
              <span>
                Фумигация при температуре зерна выше 15 °С. Экспозиция -5
                суток. ПКЭ 25 г·ч/м<sup>3</sup>. Дегазация - не менее 10 суток.
                Реализация при остатке фосфина - не выше МДУ. Допуск людей после
                полного проветривания и при содержании фосфина в воздухе рабочей
                зоны - не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>9 г/т</span>
            </td>
            <td>
              <span>
                Зерно продовольственное, семенное, фуражное насыпью в складах, в
                силосах элеваторов и затаренное в мешки под пленкой
              </span>
            </td>
            <td>
              <span>Хлебные клещи</span>
            </td>
            <td>
              <span>
                Фумигация при температуре зерна выше 15°C. В элеваторах –
                введение таблеток в поток зерна с помощью дозаторов. В складах –
                введение таблеток в насыпь зерна с помощью зондов. Затаренное в
                мешки – раскладка на подложках. Экспозиция – 8-10 суток. ПКЭ -
                450 г·ч/м<sup>3</sup>. Дегазация не менее 10 суток. Реализация
                зерна при остатке фосфина не выше МДУ. Допуск людей после
                проветривания и при содержании фосфина в воздухе не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                2,4 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>
                Зерно злаковых культур, тапиока и шроты в трюмах судов
                балкерного типа и танкерах
              </span>
            </td>
            <td>
              <span>Насекомые-вредители запасов (кроме клещей)</span>
            </td>
            <td>
              <span>
                Фумигация при температуре зерна выше 15 °С. Экспозиция при
                использовании: технологии “фитоэксплофумигация” - 16 суток;
                метода рециркуляции - не менее 10 суток. Дегазация в рейсе и на
                рейде. Досмотр зерна и разгрузка при концентрации фосфина над
                поверхностью зерна на высоте 0,5-1 м - не выше 0,1 мг/м
                <sup>3</sup> и в межзерновом пространстве на глубине 0,3 м от
                поверхности зерна - не выше 50 мг/м<sup>3</sup>. Реализация при
                остатке фосфина - не выше МДУ. Допуск людей после полного
                проветривания и при содержании фосфина в воздухе рабочей зоны не
                выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>9 г/т</span>
            </td>
            <td>
              <span>
                Зерно продовольственное, семенное, фуражное насыпью в вагонах –
                зерновозах в пути следования
              </span>
            </td>
            <td>
              <span>Насекомые - вредители запасов</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха и продукта выше 15 °C.
                Погружение специальных капсул с таблетками препарата в зерно на
                глубину до 2 м через каждый загрузочный люк вагона. Экспозиция
                3-5 суток. ПКЭ - 25 г·ч/м<sup>3</sup>. Дегазация не менее 1
                часа. Реализация зерна при остатке фосфина не выше МДУ. Допуск
                людей при содержании фосфина в воздухе рабочей зоны не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>9 г/т</span>
            </td>
            <td>
              <span>
                Зерно продовольственное, семенное, фуражное насыпью в вагонах –
                зерновозах в пути следования
              </span>
            </td>
            <td>
              <span>Хлебные клещи</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха и продукта выше 15 °C.
                Погружение специальных капсул с таблетками препарата в зерно на
                глубину до 2 м через каждый загрузочный люк вагона. Экспозиция -
                8-10 суток. ПКЭ - 450 г·ч/м<sup>3</sup>. Дегазация не менее
                часа. Реализация зерна при остатке фосфина не выше МДУ. Допуск
                людей при содержании фосфина в воздухе рабочей зоны не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                6 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>Мука, крупа в складах или под пленкой</span>
            </td>
            <td>
              <span>Насекомые-вредители запасов (кроме клещей)</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха и продукта выше 15 °С.
                Раскладка таблеток на подложки. Экспозиция - 5 суток. ПКЭ 7
                г·ч/м<sup>3</sup>для муки и 25 г·ч/м<sup>3</sup> для
                крупы. Дегазация - не менее 2 суток. Реализация при остатке
                фосфина в продукте не выше МДУ. Допуск людей после полного
                проветривания и при содержании фосфина в воздухе рабочей зоны не
                выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                6 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>Мука и крупа в складах или под пленкой</span>
            </td>
            <td>
              <span>Хлебные клещи</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха и продукта выше 15 °С.
                Раскладка таблеток на подложки. Экспозиция – 8-10 суток. ПКЭ –
                450 г·ч/м<sup>3</sup>. Дегазация - не менее 2 суток. Реализация
                при остатке фосфина в продукте не выше МДУ.. Допуск людей после
                полного проветривания и при содержании фосфина в воздухе рабочей
                зоны не выше ПДК.
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                6 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>Зерно­перерабатывающие предприятия</span>
            </td>
            <td>
              <span>Насекомые-вредители запасов (кроме клещей)</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха и продукта выше 15 °С.
                Раскладка таблеток на подложки. Экспозиция - 2 суток. ПКЭ 7
                г·ч/м<sup>3</sup>для муки и 25 г·ч/м<sup>3</sup> для
                крупы. Дегазация - не менее 2 суток. Реализация при остатке
                фосфина в продукте не выше МДУ. Допуск людей и загрузка хранилищ
                после проветривания при содержании фосфина в воздухе рабочей
                зоны не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                5 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>Сухие овощи в складах или под пленкой</span>
            </td>
            <td>
              <span>Насекомые-вредители запасов (кроме клещей)</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха выше 15 °С.
                Раскладка таблеток на подложки. Экспозиция - 5 суток. ПКЭ 7
                г·ч/м<sup>3</sup>. Дегазация- не менее 5 суток. Реализация при
                остатке фосфина в продукте не выше МДУ. Допуск людей и загрузка
                хранилищ после проветривания при содержании фосфина в воздухе
                рабочей зоны не выше ПДК
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                5 г/м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>Сухие овощи в складах или под пленкой</span>
            </td>
            <td>
              <span>Хлебные клещи</span>
            </td>
            <td>
              <span>
                Фумигация при температуре воздуха выше 15°C. Раскладка таблеток
                на подложки. Экспозиция – 8-10 суток. ПКЭ -450 г·ч/м<sup>3</sup>
                . Дегазация не менее 1 суток. Реализация при остатке фосфина в
                продукте не выше МДУ. Допуск людей и загрузка хранилищ после
                проветривания при содержании фосфина в воздухе рабочей зоны не
                выше ПДК
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>Фумифаст, ТАБ - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Фумифаст, ТАБ" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default fumifasttab;
