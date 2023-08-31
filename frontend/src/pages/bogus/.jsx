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

            const  = () => {
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

            
                const jsx_content_wrapped = wrapUntaggedTextWithP(<div><div background_image_attachment":false,"background_display":"tile","cell_alignment":"flex-start"}"="" class="panel-grid panel-no-style" data-ratio="1" data-ratio-direction="right" data-style="{" id="pg-1005-0">
<div class="panel-grid-cell" data-weight="1" id="pgc-1005-0-0">
<div background_image_attachment":false,"background_display":"tile"}"="" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="0" data-style="{" id="panel-1005-0-0-0">
<div class="textwidget">

На данный момент имеется достаточно много разных конструкций пневмоходов, применяемых в сельском хозяйстве. В основном они приспособлены для разбрасывания минеральных удобрений, некоторые модели приспособлены для опрыскивания посевов, и только одна модель на данный момент – Барс 271 может производить посев культур сплошного сева в почву со 100% влажностью.

Сверхнизкое давление на почву (меньше давления ноги человека) позволяет использовать эти агрегаты на слабонесущих переувлажненных почвах, что очень важно при дальнейшей нарастающей изменчивости погодных явлений.  На полях со всходами культурных растений в фазе кущения пневмоходы не оставляют технологической колеи, примятые растения поднимаются в течении суток.

При работе в нормальных условиях, при высоте растений выше 25-30 см пневмошины легко меняются на более узкие колеса, что позволяет пневмоходу проезжать по междурядьям (45-70 см) пропашных культур. Такое конкурентное преимущество пневмоходов перед традиционной техникой позволяет существенно расширить период начала весенних полевых работ и уменьшить зависимость сроков проведения агротехнических мероприятий от погодных условий в летний период.

</div>
</div>
</div>
</div>
<div background_image_attachment":false,"background_display":"tile","cell_alignment":"flex-start"}"="" class="panel-grid panel-no-style" data-style="{" id="pg-1005-1">
<div class="panel-grid-cell" data-weight="0.5" id="pgc-1005-1-0">
<div background_image_attachment":false,"background_display":"tile"}"="" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="1" data-style="{" id="panel-1005-1-0-0">
<h3 class="widget-title">Самоходный опрыскиватель “Рубин”</h3>
<div class="textwidget">
<a href="http://berkanabio.ru/wp-content/uploads/2018/08/Rubin-opryskivatel.jpg"></a>
</div>
</div>
</div>
<div class="panel-grid-cell" data-weight="0.5" id="pgc-1005-1-1">
<div background_image_attachment":false,"background_display":"tile"}"="" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="2" data-style="{" id="panel-1005-1-1-0">
<h3 class="widget-title">Барс 271</h3>
<div class="textwidget">
<a href="http://berkanabio.ru/wp-content/uploads/2018/08/Bars-pnevmohod.jpg"></a>
</div>
</div>
</div>
</div>
<div background_image_attachment":false,"background_display":"tile","cell_alignment":"flex-start"}"="" class="panel-grid panel-no-style" data-style="{" id="pg-1005-2">
<div class="panel-grid-cell" data-weight="0.5" id="pgc-1005-2-0">
<div background_image_attachment":false,"background_display":"tile"}"="" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="3" data-style="{" id="panel-1005-2-0-0">
<h3 class="widget-title">Комплексное агротехническое средство “Роса”</h3>
<div class="textwidget">
<a href="http://berkanabio.ru/wp-content/uploads/2018/08/rosa-pnevmohod.jpg"></a>
</div>
</div>
</div>
<div class="panel-grid-cell" data-weight="0.5" id="pgc-1005-2-1">
<div background_image_attachment":false,"background_display":"tile"}"="" class="so-panel widget widget_text panel-first-child panel-last-child" data-index="4" data-style="{" id="panel-1005-2-1-0">
<h3 class="widget-title">“Туман-2”</h3>
<div class="textwidget">
<a href="http://berkanabio.ru/wp-content/uploads/2018/08/pnevmohod_tuman.jpg"></a>
</div>
</div>
</div>
</div></div>);

                return (
                    <>
                        <Head>
                            <title> - Berkana</title>
                            <meta name="description" content="Generated by create next app" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <Layout style={headerStyle, pathStyle}>
                            <HeadNav pageName="" style={style} pathStyle={pathStyle} />
                            <div className="page-content">
                                <div className="page-content-wrapper">
                                    {jsx_content_wrapped}
                                </div>
                            </div>
                        </Layout>
                    </>
                );
            };

            export default ;
