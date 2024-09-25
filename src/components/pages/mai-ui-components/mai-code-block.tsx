'use strict';
import React from 'react';
import darcula from 'react-syntax-highlighter/dist/esm/styles/hljs/darcula';
import { MaiCodeBlock } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from './mai-ui-components';

import { Case } from './_ui';
import * as code from './_codes/code-block';
import { codeBlockText1 } from './_texts/_code-block-text-1';
import { codeBlockText2 } from './_texts/_code-block-text-2';

const props: MaiUIComponents.Props = {
    name: 'MaiCodeBlock',
    href: '/mai-code-block',

    description: `ReactSyntaxHighligher wrapped component.

Modifications have been made to simplify the application of styles.`,
    seeMore: 'https://react-syntax-highlighter.github.io/react-syntax-highlighter',
    install: `
\`\`\`tsx
import { MaiCodeBlock } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiCodeBlock language='html'>
                        { codeBlockText1 }
                    </MaiCodeBlock>
                </>
            )}
            code={ code.usage }/>
                
            <Case
            title='With filename'
            preview={(
                <>
                    <MaiCodeBlock filename='index.html' language='html'>
                        { codeBlockText1 }
                    </MaiCodeBlock>
                </>
            )}
            code={ code.withFilename }/>                  
                
            <Case
            title='Change Style'
            preview={(
                <>
                    <MaiCodeBlock filename='app.tsx' language='tsx' style={ darcula }>
                        { codeBlockText2 }
                    </MaiCodeBlock>
                </>
            )}
            code={ code.changeStyle }/>
        </>
    )
};

const MaiUIComponentsCodeBlock = MaiUIComponents(props);

export {
    MaiUIComponentsCodeBlock
};
