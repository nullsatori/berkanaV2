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

const sredstvazaschityrastenijrezervnajakopija2605 = () => {
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
      <h3>Содержание прайса</h3>
      [su_row][su_column size="1/2" center="no" class=""]
      <a href="#fungicid-protrav">Фунгицидные протравители семян</a>
      <a href="#insekticid-protrav">Инсектицидные протравители семян</a>
      <a href="#insekticid">Инсектицид</a>
      <a href="#bio-insekticid">Био инсектициды</a>
      <a href="#fungicid">Фунгицид</a>
      <a href="#gerbicid-dvudolka">
        Гербициды на зерновых против двудольных сорняков
      </a>
      <a href="#gerb-zlaki">Гербициды на зерновых против злаковых сорняков</a>
      <a href="#gerb-sahsvekla">Гербициды на сахарной свекле</a>
      <a href="#gerb-na-neskolkih">Гербициды на нескольких культурах</a>
      <a href="#gerb-splochnogo">Гербициды сплошного действия</a>
      <a href="#desikant">Десиканты</a>[/su_column] [su_column size="1/2"
      center="no" class=""]<a href="#bio-preparat">Биопрепараты</a>
      <a href="#bio-fungic">Биофунгициды, иммуномодуляторы</a>
      <a href="#destr-solom">Деструкторы соломы</a>
      <a href="#regul-rosta">Регуляторы, стимуляторы роста</a>
      <a href="#agrohim-stimul">Агрохимикаты, микроэлементы</a>
      <a href="#special-udobr">Специальные удобрения</a>
      <a href="#fumig">Фумиганты</a>
      <a href="#adyuvan">Адъюванты, клеи, специальные препараты</a>
      <a href="#rodent">Родентициды</a>[/su_column][/su_row]
      <p>
        <a
          href="https://berkanabio.ru/wp-content/uploads/2020/04/Prais-2020-obnovlenie-04.2020.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          ↓ Скачать прайс 2020 года
        </a>
      </p>
      <table>
        <tbody>
          <tr>
            <td>Наименование препаратов</td>
            <td>Действующие вещества</td>
            <td>Фирма-производитель (регистрант)</td>
            <td>Цена с НДС за 1 л (кг), руб. (100% оплата)</td>
            <td>Цена с НДС за 1 л (кг), руб. (кредит 30/70)</td>
            <td>Норма внесения, л(кг)/га(т)</td>
            <td>Упако-вка</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="fungicid-protrav"></a>ФУНГИЦИДНЫЕ ПРОТРАВИТЕЛИ СЕМЯН
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/anker-trio-ks/">Анкер Трио</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiabendazol/">
                  Тиабендазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  тебуконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/imazalil/">имазалил</a>{" "}
                (60 + 60 + 60 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>2 000,00</td>
            <td>2 240,00</td>
            <td>0,4-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/barer-kolor-ks/">Барьер Колор</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  Тебуконазол
                </a>{" "}
                60 г/л
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>858,00</td>
            <td>960,96</td>
            <td>0,4-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/vitavaks-200-ff-vsk/">
                Витавакс 200 ФФ
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/karboksin/">
                  Карбоксин
                </a>{" "}
                + <a href="https://berkanabio.ru/category/tiram/">тирам</a> (200
                + 200 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/arista-lajfsajens/">
                <span>Ариста ЛайфСайенс</span>
              </a>
            </td>
            <td>952,00</td>
            <td>1 066,24</td>
            <td>1,5-4</td>
            <td>20 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/vitacit-ks/">Витацит</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiabendazol/">
                  Тиабендазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/flutriafol/">
                  флутриафол
                </a>{" "}
                (25 + 25 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>1 130,00</td>
            <td>1 265,60</td>
            <td>1,5-2</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/dajmond-super-ks/">Даймонд Супер</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/difenokonazol/">
                  Дифеноконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/ciprokonazol/">
                  ципроконазол
                </a>{" "}
                (30 + 6,3 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>1 540,00</td>
            <td>1 724,00</td>
            <td>0,75-1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/dividend-star-ks/">Дивиденд Cтар</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/difenokonazol/">
                  Дифеноконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/ciprokonazol/">
                  ципроконазол
                </a>{" "}
                (30 + 6,3 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>1 400,00</td>
            <td>1 568,00</td>
            <td>0,75-1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/dospeh-3-ks/">Доспех 3</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imazalil/">Имазалил</a>{" "}
                + 
                <a href="https://berkanabio.ru/category/tiabendazol/">
                  тиабендазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  тебуконазол
                </a>{" "}
                (60 + 60 + 40 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/lysterra/">
                <span>LYSTERRA</span>
              </a>
            </td>
            <td>2 121,00</td>
            <td>2 375,52</td>
            <td>0,4-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/inshur-perform-ks/">
                Иншур Перформ
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tritikonazol/">
                  Тритиконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/piraklostrobin/">
                  пираклостробин
                </a>{" "}
                (80 + 40 /л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>3 550,00</td>
            <td>3 976,00</td>
            <td>0,4-0,6</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/lamador-ks/">Ламадор</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/protiokonazol/">
                  Протиоконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  тебуконазол
                </a>{" "}
                (250 + 150 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>10 548,00</td>
            <td>11 854,00</td>
            <td>0,15-0,2</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/lamador-pro-ks/">Ламадор Про</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/protiokonazol/">
                  Протиоконазол
                </a>
                -100 г/л,{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  Тебуконазол
                </a>
                -60 г/л, Флуопирам - 20 г/л
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>5 292,00</td>
            <td>5 927,00</td>
            <td>0,4-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/maksim-ks/">Максим</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fludioksonil/">
                  Флудиоксонил
                </a>{" "}
                (25 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>1 131,00</td>
            <td>2 386,72</td>
            <td>0,2-10</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/maksim-pljus-ks/">Максим Плюс</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fludioksonil/">
                  Флудиоксонил
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/difenokonazol/">
                  Дифеноконазол
                </a>{" "}
                25+25 г/л
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>2 290,00</td>
            <td>2 564,80</td>
            <td>1,2-1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/tir-tps/">ТИР</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiram/">Тирам</a>{" "}
                (ТМТД),{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  Тебуконазол
                </a>{" "}
                (400 + 25 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>1 600,00</td>
            <td>1 792,20</td>
            <td>1-1,2</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/tmtd-tps/">ТМТД</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiram/">Тирам</a> (400
                г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>1 045,00</td>
            <td>1 170,40</td>
            <td>3,0-12</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/triaktiv-ks/">Триактив</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/azoksistrobin/">
                  Азоксистробин
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  Тебуконазол
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/ciprokonazol/">
                  Ципроконазол
                </a>{" "}
                100 г/л+120 г/л+40 г/л
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/sojuzagrohim/">
                <span>Союзагрохим</span>
              </a>
            </td>
            <td>2 970,00</td>
            <td>3 326,00</td>
            <td>0,2-1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="insekticid-protrav"></a>ИНСЕКТИЦИДНЫЕ ПРОТРАВИТЕЛИ
                  СЕМЯН
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/dividend-suprim-ks/">
                Дивиденд Суприм
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/difenokonazol/">
                  Дифеноконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/mefenoksam/">
                  мефеноксам
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tiametoksam/">
                  Тиаметоксам
                </a>{" "}
                (92,3 + 36,92 + 3,08 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>1 859,68</td>
            <td>2 082,84</td>
            <td>2,0-2,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/imidalit-tps/">Имидалит ТПС</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/bifentrin/">
                  Бифентрин
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/imidakloprid/">
                  Имидаклоприд
                </a>{" "}
                (500 + 50 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>6 300,00</td>
            <td>7 056,00</td>
            <td>0,1-8</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kontador-maksi-ks/">
                Контадор Макси
              </a>
            </td>
            <td>
              <span>
                600 г/л{" "}
                <a href="https://berkanabio.ru/category/imidakloprid/">
                  Имидаклоприд
                </a>
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>3 600,00</td>
            <td>4 032,00</td>
            <td>0,6-12,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kajzer-ks/">Кайзер</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiametoksam/">
                  Тиаметоксам
                </a>{" "}
                (350 г/л)
              </span>
            </td>
            <td>
              <span>Джи Ди Эс Кемикал</span>
            </td>
            <td>6 000,00</td>
            <td>6 720,00</td>
            <td>0,2-14</td>
            <td>5л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kortik-vr/">Кортик</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiametoksam/">
                  Тиаметоксам
                </a>{" "}
                (350 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>6 000,00</td>
            <td>6 720,00</td>
            <td>0,8-1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/prestizh-ks/">Престиж</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imidakloprid/">
                  Имидаклоприд
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/pencikuron/">
                  пенцикурон
                </a>{" "}
                (140 + 150 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>2 550,00</td>
            <td>2 856,00</td>
            <td>0,7-1</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/selest-maks-ks/">Селест Макс</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiametoksam/">
                  Тиаметоксам
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/fludioksonil/">
                  Флудиоксонил
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  Тебуконазол
                </a>{" "}
                125+25+15 г/л
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>3 600,00</td>
            <td>4 032,00</td>
            <td>1,5-2</td>
            <td>20 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/selest-top-ks/">Селест Топ</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiametoksam/">
                  Тиаметоксам
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/fludioksonil/">
                  Флудиоксонил
                </a>
                ,{" "}
                <a href="https://berkanabio.ru/category/difenokonazol/">
                  Дифеноконазол
                </a>{" "}
                262,5+25+25 г/л
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>6 740,40</td>
            <td>7 549,25</td>
            <td>0,4-2,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/scenik-kombi-ks/">Сценик Комби</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/klotianidin/">
                  Клотианидин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/fluoksastrobin/">
                  флуоксастробин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/protiokonazol/">
                  протиоконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  тебуконазол
                </a>{" "}
                (250 + 37,5 + 37, 5 + 5 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>7 250,00</td>
            <td>8 120,00</td>
            <td>1,25-1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/tabu-vsk/">Табу</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imidakloprid/">
                  Имидаклоприд
                </a>{" "}
                (500 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/avgust/">
                <span>ЗАО Фирма "Август"</span>
              </a>
            </td>
            <td>6 426,00</td>
            <td>7 197,12</td>
            <td>0,5-15,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="insekticid"></a>ИНСЕКТИЦИДЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ajvengo-ke/">Айвенго</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
                  Альфа-циперметрин
                </a>{" "}
                (100 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/rosagrohim/">
                <span>ООО НПО "РосАгроХим"</span>
              </a>
            </td>
            <td>1 000,00</td>
            <td>1 120,00</td>
            <td>0,07-0,20</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/aktellik-ke/">Актеллик</a>
            </td>
            <td>
              <span>Пиримифос-метил (500 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>4 227,60</td>
            <td>4 734,91</td>
            <td>0,4 мл/м2</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/borej-sk/">Борей</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imidakloprid/">
                  Имидаклоприд
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
                  лямбда-цигалотрин
                </a>{" "}
                (150+50 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/avgust/">
                <span>ЗАО Фирма "Август"</span>
              </a>
            </td>
            <td>3 960,00</td>
            <td>4 435,20</td>
            <td>0,08 - 0,3</td>
            <td>1л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/bifas-ks/">Бифас</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imidakloprid/">
                  Имидаклоприд
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
                  Альфа-Циперметрин
                </a>{" "}
                (300+100 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/alfahimgrupp/">
                <span>АльфаХимгрупп</span>
              </a>
            </td>
            <td>3 500,00</td>
            <td>3 920,00</td>
            <td>0,1-0,15</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ditoks-ke/">
                Дитокс, Диметус, ДИ-68
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/dimetoat/">Диметоат</a>{" "}
                (400 г/л)
              </span>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                  ФМРус
                </a>
              </span>
            </td>
            <td>940,00</td>
            <td>1 052,80</td>
            <td>0,5-2,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/klonrin-ke/">Клонрин</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/zeta-cipermetrin/">
                  Зета-циперметрин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/klotianidin/">
                  Клотианидин
                </a>{" "}
                (100+150 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>3 510,00</td>
            <td>3 931,20</td>
            <td>0,1-0,2</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/karate-zeon-mks/">Каратэ Зеон</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
                  Лямбда-цигалотрин
                </a>{" "}
                (50 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>2 223,60</td>
            <td>2 490,43</td>
            <td>0,1-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/konfidor-ekstra-vdg/">
                Конфидор Экстра
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imidakloprid/">
                  Имидаклоприд
                </a>{" "}
                (700 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>14 500,00</td>
            <td>16 240,00</td>
            <td>0,03-0,45</td>
            <td>12х0,5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/lyambda-s-ke/">Лямбда С</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
                  Лямбда-цигалотрин
                </a>{" "}
                (50 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/rosagrohim/">
                <span>ООО НПО "РосАгроХим"</span>
              </a>
            </td>
            <td>1 000,00</td>
            <td>1 120,00</td>
            <td>0,1-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/taran-ve/">Таран</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/zeta-cipermetrin/">
                  Зета-циперметрин
                </a>{" "}
                (100 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>2 340,00</td>
            <td>2 620,80</td>
            <td>0,07-0,15</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/fatrin-ke/">Фатрин</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/alfa-cipermetrin/">
                  Альфа-циперметрин
                </a>{" "}
                (100 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>1 000,00</td>
            <td>1 120,00</td>
            <td>0,07-0,20</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ciperus-ke/">Циперус</a>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>Циперметрин (250г/л)</span>
              </a>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>1 270,00</td>
            <td>1 422,40</td>
            <td>0,1-0,32</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/eforiya-ks/">Эфория</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/lyambda-cigalotrin/">
                  Лямбда-цигалотрин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tiametoksam/">
                  тиаметоксам
                </a>{" "}
                (106 + 141 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>4 664,40</td>
            <td>5 224,13</td>
            <td>0,1-0,3</td>
            <td>12х1 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="bio-insekticid"></a>БИОИНСЕКТИЦИДЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioslip-bv-zh/">Биослип БВ</a>
            </td>
            <td>
              <span>Beauveria bassiana</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>490,00</td>
            <td>548,80</td>
            <td>3</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/metarizin-zh/">Метаризин, Ж</a>
            </td>
            <td>
              <span>Metarhizium anisopliae P-72</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/agrokom/">
                <span>Агроком</span>
              </a>
            </td>
            <td>300,00</td>
            <td>336,00</td>
            <td>3</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="fungicid"></a>ФУНГИЦИДЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/abakus-ultra-se/">Абакуc Ультра</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/piraklostrobin/">
                  Пираклостробин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/epoksikonazol/">
                  эпоксиконазол
                </a>{" "}
                (62,5 + 62,5 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>1 428,00</td>
            <td>1 599,36</td>
            <td>1,0-1,75</td>
            <td>10л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/alto-turbo-ke/">Альто Турбо</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/propikonazol/">
                  Пропиконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/ciprokonazol/">
                  ципроконазол (250 + 160 г/л)
                </a>
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/ciprokonazol/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/ciprokonazol/">
                3 684,00
              </a>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/ciprokonazol/">
                4 126,08
              </a>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/ciprokonazol/">0,3-0,7</a>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/ciprokonazol/">5 л</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/category/ciprokonazol/">
                Алькор Супер
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/propikonazol/">
                  Пропиконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/ciprokonazol/">
                  ципроконазол
                </a>{" "}
                (250 + 80 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>2 340,00</td>
            <td>2 620,80</td>
            <td>0,4-0,70</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/alto-super-ke/">Альто Супер</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/propikonazol/">
                  Пропиконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/ciprokonazol/">
                  ципроконазол
                </a>{" "}
                (250 + 80 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>2 718,00</td>
            <td>3 044,16</td>
            <td>0,4-0,75</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/amistar-ekstra-sk/">
                Амистар Экстра
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/azoksistrobin/">
                  Азоксистробин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/ciprokonazol/">
                  ципроконазол
                </a>{" "}
                (200 + 80 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>3 356,40</td>
            <td>3 759,17</td>
            <td>0,5 - 1</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/alfa-feniks-ks/">Альфа Феникс</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/flutriafol/">
                  Флутриафол
                </a>{" "}
                (250 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/alfahimgrupp/">
                <span>АльфаХимгрупп</span>
              </a>
            </td>
            <td>1 650,00</td>
            <td>1 848,00</td>
            <td>0,1-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/zamir-emv/">Замир</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/prohloraz/">
                  Прохлораз
                </a>{" "}
                +
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  {" "}
                  тебуконазол
                </a>{" "}
                (267+133 г/л)
              </span>
            </td>
            <td>
              <span>Адама Рус</span>
            </td>
            <td>1 250,00</td>
            <td>1 400,00</td>
            <td>0,8 - 1,2</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kazim-ks/">Казим</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/karbendazim/">
                  Карбендазим
                </a>{" "}
                (500 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>980,00</td>
            <td>1 097,60</td>
            <td>0,3-0,8</td>
            <td>4х5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/komfort-ks/">Комфорт</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/karbendazim/">
                  Карбендазим
                </a>{" "}
                (500 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/lysterra/">
                <span>LYSTERRA</span>
              </a>
            </td>
            <td>1 038,50</td>
            <td>1 163,12</td>
            <td>0,3-1,5</td>
            <td>10л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/optimo-ke/">Оптимо</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/piraklostrobin/">
                  Пираклостробин
                </a>{" "}
                (200 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>3 263,88</td>
            <td>3 655,55</td>
            <td>0,5-1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/piktor-ks/">Пиктор</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/dimoksistrobin/">
                  Димоксистробин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/boskalid/">боскалид</a>{" "}
                (200 + 200 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>7 311,28</td>
            <td>8 188,63</td>
            <td>0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/profiks-ke/">Профикс</a>,{" "}
              <a href="http://berkanabio.ru/timus-ke/">Тимус</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/propikonazol/">
                  Пропиконазол
                </a>{" "}
                250 г/л)
              </span>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                  ФМРус
                </a>
                , Листерра
              </span>
            </td>
            <td>1 487,40</td>
            <td>1 665,89</td>
            <td>0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/reks-pljus-se/">Рекс Плюс</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/epoksikonazol/">
                  Эпоксиконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/fenpropimorf/">
                  фенпропиморф
                </a>{" "}
                (84+250 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>1 464,38</td>
            <td>1 640,11</td>
            <td>0,8-1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/reks-duo-ks/">Рекс Дуо</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiofanat-metil/">
                  Тиофанат-метил
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/epoksikonazol/">
                  эпоксиконазол
                </a>{" "}
                (310 + 187 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>2 692,80</td>
            <td>3 015,94</td>
            <td>0,4-0,6</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/reks-s-ks/">Рекс С</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/epoksikonazol/">
                  Эпоксиконазол
                </a>{" "}
                (125 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>1 483,20</td>
            <td>1 661,18</td>
            <td>0,6-0,8</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ridomil-gold-mc-vdg/">
                Ридомил Голд МЦ
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/mankoceb/">Манкоцеб</a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/mefenoksam/">
                  мефеноксам
                </a>{" "}
                (640 + 40 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>1 750,80</td>
            <td>1 960,90</td>
            <td>2,5</td>
            <td>10х1 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/tanos-vdg/">Танос</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/famoksadon/">
                  Фамоксадон
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/cimoksanil/">
                  цимоксанил
                </a>{" "}
                (250 + 250 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/djupon/">
                <span>ООО "Дюпон Наука и Технологии"</span>
              </a>
            </td>
            <td>5 218,00</td>
            <td>5 844,16</td>
            <td>0,4-0,6</td>
            <td>10х0,4 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/triafol-ks/">Триафол</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/flutriafol/">
                  Флутриафол
                </a>{" "}
                (250 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/afd-kemikals/">
                <span>АФД Кемикалс</span>
              </a>
            </td>
            <td>1 455,00</td>
            <td>1 570,00</td>
            <td>0,25-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/falkon-ke/">Фалькон</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/spiroksamin/">
                  Спироксамин
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tebukonazol/">
                  тебуконазол
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/triadimenol/">
                  триадименол
                </a>{" "}
                (250 + 167 + 43 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>2 420,00</td>
            <td>2 710,40</td>
            <td>0,4-0,6</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/feniks-duo-ks/">Феникс Дуо</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tiofanat-metil/">
                  Тиофанат-метил
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/flutriafol/">
                  флутриафол
                </a>{" "}
                (310+187 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/alfahimgrupp/">
                <span>АльфаХимгрупп</span>
              </a>
            </td>
            <td>2 100,00</td>
            <td>2 352,00</td>
            <td>0,5-0,6</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/shirlan-sk/">Ширлан</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fluazinam/">
                  Флуазинам
                </a>{" "}
                (500 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>9 505,20</td>
            <td>10 645,82</td>
            <td>0,3-0,4</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="gerbicid-dvudolka"></a>ГЕРБИЦИДЫ НА ЗЕРНОВЫХ КУЛЬТУРАХ
                  ПРОТИВ ДВУДОЛЬНЫХ СОРНЯКОВ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/alfa-dikamba-vrk/">Альфа-Дикамба</a>
            </td>
            <td>
              <span>
                480 г/л,{" "}
                <a href="https://berkanabio.ru/category/dikamba/">Дикамба</a>{" "}
                (диэтиламиновая соль)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/alfahimgrupp/">
                <span>АльфаХимгрупп</span>
              </a>
            </td>
            <td>1 600,00</td>
            <td>1 792,00</td>
            <td>0,15-0,3</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/balerina-se/">Балерина</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/2-4-d-2-etilgeksilovyj-efir/">
                  2,4 - Д (сложный 2-этилгексиловый эфир)
                </a>
                +
                <a href="https://berkanabio.ru/category/florasulam/">
                  флорасулам
                </a>{" "}
                (410 г/л+7,4 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/avgust/">
                <span>АО Фирма "Август"</span>
              </a>
            </td>
            <td>1 488,00</td>
            <td>1 666,56</td>
            <td>0,3-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/balet-ke/">Балет</a>
            </td>
            <td>
              <span>
                2,4-Д (малолетучие эфиры С7-С9),{" "}
                <a href="https://berkanabio.ru/category/florasulam/">
                  Флорасулам
                </a>{" "}
                - 550 г/л +7,4 г/л
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/lysterra/">
                <span>LYSTERRA</span>
              </a>
            </td>
            <td>1 490,75</td>
            <td>1 669,64</td>
            <td>0,3-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/grand-pljus-vdg/">Гранд Плюс</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tribenuron-metil/">
                  Трибенурон-метил
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>12 800,00</td>
            <td>14 336,00</td>
            <td>0,01 - 0,025</td>
            <td>10х0,6 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/greneri-vdg/">Грэнери</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tribenuron-metil/">
                  Трибенурон-метил
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/rosagrohim/">
                <span>ООО НПО "РосАгроХим"</span>
              </a>
            </td>
            <td>12 500,00</td>
            <td>14 000,00</td>
            <td>0,015-0,025</td>
            <td>100 г</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/dianat-vr/">Дианат</a>
            </td>
            <td>
              <span>
                480 г/л,{" "}
                <a href="https://berkanabio.ru/category/dikamba/">Дикамба</a>{" "}
                (диэтиламиновая соль)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>1 759,20</td>
            <td>1 970,30</td>
            <td>0,15-0,3</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/banvel-vr/">Банвел</a>
            </td>
            <td>
              <span>
                480 г/л,{" "}
                <a href="https://berkanabio.ru/category/dikamba/">Дикамба</a>{" "}
                (диэтиламиновая соль)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>2 386,80</td>
            <td>2 673,22</td>
            <td>0,15-0,8</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kalibr-vdg/">Калибр</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
                  Тифенсульфурон-метил
                </a>{" "}
                +
                <a href="https://berkanabio.ru/category/tribenuron-metil/">
                  трибенурон-метил
                </a>{" "}
                (500 + 250 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/fmc/">
                <span>FMC</span>
              </a>
            </td>
            <td>15 482,00</td>
            <td>17 339,84</td>
            <td>0,03 - 0,05</td>
            <td>0,5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/logran-vdg/">Логран</a>
            </td>
            <td>
              <span>Триасульфорон (750 г/кг)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>31 332,00</td>
            <td>35 091,84</td>
            <td>0,0065 - 0,01</td>
            <td>0,12 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/prima-se/">Прима</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/2-4-d-2-etilgeksilovyj-efir/">
                  2,4 - Д (сложный 2-этилгексиловый эфир)
                </a>
                +
                <a href="https://berkanabio.ru/category/florasulam/">
                  флорасулам
                </a>{" "}
                (300 г/л +6,25 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>1 420,80</td>
            <td>1 591,30</td>
            <td>0,4-0,6</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/status-grand-vdg/">Статус Гранд</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tribenuron-metil/">
                  Трибенурон-метил
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/florasulam/">
                  флорасулам
                </a>{" "}
                (500 + 104 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>18 800,00</td>
            <td>21 056,00</td>
            <td>0,03 - 0,05</td>
            <td>10х0,6 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/status-maks-vdg/">Статус Макс</a>
            </td>
            <td>
              <span>
                500 г/кг{" "}
                <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
                  тифенсульфурон — метила
                </a>{" "}
                + 250 г/кг{" "}
                <a href="https://berkanabio.ru/category/tribenuron-metil/">
                  трибенурон — метила
                </a>{" "}
                + 80 г/кг{" "}
                <a href="https://berkanabio.ru/category/florasulam/">
                  флорасулама
                </a>
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>19 750,00</td>
            <td>22 120,00</td>
            <td>0,03 - 0,05</td>
            <td>10х0,6 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/floraks-ks/">Флоракс</a>
            </td>
            <td>
              <span>
                {" "}
                550 г/л {" "}
                <a href="https://berkanabio.ru/category/2-4-d-2-etilgeksilovyj-efir/">
                  2,4-Д (2-этилгексиловый эфир)
                </a>
                + 7,4 г/л{" "}
                <a href="https://berkanabio.ru/category/florasulam/">
                  Флорасулам
                </a>
                 
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/afd-kemikals/">
                <span>АФД Кемикалс</span>
              </a>
            </td>
            <td>1 300,00</td>
            <td>1 456,00</td>
            <td>0,3-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/endimion-ke/">Эндимион</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/2-4-d-2-etilgeksilovyj-efir/">
                  2,4 - Д (сложный 2-этилгексиловый эфир)
                </a>{" "}
                (564 г/л к-ты)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>680,00</td>
            <td>761,60</td>
            <td>0,6-0,8</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="gerb-zlaki"></a>ГЕРБИЦИДЫ НА ЗЕРНОВЫХ КУЛЬТУРАХ ПРОТИВ
                  ЗЛАКОВЫХ СОРНЯКОВ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/avantiks-100-ke/">Авантикс 100</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
                  Феноксапроп-П-этил
                </a>{" "}
                + антидот{" "}
                <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
                  клоквинтосет-мексил
                </a>{" "}
                (100 + 27 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>1 870,00</td>
            <td>2 094,40</td>
            <td>0,4-0,9</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/avantiks-ekstra-7-5-emv/">
                Авантикс Экстра 7.5
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
                  Феноксапроп-П-этил
                </a>{" "}
                + антидот{" "}
                <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
                  клоквинтосет-мексил
                </a>{" "}
                (69 + 34,5 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/lysterra/">
                <span>LYSTERRA</span>
              </a>
            </td>
            <td>1 408,33</td>
            <td>1 577,33</td>
            <td>0.8 - 1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/aksial-ke/">Аксиал</a>
            </td>
            <td>
              <span>
                Пиноксаден + антидот{" "}
                <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
                  клоквинтосет-мексил
                </a>{" "}
                (45 + 11,25 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>ООО "Сингента"</span>
              </a>
            </td>
            <td>2 120,40</td>
            <td>2 374,85</td>
            <td>0,7 - 1,3</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/puma-super-7-5-emv/">
                Пума Супер 7,5
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
                  Феноксапроп-П-этил
                </a>{" "}
                + антидот{" "}
                <a href="https://berkanabio.ru/category/mefenpir-dietil/">
                  мефенпир-диэтил
                </a>{" "}
                (69 + 75 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>1 890,00</td>
            <td>2 116,80</td>
            <td>0,6-1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/puma-super-100-ke/">
                Пума Супер 100
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
                  Феноксапроп-П-этил
                </a>{" "}
                + антидот{" "}
                <a href="https://berkanabio.ru/category/mefenpir-dietil/">
                  мефенпир-диэтил
                </a>{" "}
                (100 + 27 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>1 950,00</td>
            <td>2 184,00</td>
            <td>0,4-0,9</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/yaguar-super-7-5-emv/">
                Ягуар Супер 7,5
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
                  Феноксапроп-П-этил
                </a>{" "}
                + антидот{" "}
                <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
                  клоквинтосет-мексил
                </a>{" "}
                (69 + 34,5 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>1 400,00</td>
            <td>1 568,00</td>
            <td>0,8-1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/yaguar-super-100-ke/">
                Ягуар Супер 100
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/fenoksaprop-p-etil/">
                  Феноксапроп-П-этил
                </a>{" "}
                + антидот{" "}
                <a href="https://berkanabio.ru/category/klokvintoset-meksil/">
                  клоквинтосет-мексил
                </a>{" "}
                (100 + 27 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>1 500,00</td>
            <td>1 680,00</td>
            <td>0,4-0,9</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="gerb-sahsvekla"></a>ГЕРБИЦИДЫ НА САХАРНОЙ СВЕКЛЕ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/betanal-22-ke/">Бетанал 22</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/desmedifam/">
                  Десмедифам
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">
                  фенмедифам
                </a>{" "}
                (100 +100 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>2 000,00</td>
            <td>2 240,00</td>
            <td>1,0-3</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/betanal-progress-of-ke/">
                Бетанал Прогресс ОФ
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/etofumezat/">
                  Этофумезат
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">
                  фенмедифам
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">
                  десмедифам
                </a>{" "}
                (112 + 91 + 71 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>2 220,00</td>
            <td>2 486,40</td>
            <td>1,0-3,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/betanal-ekspert-of-ke/">
                Бетанал Эксперт ОФ
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/etofumezat/">
                  Этофумезат
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">
                  фенмедифам
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">
                  десмедифам
                </a>{" "}
                (112 + 91 + 71 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>2 620,00</td>
            <td>2 934,40</td>
            <td>1,0 - 3</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/karibu-vdg/">Карибу</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/triflusulfuron-metil/">
                  Трифлусульфурон-метил
                </a>{" "}
                (500 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/fmc/">
                <span>FMC</span>
              </a>
            </td>
            <td>47 133,00</td>
            <td>52 788,96</td>
            <td>0,03</td>
            <td>0,6 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kleo-vdg/">Клео</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/klopiralid/">
                  Клопиралид
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <span>Агрохим ХХI</span>
            </td>
            <td>6 500,00</td>
            <td>7 280,00</td>
            <td>0,12</td>
            <td>1 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/klorit-vr/">Клорит, ВР</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/klopiralid/">
                  Клопиралид
                </a>{" "}
                (300 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>3 600,00</td>
            <td>4 032,00</td>
            <td>0,3-0,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/lonterr-vdg/">Лонтерр</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/klopiralid/">
                  Клопиралид
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>8 070,00</td>
            <td>9 038,40</td>
            <td>0,12</td>
            <td>10х0,6 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/lontrel-grand-vdg/">
                Лонтрел гранд
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/klopiralid/">
                  Клопиралид
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/dau-agrosaenses/">
                <span>Дау АгроСаенсес</span>
              </a>
            </td>
            <td>13 615,20</td>
            <td>15 249,02</td>
            <td>0,12</td>
            <td>4х2 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/fluoron-vdg/">Флуорон</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/triflusulfuron-metil/">
                  Трифлусульфурон-метил
                </a>{" "}
                (500 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>13 500,00</td>
            <td>15 120,00</td>
            <td>0,03</td>
            <td>0,6 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/fronter-optima-ke/">
                Фронтьер Оптима
              </a>
            </td>
            <td>
              <span>Диметенамид - Р (720 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>2 518,80</td>
            <td>2 821,06</td>
            <td>0,5-1,2</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ekspert-nekst-ks/">Эксперт Некст</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/desmedifam/">
                  Десмедифам
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">
                  фенмедифам
                </a>{" "}
                (160 +160 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>1 850,00</td>
            <td>2 072,00</td>
            <td>1,0-3,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ekspert-trio-of-ke/">
                Эксперт Трио ОФ
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/etofumezat/">
                  Этофумезат
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">фенмеди</a>
              </span>
              <span>
                <a href="https://berkanabio.ru/category/desmedifam/">фам</a> +{" "}
                <a href="https://berkanabio.ru/category/desmedifam/">
                  десмедифам
                </a>{" "}
                (112 + 91 + 71 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>2 200,00</td>
            <td>2 464,00</td>
            <td>1,0-3,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="gerb-na-neskolkih"></a>ГЕРБИЦИДЫ НА НЕСКОЛЬКИХ
                  КУЛЬТУРАХ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/agritoks-vk/">Агритокс</a>
            </td>
            <td>
              <span>МЦПА (калиевая и натриевая соли) (500 г/л МЦПА к-ты)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>815,00</td>
            <td>912,80</td>
            <td>0,5-1,5</td>
            <td>2х10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/agro-lajt-vrk/">Агро-лайт</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imazamoks/">
                  Имазамокс
                </a>{" "}
                + имазапир (33 +15 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/lysterra/">
                <span>LYSTERRA</span>
              </a>
            </td>
            <td>3 048,00</td>
            <td>3 413,76</td>
            <td>1-1,2</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/akzifor-ke/">Акзифор</a>
            </td>
            <td>
              <span>Оксифлуорфен (240 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>2 700,00</td>
            <td>3 024,00</td>
            <td>0,5-1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/anakonda-ke/">Анаконда</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/s-metolahlor/">
                  С-метолахлор
                </a>{" "}
                (960 г/л )
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>1 500,00</td>
            <td>1 680,00</td>
            <td>1,3-1,6</td>
            <td>20л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/bazagran-br/">Базагран</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/bentazon/">Бентазон</a>{" "}
                (480 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>1 602,00</td>
            <td>1 794,24</td>
            <td>1,5-4,0</td>
            <td>2х10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/bazis-sts/">Базис</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/rimsulfuron/">
                  Римсульфурон
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
                  тифенсульфурон - метил
                </a>{" "}
                500 + 250 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/djupon/">
                <span>ООО "Дюпон"</span>
              </a>
            </td>
            <td>73 169,00</td>
            <td>81 949,28</td>
            <td>0,02 - 0,025</td>
            <td>10х0,1 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/bentus-vr/">Бентус, ВР</a>
            </td>
            <td>
              <span>
                480 г/л{" "}
                <a href="https://berkanabio.ru/category/bentazon/">бентазона</a>
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>1 500,00</td>
            <td>1 680,00</td>
            <td>1,5-4,0</td>
            <td>20 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/gallon-ke/">Галлон</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/galoksifop-r-metil/">
                  Галоксифоп-Р-метил
                </a>{" "}
                (104 г/л к-ты)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>1 910,00</td>
            <td>2 139,20</td>
            <td>0,5-1,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/galaktion-ke/">Галактион</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/galoksifop-r-metil/">
                  Галоксифоп-Р-метил
                </a>{" "}
                (104 г/л к-ты)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>2 280,00</td>
            <td>2 553,60</td>
            <td>0,5-1</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/meridian-vr/">Меридиан</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/klopiralid/">
                  Клопиралид
                </a>{" "}
                + пиклорам (267 + 67 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>4 800,00</td>
            <td>5 376,00</td>
            <td>0,3-0,35</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/galera-super-364-vr/">
                Галера Супер 364
              </a>
            </td>
            <td>
              <span>
                Пиклорам, Аминопиралид,{" "}
                <a href="https://berkanabio.ru/category/klopiralid/">
                  Клопиралид
                </a>{" "}
                (267+80+17 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/dau-agrosaenses/">
                <span>Дау АгроСаенсес</span>
              </a>
            </td>
            <td>8 041,00</td>
            <td>9 005,92</td>
            <td>0,2-0,3</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/gezagard-ks/">Гезагард</a>
            </td>
            <td>
              <span>Прометрин (500 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>1 261,20</td>
            <td>1 412,54</td>
            <td>1,5 - 3</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/global-vr/">Глобал</a>
            </td>
            <td>
              <span>Имазамокс (40 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>3 050,00</td>
            <td>3 416,00</td>
            <td>0,75-1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/junker-vr/">Юнкер</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imazamoks/">
                  Имазамокс
                </a>{" "}
                (40 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>2 000,00</td>
            <td>2 240,00</td>
            <td>0,75-1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/rimanol-vdg/">Риманол, ВДГ</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/rimsulfuron/">
                  Римсульфурон
                </a>{" "}
                250 г/кг
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>10 000,00</td>
            <td>11 200,00</td>
            <td>0,04-0,05</td>
            <td>0,1 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/difilajn-ke/">Дифилайн, КЭ</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/s-metolahlor/">
                  С-метолахлор
                </a>{" "}
                (960 г/л )
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>1 890,00</td>
            <td>2 116,80</td>
            <td>1,3-2</td>
            <td>20л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/serp-vrk/">Серп, ВРК</a>
            </td>
            <td>
              <span>Имазетапир (100г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>1 500,00</td>
            <td>1 680,00</td>
            <td>0,5-0,8</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/dual-gold-ke/">Дуал Голд</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/s-metolahlor/">
                  С-Метолахлор
                </a>{" "}
                (960 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>1 792,80</td>
            <td>2 007,94</td>
            <td>1-1,6</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/evro-lajtning-vrk/">
                Евро-Лайтнинг
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imazamoks/">
                  Имазамокс
                </a>{" "}
                + имазапир (33 +15 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>3 248,40</td>
            <td>3 638,21</td>
            <td>1-1,2</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/zellek-super-ke/">Зеллек-супер</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/galoksifop-r-metil/">
                  Галоксифоп-Р-метил
                </a>{" "}
                (104 г/л к-ты)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/dau-agrosaenses/">
                <span>Дау АгроСаенсес</span>
              </a>
            </td>
            <td>2 519,30</td>
            <td>2 821,62</td>
            <td>0,5-1</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/zenkor-ultra-ks/">Зенкор Ультра</a>
            </td>
            <td>
              <span>Метрибузин (600 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>3 950,00</td>
            <td>4 424,00</td>
            <td>0,3-1,6</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/zlakterr-ke/">Злактерр+Стюарт</a>
            </td>
            <td>
              <span>Клетодим (240 г/л)+Прилипатель</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>3 210,00</td>
            <td>3 595,20</td>
            <td>0,2-1</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kletodim-pljus-miks-ke/">
                Клетодим плюс Микс
              </a>
            </td>
            <td>
              <span>Клетодим (240 г/л)+Прилипатель</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/rosagrohim/">
                <span>ООО НПО "РосАгроХим"</span>
              </a>
            </td>
            <td>3 000,00</td>
            <td>3 360,00</td>
            <td>0,2-1</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/legat-ke/">Легат</a>
            </td>
            <td>
              <span>Клетодим (240 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>2 000,00</td>
            <td>2 240,00</td>
            <td>0,2-1</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ljumaks-se/">Люмакс</a>
            </td>
            <td>
              <span>
                S-метолахлор +{" "}
                <a href="https://berkanabio.ru/category/mezotrion/">
                  Мезотрион
                </a>{" "}
                + Тербутилазин (375 + 37,5 + 125 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>1 177,20</td>
            <td>1 318,46</td>
            <td>3,0-4,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/majster-pauer-md/">
                МайсТер Пауэр, МД
              </a>
            </td>
            <td>
              <span>
                Йодосульфурон-метил-натрий, Форамсульфурон, Тиенкарбазон-метил,
                Ципросульфамид
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>3 000,00</td>
            <td>3 360,00</td>
            <td>1,25-1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/mantra-vrk/">Мантра</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imazamoks/">
                  Имазамокс
                </a>{" "}
                + имазапир (33 +15 г/л)
              </span>
            </td>
            <td>
              <span>Агрохим-XXI</span>
            </td>
            <td>2 223,00</td>
            <td>2 489,76</td>
            <td>1-1,2</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/merlin-vdg/">Мерлин</a>
            </td>
            <td>
              <span>Изоксафлютол 750 г/л</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/bajer/">
                <span>Байер КропСайенс АГ</span>
              </a>
            </td>
            <td>2 512,00</td>
            <td>2 813,44</td>
            <td>0,1-0,16</td>
            <td>12х0,5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/nopasaran-ks/">Нопасаран+ДАШ</a>
            </td>
            <td>
              <span>
                Метазахлор +{" "}
                <a href="https://berkanabio.ru/category/imazamoks/">
                  имазамокс
                </a>{" "}
                (375 + 25 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>3 668,62</td>
            <td>4 108,85</td>
            <td>0,8 - 1,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/neo-vdg/">НЭО, ВДГ</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/nikosulfuron/">
                  Никосульфурон
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/rosagrohim/">
                <span>ООО НПО "РосАгроХим"</span>
              </a>
            </td>
            <td>16 500,00</td>
            <td>18 480,00</td>
            <td>0,05 - 0,1</td>
            <td>250 г</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/pantera-ke/">Пантера</a>
            </td>
            <td>
              <span>Квизалофоп-П-тефурил (40 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/arista-lajfsajens/">
                <span>Ариста ЛайфСайенс</span>
              </a>
            </td>
            <td>1 525,00</td>
            <td>1 708,00</td>
            <td>0,75 - 1,5</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/pulsar-vr/">Пульсар</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/imazamoks/">
                  Имазамокс
                </a>{" "}
                (40 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/basf/">
                <span>БАСФ</span>
              </a>
            </td>
            <td>3 859,20</td>
            <td>4 322,30</td>
            <td>0,75-1,0</td>
            <td>2х10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/titus-sts/">Титус</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/rimsulfuron/">
                  Римсульфурон
                </a>{" "}
                250 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/djupon/">
                <span>ООО "Дюпон"</span>
              </a>
            </td>
            <td>45 000,00</td>
            <td>50 400,00</td>
            <td>0,03+0,02 или 0,05</td>
            <td>0,5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/titus-pljus-vdg/">Титус Плюс</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/dikamba/">Дикамба</a>{" "}
                (диэтиламиновая соль)+
                <a href="https://berkanabio.ru/category/rimsulfuron/">
                  римсульфурон
                </a>{" "}
                (609 г/л дикамбы к-ты + 32,5 римсульффурона)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/djupon/">
                <span>ООО "Дюпон"</span>
              </a>
            </td>
            <td>7 380,00</td>
            <td>8 265,60</td>
            <td>0,307-0,385</td>
            <td>0,768 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/tifi-vdg/">Тифи</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
                  Тифенсульфурон-метил
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/rosagrohim/">
                <span>ООО НПО "РосАгроХим"</span>
              </a>
            </td>
            <td>10 000,00</td>
            <td>10 960,00</td>
            <td>0,01-0,025</td>
            <td>0,5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/fjuzilad-forte-ke/">
                Фюзилад Форте
              </a>
            </td>
            <td>
              <span>Флуазифоп - П - бутил (125 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>1 700,00</td>
            <td>1 904,00</td>
            <td>0,75-2</td>
            <td>2х10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/harmoni-klassik-vdg/">
                Хармони Классик
              </a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tifensulfuron-metil/">
                  Тифенсульфурон-метил
                </a>{" "}
                +хлоримурон-метил(187,5+187,5 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/djupon/">
                <span>ООО "Дюпон"</span>
              </a>
            </td>
            <td>52 423,00</td>
            <td>58 713,76</td>
            <td>0,02-0,05</td>
            <td>10х0,5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/ekspress-vdg/">Экспресс</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/tribenuron-metil/">
                  Трибенурон-метил
                </a>{" "}
                (750 г/кг)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/djupon/">
                <span>ООО "Дюпон"</span>
              </a>
            </td>
            <td>27 868,00</td>
            <td>31 212,16</td>
            <td>0,02 - 0,05</td>
            <td>0,2 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/eljumis-md/">Элюмис</a>
            </td>
            <td>
              <span>
                <a href="https://berkanabio.ru/category/mezotrion/">
                  Мезотрион
                </a>{" "}
                +{" "}
                <a href="https://berkanabio.ru/category/nikosulfuron/">
                  никосульфурон
                </a>{" "}
                (75 + 30 г/л)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>2 689,00</td>
            <td>3 011,68</td>
            <td>1,0-2,0</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="gerb-splochnogo"></a>ГЕРБИЦИДЫ СПЛОШНОГО ДЕЙСТВИЯ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/aristokrat-vr/">Аристократ</a>
            </td>
            <td>
              <span>
                Глифосат (изопропиламинная соль) (480 г/л глифосата к-ты)
              </span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/lysterra/">
                <span>LYSTERRA</span>
              </a>
            </td>
            <td>675,00</td>
            <td>756,00</td>
            <td>1,5-6</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kajman-vr/">Кайман</a>
            </td>
            <td>
              <span>(360 г/л глифосата к-ты)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>500,00</td>
            <td>560,00</td>
            <td>2,0-8,0</td>
            <td>20 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/kajman-forte-vdg/">Кайман Форте</a>
            </td>
            <td>
              <span>(687 г/л глифосата к-ты)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/fmrus/">
                <span>ФМРус</span>
              </a>
            </td>
            <td>810,00</td>
            <td>907,20</td>
            <td>1,0-4,0</td>
            <td>5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/tornado-500-vr/">Торнадо 500</a>
            </td>
            <td>
              <span>Глифосат (изопропиламинная соль) 500 г/л</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/avgust/">
                <span>ЗАО Фирма "Август"</span>
              </a>
            </td>
            <td>636,00</td>
            <td>712,32</td>
            <td>1,5-4,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="desikant"></a>ДЕСИКАНТЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/skorpion-vr/">Скорпион</a>
            </td>
            <td>
              <span>Дикват (150 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/neoport/">
                <span>Neoport</span>
              </a>
            </td>
            <td>900,00</td>
            <td>1 008,00</td>
            <td>1,0-2,0</td>
            <td>2х10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/dikvaterr-super-vr/">
                Дикватерр Супер (Польша)
              </a>
            </td>
            <td>
              <span>Дикват (150 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>1 250,00</td>
            <td>1 400,00</td>
            <td>1,0-2,0</td>
            <td>2х10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/reglon-forte-vr/">Реглон Форте</a>
            </td>
            <td>
              <span>Дикват (200 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>2 151,00</td>
            <td>2 409,12</td>
            <td>1,0-2,0</td>
            <td>2х10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="bio-preparat"></a>БИОПРЕПАРАТЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/nitragin-zh-bobovye/">
                Нитрагин Ж (бобовые)
              </a>
            </td>
            <td>
              <span>Клубеньковые бактерии Bradyrhizobium japonicum</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/agrokom/">
                <span>ООО "АгроКом"</span>
              </a>
            </td>
            <td>2 200,00</td>
            <td>2 464,00</td>
            <td>0,2 л/га</td>
            <td>5 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/rizobash-zh/">
                РИЗОБАШ (соя и нут)
              </a>
            </td>
            <td>
              <span>Клубеньковые бактерии Bradyrhizobium japonicum</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>1 000,00</td>
            <td>1 120,00</td>
            <td>2 л/тн</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/psevdobakterin-3-zh/">
                Псевдобактерин-3
              </a>
            </td>
            <td>
              <span>Pseudomonas auerofaciens</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>600,00</td>
            <td>672,00</td>
            <td>1,0</td>
            <td>1 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/orgamica-s/">Оргамика С</a>
            </td>
            <td>
              <span>Bacillus Amyloliquefaciens B-12464</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>600,00</td>
            <td>672,00</td>
            <td>0,2-2</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/orgamica-f/">Оргамика Ф</a>
            </td>
            <td>
              <span>Trichoderma asperellum F-1323</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>350,00</td>
            <td>392,00</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/organit-n/">Органит Н</a>
            </td>
            <td>
              <span>Azospirillum zeae ВКПМ В-12542</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>350,00</td>
            <td>392,00</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/organit-p/">Органит П</a>
            </td>
            <td>
              <span>Bacillus megaterrium OPP-31</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>350,00</td>
            <td>392,00</td>
            <td>1,0-3,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/respekta/">Респекта</a>
            </td>
            <td>
              <span>Pseudomonas aureofaciens</span>
            </td>
            <td>
              <span>ООО "Биона"</span>
            </td>
            <td>1 500,00</td>
            <td>1 680,00</td>
            <td>1л/т</td>
            <td>2л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/respekta-25/">Респекта 25%</a>
            </td>
            <td>
              <span>Pseudomonas aureofaciens</span>
            </td>
            <td>
              <span>ООО "Биона"</span>
            </td>
            <td>380,00</td>
            <td>425,60</td>
            <td>1-2 л/т</td>
            <td>5л, 10л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/rizomaks/">Ризомакс</a>
            </td>
            <td>
              <span>Эндомикоризный гриб Glomus sp</span>
            </td>
            <td>
              <span>ООО "Биона"</span>
            </td>
            <td>1 500,00</td>
            <td>1 680,00</td>
            <td>3-4 л/т</td>
            <td>1л, 5л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/rizoplan-zh/">Ризоплан Ж</a>
            </td>
            <td>
              <span>Pseudomonas fluorescens, штамм АР-33</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/agrokom/">
                <span>ООО "АгроКом"</span>
              </a>
            </td>
            <td>1 500,00</td>
            <td>1 680,00</td>
            <td>0,5-1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitosporin-m-zh/">Фитоспорин МЖ</a>
            </td>
            <td>
              <span>Bacillus subtilis, штамм 26Д</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>220,00</td>
            <td>246,40</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitosporin-m-zh-hranenie/">
                Фитоспорин МЖ "Хранение"
              </a>
            </td>
            <td>
              <span>Bacillus subtilis, штамм 26Д</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>220,00</td>
            <td>246,40</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitosporin-m-zh-as/">
                Фитоспорин - АС
              </a>
            </td>
            <td>
              <span>
                Bacillus subtilis (сенная палочка), Trichoderma reesei и лизат
                (метаболиты) бактерий рода Pseudomonas: aureofaciens и
                fluorescens.
              </span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>250,00</td>
            <td>280,00</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitosporin-m-zh-ekstra/">
                Фитоспорин МЖ Экстра
              </a>
            </td>
            <td>
              <span>Bacillus subtilis, штамм 26Д</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>240,00</td>
            <td>268,80</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/fitosporin-m-zh-fungi-baktericid/">
                Фитоспорин Фунги-бактерицид
              </a>
            </td>
            <td>
              <span>Bacillus subtilis, штамм 26Д</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>200,00</td>
            <td>224,00</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="bio-fungic"></a>БИОФУНГИЦИДЫ, ИММУНОМОДУЛЯТОРЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-profi/">
                Стимикс (свекла) Профи
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>370,00</td>
            <td>414,40</td>
            <td>0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-profi/">Стимикс Профи</a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>370,00</td>
            <td>414,40</td>
            <td>0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-semya/">Стимикс Семя</a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-standart-zerno/">
                Стимикс Стандарт Зерно
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-standart-kartofel/">
                Стимикс Стандарт Картофель
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-standart-kukuruza/">
                Стимикс Стандарт Кукуруза
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-standart-ovoshhi/">
                Стимикс Стандарт Овощи
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-standart-podsolnechnik/">
                Стимикс Стандарт Подсолнечник
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-standart-svekla/">
                Стимикс Стандарт Свекла
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-standart-soya/">
                Стимикс Стандарт Соя
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-b/">
                Стимикс Ультра
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>385,00</td>
            <td>431,20</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-b/">
                Стимикс Фитостим Б
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-ab/">
                Стимикс Фитостим Ab
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-nf/">
                Стимикс Фитостим NF
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-af/">
                Стимикс Фитостим АF (As+Ab)
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-as/">
                Стимикс Фитостим Аs
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-soya/">
                Стимикс Фитостим Соя
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-fitostim-jp/">
                Фитостим Jp
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="destr-solom"></a>ДЕСТРУКТОРЫ СОЛОМЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/orgamica-f-2/">Оргамика Ф</a>
            </td>
            <td>
              <span>Trichoderma asperellum F-1323</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>350,00</td>
            <td>392,00</td>
            <td>1.-2</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/sternya/">Стерня</a>
            </td>
            <td>
              <span>Trichoderma viridе</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>300,00</td>
            <td>336,00</td>
            <td>1-1,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-niva-jp/">
                Стимикс Нива Jp + активатор
              </a>
            </td>
            <td>
              <span>Живые микробные культуры, комплекс стимуляторов.</span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>270,00</td>
            <td>302,40</td>
            <td>2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-nivano-till/">
                Стимикс Нива No-Тill
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>270,00</td>
            <td>302,40</td>
            <td>2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/stimiks-nivano-till/">
                Стимикс Нива А + активатор
              </a>
            </td>
            <td>
              <span>(Trichoderma harzianum, Trichoderma viride)</span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>270,00</td>
            <td>302,40</td>
            <td>2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/stimiks-niva-b-dvuhkomponentnyj/">
                Стимикс Нива В + активатор
              </a>
            </td>
            <td>
              <span>
                Аминокислоты, органический кремний, живые микробные культуры,
                комплекс стимуляторов.
              </span>
            </td>
            <td>
              <span>ООО НПО Центр биотехнологий "Биоцентр Ставрополье"</span>
            </td>
            <td>270,00</td>
            <td>302,40</td>
            <td>2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="regul-rosta"></a>РЕГУЛЯТОРЫ, СТИМУЛЯТОРЫ РОСТА
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/alfastim/">Альфастим</a>
            </td>
            <td>
              <span>
                Тритерпеновые к-ты, микроэлементы, аминокислоты, гуматы,
                карбогидраты (100+50+20+10+50 г/л)
              </span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>2 450,00</td>
            <td>2 744,00</td>
            <td>0,0</td>
            <td>1л</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/biodux/">Биодукс</a>
            </td>
            <td>
              <span>арахидоновая кислота</span>
            </td>
            <td>
              <span>Bionovatik</span>
            </td>
            <td>80 000,00</td>
            <td>89 600,00</td>
            <td>0,001-0,003</td>
            <td>10х0,01</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/gumi-20-kalijnyj/">
                Гуми 20 Калийный
              </a>
            </td>
            <td>
              <span>Гуминовые кислоты</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>130,00</td>
            <td>145,60</td>
            <td>0,2 -1</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/gumi-20-kalijnyj/">
                Гуми 20М Калийный
              </a>
            </td>
            <td>
              <span>Гуминовые кислоты + микроэлементы</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>160,00</td>
            <td>179,20</td>
            <td>0,2 -1</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/gumi-20m-kalijnyj/">
                Гуми-20М Богатый 5-6-9
              </a>
            </td>
            <td>
              <span>Гуминовые кислоты + микроэлементы</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>185,00</td>
            <td>207,20</td>
            <td>0,2 -1</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/gumi-20m-bogatyj-8-3-11/">
                Гуми-20М Богатый 8-3-11
              </a>
            </td>
            <td>
              <span>Гуминовые кислоты + микроэлементы</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>195,00</td>
            <td>218,40</td>
            <td>0,2 -1</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/moddus-ke/">Моддус</a>
            </td>
            <td>
              <span>Тринексапак - этил (250 г/л)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/singenta/">
                <span>Syngenta</span>
              </a>
            </td>
            <td>4 047,00</td>
            <td>4 532,64</td>
            <td>0,2-0,4</td>
            <td>4х5 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-amino-npk/">
                ПОЛИДОН® АМИНО NPK
              </a>
            </td>
            <td>
              <span>
                Специальный комплекс для листовых подкормок с содержанием
                аминокислот
              </span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>990,00</td>
            <td>1 108,80</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-amino-pljus/">
                ПОЛИДОН® АМИНО ПЛЮС
              </a>
            </td>
            <td>
              <span>
                Специальный комплекс для листовых подкормок с содержанием
                аминокислот
              </span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>1 290,00</td>
            <td>1 444,80</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-amino-start/">
                ПОЛИДОН® АМИНО СТАРТ
              </a>
            </td>
            <td>
              <span>
                Специальный комплекс для протравливания зерна с содержанием
                аминокислот
              </span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>670,00</td>
            <td>750,40</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/ribav-ekstra-p/">Рибав Экстра</a>
            </td>
            <td>
              <span>
                L-аланин + L-глутаминовая кислота (0,00152 + 0,00196 г/л)
              </span>
            </td>
            <td>
              <span>ЗАО "Сельхозэкосервис"</span>
            </td>
            <td>22 000,00</td>
            <td>24 640,00</td>
            <td>0,1-1 мл/га</td>
            <td>100 г</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/sannimiks-sunnymix/">СанниМикс</a>
            </td>
            <td>
              <span>
                Аминокислоты, органические кислоты, стимуляторы, микроэлементы
              </span>
            </td>
            <td>
              <span>ООО "Биона"</span>
            </td>
            <td>330,00</td>
            <td>369,60</td>
            <td>0,5-1,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitaktiv-vita/">Фитактив Вита</a>
            </td>
            <td>
              <span>
                2-этил-индол-3-n-пропилено-3,6:1,2[60]фуллерен – 100,
                никотиновая кислота – 50, аскорбиновая кислота - 50, глицин –
                200, пиридоксин – 40, тиамин – 40 + микроэлементы
              </span>
            </td>
            <td>
              <span>НПО "БИНАМ"</span>
            </td>
            <td>800,00</td>
            <td>896,00</td>
            <td>0,2</td>
            <td>1 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitaktiv-ekstra/">
                Фитактив Экстра
              </a>
            </td>
            <td>
              <span>
                2-этил-индол-3-n-пропилено-3,6:1,2[60]фуллерен,
                индолил-3-масляная кислота
              </span>
            </td>
            <td>
              <span>НПО "БИНАМ"</span>
            </td>
            <td>3 750,00</td>
            <td>4 200,00</td>
            <td>0,0</td>
            <td>1 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/epaa-10/">ЭПАА-10</a>
            </td>
            <td>
              <span>Биоколлоид из полисахаридов ксантан или энпосан</span>
            </td>
            <td>
              <span>ООО АгроТехЦентр "КолХоз"</span>
            </td>
            <td>800,00</td>
            <td>896,00</td>
            <td>0,1</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="agrohim-stimul"></a>АГРОХИМИКАТЫ, МИКРОЭЛЕМЕНТЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-15-11-25/">
                Бионекс-Кеми (15+11+25)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>245,00</td>
            <td>274,40</td>
            <td>1,0-5,0</td>
            <td>20 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-18-18-18/">
                Бионекс-Кеми (18+18+18)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>235,00</td>
            <td>263,20</td>
            <td>1,0-5,0</td>
            <td>20 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-35-0-0-6-0-0-7/">
                Бионекс-Кеми (35+1+1,5+0,7)+S-8
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Башинком, Россия</span>
            </td>
            <td>100,00</td>
            <td>112,00</td>
            <td>1,0-5,0</td>
            <td>20 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-40-1-5-2-0-7/">
                Бионекс-Кеми (40+1,5+2+0,7)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Башинком, Россия</span>
            </td>
            <td>120,00</td>
            <td>134,40</td>
            <td>1,0-5,0</td>
            <td>20 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-9-12-33/">
                Бионекс-Кеми (9+12+33)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>280,00</td>
            <td>313,60</td>
            <td>1,0-5,0</td>
            <td>20 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-zhidkij-0-18-20-me/">
                Бионекс-Кеми Жидкий (0+18+20+МЭ)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>220,00</td>
            <td>246,40</td>
            <td>1,0-5,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-zhidkij-10-10-10-me/">
                Бионекс-Кеми Жидкий (10+10+10+МЭ)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>200,00</td>
            <td>224,00</td>
            <td>1,0-5,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-2-40-27/">
                Бионекс-Кеми (2+40+27)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>300,00</td>
            <td>336,00</td>
            <td>1,0-5,0</td>
            <td>20 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-zhidkij-21-4-4-me/">
                Бионекс-Кеми Жидкий (21+4+4+МЭ)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>190,00</td>
            <td>212,80</td>
            <td>1,0-5,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/bioneks-kemi-40-1-5-2/">
                Бионекс-Кеми (40+1,5+2)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>104,00</td>
            <td>116,48</td>
            <td>1,0-5,0</td>
            <td>20 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/evrohim-n13-p40-k13/">
                Еврохим N13–P40–K13
              </a>
            </td>
            <td>
              <span>
                Водорастворимое удобрение (MgO-0%, B-0,02%, Cu-0,005%,
                Mn-0,005%, Zn-0,01%, Fe-0,07%, Mo-0,004%)
              </span>
            </td>
            <td>
              <span>ЕвроХим</span>
            </td>
            <td>130,00</td>
            <td>150,00</td>
            <td>2,0-4,0</td>
            <td>25 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/evrohim-n18-p18-k18/">
                Еврохим N18-P18-K18
              </a>
            </td>
            <td>
              <span>
                Водорастворимое удобрение (S-3%, MgO-3%, B-0,02%, Cu-0,005%,
                Mn-0,005%, Zn-0,01%, Fe-0,07%, Mo-0,004%)
              </span>
            </td>
            <td>
              <span>ЕвроХим</span>
            </td>
            <td>130,00</td>
            <td>150,00</td>
            <td>2,0-4,0</td>
            <td>25 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/evrohim-n20-p20-k20/">
                Еврохим N20–P20–K20
              </a>
            </td>
            <td>
              <span>
                Водорастворимое удобрение (S-0%, MgO-0%, B-0,02%, Cu-0,005%,
                Mn-0,005%, Zn-0,01%, Fe-0,07%, Mo-0,004%)
              </span>
            </td>
            <td>
              <span>ЕвроХим</span>
            </td>
            <td>130,00</td>
            <td>150,00</td>
            <td>2,0-4,0</td>
            <td>25 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/evrohim-n6-p14-k35/">
                Еврохим N6–P14–K35
              </a>
            </td>
            <td>
              <span>
                Водорастворимое удобрение (S-2%, MgO-2%, B-0,02%, Cu-0,005%,
                Mn-0,005%, Zn-0,01%, Fe-0,07%, Mo-0,004%)
              </span>
            </td>
            <td>
              <span>ЕвроХим</span>
            </td>
            <td>130,00</td>
            <td>150,00</td>
            <td>2,0-4,0</td>
            <td>25 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/evrohim-n12-p8-k31/">
                Еврохим N12–P8–K31
              </a>
            </td>
            <td>
              <span>
                Водорастворимое удобрение (S-2%, MgO-2%, B-0,02%, Cu-0,005%,
                Mn-0,005%, Zn-0,01%, Fe-0,07%, Mo-0,004%)
              </span>
            </td>
            <td>
              <span>ЕвроХим</span>
            </td>
            <td>130,00</td>
            <td>150,00</td>
            <td>2,0-4,0</td>
            <td>25 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/evrohim-n15-p15-k30/">
                Еврохим N15–P15–K30
              </a>
            </td>
            <td>
              <span>
                Водорастворимое удобрение (S-1,5%, MgO-1,5%, B-0,02%, Cu-0,005%,
                Mn-0,005%, Zn-0,01%, Fe-0,07%, Mo-0,004%)
              </span>
            </td>
            <td>
              <span>ЕвроХим</span>
            </td>
            <td>130,00</td>
            <td>150,00</td>
            <td>2,0-4,0</td>
            <td>25 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-np-8-24-0-me-gum/">
                ПОЛИДОН® марка NP (8+24+0+МЭ+ГУМ)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме </span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>200,00</td>
            <td>224,00</td>
            <td>1,0-3,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-npk-18-18-9-0-25-me/">
                ПОЛИДОН® марка NPK (10+10+10+МЭ+ГУМ)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>200,00</td>
            <td>224,00</td>
            <td>1,0-3,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-pk-0-10-20-0-25-me/">
                ПОЛИДОН® марка PK (0+5+15+МЭ+ГУМ)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>200,00</td>
            <td>224,00</td>
            <td>1,0-3,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-kalij/">
                ПОЛИДОН® марка КАЛИЙ+ 18%
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>430,00</td>
            <td>481,60</td>
            <td>0,5-1,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitaktiv-razvitie/">
                Фитактив Развитие
              </a>
            </td>
            <td>
              <span>
                Микроэлементы + ростостимулирующие ауксин-фуллереновые
                витаминные комплексы
              </span>
            </td>
            <td>
              <span>НПО "БИНАМ"</span>
            </td>
            <td>900,00</td>
            <td>1 008,00</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitaktiv-rost/">Фитактив Рост</a>
            </td>
            <td>
              <span>
                Микроэлементы + ростостимулирующие ауксин-фуллереновые
                витаминные комплексы
              </span>
            </td>
            <td>
              <span>НПО "БИНАМ"</span>
            </td>
            <td>900,00</td>
            <td>1 008,00</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitaktiv-start/">Фитактив Старт</a>
            </td>
            <td>
              <span>
                Микроэлементы + ростостимулирующие ауксин-фуллереновые
                витаминные комплексы
              </span>
            </td>
            <td>
              <span>НПО "БИНАМ"</span>
            </td>
            <td>900,00</td>
            <td>1 008,00</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/fitaktiv-urozhaj/">
                Фитактив Урожай
              </a>
            </td>
            <td>
              <span>
                Микроэлементы + ростостимулирующие ауксин-фуллереновые
                витаминные комплексы
              </span>
            </td>
            <td>
              <span>НПО "БИНАМ"</span>
            </td>
            <td>900,00</td>
            <td>1 008,00</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="special-udobr"></a>СПЕЦИАЛЬНЫЕ УДОБРЕНИЯ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/biopolimik-kompleksnyj/">
                Биополимик (комплексный)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>300,00</td>
            <td>336,00</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/biopolimik-cu/">Биополимик Cu</a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>250,00</td>
            <td>280,00</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/biopolimik-cu-zn/">
                Биополимик Cu-Zn
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>295,00</td>
            <td>330,40</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/biopolimik-fe-8-5/">
                Биополимик Fe (8,5%)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>250,00</td>
            <td>280,00</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/biopolimik-mn-10/">
                Биополимик Mn (10%)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>260,00</td>
            <td>291,20</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/biopolimik-zn-3/">
                Биополимик Zn 3%
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>170,00</td>
            <td>190,40</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/borogum-v-11-me/">Борогум</a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>360,00</td>
            <td>403,20</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/borogum-m-7-4-5-me/">Борогум М</a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>390,00</td>
            <td>436,80</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/borogum-m-kukuruznyj/">
                Борогум М (кукурузный)
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>400,00</td>
            <td>448,00</td>
            <td>0,3-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/borogum-m-kompleksnyj/">
                Борогум М комплексный
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>390,00</td>
            <td>436,80</td>
            <td>0,8-1,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/borogum-cu-zn/">Борогум Cu-Zn</a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Башинком, Россия</span>
            </td>
            <td>360,00</td>
            <td>403,20</td>
            <td>1,0-2,0</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/magnij-sernokislyj-7-vodnyj/">
                Магний сернокислый 7-водный
              </a>
            </td>
            <td>
              <span>Mg - 16,9% S - 23,5% гранулы</span>
            </td>
            <td>
              <span>Буйский химзавод</span>
            </td>
            <td>45,00</td>
            <td>50,40</td>
            <td>1-2.5 кг/га</td>
            <td>
              <span>25 кг, 750 кг</span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-kompleks/">
                ПОЛИДОН® марка КОМПЛЕКС
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Polydon, Россия</span>
            </td>
            <td>750,00</td>
            <td>840,00</td>
            <td>0,1-0,5</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-molibden/">
                ПОЛИДОН® марка МОЛИБДЕН 8%
              </a>
            </td>
            <td>
              <span>Микроэлементы в хелатной форме</span>
            </td>
            <td>
              <span>Polydon, Россия</span>
            </td>
            <td>1 200,00</td>
            <td>1 344,00</td>
            <td>0,05-0,3</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="fumig"></a>ФУМИГАНТЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/magtoksin-tab/">Магтоксин</a>
            </td>
            <td>
              <span>Магния фосфид (660 г/кг)</span>
            </td>
            <td>
              <span>Детиа Дегеш ГмбХ</span>
            </td>
            <td>2 850,00</td>
            <td>3 192,00</td>
            <td>5г/м3, 9г/т</td>
            <td>0,9 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/alfos-tab/">Алфос</a>
            </td>
            <td>
              <span>Алюминия фосфид (560 г/кг)</span>
            </td>
            <td>
              <span>ЗемлякоФФ</span>
            </td>
            <td>1 300,00</td>
            <td>1 456,00</td>
            <td>5г/м3, 9г/т</td>
            <td>1 кг</td>
          </tr>
          <tr>
            <td>
              <a href="http://berkanabio.ru/fumifast-tab/">Фумифаст</a>
            </td>
            <td>
              <span>Алюминия фосфид (560 г/кг)</span>
            </td>
            <td>
              <span>ООО "Агро Эксперт Груп"</span>
            </td>
            <td>1 600,00</td>
            <td>1 792,00</td>
            <td>5г/м3, 9г/т</td>
            <td>1 кг</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="adyuvan"></a>АДЪВАНТЫ, КЛЕИ, СПЕЦИАЛЬНЫЕ ПРЕПАРАТЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/biolipostim/">Биолипостим</a>
            </td>
            <td>
              <span>ПАВ</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>200,00</td>
            <td>224,00</td>
            <td>0,050-0,1</td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/polidon-bond/">ПОЛИДОН® БОНД</a>
            </td>
            <td>
              <span>Рассекатель-смачиватель ПАВ</span>
            </td>
            <td>
              <span>Точка Роста</span>
            </td>
            <td>2 000,00</td>
            <td>2 240,00</td>
            <td>0,03-0,05</td>
            <td>1 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/regulyator-kislotnosti-raduzhnyj/">
                Регулятор кислотности РАДУЖНЫЙ
              </a>
            </td>
            <td>
              <span>Регулятор кислотности растворов</span>
            </td>
            <td>
              <span>ООО "НВП БашИнком"</span>
            </td>
            <td>220,00</td>
            <td>246,40</td>
            <td></td>
            <td>10 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/silvet-408-r/">
                Сильвет 408 - суперсмачиватель
              </a>
            </td>
            <td>
              <span>ПАВ</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/arista-lajfsajens/">
                <span>Ариста</span>
              </a>
            </td>
            <td>4 150,00</td>
            <td>4 648,00</td>
            <td>0,01-0,1</td>
            <td>1 л</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/trend-90-zh/">
                Тренд-90, Ж (900 г/л)
              </a>
            </td>
            <td>
              <span>ПАВ</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/djupon/">
                <span>ООО "Дюпон"</span>
              </a>
            </td>
            <td>582,00</td>
            <td>651,84</td>
            <td>0,2</td>
            <td>4х5 л</td>
          </tr>
          <tr>
            <td colspan="7">
              <span>
                <strong>
                  <a id="rodent"></a>РОДЕНТИЦИДЫ
                </strong>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/brodifakum-grand-g/">Бродифакум</a>
            </td>
            <td>
              <span>Бродифакум (0,05 г/кг)</span>
            </td>
            <td>
              <span>ООО "ВАЛБРЕНТА КЕМИКАЛС"</span>
            </td>
            <td>350,00</td>
            <td>392,00</td>
            <td>2,0-5,0</td>
            <td>1х5 кг</td>
          </tr>
          <tr>
            <td>
              <a href="https://berkanabio.ru/kilrat-super-gr/">Килрат Супер</a>
            </td>
            <td>
              <span>Бродифакум (0,05 г/кг)</span>
            </td>
            <td>
              <a href="https://berkanabio.ru/category/pestitsidy/gk-zemlyakoff/">
                <span>ООО ГК "Землякофф"</span>
              </a>
            </td>
            <td>1 900,00</td>
            <td>2 128,00</td>
            <td>0,04-0,10</td>
            <td>12х1 л</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Head>
        <title>Средства защиты растений-резервная копия 26.05 - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Средства защиты растений-резервная копия 26.05"
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

export default sredstvazaschityrastenijrezervnajakopija2605;
