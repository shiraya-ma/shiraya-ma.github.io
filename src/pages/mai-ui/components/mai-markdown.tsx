'use strict';
import React from 'react';
import { MaiMarkdown } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from '@/components/pages';

import { Case } from '../_ui';
import * as code from '../_codes/markdown';
import { markdownText } from '../_texts/_markdown-text';

const props: MaiUIComponents.Props = {
    name: 'MaiMarkdown',
    href: '/mai-markdown',

    description: `A component that wraps ReactMarkdown and parses it for GFM.`,
    seeMore:'https://github.com/remarkjs/react-markdown',
    install: `
\`\`\`tsx
import { MaiMarkdown } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiMarkdown>
                        { markdownText }
                    </MaiMarkdown>
                </>
            )}
            code={ code.usage }/>
        </>
    )
};

export default MaiUIComponents(props).Page;

export const Head = MaiUIComponents(props).Head;
