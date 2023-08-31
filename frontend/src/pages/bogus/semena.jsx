import React from 'react';
            import Layout from "@/components/general/layout";
            import Head from "next/head";
            import HeadNav from "@/components/services/head-nav";
            import ReactHtmlParser from 'html-react-parser';

            function wrapUntaggedTextWithP(node) {
                if (typeof node === 'string') {
                    return <p>{node}</p>;
                }

                if (React.isValidElement(node)) {
                    if (node.type === 'span') {
                        return node; 
                    }
                const hasSpanChildren = React.Children.toArray(node.props.children).some(child => React.isValidElement(child) && child.type === 'span');
                 if (!hasSpanChildren) {
                    const children = React.Children.map(node.props.children, child => wrapUntaggedTextWithP(child));
                    return React.cloneElement(node, null, children);
                } else {
                    return node;
                }
            }
                return node;
        }

            const semena = () => {
                let style= {
                    background: '#185F65',
                    color: '#D4A95A',
                };
                let pathStyle = {
                    fill: '#D4A95A',
                };
                let headerStyle = {
                    color: '#D4A95A'
                };

            
                const jsx_content_wrapped = wrapUntaggedTextWithP(<div>[su_row]

[su_column size="1/2"] <a href="#podsoln">ПОДСОЛНЕЧНИК</a>
<a href="https://berkanabio.ru/category/podsolnechnik-ochen-rannie-sorta/">Очень ранние (1)</a>
<a href="https://berkanabio.ru/category/podsolnechnik/podsolnechnik-rannie-sorta/">Ранние сорта (29)</a>
<a href="https://berkanabio.ru/category/podsolnechnik/podsolnechnik-srednerannie-sorta/">Среднеранние сорта (48)</a>
<a href="https://berkanabio.ru/category/podsolnechnik/srednepozdnie-sorta/">Среднепоздние сорта (2) </a>

[/su_column]

[su_column size="1/2"] <a href="#kukuruza">СЕМЕНА КУКУРУЗА</a>
<a href="https://berkanabio.ru/category/kukuruza/rannespelye-fao-100-199/">Раннеспелые, ФАО 100-199 (13)</a>
<a href="https://berkanabio.ru/category/kukuruza/kukuruza-srednerannie-fao-200-299/">Среднеранние, ФАО 200-299 (36)</a>
<a href="https://berkanabio.ru/category/kukuruza/kukuruza-srednespelye-fao-300-399/">Среднеспелые, ФАО 300-399 (17)</a>
<a href="https://berkanabio.ru/category/kukuruza/kukuruza-srednepozdnie-fao-400-499/">Среднепоздние, ФАО 400-499 (4)</a>

[/su_column]

[/su_row]
<p><a href="https://berkanabio.ru/wp-content/uploads/2021/10/Semena-pris-list-2022-10.pdf">↓ Скачать прайс Cемена 2022 года</a></p>
<h2><a id="podsoln"></a><strong>ПОДСОЛНЕЧНИК</strong></h2>
Современные сорта подсолнечника неприхотливы. Однако знание технологии и некоторых биологических и агротехнических особенностей культуры будет полезным каждому, кто собирается ее выращивать. Подсолнечник является хорошим медоносом. Растение привлекает на участок массу пчел и других насекомых-опылителей.


<p>Syngenta - предлагает сельхозпроизводителям не только широкий выбор семян ключевых полевых культур российского региона.</p>
<p><em>Подсолнечник. 150 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="193"/> <col width="140"/> <col width="171"/> <col width="94"/> <col width="123"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"группа="" data-sheets-value="{" спелости"}"=""><strong>ГРУППА СПЕЛОСТИ</strong></td>
<td 1":2,"2":"характеристика"}"="" data-sheets-value="{"><strong>ХАРАКТЕРИСТИКА</strong></td>
<td 1":2,"2":"обработка"}"="" data-sheets-value="{"><strong>ОБРАБОТКА</strong></td>
<td 1":2,"2":"цена,="" data-sheets-value="{" ндс"}"="" руб="" с=""><strong>ЦЕНА, руб с НДС</strong></td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="5" data-sheets-value="{" rowspan="1" для="" классической="" технологии"}"="">Гибриды для классической технологии</td>
</tr>
<tr>
<td 1":0}{"1":11,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"си="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" честер=""><a href="https://berkanabio.ru/si-chester/">СИ ЧЕСТЕР</a> <span>NEW</span></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g+"}"="" data-sheets-value="{">А-G+</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"12="" 100"}"="" data-sheets-value="{">12 100</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" арко"}"=""><a href="https://berkanabio.ru/si-arko/">СИ АРКО</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g="" data-sheets-value="{" высокоолеиновый"}"="">А-G / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"12="" 100"}"="" data-sheets-value="{">12 100</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" роки"}"=""><a href="https://berkanabio.ru/nk-roki/">НК РОКИ</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"савинка"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/savinka/">САВИНКА</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td "}"="" 1":2,"2":"а-e="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"санбро="" data-sheets-value="{" мр"}"=""><a href="https://berkanabio.ru/sanbro-mr/">САНБРО МР</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td "}"="" 1":2,"2":"а-e="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"босфора"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/bosfora/">БОСФОРА</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-f"}"="" data-sheets-value="{">А-F</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"10="" 120"}"="" data-sheets-value="{">10 120</td>
</tr>
<tr>
<td 1":2,"2":"алькантара"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/alkantara/">АЛЬКАНТАРА</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" кадикс"}"=""><a href="https://berkanabio.ru/si-kadiks/">СИ КАДИКС</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" брио"}"=""><a href="https://berkanabio.ru/nk-brio/">НК БРИО</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" конди"}"=""><a href="https://berkanabio.ru/nk-kondi/">НК КОНДИ</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" купава"}"=""><a href="https://berkanabio.ru/si-kupava/">СИ КУПАВА</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"тутти"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/tutti/">ТУТТИ</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e="" data-sheets-value="{" высокоолеиновый"}"="">А-E / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" ласкала"}"=""><a href="https://berkanabio.ru/si-laskala/">СИ ЛАСКАЛА</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"12="" 100"}"="" data-sheets-value="{">12 100</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" эдисон"}"=""><a href="https://berkanabio.ru/si-edison/">СИ ЭДИСОН</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-f"}"="" data-sheets-value="{">А-F</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"эстрада"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/estrada/">ЭСТРАДА</a></td>
<td 1":2,"2":"среднепоздний"}"="" data-sheets-value="{">Среднепоздний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" фламенко"}"=""><a href="https://berkanabio.ru/si-flamenko/">СИ ФЛАМЕНКО</a></td>
<td 1":2,"2":"среднепоздний"}"="" data-sheets-value="{">Среднепоздний</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" clearfield"}"="" colspan="5" data-sheets-value="{" rowspan="1" для="" технологии="">Гибриды для технологии Clearfield</td>
</tr>
<tr>
<td 1":0}{"1":12,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"си="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" авенжер=""><a href="https://berkanabio.ru/si-avenzher/">СИ АВЕНЖЕР</a> <span>NEW</span></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" фортими"}"=""><a href="https://berkanabio.ru/nk-fortimi/">НК ФОРТИМИ</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 190"}"="" data-sheets-value="{">14 190</td>
</tr>
<tr>
<td 1":2,"2":"коломби"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/kolombi/">КОЛОМБИ</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e="" data-sheets-value="{" высокоолеиновый"}"="">А-E / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"тристан"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/tristan/">ТРИСТАН</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"санай="" data-sheets-value="{" мр"}"=""><a href="https://berkanabio.ru/sanaj-mr/">САНАЙ МР</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" неома"}"=""><a href="https://berkanabio.ru/nk-neoma/">НК НЕОМА</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" эксперто"}"=""><a href="https://berkanabio.ru/si-eksperto/">СИ ЭКСПЕРТО</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e="" data-sheets-value="{" высокоолеиновый"}"="">А-E / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" clearfield="" colspan="5" data-sheets-value="{" plus"}"="" rowspan="1" для="" технологии="">Гибриды для технологии Clearfield Plus</td>
</tr>
<tr>
<td 1":0}{"1":12,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"дункан="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" клп=""><a href="https://berkanabio.ru/dunkan-klp/">ДУНКАН КЛП</a><span> NEW</span></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" клп"}"="" розета=""><a href="https://berkanabio.ru/si-rozeta-klp/">СИ РОЗЕТА КЛП</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" бакарди="" клп"}"=""><a href="https://berkanabio.ru/si-bakardi-klp/">СИ БАКАРДИ КЛП</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"16="" 170"}"="" data-sheets-value="{">16 170</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" клп"}"="" неостар=""><a href="https://berkanabio.ru/si-neostar-klp/">СИ НЕОСТАР КЛП</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"гибриды,="" colspan="5" data-sheets-value="{" fmc"}"="" rowspan="1" гербицида="" для="" компани="" оптимизи="" рованные="" эспресс="">Гибриды, оптимизи рованные для гербицида Эспресс компани FMC</td>
</tr>
<tr>
<td 1":0}{"1":7,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"суоми="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"=""><a href="https://berkanabio.ru/suomi/">СУОМИ</a> <span>NEW</span></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"суматра"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/sumatra/">СУМАТРА</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 190"}"="" data-sheets-value="{">14 190</td>
</tr>
<tr>
<td 1":2,"2":"сузука"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/suzuka-hts/">СУЗУКА</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":0}{"1":9,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"суберик="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"=""><a href="https://berkanabio.ru/suberik/">СУБЕРИК</a> <span>NEW</span></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"16="" 170"}"="" data-sheets-value="{">16 170</td>
</tr>
<tr>
<td 1":2,"2":"сумико"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/sumiko-hts/">СУМИКО</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
</tbody>
</table>
 

<strong></strong>
<p>Lidea - европейская семеноводческая компания, которая занимает одну из лидирующих позиций на международном рынке. Работая в непосредственной близости от нашей экосистемы, мы создаем не просто семена.</p>
<p><em>Подсолнечник. 150 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="191"/> <col width="144"/> <col width="141"/> <col width="159"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"группа="" data-sheets-value="{" спелости"}"=""><strong>ГРУППА СПЕЛОСТИ</strong></td>
<td 1":2,"2":"характеристика"}"="" data-sheets-value="{"><strong>ХАРАКТЕРИСТИКА</strong></td>
<td 1="" 1":2,"2":"цена="" data-sheets-value="{" ед.="" пос.="" руб"}"=""><strong>ЦЕНА 1 пос. ед./руб</strong></td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="3" data-sheets-value="{" rowspan="1" для="" классической="" технологии"}"="">Гибриды для классической технологии</td>
<td></td>
</tr>
<tr>
<td 1":0}{"1":6,"2":{"2":{"1":2,"2":13386021}}}{"1":7,"2":{"2":{"1":2,"2":13386021},"6":1}}{"1":10,"2":{"6":1}}{"1":13}"="" 1":2,"2":"агора="" boost&go"}"="" data-sheets-textstyleruns="{" data-sheets-value="{" new=""><a href="https://berkanabio.ru/agora/">АГОРА</a> <span>NEW</span> / Boost&amp;GO</td>
<td 1":2,"2":"ранний"}"="" data-sheets-value="{">Ранний</td>
<td 1":2,"2":"="" data-sheets-value="{">G"}"&gt;&gt;G</td>
<td 000"}"="" 1":2,"2":"14="" 15="" 500="" data-sheets-value="{">14 500 / 15 000</td>
</tr>
<tr>
<td 1":2,"2":"вероника"}"="" data-sheets-value="{">ВЕРОНИКА</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"a-f"}"="" data-sheets-value="{">A-F</td>
<td 000"}"="" 1":2,"2":"12="" data-sheets-value="{">12 000</td>
</tr>
<tr>
<td 1":2,"2":"дольчевита"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dolchevita/">ДОЛЬЧЕВИТА</a></td>
<td 1":2,"2":"очень="" data-sheets-value="{" ранний"}"="">Очень ранний</td>
<td 1":2,"2":"-"}"="" data-sheets-value="{">-</td>
<td 000"}"="" 1":2,"2":"11="" data-sheets-value="{">11 000</td>
</tr>
<tr>
<td 1":2,"2":"регата"}"="" data-sheets-value="{">РЕГАТА</td>
<td 1":2,"2":"ранний"}"="" data-sheets-value="{">Ранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"13="" 250"}"="" data-sheets-value="{">13 250</td>
</tr>
<tr>
<td 1":0}{"1":9,"2":{"2":{"1":2,"2":13386021}}}"="" 1":2,"2":"розалия="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"=""><a href="https://berkanabio.ru/rozaliya/">РОЗАЛИЯ</a> <span>NEW</span></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"-"}"="" data-sheets-value="{">-</td>
<td 000"}"="" 1":2,"2":"13="" data-sheets-value="{">13 000</td>
</tr>
<tr>
<td 1":2,"2":"савана="" boost&go"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/savana/">САВАНА</a> / Boost&amp;GO</td>
<td 1":2,"2":"ранний"}"="" data-sheets-value="{">Ранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"13="" 750"}"="" data-sheets-value="{">13 750</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="3" data-sheets-value="{" rowspan="1" для="" клеарфилд"}"="" технологии="">Гибриды для технологии Клеарфилд</td>
<td></td>
</tr>
<tr>
<td 1":0}{"1":8,"2":{"2":{"1":2,"2":13386021},"6":1}}{"1":11}"="" 1":2,"2":"белфис="" boost&go"}"="" data-sheets-textstyleruns="{" data-sheets-value="{" new=""><a href="https://berkanabio.ru/belfis-klp/">БЕЛФИС</a> <span>NEW</span> / Boost&amp;GO</td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 000="" 1":2,"2":"15="" 15="" 500"}"="" data-sheets-value="{">15 000 / 15 500</td>
</tr>
<tr>
<td 1":2,"2":"генералис"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/generalis-kl/">ГЕНЕРАЛИС</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"14="" 500"}"="" data-sheets-value="{">14 500</td>
</tr>
<tr>
<td 1":2,"2":"новамис"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/novamis-kl/">НОВАМИС</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-f"}"="" data-sheets-value="{">A-F</td>
<td 1":2,"2":"13="" 500"}"="" data-sheets-value="{">13 500</td>
</tr>
<tr>
<td 1":2,"2":"янис"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/yanis-klp/">ЯНИС</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"13="" 500"}"="" data-sheets-value="{">13 500</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="3" data-sheets-value="{" rowspan="1" для="" технологии="" эспресс"}"="">Гибриды для технологии Эспресс</td>
<td></td>
</tr>
<tr>
<td 1":2,"2":"аркадия"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/arkadiya-su/">АРКАДИЯ</a></td>
<td 1":2,"2":"ранний"}"="" data-sheets-value="{">Ранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"13="" 750"}"="" data-sheets-value="{">13 750</td>
</tr>
<tr>
<td 1":2,"2":"аргентик="" boost&go"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/argentik-su/">АРГЕНТИК</a> / Boost&amp;GO</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"="" data-sheets-value="{">G / Высокоолеиновый"}"&gt;&gt;G / Высокоолеиновый</td>
<td 1":2,"2":"14="" 15="" 250"}"="" 750="" data-sheets-value="{">14 750 / 15 250</td>
</tr>
</tbody>
</table>
Обработка включает полную фунгицидную обработку + инсектицид. Фунгицид: Максим XL + Апрон, Инсектицид: Пончо. Boost&amp;GO - технология для сохранения генетического потенциала семян.

 
<p>Bayer Crop Science - один из ведущих производителей и поставщиков продукции для сельского хозяйства.</p>
<p><em>Подсолнечник. 150 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="232"/> <col width="171"/> <col width="263"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"тип"}"="" data-sheets-value="{"><strong>ТИП</strong></td>
<td 1="" 1":2,"2":"цена="" c="" data-sheets-value="{" инсектицид"}"="" ндс,="" обработкой="" п.е.,="" руб="" с=""><strong>ЦЕНА 1 п.е., руб с НДС, c обработкой инсектицид</strong></td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" монализа"}"=""><a href="https://berkanabio.ru/es-monaliza/">ЕС МОНАЛИЗА</a></td>
<td 1":2,"2":"традиционный"}"="" data-sheets-value="{">Традиционный</td>
<td 1":2,"2":"12="" 800"}"="" data-sheets-value="{">12 800</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" белла"}"=""><a href="https://berkanabio.ru/es-bella/">ЕС БЕЛЛА</a></td>
<td 1":2,"2":"or7"}"="" data-sheets-value="{">OR7</td>
<td 1":2,"2":"14="" 400"}"="" data-sheets-value="{">14 400</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" амис="" сл"}"=""><a href="https://berkanabio.ru/es-amis/">ЕС АМИС СЛ</a></td>
<td 1":2,"2":"cl"}"="" data-sheets-value="{">CL</td>
<td 1":2,"2":"14="" 400"}"="" data-sheets-value="{">14 400</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" артик"}"=""><a href="https://berkanabio.ru/es-artik/">ЕС АРТИК</a></td>
<td 1":2,"2":"or7,="" data-sheets-value="{" ho"}"="">OR7, HO</td>
<td 1":2,"2":"14="" 800"}"="" data-sheets-value="{">14 800</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" сл"}"="" террамис=""><a href="https://berkanabio.ru/es-terramis-sl/">ЕС ТЕРРАМИС СЛ</a></td>
<td 1":2,"2":"cl"}"="" data-sheets-value="{">CL</td>
<td 1":2,"2":"15="" 200"}"="" data-sheets-value="{">15 200</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" изида"}"=""><a href="https://berkanabio.ru/es-izida/">ЕС ИЗИДА</a></td>
<td 1":2,"2":"or7"}"="" data-sheets-value="{">OR7</td>
<td 1":2,"2":"15="" 200"}"="" data-sheets-value="{">15 200</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" генезис="" сл"}"=""><a href="https://berkanabio.ru/es-genezis/">ЕС ГЕНЕЗИС СЛ</a></td>
<td 1":2,"2":"cl+"}"="" data-sheets-value="{">CL+</td>
<td 1":2,"2":"15="" 500"}"="" data-sheets-value="{">15 500</td>
</tr>
<tr>
<td 1":2,"2":"дракарис="" data-sheets-value="{" сл"}"=""><a href="https://berkanabio.ru/drakaris-slp/">ДРАКАРИС СЛ</a></td>
<td 1":2,"2":"cl+"}"="" data-sheets-value="{">CL+</td>
<td 1":2,"2":"15="" 500"}"="" data-sheets-value="{">15 500</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" ароматик"}"=""><a href="https://berkanabio.ru/es-aromatik-su/">ЕС АРОМАТИК</a></td>
<td 1":2,"2":"su"}"="" data-sheets-value="{">SU</td>
<td 1":2,"2":"16="" 400"}"="" data-sheets-value="{">16 400</td>
</tr>
<tr>
<td 1":2,"2":"ес="" data-sheets-value="{" су"}"="" хадсон=""><a href="https://berkanabio.ru/es-hadson-su/">ЕС ХАДСОН СУ</a></td>
<td 1":2,"2":"su"}"="" data-sheets-value="{">SU</td>
<td 1":2,"2":"16="" 400"}"="" data-sheets-value="{">16 400</td>
</tr>
</tbody>
</table>
Стоимость инсектицидной обработки 1 п.е. подсолнечника 1 200 руб. с НДС.

 


<p>Мaisadour - создает новые оригинальные гибриды на 5 селекционных станциях.</p>
<p><em>Подсолнечник. 150 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="150"/> <col width="138"/> <col width="160"/> <col width="147"/> <col width="115"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"группа="" data-sheets-value="{" спелости"}"=""><strong>ГРУППА СПЕЛОСТИ</strong></td>
<td 1":2,"2":"характеристика"}"="" data-sheets-value="{"><strong>ХАРАКТЕРИСТИКА</strong></td>
<td 1":2,"2":"протравка="" data-sheets-value="{" семян"}"=""><strong>ПРОТРАВКА СЕМЯН</strong></td>
<td "}"="" 1="" 1":2,"2":"цена="" data-sheets-value="{" ед.="" пос.="" руб=""><strong>ЦЕНА 1 пос. ед./руб</strong></td>
</tr>
<tr>
<td 1":2,"2":"мас="" 80.д"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-80-d/">МАС 80.Д</a></div></td>
<td 1":2,"2":"раннеспелый"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Раннеспелый</div></td>
<td 1":2,"2":"а-е"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>А-Е</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"10="" 190"}"="" data-sheets-value="{">10 190</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 1":2,"2":"11="" 450"}"="" data-sheets-value="{">11 450</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 91.г"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-91-g/">МАС 91.Г</a></div></td>
<td 1":2,"2":"среднеранний"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Среднеранний</div></td>
<td 1":2,"2":"а-g"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>А-G</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"8="" 750"}"="" data-sheets-value="{">8 750</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 010"}"="" 1":2,"2":"10="" data-sheets-value="{">10 010</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 96.п"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-96-p/">МАС 96.П</a></div></td>
<td 1":2,"2":"среднеспелый"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Среднеспелый</div></td>
<td 1":2,"2":"а-g"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>А-G</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"12="" 870"}"="" data-sheets-value="{">12 870</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 1":2,"2":"14="" 130"}"="" data-sheets-value="{">14 130</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 80.="" colspan="1" data-sheets-value="{" rowspan="2" ир"}"="">
<div><a href="https://berkanabio.ru/mas-80-ir/">МАС 80. ИР</a></div></td>
<td 1":2,"2":"раннеспелый"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Раннеспелый</div></td>
<td 1":2,"2":"система="" clearfield"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Система Clearfield</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"12="" 870"}"="" data-sheets-value="{">12 870</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 1":2,"2":"14="" 130"}"="" data-sheets-value="{">14 130</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 87.="" colspan="1" data-sheets-value="{" rowspan="2" ир"}"="">
<div><a href="https://berkanabio.ru/mas-87-ir/">МАС 87. ИР</a></div></td>
<td 1":2,"2":"среднеранний"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Среднеранний</div></td>
<td 1":2,"2":"система="" clearfield"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Система Clearfield</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"13="" 710"}"="" data-sheets-value="{">13 710</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 1":2,"2":"14="" 970"}"="" data-sheets-value="{">14 970</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 92.кп"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-92-kp/">МАС 92.КП</a></div></td>
<td 1":2,"2":"среднеспелый"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Среднеспелый</div></td>
<td 1":2,"2":"система="" clearfield="" colspan="1" data-sheets-value="{" plus"}"="" rowspan="2">
<div>Система Clearfield Plus</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"14="" 700"}"="" data-sheets-value="{">14 700</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 1":2,"2":"15="" 960"}"="" data-sheets-value="{">15 960</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 83.су"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-83-su/">МАС 83.СУ</a></div></td>
<td 1":2,"2":"среднеранний"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Среднеранний</div></td>
<td 1":2,"2":"технология="" colspan="1" data-sheets-value="{" rowspan="2" экспресс"}"="">
<div>Технология Экспресс</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"14="" 720"}"="" data-sheets-value="{">14 720</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 1":2,"2":"15="" 980"}"="" data-sheets-value="{">15 980</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 85.су"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-85-su/">МАС 85.СУ</a></div></td>
<td 1":2,"2":"среднеспелый"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Среднеспелый</div></td>
<td 1":2,"2":"технология="" colspan="1" data-sheets-value="{" rowspan="2" экспресс"}"="">
<div>Технология Экспресс</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"13="" 920"}"="" data-sheets-value="{">13 920</td>
</tr>
<tr>
<td 1":2,"2":"агростарт+круйзер"}"="" data-sheets-value="{">АгроСтарт+Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
</tbody>
</table>
 


<p>LG - Семена Лимагрен более 10 лет назад завоевали доверие у клиентов и успешно продаются на рынке России.</p>
<p><em>Подсолнечник. 150 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="190"/> <col width="142"/> <col width="131"/> <col width="99"/> <col width="124"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"группа="" data-sheets-value="{" спелости"}"=""><strong>ГРУППА СПЕЛОСТИ</strong></td>
<td 1":2,"2":"характеристика"}"="" data-sheets-value="{"><strong>ХАРАКТЕРИСТИКА</strong></td>
<td 1":2,"2":"обработка"}"="" data-sheets-value="{"><strong>ОБРАБОТКА</strong></td>
<td "}"="" 1="" 1":2,"2":"цена="" data-sheets-value="{" ед.="" пос.="" руб=""><strong>ЦЕНА 1 пос. ед./руб</strong></td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="5" data-sheets-value="{" rowspan="1" для="" классической="" технологии"}"="">Гибриды для классической технологии</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5377="" data-sheets-value="{" импорт="" рф"}"=""><a href="https://berkanabio.ru/lg-5377/">ЛГ 5377 импорт/рф</a></td>
<td 1":2,"2":"раннеспелый"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>Раннеспелый</div></td>
<td 1":3,"3":0}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>0</div></td>
<td 1":2,"2":"-"}"="" data-sheets-value="{">-</td>
<td 1":2,"2":"10="" 400="" 9="" 900"}"="" data-sheets-value="{">10 400 / 9 900</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5377="" data-sheets-value="{" импорт="" рф"}"=""><a href="https://berkanabio.ru/lg-5377/">ЛГ 5377 импорт/рф</a></td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 100"}"="" 11="" 600="" data-sheets-value="{">11 600 / 11 100</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50270="" data-sheets-value="{" импорт"}"=""><a href="https://berkanabio.ru/lg-50270/">ЛГ 50270 импорт</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"12="" 700"}"="" data-sheets-value="{">12 700</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50480="" data-sheets-value="{" импорт"}"=""><a href="https://berkanabio.ru/lg-50480/">ЛГ 50480 импорт</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 700"}"="" data-sheets-value="{">13 700</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5478="" data-sheets-value="{" импорт="" рф"}"=""><a href="https://berkanabio.ru/lg-5478/">ЛГ 5478 импорт/рф</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-f"}"="" data-sheets-value="{">A-F</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 13="" 200"}"="" 700="" data-sheets-value="{">13 700 / 13 200</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5485="" data-sheets-value="{" импорт"}"=""><a href="https://berkanabio.ru/lg-5485/">ЛГ 5485 импорт</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"10="" 500"}"="" data-sheets-value="{">10 500</td>
</tr>
<tr>
<td 1":2,"2":"тунка="" data-sheets-value="{" импорт="" рф"}"=""><a href="https://berkanabio.ru/tunka/">ТУНКА импорт/рф</a></td>
<td></td>
<td></td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 12="" 200="" 700"}"="" data-sheets-value="{">13 200 / 12 700</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5580="" data-sheets-value="{" импорт"}"=""><a href="https://berkanabio.ru/lg-5580/">ЛГ 5580 импорт</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 700"}"="" data-sheets-value="{">13 700</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50510="" data-sheets-value="{" импорт"}"=""><a href="https://berkanabio.ru/lg-50510/">ЛГ 50510 импорт</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 700"}"="" data-sheets-value="{">13 700</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50514="" data-sheets-value="{" импорт="" рф"}"=""><a href="https://berkanabio.ru/lg-50514/">ЛГ 50514 импорт/рф</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 13="" 200="" 700"}"="" data-sheets-value="{">14 200 / 13 700</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50585="" data-sheets-value="{" импорт"}"=""><a href="https://berkanabio.ru/lg-50585/">ЛГ 50585 импорт</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"="" data-sheets-value="{">G"}"&gt;&gt;G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 200"}"="" data-sheets-value="{">14 200</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" cl="" colspan="5" data-sheets-value="{" rowspan="1" технологии"}"="">Гибриды CL технологии</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5543="" data-sheets-value="{" импорт="" кл="" рф"}"=""><a href="https://berkanabio.ru/lg-5543-kl/">ЛГ 5543 КЛ импорт/рф</a></td>
<td></td>
<td></td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 12="" 200="" 700"}"="" data-sheets-value="{">13 200 / 12 700</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" clp="" colspan="5" cp="" data-sheets-value="{" rowspan="1" и="" технологии"}"="">Гибриды CLP и CLP cp технологии</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5463="" data-sheets-value="{" импорт"}"="" кл=""><a href="https://berkanabio.ru/lg-5463-kl/">ЛГ 5463 КЛ импорт</a></td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 700"}"="" data-sheets-value="{">13 700</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5542="" data-sheets-value="{" импорт="" кл="" рф"}"=""><a href="https://berkanabio.ru/lg-5542-kl/">ЛГ 5542 КЛ импорт / рф</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 13="" 200="" 700"}"="" data-sheets-value="{">14 200 / 13 700</td>
</tr>
<tr>
<td 1":0}{"1":20,"2":{"4":9}}{"1":21,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"лг="" 50455="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" импорт="" клп=""><a href="https://berkanabio.ru/lg-50455-klp/">ЛГ 50455 КЛП импорт <span>NEW</span></a></td>
<td 1":2,"2":"ранний"}"="" data-sheets-value="{">Ранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 800"}"="" data-sheets-value="{">14 800</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 5555="" data-sheets-value="{" импорт="" клп="" рф"}"=""><a href="https://berkanabio.ru/lg-5555-klp/">ЛГ 5555 КЛП импорт / рф</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 14="" 200"}"="" 700="" data-sheets-value="{">14 700 / 14 200</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50521="" data-sheets-value="{" импорт"}"="" клп=""><a href="https://berkanabio.ru/lg-50521-klp/">ЛГ 50521 КЛП импорт</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 200"}"="" data-sheets-value="{">14 200</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50545="" data-sheets-value="{" импорт"}"="" клп=""><a href="https://berkanabio.ru/lg-50545-klp/">ЛГ 50545 КЛП импорт</a></td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 200"}"="" data-sheets-value="{">14 200</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 50635="" data-sheets-value="{" импорт"}"="" клп=""><a href="https://berkanabio.ru/lg-50635-klp/">ЛГ 50635 КЛП импорт</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 700"}"="" data-sheets-value="{">14 700</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="5" data-sheets-value="{" express="" rowspan="1" технологии"}"="">Гибриды EXPRESS технологии</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 59580="" data-sheets-value="{" импорт="" рф"}"=""><a href="https://berkanabio.ru/lg-59580/">ЛГ 59580 импорт / рф</a></td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"a-g"}"="" data-sheets-value="{">A-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 14="" 300"}"="" 800="" data-sheets-value="{">14 800 / 14 300</td>
</tr>
<tr>
<td 1":0}{"1":17,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"лг="" 50479="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" импорт=""><a href="https://berkanabio.ru/lg-50479-sh/">ЛГ 50479 импорт <span>NEW</span></a></td>
<td 1":2,"2":"ранний"}"="" data-sheets-value="{">Ранний</td>
<td 1":2,"2":"а-f"}"="" data-sheets-value="{">А-F</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 800"}"="" data-sheets-value="{">14 800</td>
</tr>
</tbody>
</table>
 
<h2><a id="kukuruza"></a><strong>КУКУРУЗА</strong></h2>
Оптимальным вариантом на наш взгляд являются специально выведенные гибридные сорта. Они более устойчивы к изменениям погодных условий, быстрее растут и дают лучше урожай. В более северных, а следовательно и более холодных регионах, высадка семян сельскохозяйственных культур производится в закрытый грунт и после получения хороших всходов рассада пересаживается в открытый грунт.


<p>Syngenta - предлагает сельхозпроизводителям не только широкий выбор семян ключевых полевых культур российского региона.</p>
<p><em>Кукуруза. 80 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="190"/> <col width="100"/> <col width="274"/> <col width="122"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"фао"}"="" data-sheets-value="{"><strong>ФАО</strong></td>
<td 1":2,"2":"обработка"}"="" data-sheets-value="{"><strong>ОБРАБОТКА</strong></td>
<td 1":2,"2":"цена,="" data-sheets-value="{" ндс"}"="" руб="" с=""><strong>ЦЕНА, руб с НДС</strong></td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" талисман"}"=""><a href="https://berkanabio.ru/si-talisman/">СИ ТАЛИСМАН</a></td>
<td 1":3,"3":180}"="" data-sheets-value="{">180</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"10="" 560"}"="" data-sheets-value="{">10 560</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" фалькон"}"=""><a href="https://berkanabio.ru/nk-falkon/">НК ФАЛЬКОН</a></td>
<td 1":3,"3":190}"="" data-sheets-value="{">190</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"9="" 570"}"="" data-sheets-value="{">9 570</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" ротанго"}"=""><a href="https://berkanabio.ru/si-rotango/">СИ РОТАНГО</a></td>
<td 1":3,"3":200}"="" data-sheets-value="{">200</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"9="" 570"}"="" data-sheets-value="{">9 570</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" телиас"}"=""><a href="https://berkanabio.ru/si-telias/">СИ ТЕЛИАС</a></td>
<td 1":3,"3":210}"="" data-sheets-value="{">210</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"10="" 560"}"="" data-sheets-value="{">10 560</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" новатоп"}"="">СИ НОВАТОП</td>
<td 1":3,"3":240}"="" data-sheets-value="{">240</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"9="" 570"}"="" data-sheets-value="{">9 570</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" импульс"}"=""><a href="https://berkanabio.ru/si-impuls/">СИ ИМПУЛЬС</a></td>
<td 1":3,"3":270}"="" data-sheets-value="{">270</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":0}{"1":9,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"си="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" озон=""><a href="https://berkanabio.ru/si-ozon/">СИ ОЗОН</a> NEW</td>
<td 1":3,"3":300}"="" data-sheets-value="{">300</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" скорпиус"}"=""><a href="https://berkanabio.ru/si-skorpius/">СИ СКОРПИУС</a></td>
<td 1":3,"3":310}"="" data-sheets-value="{">310</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" кариока"}"=""><a href="https://berkanabio.ru/si-karioka/">СИ КАРИОКА</a></td>
<td 1":3,"3":430}"="" data-sheets-value="{">430</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="4" data-sheets-value="{" rowspan="1" артезиан"}"="">Гибриды Артезиан</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" феномен"}"=""><a href="https://berkanabio.ru/si-fenomen/">СИ ФЕНОМЕН</a></td>
<td 1":3,"3":220}"="" data-sheets-value="{">220</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" фортаго"}"=""><a href="https://berkanabio.ru/si-fortago/">СИ ФОРТАГО</a></td>
<td 1":3,"3":250}"="" data-sheets-value="{">250</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" чоринтос"}"=""><a href="https://berkanabio.ru/si-chorintos/">СИ ЧОРИНТОС</a></td>
<td 1":3,"3":290}"="" data-sheets-value="{">290</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" премео"}"=""><a href="https://berkanabio.ru/si-premeo/">СИ ПРЕМЕО</a></td>
<td 1":3,"3":380}"="" data-sheets-value="{">380</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"11="" 220"}"="" data-sheets-value="{">11 220</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="4" data-sheets-value="{" powergrain"}"="" rowspan="1">Гибриды Powergrain</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" маримба"}"=""><a href="https://berkanabio.ru/si-marimba/">СИ МАРИМБА</a></td>
<td 1":3,"3":260}"="" data-sheets-value="{">260</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"10="" 560"}"="" data-sheets-value="{">10 560</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" фотон"}"=""><a href="https://berkanabio.ru/si-foton/">СИ ФОТОН</a></td>
<td 1":3,"3":300}"="" data-sheets-value="{">300</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"10="" 560"}"="" data-sheets-value="{">10 560</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="4" data-sheets-value="{" powercell"}"="" rowspan="1">Гибриды Powercell</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" юнитоп"}"=""><a href="https://berkanabio.ru/si-junitop/">СИ ЮНИТОП</a></td>
<td 1":3,"3":240}"="" data-sheets-value="{">240</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"9="" 900"}"="" data-sheets-value="{">9 900</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" кардона"}"=""><a href="https://berkanabio.ru/si-kardona/">СИ КАРДОНА</a></td>
<td 1":3,"3":250}"="" data-sheets-value="{">250</td>
<td +="" 1":2,"2":"максим="" data-sheets-value="{" вайбранс"}"="" зеа="" квадро="" форс="">Максим Квадро + Форс Зеа + Вайбранс</td>
<td 1":2,"2":"9="" 900"}"="" data-sheets-value="{">9 900</td>
</tr>
</tbody>
</table>
 

<strong></strong>
<p>Lidea - европейская семеноводческая компания, которая занимает одну из лидирующих позиций на международном рынке. Работая в непосредственной близости от нашей экосистемы, мы создаем не просто семена.</p>
<p><em>Кукуруза. 80 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="190"/> <col width="100"/> <col width="244"/> <col width="129"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"фао"}"="" data-sheets-value="{"><strong>ФАО</strong></td>
<td 1":2,"2":"характеристика"}"="" data-sheets-value="{"><strong>ХАРАКТЕРИСТИКА</strong></td>
<td 1="" 1":2,"2":"цена="" data-sheets-value="{" ед.="" пос.="" руб"}"=""><strong>ЦЕНА 1 пос. ед./руб</strong></td>
</tr>
<tr>
<td 1":2,"2":"сирриус="" boost&go"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/sirrius/">СИРРИУС</a> / Boost&amp;GO</td>
<td 1":3,"3":200}"="" data-sheets-value="{">200</td>
<td 1":2,"2":"на="" data-sheets-value="{" зерно"}"="">На зерно</td>
<td "}"="" 1":2,"2":"10="" 11="" 400="" 900="" data-sheets-value="{">10 900 / 11 400</td>
</tr>
<tr>
<td 1":2,"2":"креатив="" boost&go"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/kreativ/">КРЕАТИВ</a> / Boost&amp;GO</td>
<td 1":3,"3":260}"="" data-sheets-value="{">260</td>
<td 1":2,"2":"на="" data-sheets-value="{" зерно,="" силос"}"="">На зерно, силос</td>
<td 1":2,"2":"11="" 12="" 200"}"="" 700="" data-sheets-value="{">11 700 / 12 200</td>
</tr>
<tr>
<td 1":2,"2":"фарадей="" boost&go"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/faradej/">ФАРАДЕЙ</a> / Boost&amp;GO</td>
<td 1":3,"3":320}"="" data-sheets-value="{">320</td>
<td 1":2,"2":"на="" data-sheets-value="{" зерно"}"="">На зерно</td>
<td 1":2,"2":"11="" 11="" 400="" 900"}"="" data-sheets-value="{">11 400 / 11 900</td>
</tr>
<tr>
<td 1":0}{"1":7,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"анови="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"=""><a href="https://berkanabio.ru/anovi/">АНОВИ</a> <span>NEW</span></td>
<td 1":3,"3":180}"="" data-sheets-value="{">180</td>
<td 1":2,"2":"кремнисто-зубовидный"}"="" data-sheets-value="{">Кремнисто-зубовидный</td>
<td 1":2,"2":"10="" 300"}"="" data-sheets-value="{">10 300</td>
</tr>
<tr>
<td 1":2,"2":"дельфин"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/delfin/">ДЕЛЬФИН</a></td>
<td 1":3,"3":190}"="" data-sheets-value="{">190</td>
<td 1":2,"2":"кремнисто-зубовидный"}"="" data-sheets-value="{">Кремнисто-зубовидный</td>
<td 1":2,"2":"10="" 300"}"="" data-sheets-value="{">10 300</td>
</tr>
<tr>
<td 1":2,"2":"хаббл"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/habbl/">ХАББЛ</a></td>
<td 1":3,"3":240}"="" data-sheets-value="{">240</td>
<td 1":2,"2":"кремнисто-зубовидный"}"="" data-sheets-value="{">Кремнисто-зубовидный</td>
<td 1":2,"2":"10="" 300"}"="" data-sheets-value="{">10 300</td>
</tr>
<tr>
<td 1":0}{"1":8,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"григри="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"=""><a href="https://berkanabio.ru/grigri/">ГРИГРИ</a> <span>NEW</span></td>
<td 1":3,"3":250}"="" data-sheets-value="{">250</td>
<td 1":2,"2":"кремнисто-зубовидный"}"="" data-sheets-value="{">Кремнисто-зубовидный</td>
<td 1":2,"2":"10="" 400"}"="" data-sheets-value="{">10 400</td>
</tr>
<tr>
<td 1":0}{"1":6,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"бонд="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"=""><a href="https://berkanabio.ru/bond/">БОНД</a> <span>NEW</span></td>
<td 1":3,"3":260}"="" data-sheets-value="{">260</td>
<td 1":2,"2":"кремнисто-зубовидный"}"="" data-sheets-value="{">Кремнисто-зубовидный</td>
<td 1":2,"2":"10="" 300"}"="" data-sheets-value="{">10 300</td>
</tr>
<tr>
<td 1":2,"2":"констеланс"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/konstelans/">КОНСТЕЛАНС</a></td>
<td 1":3,"3":260}"="" data-sheets-value="{">260</td>
<td 1":2,"2":"на="" data-sheets-value="{" зерно"}"="">На зерно</td>
<td 1":2,"2":"10="" 600"}"="" data-sheets-value="{">10 600</td>
</tr>
<tr>
<td 1":2,"2":"астероид"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/asteroid/">АСТЕРОИД</a></td>
<td 1":3,"3":280}"="" data-sheets-value="{">280</td>
<td 1":2,"2":"на="" data-sheets-value="{" зерно,="" силос"}"="">На зерно, силос</td>
<td 1":2,"2":"10="" 700"}"="" data-sheets-value="{">10 700</td>
</tr>
<tr>
<td 1":2,"2":"метод"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/metod/">МЕТОД</a></td>
<td 1":3,"3":380}"="" data-sheets-value="{">380</td>
<td 1":2,"2":"на="" data-sheets-value="{" зерно,="" силос"}"="">На зерно, силос</td>
<td 1":2,"2":"10="" 600"}"="" data-sheets-value="{">10 600</td>
</tr>
<tr>
<td 1":2,"2":"евростар"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/evrostar/">ЕВРОСТАР</a></td>
<td 1":3,"3":210}"="" data-sheets-value="{">210</td>
<td 1":2,"2":"кремнисто-зубовидный="" data-sheets-value="{" зерно,="" крупу"}"="" на="" силос,="">Кремнисто-зубовидный / на зерно, силос, крупу</td>
<td 1":2,"2":"9="" 500"}"="" data-sheets-value="{">9 500</td>
</tr>
<tr>
<td 1":2,"2":"бомбастик"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/bombastik/">БОМБАСТИК</a></td>
<td 1":3,"3":230}"="" data-sheets-value="{">230</td>
<td 1":2,"2":"кремнисто-зубовидный="" data-sheets-value="{" биогаз"}"="" зерно,="" на="" силос,="">Кремнисто-зубовидный / на зерно, силос, биогаз</td>
<td 1":2,"2":"9="" 500"}"="" data-sheets-value="{">9 500</td>
</tr>
<tr>
<td 1":0}{"1":8,"2":{"4":9,"6":1}}{"1":9,"2":{"2":{"1":3,"3":4},"6":1}}"="" 1":2,"2":"глорифи="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"=""><a href="https://berkanabio.ru/glorifi/">ГЛОРИФИ</a> <span>NEW</span></td>
<td 1":3,"3":280}"="" data-sheets-value="{">280</td>
<td 1":2,"2":"зубовидный"}"="" data-sheets-value="{">Зубовидный</td>
<td 1":2,"2":"9="" 950"}"="" data-sheets-value="{">9 950</td>
</tr>
</tbody>
</table>
<p>Обработка включает полную фунгицидную обработку + инсектицид. Фунгицид: Редиго M, Инсектицид: Пончо.
Boost&amp;GO - технология для сохранения генетического потенциала семян.</p>
 
<p>Bayer Crop Science - один из ведущих производителей и поставщиков продукции для сельского хозяйства.</p>
<p><em>Кукуруза. 80 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="199"/> <col width="148"/> <col width="252"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"фао"}"="" data-sheets-value="{"><strong>ФАО</strong></td>
<td 1="" 1":2,"2":"цена="" data-sheets-value="{" инсектицид"}"="" ндс,="" обработкой="" п.е.,="" руб="" с=""><strong>ЦЕНА 1 п.е., руб с НДС, с обработкой инсектицид</strong></td>
</tr>
<tr>
<td 1":2,"2":"dkc3006"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3006/">DKC3006</a></td>
<td 1":3,"3":180}"="" data-sheets-value="{">180</td>
<td 040"}"="" 1":2,"2":"15="" data-sheets-value="{">15 040</td>
</tr>
<tr>
<td 1":2,"2":"dkc3151"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dkc3151/">DKC3151</a></td>
<td 1":3,"3":180}"="" data-sheets-value="{">180</td>
<td 1":2,"2":"13="" 930"}"="" data-sheets-value="{">13 930</td>
</tr>
<tr>
<td 1":2,"2":"dkc3079"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3079/">DKC3079</a></td>
<td 1":3,"3":190}"="" data-sheets-value="{">190</td>
<td 1":2,"2":"14="" 740"}"="" data-sheets-value="{">14 740</td>
</tr>
<tr>
<td 1":2,"2":"dkc3169"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3169/">DKC3169</a></td>
<td 1":3,"3":190}"="" data-sheets-value="{">190</td>
<td 1":2,"2":"13="" 930"}"="" data-sheets-value="{">13 930</td>
</tr>
<tr>
<td 1":2,"2":"dkc3088"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3088/">DKC3088</a></td>
<td 1":3,"3":190}"="" data-sheets-value="{">190</td>
<td 1":2,"2":"14="" 740"}"="" data-sheets-value="{">14 740</td>
</tr>
<tr>
<td 1":2,"2":"dkc2972"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-2972/">DKC2972</a></td>
<td 1":3,"3":200}"="" data-sheets-value="{">200</td>
<td 040"}"="" 1":2,"2":"15="" data-sheets-value="{">15 040</td>
</tr>
<tr>
<td 1":2,"2":"dkc3108"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3108/">DKC3108</a></td>
<td 1":3,"3":210}"="" data-sheets-value="{">210</td>
<td 1":2,"2":"14="" 740"}"="" data-sheets-value="{">14 740</td>
</tr>
<tr>
<td 1":2,"2":"dkc3361"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3361/">DKC3361</a></td>
<td 1":3,"3":240}"="" data-sheets-value="{">240</td>
<td 1":2,"2":"14="" 730"}"="" data-sheets-value="{">14 730</td>
</tr>
<tr>
<td 1":2,"2":"dkc3595"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3595/">DKC3595</a></td>
<td 1":3,"3":240}"="" data-sheets-value="{">240</td>
<td 1":2,"2":"14="" 740"}"="" data-sheets-value="{">14 740</td>
</tr>
<tr>
<td 1":2,"2":"dkc3623"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3623/">DKC3623</a></td>
<td 1":3,"3":270}"="" data-sheets-value="{">270</td>
<td 1":2,"2":"13="" 840"}"="" data-sheets-value="{">13 840</td>
</tr>
<tr>
<td 1":2,"2":"dkc3730"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3730/">DKC3730</a></td>
<td 1":3,"3":280}"="" data-sheets-value="{">280</td>
<td 1":2,"2":"13="" 930"}"="" data-sheets-value="{">13 930</td>
</tr>
<tr>
<td 1":2,"2":"dkc3789"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3789/">DKC3789</a></td>
<td 1":3,"3":290}"="" data-sheets-value="{">290</td>
<td 030"}"="" 1":2,"2":"15="" data-sheets-value="{">15 030</td>
</tr>
<tr>
<td 1":2,"2":"dkc3969"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3969/">DKC3969</a></td>
<td 1":3,"3":290}"="" data-sheets-value="{">290</td>
<td 1":2,"2":"14="" 740"}"="" data-sheets-value="{">14 740</td>
</tr>
<tr>
<td 1":2,"2":"dkc3705"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3705/">DKC3705</a></td>
<td 1":3,"3":300}"="" data-sheets-value="{">300</td>
<td 1":2,"2":"13="" 830"}"="" data-sheets-value="{">13 830</td>
</tr>
<tr>
<td 1":2,"2":"dkc3939"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-3939/">DKC3939</a></td>
<td 1":3,"3":320}"="" data-sheets-value="{">320</td>
<td 1":2,"2":"13="" 840"}"="" data-sheets-value="{">13 840</td>
</tr>
<tr>
<td 1":2,"2":"dkc4178"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-4178/">DKC4178</a></td>
<td 1":3,"3":330}"="" data-sheets-value="{">330</td>
<td 1":2,"2":"14="" 730"}"="" data-sheets-value="{">14 730</td>
</tr>
<tr>
<td 1":2,"2":"dkc4014"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-4014/">DKC4014</a></td>
<td 1":3,"3":340}"="" data-sheets-value="{">340</td>
<td 1":2,"2":"14="" 730"}"="" data-sheets-value="{">14 730</td>
</tr>
<tr>
<td 1":2,"2":"dkc4541"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-4541/">DKC4541</a></td>
<td 1":3,"3":360}"="" data-sheets-value="{">360</td>
<td 1":2,"2":"13="" 930"}"="" data-sheets-value="{">13 930</td>
</tr>
<tr>
<td 1":2,"2":"dkc4964"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-4964/">DKC4964</a></td>
<td 1":3,"3":370}"="" data-sheets-value="{">370</td>
<td 1":2,"2":"13="" 840"}"="" data-sheets-value="{">13 840</td>
</tr>
<tr>
<td 1":2,"2":"dkc4792"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-4792/">DKC4792</a></td>
<td 1":3,"3":370}"="" data-sheets-value="{">370</td>
<td 1":2,"2":"16="" 230"}"="" data-sheets-value="{">16 230</td>
</tr>
<tr>
<td 1":2,"2":"dkc5075"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-5075/">DKC5075</a></td>
<td 1":3,"3":400}"="" data-sheets-value="{">400</td>
<td 040"}"="" 1":2,"2":"15="" data-sheets-value="{">15 040</td>
</tr>
<tr>
<td 1":2,"2":"dkc5007"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-5007/">DKC5007</a></td>
<td 1":3,"3":420}"="" data-sheets-value="{">420</td>
<td 1":2,"2":"13="" 840"}"="" data-sheets-value="{">13 840</td>
</tr>
<tr>
<td 1":2,"2":"dkc5190"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dks-5190/">DKC5190</a></td>
<td 1":3,"3":420}"="" data-sheets-value="{">420</td>
<td 1":2,"2":"13="" 830"}"="" data-sheets-value="{">13 830</td>
</tr>
</tbody>
</table>
Для инсектицидной обработки семян кукурузы используется препарат Acceleron. Стоимость обработки 1 п.е. семян кукурузы 1600 руб с НДС.

 


<p>Мaisadour - создает новые оригинальные гибриды на 5 селекционных станциях.</p>
<p><em>Кукуруза. 50 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="191"/> <col width="100"/> <col width="225"/> <col width="170"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"фао"}"="" data-sheets-value="{"><strong>ФАО</strong></td>
<td 1":2,"2":"варианты="" data-sheets-value="{" обработки"}"=""><strong>ВАРИАНТЫ ОБРАБОТКИ</strong></td>
<td 1="" 1":2,"2":"цена="" data-sheets-value="{" ед.="" пос.="" руб"}"=""><strong>ЦЕНА 1 пос. ед./руб</strong></td>
</tr>
<tr>
<td 1":0}{"1":10,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"мас="" 15.т="" colspan="1" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" rowspan="2">
<div><a href="https://berkanabio.ru/mas-15-t/">МАС 15.Т</a> <span>NEW</span></div></td>
<td 1":3,"3":200}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>200</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"7="" 420"}"="" data-sheets-value="{">7 420</td>
</tr>
<tr>
<td +="" 1":2,"2":"агростарт="" data-sheets-value="{" зеа"}"="" форс="">АгроСтарт + Форс Зеа</td>
<td 1":2,"2":"8="" 620"}"="" data-sheets-value="{">8 620</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 24.ц"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-24-c/">МАС 24.Ц</a></div></td>
<td 1":3,"3":270}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>270</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"7="" 930"}"="" data-sheets-value="{">7 930</td>
</tr>
<tr>
<td +="" 1":2,"2":"агростарт="" data-sheets-value="{" зеа"}"="" форс="">АгроСтарт + Форс Зеа</td>
<td 1":2,"2":"9="" 130"}"="" data-sheets-value="{">9 130</td>
</tr>
<tr>
<td 1":0}{"1":9,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"мас="" 34.б="" colspan="1" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" rowspan="2">
<div><a href="https://berkanabio.ru/mas-34-b/">МАС 34.Б</a> <span>NEW</span></div></td>
<td 1":3,"3":300}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>300</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 1":2,"2":"7="" 930"}"="" data-sheets-value="{">7 930</td>
</tr>
<tr>
<td +="" 1":2,"2":"агростарт="" data-sheets-value="{" зеа"}"="" форс="">АгроСтарт + Форс Зеа</td>
<td 1":2,"2":"9="" 130"}"="" data-sheets-value="{">9 130</td>
</tr>
<tr>
<td 1":2,"2":"мас="" 37.в"}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div><a href="https://berkanabio.ru/mas-37-v/">МАС 37.В</a></div></td>
<td 1":3,"3":360}"="" colspan="1" data-sheets-value="{" rowspan="2">
<div>360</div></td>
<td 1":2,"2":"агростарт"}"="" data-sheets-value="{">АгроСтарт</td>
<td 060"}"="" 1":2,"2":"7="" data-sheets-value="{">7 060</td>
</tr>
<tr>
<td +="" 1":2,"2":"агростарт="" data-sheets-value="{" зеа"}"="" форс="">АгроСтарт + Форс Зеа</td>
<td 1":2,"2":"8="" 260"}"="" data-sheets-value="{">8 260</td>
</tr>
</tbody>
</table>
 


<p>LG - Семена Лимагрен более 10 лет назад завоевали доверие у клиентов и успешно продаются на рынке России.</p>
<p><em>Кукуруза. 50 тысяч семян в 1 мешке.</em></p>
<table cellpadding="0" cellspacing="0" dir="ltr"><colgroup> <col width="195"/> <col width="100"/> <col width="267"/> <col width="104"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"=""><strong>НАИМЕНОВАНИЕ ГИБРИДА</strong></td>
<td 1":2,"2":"фао"}"="" data-sheets-value="{"><strong>ФАО</strong></td>
<td 1":2,"2":"характеристика"}"="" data-sheets-value="{"><strong>ХАРАКТЕРИСТИКА</strong></td>
<td 1="" 1":2,"2":"цена="" data-sheets-value="{" ед.="" пос.="" руб"}"=""><strong>ЦЕНА 1 пос. ед./руб</strong></td>
</tr>
<tr>
<td 1":2,"2":"лг="" 30179"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-30179/">ЛГ 30179</a></td>
<td 1":3,"3":170}"="" data-sheets-value="{">170</td>
<td 1":2,"2":"ранний="" data-sheets-value="{" кремнисто-зубовидный"}"="">Ранний / Кремнисто-зубовидный</td>
<td 1":2,"2":"6="" 800"}"="" data-sheets-value="{">6 800</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 30189"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-30189/">ЛГ 30189</a></td>
<td 1":3,"3":180}"="" data-sheets-value="{">180</td>
<td 1":2,"2":"ранний="" data-sheets-value="{" зубовидный"}"="">Ранний / Зубовидный</td>
<td 1":2,"2":"7="" 500"}"="" data-sheets-value="{">7 500</td>
</tr>
<tr>
<td 1":2,"2":"кросби"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/krosbi/">КРОСБИ</a></td>
<td 1":3,"3":190}"="" data-sheets-value="{">190</td>
<td 1":2,"2":"ранний="" data-sheets-value="{" кремнисто-зубовидный"}"="">Ранний / Кремнисто-зубовидный</td>
<td 1":2,"2":"7="" 500"}"="" data-sheets-value="{">7 500</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 2195"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-2195/">ЛГ 2195</a></td>
<td 1":3,"3":190}"="" data-sheets-value="{">190</td>
<td 1":2,"2":"раннеспелый="" data-sheets-value="{" кремнисто-зубовидный"}"="">Раннеспелый / Кремнисто-зубовидный</td>
<td 1":2,"2":"6="" 800"}"="" data-sheets-value="{">6 800</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 30215"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-30215/">ЛГ 30215</a></td>
<td 1":3,"3":200}"="" data-sheets-value="{">200</td>
<td 1":2,"2":"раннеспелый="" data-sheets-value="{" кремнисто-зубовидный"}"="">Раннеспелый / Кремнисто-зубовидный</td>
<td 1":2,"2":"6="" 800"}"="" data-sheets-value="{">6 800</td>
</tr>
<tr>
<td 1":2,"2":"жаклин"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/zhaklin/">ЖАКЛИН</a></td>
<td 1":3,"3":230}"="" data-sheets-value="{">230</td>
<td 1":2,"2":"спеднеранний="" data-sheets-value="{" кремнисто-зубовидный"}"="">Спеднеранний / Кремнисто-зубовидный</td>
<td 1":2,"2":"7="" 500"}"="" data-sheets-value="{">7 500</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 31272"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-31272/">ЛГ 31272</a></td>
<td 1":3,"3":270}"="" data-sheets-value="{">270</td>
<td 1":2,"2":"среднеранний="" data-sheets-value="{" кремнисто-зубовидный"}"="">Среднеранний / Кремнисто-зубовидный</td>
<td 1":2,"2":"7="" 500"}"="" data-sheets-value="{">7 500</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 3285"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-3285/">ЛГ 3285м</a></td>
<td 1":3,"3":270}"="" data-sheets-value="{">270</td>
<td 1":2,"2":"среднеранний="" data-sheets-value="{" кремнисто-зубовидный"}"="">Среднеранний / Кремнисто-зубовидный</td>
<td 1":2,"2":"6="" 500"}"="" data-sheets-value="{">6 500</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 30315"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-30315/">ЛГ 30315</a></td>
<td 1":3,"3":280}"="" data-sheets-value="{">280</td>
<td 1":2,"2":"среднеранний="" data-sheets-value="{" зубовидный"}"="">Среднеранний / Зубовидный</td>
<td 1":2,"2":"7="" 500"}"="" data-sheets-value="{">7 500</td>
</tr>
<tr>
<td 1":2,"2":"адэвей"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/adevej/">АДЭВЕЙ</a></td>
<td 1":3,"3":300}"="" data-sheets-value="{">300</td>
<td 1":2,"2":"среднеранний="" data-sheets-value="{" кремнисто-зубовидный"}"="">Среднеранний / Кремнисто-зубовидный</td>
<td 000"}"="" 1":2,"2":"7="" data-sheets-value="{">7 000</td>
</tr>
<tr>
<td 1":2,"2":"джоди"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/dzhodi/">ДЖОДИ</a></td>
<td 1":3,"3":380}"="" data-sheets-value="{">380</td>
<td 1":2,"2":"среднеспелый="" data-sheets-value="{" зубовидный"}"="">Среднеспелый / Зубовидный</td>
<td 1":2,"2":"6="" 500"}"="" data-sheets-value="{">6 500</td>
</tr>
<tr>
<td 1":2,"2":"лг="" 3490"}"="" data-sheets-value="{"><a href="https://berkanabio.ru/lg-3490/">ЛГ 3490</a></td>
<td 1":3,"3":480}"="" data-sheets-value="{">480</td>
<td 1":2,"2":"среднепоздний="" data-sheets-value="{" зубовидный"}"="">Среднепоздний / Зубовидный</td>
<td 1":2,"2":"6="" 700"}"="" data-sheets-value="{">6 700</td>
</tr>
</tbody>
</table>
* Стоимость указана с учётом инсектицидной обработки Форс Зеа</div>);

                return (
                    <>
                        <Head>
                            <title>Семена - Berkana</title>
                            <meta name="description" content="Generated by create next app" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <Layout style={headerStyle, pathStyle}>
                            <HeadNav pageName="Семена" style={style} pathStyle={pathStyle} />
                            <div className="page-content">
                                <div className="page-content-wrapper">
                                    {jsx_content_wrapped}
                                </div>
                            </div>
                        </Layout>
                    </>
                );
            };

            export default semena;
