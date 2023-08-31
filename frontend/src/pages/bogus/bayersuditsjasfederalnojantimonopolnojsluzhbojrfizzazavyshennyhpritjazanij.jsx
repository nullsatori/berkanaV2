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

const bayersuditsjasfederalnojantimonopolnojsluzhbojrfizzazavyshennyhpritjazanij =
  () => {
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
        <a href="http://berkanabio.ru/wp-content/uploads/2018/02/bayer.jpg"></a>
        <strong>
          Bayer подал в суд на Федеральную антимонопольную службу РФ из-за
          сделки с Monsanto. Об этом сообщил на встрече с депутатами Госдумы
          руководитель ФАС РФ Игорь Артемьев
        </strong>
        <blockquote>
          Причиной поданного немецкой агрохимической компании иска стало
          несогласие с требованием антимонопольного органа передать значительную
          часть технологий для российскому агропрому. «Они имеют такой bigdata,
          что если их запустить в объединенном виде, у нас от сельского
          хозяйства мало что останется», - отметил Артемьев.
        </blockquote>
        Это первый российского правительства с Bayer. Российское
        представительство немецкой агрохимической компании пообещало в случае не
        удовлетворения их требований не заключать сделку по слиянию с Monsanto
        на территорию РФ и вообще уйти из страны. В российском представительстве
        Bayer заявили, что иск к ФАС РФ не исключает согласования условий для
        сделки с Monsanto. "Bayer воспользовался своим правом обжаловать
        предписание и обратился в суд. Этот шаг носит процессуальный характер и
        не повлияет на возможность переговоров по достижению взаимовыгодного
        соглашения с целью оказания поддержки дальнейшему инновационному
        развитию российского сельского хозяйства», - сообщила пресс-служба
        компании. По данным картотеки арбитражных дел, иск Bayer к ФАС был
        зарегистрирован 8 февраля. Компания добивается признания "решений и
        действий (бездействий) незаконными". Третьими лицами в разбирательстве
        являются ЗАО "Монсанто", Monsanto International и ООО "Монсанто Рус".
        Иск будет рассматриваться в Арбитражном суде Москвы. "Мы надеемся
        победить в этом суде, как мы победили компанию Google, Apple, другие,
        потому что мы находили какие-то все-таки не очень стандартные решения",
        - отметил Артемьев. В ноябре 2017 года ФАС объявила, что может
        согласовать сделку Bayer - Monsanto в случае, если Bayer выполнит
        поведенческие требования, включая передачу технологий в области
        селекции. Срок рассмотрения ходатайства германской Bayer AG о покупке
        100% акций американской Monsanto был продлен на 3 месяца.
        Антимонопольная служба пришла к выводу, что сделка может создать
        существенные риски для конкуренции на российском рынке в сегменте семян,
        средств защиты растений, в частности, неселективных гербицидов, а также
        цифровых предложений для сельхозпроизводителей. Поведенческие требования
        для согласования сделки включают передачу технологий в области селекции,
        необходимых для создания новых сортов и гибридов, применимых в
        российских агроклиматических условиях, на основании неэксклюзивной
        лицензии, а также доступ к базам данных в области цифрового земледелия
        российским компаниям. В январе Артемьев проводил встречу с руководством
        Bayer, стороны высказали готовность к продолжению переговоров "по всем
        спорным моментам для достижения взаимоприемлемого решения", - сообщала
        тогда ФАС. Замглавы ФАС Андрей Цыганов также был настроен позитивно:
        антимонопольная служба продолжает обсуждать с Bayer детали трансфера
        технологий и рассчитывает, что процесс завершится в намеченные сроки.
        Bayer и Monsanto в сентябре 2016 года подписали окончательное соглашение
        о слиянии. Стоимость сделки - $66 млрд ($128 за акцию Monsanto). Bayer
        профинансирует приобретение за счет собственных и банковских средств.
        (Источник: interfax.ru, agroxxi.ru)<span id="ctrlcopy"></span>
      </div>
    );

    return (
      <>
        <Head>
          <title>
            BAYER судиться с федеральной антимонопольной службой РФ из-за
            завышенных притязаний - Berkana
          </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout style={(headerStyle, pathStyle)}>
          <HeadNav
            pageName="BAYER судиться с федеральной антимонопольной службой РФ из-за завышенных притязаний"
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

export default bayersuditsjasfederalnojantimonopolnojsluzhbojrfizzazavyshennyhpritjazanij;
