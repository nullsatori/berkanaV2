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

            const nashipartneryglavakhligakomovannvoronezhskajaoblast = () => {
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

            
                const jsx_content_wrapped = wrapUntaggedTextWithP(<div>https://youtu.be/p5swoXgsbTo

<strong>Компания БЕРКАНА</strong> — предлагает услуги по поставке химических и биологических средств защиты растений, регуляторов и стимуляторов роста, семян технических культур и др. Наши специалисты оказывают технологическую и консультационную помощь сельскохозяйственным предприятиям. Мы внедряем биологические технологии восстановления естественного плодородия почвы и повышения урожайности.</div>);

                return (
                    <>
                        <Head>
                            <title>Наши партнеры. Глава КХ "ЛИГА" - Комова Н.Н. Воронежская область - Berkana</title>
                            <meta name="description" content="Generated by create next app" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <Layout style={headerStyle, pathStyle}>
                            <HeadNav pageName="Наши партнеры. Глава КХ "ЛИГА" - Комова Н.Н. Воронежская область" style={style} pathStyle={pathStyle} />
                            <div className="page-content">
                                <div className="page-content-wrapper">
                                    {jsx_content_wrapped}
                                </div>
                            </div>
                        </Layout>
                    </>
                );
            };

            export default nashipartneryglavakhligakomovannvoronezhskajaoblast;
