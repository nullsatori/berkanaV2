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

const amistarekstrask = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/05/11111-1.jpg"></a>
        <a href="https://berkanabio.ru/category/azoksistrobin/">
          Азоксистробин
        </a>{" "}
        200 г/л +{" "}
        <a href="https://berkanabio.ru/category/ciprokonazol/">Ципроконазол</a>{" "}
        80 г/л
      </strong>
      Системный комбинированный фунгицид для защиты яровых и озимых зерновых
      колосовых культур от болезней листьев и колоса.
      <h2>Преимущества</h2>
      Обработка АМИСТАР ЭКСТРА позволяет растениям противостоять некритическим
      неблагоприятным условиям окружающей среды (воздушная засуха, абиотические
      стрессы, высокий уровень ультрафиолета и др.) за счет физиологического
      действия.
      <ul>
        <li>
          не только эффективно контролирует заболевания, но и помогает растению
          сформировать максимальный урожай.
        </li>
        <li>
          оказывает существенное влияние на физиологические процессы растения за
          счет регулирования гормонального баланса, активирования
          антиоксидантной защиты, оптимизации водного обмена и усвоения азота.
        </li>
        <li>
          усиливает антистрессовые механизмы в растениях зерновых культур, что
          обеспечивает их потенциальную продуктивность даже в условиях
          абиотического стресса.
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
              <span>0,5-1</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>
                Бурая ржавчина, стеблевая ржавчина, септориоз листьев и колоса,
                чернь колоса, мучнистая роса, пиренофороз
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое - при появлении первых
                признаков заболевания, второе - по необходимости с интервалом 21
                день.
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>Пшеница яровая и озимая</span>
            </td>
            <td>
              <span>Фузариоз колоса</span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: конец колошения - начало
                цветения.
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Ячмень яровой</span>
            </td>
            <td>
              <span>
                Сетчатая пятнистость, темно-бурая пятнистость, ринхоспориоз,
                мучнистая роса, карликовая ржавчина
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое - при появлении первых
                признаков заболевания, второе - при необходимости с интервалом
                21 день.
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Ячмень озимый</span>
            </td>
            <td>
              <span>
                Сетчатая пятнистость, темно-бурая пятнистость, ринхоспориоз,
                мучнистая роса, карли-ковая ржавчина, фузариозная пятнистость
                листьев
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое - при появлении первых
                признаков заболевания, второе - при необходимости с интервалом
                21 день.
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Рожь озимая</span>
            </td>
            <td>
              <span>
                Бурая, стеблевая ржавчина, ринхоспориоз, оливковая плесень
              </span>
            </td>
            <td>
              <span>
                Опрыскивание в период вегетации: первое - при появлении первых
                признаков заболевания, второе - при необходимости с интервалом
                21 день.
              </span>
              <span>Расход рабочей жидкости - 300 л/га.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,8-1</span>
            </td>
            <td>
              <span>Подсолнечник</span>
            </td>
            <td>
              <span>Ложная мучнистая роса, фомоз, септориоз</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,75-1</span>
            </td>
            <td>
              <span>Рапс яровой и озимый</span>
            </td>
            <td>
              <span>Альтернариоз, фомоз, склеротиоз</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-400 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Кукуруза</span>
            </td>
            <td>
              <span>Прикорневые и стеблевые гнили, гельминтоспориоз</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>0,5-1</span>
            </td>
            <td>
              <span>Свекла сахарная</span>
            </td>
            <td>
              <span>Церкоспороз, мучнистая роса, фомоз</span>
            </td>
            <td>
              <span>Опрыскивание в период вегетации.</span>
              <span>Расход рабочей жидкости – 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/singenta/">Сингента</a>
      <strong>Упаковка:</strong> 5 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Амистар Экстра, СК - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Амистар Экстра, СК"
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

export default amistarekstrask;
