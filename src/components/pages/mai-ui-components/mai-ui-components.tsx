// MaiUIComponents
'use strict';
import React, { type ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { MaiArticle, MaiBreadcrumbItem, MaiBreadcrumbs, MaiH1, MaiH2, MaiLink, MaiMarkdown } from '@shiraya-ma/mai-ui';

const MaiUIComponents: React.FC<MaiUIComponents.Props> = (props) => {
    const {
        description,
        href,
        install,
        name,
        seeMore,
        usage
    } = props;
    
    return (
        <>
            <Helmet>
                <title>{ name } - MaiUI</title>
            </Helmet>

            <MaiBreadcrumbs>
                <MaiBreadcrumbItem href='/mai-ui'>MaiUI</MaiBreadcrumbItem>                
                <MaiBreadcrumbItem href='/mai-ui/components'>Components</MaiBreadcrumbItem>
                <MaiBreadcrumbItem href={`/mai-ui/components${ href }`}>{ name }</MaiBreadcrumbItem>
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiH1>{ name }</MaiH1>

                <MaiArticle.Divider />

                <section
                className='flex flex-col gap-4'>
                    { description && (<MaiMarkdown children={ description }/>) }

                    { seeMore  && (<p><MaiLink href={ seeMore }>see more</MaiLink></p>) }

                    { install && (<>
                        <MaiH2>Import</MaiH2>

                        <section>
                            <MaiMarkdown>{ install }</MaiMarkdown>
                        </section>
                    </>)}

                    { usage && (<>
                        <MaiH2>Usage</MaiH2>

                        <section>{ usage }</section>                        
                    </>)}
                </section>
            </MaiArticle.Container>
        </>
    );
};

namespace MaiUIComponents {
    export type Props = {
        name: `Mai${ string }`;
        href:  `/mai-${ string }`;

        description?: string;
        install?: string;
        seeMore?: string;
        usage?: ReactNode;
    };
};

export {
    MaiUIComponents
};
