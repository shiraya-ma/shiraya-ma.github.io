'use strict';
import React from 'react';
import { MaiLink } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from '@/components/pages';

import { Case } from '../_ui';
import * as code from '../_codes/link';

const props: MaiUIComponents.Props = {
    name: 'MaiLink',
    href: '/mai-link',

    description: `A component that extends NextUI's Link.

It adds behavior when external links are clicked,
display a confirmation modal before opening the page.,`,
    seeMore:'https://nextui.org/docs/components/link',
    install: `
\`\`\`tsx
import { MaiLink } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiLink href='#'>Default Link</MaiLink>
                </>
            )}
            previewDirection='row'
            code={ code.usage }/>

            <Case
            title='Colors'
            preview={(
                <>
                    <MaiLink href='#' color='foreground'>Foreground</MaiLink>
                    
                    <MaiLink href='#' color='primary'>Primary</MaiLink>

                    <MaiLink href='#' color='secondary'>Secondary</MaiLink>
                    
                    <MaiLink href='#' color='success'>Success</MaiLink>
                    
                    <MaiLink href='#' color='warning'>Warn</MaiLink>

                    <MaiLink href='#' color='danger'>Danger</MaiLink>
                </>
            )}
            previewDirection='row'
            code={ code.colors }/>

            <Case
            title='External Link'
            preview={(
                <>
                    <MaiLink href='https://www.google.com'>Google</MaiLink>
                </>
            )}
            previewDirection='row'
            code={ code.externalLink }/>
        </>
    )
};

export default MaiUIComponents(props).Page;

export const Head = MaiUIComponents(props).Head;
