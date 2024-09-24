'use strict';
import React from 'react';
import { MaiHeadings, MaiH1, MaiH2, MaiH3, MaiH4, MaiH5, MaiH6 } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from '@/components/pages';

import { Case } from '../_ui';
import * as code from '../_codes/headings';

const props: MaiUIComponents.Props = {
    name: 'MaiHeadings',
    href: '/mai-headings',

    description: `Components for headings

Components that can dynamically change levels and
components for each level.`,
    install: `
\`\`\`tsx
import { MaiHeadings, MaiH1, MaiH2, MaiH3, MaiH4, MaiH5, MaiH6 } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiHeadings level={ 1 }>Headings 1</MaiHeadings>
                    
                    <MaiHeadings level={ 2 }>Headings 2</MaiHeadings>
                    
                    <MaiHeadings level={ 3 }>Headings 3</MaiHeadings>
                    
                    <MaiHeadings level={ 4 }>Headings 4</MaiHeadings>
                    
                    <MaiHeadings level={ 5 }>Headings 5</MaiHeadings>
                    
                    <MaiHeadings level={ 6 }>Headings 6</MaiHeadings>
                </>
            )}
            code={ code.usage }/>

            <Case
            title='Individual'
            preview={(
                <>
                    <MaiH1>Indivisual Headings 1</MaiH1>
                    
                    <MaiH2>Indivisual Headings 2</MaiH2>
                    
                    <MaiH3>Indivisual Headings 3</MaiH3>
                    
                    <MaiH4>Indivisual Headings 4</MaiH4>
                    
                    <MaiH5>Indivisual Headings 5</MaiH5>
                    
                    <MaiH6>Indivisual Headings 6</MaiH6>
                </>
            )}
            code={ code.inidividual }/>

            <Case
            title='Colors'
            preview={(
                <>
                    <MaiH3 color='foreground'>Foreground</MaiH3>
                    
                    <MaiH3 color='primary'>Primary</MaiH3>
                    
                    <MaiH3 color='secondary'>Secondary</MaiH3>
                    
                    <MaiH3 color='success'>Success</MaiH3>
                    
                    <MaiH3 color='warn'>Warn</MaiH3>
                    
                    <MaiH3 color='danger'>Danger</MaiH3>
                </>
            )}
            code={ code.colors }/>
        </>
    )
};

export default MaiUIComponents(props).Page;

export const Head = MaiUIComponents(props).Head;
