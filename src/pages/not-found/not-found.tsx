// NotFound
'use strict';
import React from 'react';
import {
    MaiArticle,
    MaiBreadcrumbItem,
    MaiBreadcrumbs,
    MaiH1,
    MaiLink
} from '@shiraya-ma/mai-ui';

import { useBreadcrumbs, useReturn } from './hooks';

const NotFound: React.FC<NotFound.Props> = (props) => {
    const {} = props;

    const { items } = useBreadcrumbs();
    const { href, seconds } = useReturn('/', 10);
    
    return (
        <>
            <MaiBreadcrumbs>
                { items.map(item => (
                    <MaiBreadcrumbItem href={ item.href } key={ item.key }>{ item.children }</MaiBreadcrumbItem>
                ))}
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiH1>404 Not Found.</MaiH1>

                <p>
                    { seconds }秒後に<MaiLink href={ href }>トップページ</MaiLink>へ戻ります。
                </p>
            </MaiArticle.Container>
        </>
    );
};

namespace NotFound {
    export type Props = {};
};

export {
    NotFound
};
