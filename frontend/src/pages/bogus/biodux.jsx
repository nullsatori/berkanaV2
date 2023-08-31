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

const biodux = () => {
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
        <a
          href="http://berkanabio.ru/wp-content/uploads/2018/12/7b7-1.jpg"
          rel="attachment wp-att-1263"
        ></a>
        Регулятор роста растений. 
      </strong>
      Стимулирование иммунитета растений против основных заболеваний. Снижение
      пестицидного стресса.
      <strong>Состав:</strong> Комплекс биологически активных полиненасыщенных
      жирных кислот гриба Mortierella alpina F1134.
      <strong>Период защитного действия:</strong> В течение 30-60 дней, в
      зависимости от выращиваемой культуры. Скорость воздействия — с момента
      обработки. Видимый эффект наступает через 3-10 суток после обработки
      <strong>Совместимость:</strong> Совместим с гербицидами, инсектицидами и
      удобрениями. Приготовление рабочего раствора: 1-3 мл препарата растворить
      в 10 л воды и тщательно перемешать, объединить полученный раствор с
      объемом воды, необходимым для обработки посевов
      <strong>Условия и срок хранения:</strong> Препарат хранить в темном,
      прохладном месте при температуре от +50С до +250С в течение 1 года со дня
      изготовления
      <strong>Препаративная форма:</strong> Жидкость.
      <strong>Класс опасности:</strong> IV (малоопасное)
      <strong>Производитель:</strong> Bionovatic
      <strong>Упаковка:</strong> 10 мл
      <strong>Цена:</strong> 900 руб/упаковка
      <h2>Механизм действия</h2>
      Механизм действия препарата основан на возможности действующего вещества —
      уникального комплекса биологически активных полиненасыщенных жирных кислот
      низшего почвенного гриба Mortierella alpina — формировать у растения
      неспецифическую (к грибам, бактериям, вирусам), системную, продолжительную
      (в течение 30-60 дней) устойчивость и активировать ростовые и
      биологические процессы. На молекулярном уровне широкий спектр
      биологической активности липидного комплекса объясняется тем, что он
      активирует не только гены устойчивости и сигнальные системы защиты, но и
      гены, осуществляющие контроль за ростовыми факторами, фитогормонами,
      факторами дифференцировки и развития тканей растений.
      <h3>Норма расхода</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Культура, обрабатываемый объект</strong>
            </td>
            <td>
              <strong>Норма</strong>
              <strong>применения</strong>
              <strong>препарата (л/га)</strong>
            </td>
            <td>
              <strong>Назначение</strong>
            </td>
            <td>
              <strong>Способ, время обработки,</strong>
              <strong>особенности применения</strong>
            </td>
            <td>
              <strong>Срок ожи</strong>
              <strong>дания  (крат</strong>
              <strong>ность обра</strong>
              <strong>боток)</strong>
            </td>
          </tr>
          <tr>
            <td rowspan="2">Пшеница озимая</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести, усиление ростовых и
              формообразовательных процессов, повышение устойчивости к
              неблагоприятным факторам среды,повышение урожайности, улучшение
              качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
            <td>-(1)</td>
          </tr>
          <tr>
            <td>1-3 мл/га</td>
            <td>
              Опрыскивание в фазе кущения-выхода в трубку. Расход рабочей
              жидкости - 300 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Пшеница яровая</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>1-3 мл/га</td>
            <td>
              Опрыскивание растений в фазе кущения-выхода в трубку. Расход
              рабочей жидкости - 300 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Ячмень озимый</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>1-3 мл/га</td>
            <td>
              Опрыскивание растений в фазе кущения-выхода в трубку. Расход
              рабочей жидкости - 300 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Ячмень яровой</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>1-3 мл/га</td>
            <td>
              Опрыскивание растений в фазе кущения-выхода в трубку. Расход
              рабочей жидкости - 300 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Рожь озимая</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>1-3 мл/га</td>
            <td>
              Опрыскивание растений в фазе кущения-выхода в трубку. Расход
              рабочей жидкости - 300 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Соя</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>3-10 мл/га</td>
            <td>
              Опрыскивание: 1-ое – в фазе ветвления, 2-ое  – в фазе цветения.
              Расход рабочей жидкости - 300 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Свекла сахарная</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
            <td rowspan="13">- (1)</td>
          </tr>
          <tr>
            <td>3-5 мл/га</td>
            <td>
              Опрыскивание растений в фазе смыкания рядков. Расход рабочей
              жидкости - 300 л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Подсолнечник</td>
            <td>0,5 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
          </tr>
          <tr>
            <td>1-5 мл/га</td>
            <td>
              Опрыскивание растений в фазе  3-6 листьев. Расход рабочей жидкости
              - 300 л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Морковь</td>
            <td>0,2 мл/кг</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости - 2 л/кг
            </td>
          </tr>
          <tr>
            <td>3-5 мл/га</td>
            <td>
              Опрыскивание в фазе смыкания рядков. Расход рабочей жидкости - 300
              л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Кукуруза</td>
            <td>1,0 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
          </tr>
          <tr>
            <td>1-2 мл/га</td>
            <td>
              Опрыскивание в фазе 2-5 листьев. Расход рабочей жидкости - 300
              л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Картофель</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести, усиление ростовых и
              формообразовательных процессов, повышение устойчивости к
              неблагоприятным факторам среды, повышение урожайности, улучшение
              качества продукции
            </td>
            <td>
              Предпосадочная  обработка клубней. Расход рабочей жидкости - 10
              л/т
            </td>
          </tr>
          <tr>
            <td>1-10 мл/га</td>
            <td>
              Опрыскивание в фазе бутонизации. Расход рабочей жидкости - 300
              л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Гречиха</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>Предпосевная обработка семян. Расход 10 л/т</td>
          </tr>
          <tr>
            <td>3-5 мл/га</td>
            <td>
              Опрыскивание в фазе бутонизации. Расход рабочей жидкости - 300
              л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Горох</td>
            <td>1 мл/т</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Предпосевная обработка семян. Расход рабочей жидкости - 10 л/т
            </td>
          </tr>
          <tr>
            <td>3-10 мл/га</td>
            <td>
              Опрыскивание: 1-ое – в фазе полных всходов, 2-ое – в
              фазе бутонизации. Расход рабочей жидкости - 300 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Томат (открытый и защищенный грунт)</td>
            <td>0,2 мл/кг</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательных процессов,
              повышениеурожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости - 2 л/кг
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>2-5 мл/га</td>
            <td>
              Опрыскивание: 1-ое - в фазе цветения 1-й кисти, 2-ое - в фазе
              цветения 2-й кисти, 3-е - в фазе цветения 3-й кисти. Расход
              рабочей жидкости -  400 л/га
            </td>
            <td>- (3)</td>
          </tr>
          <tr>
            <td rowspan="2">Огурец (открытый и защищенный грунт)</td>
            <td>0,2 мл/кг</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательных процессов,
              повышениеурожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости -  2 л/кг
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>2-5 мл/га</td>
            <td>
              Опрыскивание: 1-ое – в фазе 2-4 листьев, 2-ое – в начале  фазы
              цветения. Расход рабочей жидкости - 400 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Капуста белокочанная</td>
            <td>0,2 мл/кг</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательныхпроцессов, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости - 2 л/кг
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>2-5 мл/га</td>
            <td>
              Опрыскивание: 1-е - в фазе розетки, 2-е - в фазе завязывания
              кочана. Расход рабочей жидкости - 400 л/га
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Свекла столовая</td>
            <td>0,2 мл/кг</td>
            <td rowspan="2">
              Повышение полевой всхожести, усилениеростовых и
              формообразовательных процессов, повышение устойчивости к
              неблагоприятным факторам среды, повышение урожайности, улучшение
              качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости - 2 л/кг
            </td>
            <td rowspan="3">- (1)</td>
          </tr>
          <tr>
            <td>3-5 мл/га</td>
            <td>
              Опрыскивание в фазе смыкания рядков. Расход рабочей жидкости - 300
              л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Лук (чернушка)</td>
            <td>0,2 мл/кг</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательных процессов, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости - 2 л/кг
            </td>
          </tr>
          <tr>
            <td>2-5 мл/га</td>
            <td>
              Опрыскивание растений: 1-е - в фазе 4-5 листьев, 2-е – через 30-40
              дней после первого опрыскивания. Расход рабочей жидкости - 400
              л/га
            </td>
            <td rowspan="2">- (2)</td>
          </tr>
          <tr>
            <td>Виноград</td>
            <td>50-100 мл/га</td>
            <td>
              Усиление ростовых и формообразовательных процессов, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Опрыскивание: 1-ое – перед цветением, 2-ое - через 20 дней после
              первого опрыскивания. Расход рабочей жидкости - 800-1000 л/га
            </td>
          </tr>
          <tr>
            <td rowspan="2">Морковь</td>
            <td>0,02 мл/ 200 мл воды (Л)</td>
            <td rowspan="4">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости - 200 мл/100 г
            </td>
            <td rowspan="5">- (1)</td>
          </tr>
          <tr>
            <td>0,03-0,05 мл/3 л воды (Л)</td>
            <td>
              Опрыскивание в фазе смыкания рядков. Расход рабочей жидкости - 3
              л/100 м2
            </td>
          </tr>
          <tr>
            <td rowspan="2">Картофель</td>
            <td>0,1 мл/л воды (Л)</td>
            <td>
              Опрыскивание клубней перед посадкой. Расход рабочей жидкости - 1
              л/100 кг
            </td>
          </tr>
          <tr>
            <td>0,1 мл/3 лводы (Л)</td>
            <td>
              Опрыскивание в фазе  бутонизации. Расход рабочей жидкости - 3
              л/100 м2
            </td>
          </tr>
          <tr>
            <td rowspan="2">Томат (открытый и защищенный грунт)</td>
            <td>0,02 мл/ 200 мл воды (Л)</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательных процессов,
              повышениеурожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости –200 мл/100 г
            </td>
          </tr>
          <tr>
            <td>0,02-0,05 мл/4 л воды (Л)</td>
            <td>
              Опрыскивание: 1-ое - в фазе цветения 1-й кисти, 2-ое - в фазе
              цветения 2-й кисти, 3-е - в фазе цветения 3-й кисти. Расход
              рабочей жидкости - 4 л/100 м2
            </td>
            <td>- (3)</td>
          </tr>
          <tr>
            <td rowspan="2">Огурец (открытый и защищенный грунт)</td>
            <td>0,02 мл/200 мл воды (Л)</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательных процессов,
              повышениеурожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости –200 мл/100 г
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>0,02-0,05 мл/ 4 л воды (Л)</td>
            <td>
              Опрыскивание: 1-ое – в фазе 2-4 листьев, 2-ое – в начале фазы
              цветения. Расход рабочей жидкости - 4 л/100 м2
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Капуста белокочанная</td>
            <td>0,02 мл/200 мл воды (Л)</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательных процессов, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости -200 мл/100 г
            </td>
            <td>- (1)</td>
          </tr>
          <tr>
            <td>0,02-0,05 мл/ 4 л воды (Л)</td>
            <td>
              Опрыскивание: 1-е - в фазе розетки, 2-е - в фазе завязывания
              кочана. Расход 4 л/100 м2
            </td>
            <td>- (2)</td>
          </tr>
          <tr>
            <td rowspan="2">Свекла столовая</td>
            <td>0,02 мл/200 мл воды (Л)</td>
            <td rowspan="2">
              Повышение полевой всхожести,
              усилениеростовых иформообразовательных процессов, повышение
              устойчивости к неблагоприятным факторам среды, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости - 200 мл/100 г
            </td>
            <td rowspan="3">- (1)</td>
          </tr>
          <tr>
            <td>0,03-0,05 мл/3 л воды (Л)</td>
            <td>
              Опрыскивание растений в фазе смыкания рядков. Расход рабочей
              жидкости - 3 л/100 м2
            </td>
          </tr>
          <tr>
            <td rowspan="2">Лук (чернушка)</td>
            <td>0,02 мл/200 мл воды (Л)</td>
            <td rowspan="2">
              Усиление ростовых и формообразовательных процессов, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Замачивание семян на 1 час. Расход рабочей жидкости –200 мл/100 г
            </td>
          </tr>
          <tr>
            <td>0,02-0,05 мл/ 4 л воды (Л)</td>
            <td>
              Опрыскивание:1-е - в фазе 4-5 листьев, 2-е – через 30-40 дней
              после первого опрыскивания. Расход рабочей жидкости –4 л/100 м2
            </td>
            <td rowspan="2">- (2)</td>
          </tr>
          <tr>
            <td>Виноград</td>
            <td>0,5-1 мл/10 л воды (Л)</td>
            <td>
              Усиление ростовых и формообразовательных процессов, повышение
              урожайности, улучшение качества продукции
            </td>
            <td>
              Опрыскивание: 1-ое – перед цветением, 2-ое - через 20 дней после
              первого опрыскивания. Расход рабочей жидкости - 8,0-10,0 л/100 м2
            </td>
          </tr>
        </tbody>
      </table>
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/bionovatik/">Bionovatik</a>
      <strong>Упаковка:</strong> 0,01 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Biodux - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Biodux" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default biodux;
