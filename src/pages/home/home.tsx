// Home
'use strict';
import { MaiArticle, MaiLink } from '@shiraya-ma/mai-ui';
import React from 'react';

const Home: React.FC<Home.Props> = (props) => {
    const {} = props;
    
    return (
        <MaiArticle.Container>
            <MaiLink href='/hoge'>to hoge.</MaiLink>
        </MaiArticle.Container>
    );
};

namespace Home {
    export type Props = {};
};

export {
    Home
};
