// CPage
'use strict';
import React, { ReactNode } from 'react';

import { Page } from '@/components';
import { MaiH2, MaiLink } from '@shiraya-ma/mai-ui';


const CPage: React.FC<CPage.Props> = (props) => {
    const { children, description, seeMore, skipUsage, ...pageProps } = props;
    
    return (
        <>
            <Page
            breadcrumbItems={[
                { href: '/mai-ui', children:'MaiUI' },
                { href: '/mai-ui/components', children:'Components' },
                { children: pageProps.title }
            ]}
            { ...pageProps }>

                { description && (<p>{ description }</p>) }

                { seeMore && (<MaiLink href={ seeMore }>see more.</MaiLink>) }

                { !skipUsage && (<MaiH2>Usage</MaiH2>) }

                { children }
            </Page>
        </>
    );
};

namespace CPage {
    export type Props = {
        title: string;
        description?: string;
        children?: ReactNode;
        seeMore?: string;
        skipUsage?: boolean;
    };
};

export {
    CPage
};
