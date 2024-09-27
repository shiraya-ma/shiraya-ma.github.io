// Home
import React from 'react';
import { Helmet } from 'react-helmet';
import { MaiArticle, MaiH1, MaiLink } from '@shiraya-ma/mai-ui';

const Home: React.FC<Home.Props> = (props) => {
    const {} = props;
    
    return (
        <>
            <Helmet>
                <title>MaiDocs</title>
            </Helmet>
            
            <MaiArticle.Container
            className='min-h-[calc(100%-3rem)] border-0 lg:mt-12'>
                <MaiH1>MaiDocuments</MaiH1>

                <MaiArticle.Divider />

                <MaiLink 
                href='/mai-ui'
                size='lg'
                showAnchorIcon>MaiUI</MaiLink>
            </MaiArticle.Container>
        </>
    );
};

namespace Home {
    export type Props = {};
};

export {
    Home
};

export default Home;
