// Home
'use strict';
import React from 'react';
import { MaiLink } from '@shiraya-ma/mai-ui';

import { Page } from '@/components';

const Home: React.FC<Home.Props> = (props) => {
    const {} = props;
    
    return (
        <Page title='Documentation'>
            <MaiLink href='/hoge'>to hoge.</MaiLink>
        </Page>
    );
};

namespace Home {
    export type Props = {};
};

export {
    Home
};

export default Home;
