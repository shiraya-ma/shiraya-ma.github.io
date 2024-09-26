// MaiUIGuide
'use strict';
import React, { type ReactNode } from 'react';
import { MaiArticle, MaiBreadcrumbItem, MaiBreadcrumbs, MaiH1 } from '@shiraya-ma/mai-ui';

const MaiUIGuide: React.FC<MaiUIGuide.Props> = (props) => {
    const {
        href,
        name,
        children
    } = props;
    
    return (
        <>
            <MaiBreadcrumbs>
                <MaiBreadcrumbItem href='/mai-ui'>MaiUI</MaiBreadcrumbItem>                
                <MaiBreadcrumbItem href='/mai-ui/guide'>Guide</MaiBreadcrumbItem>
                <MaiBreadcrumbItem href={`/mai-ui/guide${ href }`}>{ name }</MaiBreadcrumbItem>
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiH1>{ name }</MaiH1>

                <MaiArticle.Divider />

                <section
                className='flex flex-col gap-4'>
                    { children }
                </section>
            </MaiArticle.Container>
        </>
    );
};

namespace MaiUIGuide {
    export type Props = {
        name: string;
        href: string;
        children?: ReactNode;
    };
};

export {
    MaiUIGuide
};
