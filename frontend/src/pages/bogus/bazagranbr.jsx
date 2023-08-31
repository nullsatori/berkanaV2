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

const bazagranbr = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/08/berkanabazagran-br.jpg"></a>
        <a href="https://berkanabio.ru/category/bentazon/">Бентазон</a> 480 г/л
      </strong>
      Гербицид разработан для уничтожения широкого видового ряда двудольных
      сорняков, появляющихся серди проросших злаков, бобовых и иных полезных
      культур.
      <h2>Преимущества</h2>
      <ul>
        <li>убирает сорняки с первого опрыскивания;</li>
        <li>эффективен против большого числа сорных трав;</li>
        <li>не фитотоксичен;</li>
        <li>
          возникновения резистентности сорных трав к активному веществу
          препарата не выявлено;
        </li>
        <li>
          универсальное средство, обработка возможна в любую из стадий
          вегетации;
        </li>
        <li>
          допускается использование гербицида на полях с подсевом; хорошая
          селективность;
        </li>
        <li>действует против большинства известных сорняков;</li>
        <li>можно ограничится единственным опрыскиванием.</li>
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
              <span>2-4</span>
            </td>
            <td>
              <span>Пшеница озимая, яровая, рожь, ячмень, овес</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов весной с начала кущения зерновых культур в
                ранние фазы роста сорняков (2-4 листа).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-4</span>
            </td>
            <td>
              <span>Пшеница, ячмень, овес яровые с подсевом клевера</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов после развития 1-го тройчатого листа у
                клевера (в фазе кущения зерновых).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>Пшеница, ячмень, овес яровые с подсевом люцерны</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к 2,4-Д и МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов после развития 1-2 настоящих листьев
                люцерны (в фазе кущения зерновых).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Рис</span>
            </td>
            <td>
              <span>
                Осоковые, в т.ч. клубнекамыш компактный и приморский, и
                однолетние двудольные сорняки (частуха, монохория, стрелолист,
                сусак и др.)
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов, начиная с 2-х листьев культуры в ранние
                фазы роста сорняков (2-5 листьев). Для достаточной смачиваемости
                сорняков перед опрыскиванием уровень воды в чеках понижается до
                0-2 см, через 2 дня после опрыскивания чеки опять заполняются
                водой до 10-12 см.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Горох на зерно</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе 5-6 листьев культуры и ранние фазы
                роста сорняков. Принимать во внимание сортовую чувствительность.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-3</span>
            </td>
            <td>
              <span>Соя</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. дурнишник обыкновенный, сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов, начиная с фазы 1-го настоящего листа
                культуры в ранние фазы роста сорняков (2-6 листьев).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3-4</span>
            </td>
            <td>
              <span>Лен-долгунец</span>
            </td>
            <td>
              <span>
                Однолетние двудольные, в т.ч. устойчивые к МЦПА, сорняки
              </span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе “елочки” культуры в ранние фазы
                роста сорняков (3-5 листьев).
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2-3</span>
            </td>
            <td>
              <span>Клевер полевой 2-го года вегетации</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в период весеннего отрастания до начала
                стеблевания культуры при высоте растений 10-15 см.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>Люцерна 1-го года вегетации</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание семенных посевов в фазе 1-2 настоящих листьев
                культуры.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1,5-2</span>
            </td>
            <td>
              <span>Люцерна (старовозрастные семенные посевы)</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>
                Опрыскивание посевов в фазе стеблевания культуры при высоте
                растений 10-15 см.
              </span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>Райграс однолетний</span>
            </td>
            <td>
              <span>Однолетние двудольные сорняки</span>
            </td>
            <td>
              <span>Опрыскивание посевов в фазе кущения культуры.</span>
              <span>Расход рабочей жидкости - 200-300 л/га</span>
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/basf/">БАСФ</a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Базагран, BР - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Базагран, BР" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default bazagranbr;
