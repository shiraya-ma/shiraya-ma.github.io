'use strict';
import React from 'react';
import { MaiBreadcrumbItem, MaiBreadcrumbs } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from '@/components/pages';

import { Case } from '../_ui';
import * as code from '../_codes/breadcrumbs';

const props: MaiUIComponents.Props = {
    name: 'MaiBreadcrumbs',
    href: '/mai-breadcrumbs',

    description: `A component that extends NextUI's Breadcrumbs.

Since home items are included by default, only items under home need to be added.`,
    seeMore: 'https://nextui.org/docs/components/breadcrumbs',
    install: `
\`\`\`tsx
import { MaiBreadcrumbItem, MaiBreadcrumbs } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiBreadcrumbs>
                        <MaiBreadcrumbItem href='#'>MaiUI</MaiBreadcrumbItem>

                        <MaiBreadcrumbItem href='#'>Components</MaiBreadcrumbItem>
                        
                        <MaiBreadcrumbItem href='#'>MaiBreadcrumbs</MaiBreadcrumbItem>
                    </MaiBreadcrumbs>
                </>
            )}
            previewDirection='row'
            code={ code.usage }/>
        </>
    )
};

export default MaiUIComponents(props).Page;

export const Head = MaiUIComponents(props).Head;
