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

            const 1 = () => {
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

            
                const jsx_content_wrapped = wrapUntaggedTextWithP(<div><table border="1" cellpadding="0" cellspacing="0" dir="ltr"><colgroup><col width="193"/><col width="140"/><col width="171"/><col width="94"/><col width="123"/></colgroup>
<tbody>
<tr>
<td 1":2,"2":"наименование="" data-sheets-value="{" гибрида"}"="">НАИМЕНОВАНИЕ ГИБРИДА</td>
<td 1":2,"2":"группа="" data-sheets-value="{" спелости"}"="">ГРУППА СПЕЛОСТИ</td>
<td 1":2,"2":"характеристика"}"="" data-sheets-value="{">ХАРАКТЕРИСТИКА</td>
<td 1":2,"2":"обработка"}"="" data-sheets-value="{">ОБРАБОТКА</td>
<td 1":2,"2":"цена,="" data-sheets-value="{" ндс"}"="" руб="" с="">ЦЕНА, руб с НДС</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" colspan="5" data-sheets-value="{" rowspan="1" для="" классической="" технологии"}"="">Гибриды для классической технологии</td>
</tr>
<tr>
<td 1":0}{"1":11,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"си="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" честер="">СИ ЧЕСТЕР NEW</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g+"}"="" data-sheets-value="{">А-G+</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"12="" 100"}"="" data-sheets-value="{">12 100</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" арко"}"="">СИ АРКО</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g="" data-sheets-value="{" высокоолеиновый"}"="">А-G / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"12="" 100"}"="" data-sheets-value="{">12 100</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" роки"}"="">НК РОКИ</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"савинка"}"="" data-sheets-value="{">САВИНКА</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td "}"="" 1":2,"2":"а-e="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"санбро="" data-sheets-value="{" мр"}"="">САНБРО МР</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td "}"="" 1":2,"2":"а-e="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"босфора"}"="" data-sheets-value="{">БОСФОРА</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-f"}"="" data-sheets-value="{">А-F</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"10="" 120"}"="" data-sheets-value="{">10 120</td>
</tr>
<tr>
<td 1":2,"2":"алькантара"}"="" data-sheets-value="{">АЛЬКАНТАРА</td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" кадикс"}"="">СИ КАДИКС</td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"11="" 110"}"="" data-sheets-value="{">11 110</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" брио"}"="">НК БРИО</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" конди"}"="">НК КОНДИ</td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" купава"}"="">СИ КУПАВА</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"тутти"}"="" data-sheets-value="{">ТУТТИ</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e="" data-sheets-value="{" высокоолеиновый"}"="">А-E / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" ласкала"}"="">СИ ЛАСКАЛА</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"12="" 100"}"="" data-sheets-value="{">12 100</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" эдисон"}"="">СИ ЭДИСОН</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-f"}"="" data-sheets-value="{">А-F</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"эстрада"}"="" data-sheets-value="{">ЭСТРАДА</td>
<td 1":2,"2":"среднепоздний"}"="" data-sheets-value="{">Среднепоздний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" фламенко"}"="">СИ ФЛАМЕНКО</td>
<td 1":2,"2":"среднепоздний"}"="" data-sheets-value="{">Среднепоздний</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" clearfield"}"="" colspan="5" data-sheets-value="{" rowspan="1" для="" технологии="">Гибриды для технологии Clearfield</td>
</tr>
<tr>
<td 1":0}{"1":12,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"си="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" авенжер="">СИ АВЕНЖЕР NEW</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" фортими"}"="">НК ФОРТИМИ</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 190"}"="" data-sheets-value="{">14 190</td>
</tr>
<tr>
<td 1":2,"2":"коломби"}"="" data-sheets-value="{">КОЛОМБИ</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e="" data-sheets-value="{" высокоолеиновый"}"="">А-E / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"тристан"}"="" data-sheets-value="{">ТРИСТАН</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"санай="" data-sheets-value="{" мр"}"="">САНАЙ МР</td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"13="" 200"}"="" data-sheets-value="{">13 200</td>
</tr>
<tr>
<td 1":2,"2":"нк="" data-sheets-value="{" неома"}"="">НК НЕОМА</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" эксперто"}"="">СИ ЭКСПЕРТО</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e="" data-sheets-value="{" высокоолеиновый"}"="">А-E / Высокоолеиновый</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"гибриды="" clearfield="" colspan="5" data-sheets-value="{" plus"}"="" rowspan="1" для="" технологии="">Гибриды для технологии Clearfield Plus</td>
</tr>
<tr>
<td 1":0}{"1":12,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"дункан="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="" клп="">ДУНКАН КЛП NEW</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" клп"}"="" розета="">СИ РОЗЕТА КЛП</td>
<td 1":2,"2":"среднеранний"}"="" data-sheets-value="{">Среднеранний</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" бакарди="" клп"}"="">СИ БАКАРДИ КЛП</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"16="" 170"}"="" data-sheets-value="{">16 170</td>
</tr>
<tr>
<td 1":2,"2":"си="" data-sheets-value="{" клп"}"="" неостар="">СИ НЕОСТАР КЛП</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"гибриды,="" colspan="5" data-sheets-value="{" fmc"}"="" rowspan="1" гербицида="" для="" компани="" оптимизи="" рованные="" эспресс="">Гибриды, оптимизи рованные для гербицида Эспресс компани FMC</td>
</tr>
<tr>
<td 1":0}{"1":7,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"суоми="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="">СУОМИ NEW</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":2,"2":"суматра"}"="" data-sheets-value="{">СУМАТРА</td>
<td 1":2,"2":"раннеспелый"}"="" data-sheets-value="{">Раннеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"14="" 190"}"="" data-sheets-value="{">14 190</td>
</tr>
<tr>
<td 1":2,"2":"сузука"}"="" data-sheets-value="{">СУЗУКА</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
<tr>
<td 1":0}{"1":9,"2":{"2":{"1":2,"2":13386021},"6":1}}"="" 1":2,"2":"суберик="" data-sheets-textstyleruns="{" data-sheets-value="{" new"}"="">СУБЕРИК NEW</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-g"}"="" data-sheets-value="{">А-G</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"16="" 170"}"="" data-sheets-value="{">16 170</td>
</tr>
<tr>
<td 1":2,"2":"сумико"}"="" data-sheets-value="{">СУМИКО</td>
<td 1":2,"2":"среднеспелый"}"="" data-sheets-value="{">Среднеспелый</td>
<td 1":2,"2":"а-e"}"="" data-sheets-value="{">А-E</td>
<td 1":2,"2":"круйзер"}"="" data-sheets-value="{">Круйзер</td>
<td 1":2,"2":"15="" 180"}"="" data-sheets-value="{">15 180</td>
</tr>
</tbody>
</table></div>);

                return (
                    <>
                        <Head>
                            <title>1 - Berkana</title>
                            <meta name="description" content="Generated by create next app" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <Layout style={headerStyle, pathStyle}>
                            <HeadNav pageName="1" style={style} pathStyle={pathStyle} />
                            <div className="page-content">
                                <div className="page-content-wrapper">
                                    {jsx_content_wrapped}
                                </div>
                            </div>
                        </Layout>
                    </>
                );
            };

            export default 1;
