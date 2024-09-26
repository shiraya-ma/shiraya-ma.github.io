'use strict';
import React from 'react';
import { MaiArticle, MaiH1 } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from './mai-ui-components';

import { Case } from './_ui';
import * as code from './_codes/article';

const { publishedAt, updatedAt } = (today => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() + 1);

    const publishedAt = yesterday.toISOString();
    const updatedAt = today.toISOString();

    return {
        publishedAt,
        updatedAt
    };
})(new Date());

const props: MaiUIComponents.Props = {
    name: 'MaiArticle',
    href: '/mai-article',

    description: `A set of components for article pages.`,
    install: `
\`\`\`tsx
import { MaiArticle } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiArticle.Container>
                        <MaiH1>Title</MaiH1>

                        <MaiArticle.Thumbnail src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg' />

                        <MaiArticle.Info publishedAt={ publishedAt } updatedAt={ updatedAt } />

                        <MaiArticle.Divider />

                        main contents...
                    </MaiArticle.Container>
                </>
            )}
            previewDirection='row'
            code={ code.usage }/>
        </>
    )
};

const MaiUIComponentsArticle = () => {
	return (
		<MaiUIComponents {...props} />
	);
};

export {
    MaiUIComponentsArticle
};
