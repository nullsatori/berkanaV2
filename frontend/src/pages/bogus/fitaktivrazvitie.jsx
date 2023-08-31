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

const fitaktivrazvitie = () => {
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
        <a href="https://berkanabio.ru/wp-content/uploads/2019/09/20190524075f6b13vit.jpg"></a>
        Микроэлементы + ростостимулирующие ауксин-фуллереновые витаминные
        комплексы
      </strong>
      Эффективные концентрированные удобрения с полным комплексом микроэлементов
      и аминокислот для различных фаз роста растений. В препарате РАЗВИТИЕ
      происходит постепенное снижение дозы фосфатов и увеличение содержания
      азота в аммиачной и нитратной форме. При этом в ростостимулирующем
      комплексе снижается концентрация витамина РР, В1, возрастает количество
      пиридоксина и появляется аскорбиновая кислота.
      <h2>Особенности</h2>
      Влияния биологически активного комплекса сводится к интенсификации
      совокупности процессов роста и развития отдельных вегетативных органов
      растений:
      <ul>
        <li>
          ауксин-фуллерновый комплекс на основе индолилмасляной кислоты и тиамин
          (витамин В1) влияют на рост корней;
        </li>
        <li>
          аминоуксусная кислота (глицин) совместно с ЭДТА представляют собой
          хелатирующий агент для
        </li>
        <li>
          микроэлементов с ростостимулирующим эффектом и антистрессовыми
          свойствами;
        </li>
        <li>
          аскорбиновая кислота (витамин С) является антиоксидантом, защищает
          хлорофилл от разрушения;
        </li>
        <li>
          пиридоксин (витамин В6) влияет на фотосинтез, и усиливает действие
          витамина В1;
        </li>
        <li>
          никотиновая кислота (витамин РР) - влияет на поглощение фосфора.
        </li>
      </ul>
      <h3>Состав</h3>
      Макроэлементы: N:P:K= 15:16:10 % Микроэлементы, мг/л: B - 700, Mn - 1500,
      Zn - 1500, Fe - 2400, Mo - 40, Cu - 10, Co - 10 Ростостимулирующие
      ауксин-фуллереновые витаминные комплексы - 25 мг/л
      <h3>Норма расхода</h3>
      <strong>
        Листовая подкормка для культур открытого и защищенного грунта:
      </strong>
      Для приготовления рабочего раствора удобрение, соответствующее текущей
      фазе роста растения, растворяют в воде из расчета 20-50 мл на 10 литров
      воды (0,02-0,05%-й раствор). Для небольших растений используют меньшую
      концентрацию рабочего раствора. Обработку проводят с интервалом 7 дней.
      Обработку проводят в утренние или вечерние часы. рН готового раствора
      составляет 5-5,5.
      <strong>Корневая подкормка:</strong>
      Для культур защищенного грунта используют при каждом поливе или 2 раза в
      неделю. Для приготовления рабочего раствора рекомендуется использовать
      10-20 мл удобрения на 10 литров воды (0,01-0,02%-й раствор). Объем
      рабочего раствора удобрения для одного растения от 250 до 500 мл в
      зависимости от его размера.
      <strong>Для культур открытого грунта:</strong>
      Применяют 1 раз в 7-10 дней, растворяя от 10 до 20 мл удобрения на 10
      литров воды. Объем готового раствора удобрения для одного растения от 250
      до 500 мл. При использовании линейки удобрений в системах капельного
      полива готовят 0,01%-й раствор, растворяя 1 л соответствующего фазе роста
      удобрения в 1 м. куб. воды.
      <strong>Производитель:</strong>{" "}
      <a href="https://berkanabio.ru/category/npo-binam/">НПО “БИНАМ”</a>
      <strong>Упаковка:</strong> 10 л
    </div>
  );

  return (
    <>
      <Head>
        <title>Фитактив Развитие - Berkana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout style={(headerStyle, pathStyle)}>
        <HeadNav
          pageName="Фитактив Развитие"
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

export default fitaktivrazvitie;