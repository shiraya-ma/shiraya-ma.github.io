'use strict';
import React from 'react';
import { MaiPagination } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from './mai-ui-components';

import { Case } from './_ui';
import * as code from './_codes/pagination';

const props: MaiUIComponents.Props = {
    name: 'MaiPagination',
    href: '/mai-pagination',

    description: `A component that extends NextUI's Pagination.

The default background color is changed.`,
    seeMore:'https://nextui.org/docs/components/pagination',
    install: `
\`\`\`tsx
import { MaiPagination } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiPagination total={10} initialPage={1} />
                </>
            )}
            previewDirection='row'
            code={ code.usage }/>
        </>
    )
};

const MaiUIComponentsPagination = MaiUIComponents(props);

export {
    MaiUIComponentsPagination
};
