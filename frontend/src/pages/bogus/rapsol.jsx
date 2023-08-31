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

const rapsol = () => {
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
      <a href="https://berkanabio.ru/wp-content/uploads/2021/04/berkanabio-rapsol.jpeg"></a>
      Рапсол – фунгицид, инсектицид, прилипатель. Подавляет развитие болезней с
      конидиально поверхностным развитием. Снижает численность тли, клещей,
      трипсов. Уменьшает поверхностное натяжение
      <h2>Показания к применению</h2>
      Мучнистая роса – широко распространенная болезнь. Возбудитель заболевания
      – гриб Oidium Erysiphoides F. Болезнь вызывает сильное снижение урожая (на
      30-60%) и значительное сокращение периода вегетации. Болезнью чаще
      поражаются плодоносящие растения. сначала на верхней стороне более старых
      листьев, а потом на нижней образуются округлые пятна, покрытые белым
      мучнистым налетом. Затем они увеличиваются в размерах, появляются на
      нижней стороне листьев, покрывая весь лист. Больные листья становятся
      светлыми, хрупкими, заворачиваются кверху и быстро засыхают. При сильном
      поражении налет может также появиться на черешках и стеблях, при этом
      отдельные плети могут даже засыхать. Благоприятными условиями для развития
      болезни являются низкая интенсивность света, температура 20-25 °С,
      относительная влажность воздуха более 80%. Заражение может происходить в
      диапазоне температур 10-32 °C, при 38 °С мучнистая роса прекращает свое
      развитие. В благоприятных условиях мучнистая роса быстро развивается
      (между заражением и проявлением симптомов обычно проходит 3-7 дней), за
      это время может сформироваться множество спор. Особенно быстро мучнистая
      роса распространяется при наличии капельной влаги, при частом выпадении
      росы, при резких колебаниях температуры, при поливе холодной водой.
      Сведение к минимуму влаги на листьях и применение капельного полива не
      является стратегией подавления мучнистой росы. Фунгициды следует применять
      каждые 7-10 дней на чувствительных сортах, и через 14 дней на устойчивых
      сортах, начиная с очень ранней стадии развития заболевания или используя
      профилактический режим применения. Совместное применение с фунгицидами:
      наибольшая эффективность против мучнистой росы наблюдается после обработки
      1%-ным раствором рапсола, а также баковыми смесями рапсола с топазом и
      квадрисом: Баковая смесь: рапсол 0,8% + квадрис 0,05 – 0,06%; Баковая
      смесь: рапсол 0,8% + топаз 0,04 – 0,05%. Баковая смесь рапсола с
      малоэффективным фунгицидом квадрис оказалась высокоэффективной.
      <h2>Норма расхода и рекомендации</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Способ применения</strong>
            </td>
            <td>
              <strong>Концентрация рабочего раствора</strong>
            </td>
          </tr>
          <tr>
            <td>Профилактические обработки от мучнистой росы</td>
            <td>0,5% (0,5л/100 л раствора)</td>
          </tr>
          <tr>
            <td>Лечебные обработки от мучнистой росы</td>
            <td>0,8-1,0% (0,8-1,0 л/100 л раствора)</td>
          </tr>
          <tr>
            <td>Обработки от мучнистой росы в составе баковой смеси с СЗР*</td>
            <td>0,5-0,8% (0,5-0,8 л /100 л раствора)</td>
          </tr>
          <tr>
            <td>Обработки против тли, клеща, трипса, белокрылки</td>
            <td>0,5-1,0% (0,5-1,0 л/100 л раствора)</td>
          </tr>
          <tr>
            <td>
              Обработки против тли, клеща, трипса, белокрылки в составе баковой
              смеси с СЗР*
            </td>
            <td>0,4-0,6% (0,4-0,6 л/100 л раствора)</td>
          </tr>
          <tr>
            <td>В качестве прилипателя, совместно с СЗР*</td>
            <td>0,1-0,4% (0,1-0,4 л/100 л раствора</td>
          </tr>
          <tr>
            <td colspan="2">
              При самостоятельном применении препарата «Рапсол», необходимо
              обеспечить полное смачивание обрабатываемых растений, что
              достигает­ся расходом рабочей жидкости не менее 300 л/га. Период
              защитного действия препарата до 10 дней. При совместном применении
              с СЗР, объем расхода рабочего раствора устанавливается на основе
              рекомендаций применяемых СЗР. Кратность обработок 1 раз в 10-14
              дней. При инсектицидных обработках при сильно-развитых популяциях
              допускается проведение трех обработок с интервалом в 5 дней.
            </td>
          </tr>
        </tbody>
      </table>
      Расход рабочей жидкости 400-2000 л/га. При совместном применении с
      пестицидами возможно снижать дозировку на 20-30%, применять после
      проведения теста на совместимость. Применять рабочий раствор в течение 2
      часов.
      <strong>Внимание! </strong>Не проводить обработку под воздействием прямых
      солнечных лучей. Жесткость воды не оказывает влияния на эффективность
      Рапсола и не является ограничивающим фактором.
      <strong>Производитель: </strong>
      <a href="https://berkanabio.ru/category/elitnye-agrosistemy/">
        Элитные Агросистемы
      </a>
      <strong>Упаковка: </strong>10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Рапсол - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav pageName="Рапсол" style={style} pathStyle={pathStyle} />
        <div className="page-content">
          <div className="page-content-wrapper">{jsx_content_wrapped}</div>
        </div>
      </Layout>
    </>
  );
};

export default rapsol;
