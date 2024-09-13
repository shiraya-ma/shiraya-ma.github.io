// NotFound
'use strict';
import React from 'react';
import { MaiArticle, MaiH1, MaiLink } from '@shiraya-ma/mai-ui';
import { useReturn } from './hooks';

const NotFound: React.FC<NotFound.Props> = (props) => {
    const {} = props;

    // const { href, seconds } = useReturn('/', 5);
    
    return (
        <MaiArticle.Container>
            <MaiH1>404 Not Found.</MaiH1>

            <p>
                { 5 }秒後に<MaiLink href={ '/' }>トップページ</MaiLink>へ戻ります。
            </p>
        </MaiArticle.Container>
    );
};

namespace NotFound {
    export type Props = {};
};

export {
    NotFound
};
