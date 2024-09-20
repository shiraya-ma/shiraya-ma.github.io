'use strict';
import React from 'react';
import { MaiButton, MaiLink } from '@shiraya-ma/mai-ui';

import { MaiUIConmponents } from '@/components/pages';

import { Case } from '../_ui';
import * as code from '../_codes/button';

const props: MaiUIConmponents.Props = {
    name: 'MaiButton',
    href: '/mai-button',

    description: `
A component that extends NextUI's Button.

Initial values of some parameters have been changed.
    `,
    seeMore: 'https://nextui.org/docs/components/button',
    install: `
\`\`\`tsx
import { MaiButton } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
                preview={(
                    <>
                        <MaiButton>Button</MaiButton>
                    </>
                )}
                previewDirection='row'
                code={ code.usage }/>

                <Case
                title='Colors'
                preview={(
                    <>
                        <MaiButton color='default'>Default</MaiButton>
                        
                        <MaiButton color='primary'>Primary</MaiButton>

                        <MaiButton color='secondary'>Secondary</MaiButton>
                        
                        <MaiButton color='success'>Success</MaiButton>
                        
                        <MaiButton color='warning'>Warn</MaiButton>

                        <MaiButton color='danger'>Danger</MaiButton>
                    </>
                )}
                previewDirection='row'
                code={ code.colors }/>

                <Case
                title='Button as Link'
                preview={(
                    <>
                        <MaiButton
                        href='#'
                        as={ MaiLink}>Home</MaiButton>
                        
                        <MaiButton
                        href='https://www.google.com'
                        as={ MaiLink }>Google</MaiButton>
                    </>
                )}
                previewDirection='row'
                code={ code.buttonAsLink }/>
        </>
    )
};

export default MaiUIConmponents(props).Page;

export const Head = MaiUIConmponents(props).Head;
