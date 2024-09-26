'use strict';
import React from 'react';
import { MaiInstagramLink, MaiPixivLink, MaiSNSLink, MaiTwitterLink } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from './mai-ui-components';

import { Case } from './_ui';
import * as code from './_codes/sns-link';

const props: MaiUIComponents.Props = {
    name: 'MaiSNSLink',
    href: '/mai-sns-link',

    description: `SNS link button component.

It is implemented by MaiButton and MaiLink,
Option is similar to MaiButton.`,
    seeMore:'/mai-ui/components/mai-button',
    install: `
\`\`\`tsx
import { MaiSNSLink } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
                preview={(
                    <>
                        <MaiSNSLink.Instagram
                        size='lg'/>

                        <MaiSNSLink.Pixiv
                        size='lg'/>

                        <MaiSNSLink.Twitter
                        size='lg'/>
                    </>
                )}
                previewDirection='row'
                code={ code.usage }/>
                
                <Case
                title='Individual Import'
                preview={(
                    <>
                        <MaiInstagramLink
                        color='primary'
                        size='lg'/>

                        <MaiPixivLink
                        color='primary'
                        size='lg'/>

                        <MaiTwitterLink
                        color='primary'
                        size='lg'/>
                    </>
                )}
                previewDirection='row'
                code={ code.individualImport }/>

                <Case
                title='With children'
                preview={(
                    <>
                        <MaiInstagramLink
                        color='secondary'
                        size='lg'>
                            Instagram
                        </MaiInstagramLink>

                        <MaiPixivLink
                        color='secondary'
                        size='lg'>
                            pixiv
                        </MaiPixivLink>

                        <MaiTwitterLink
                        color='secondary'
                        size='lg'>
                            Twitter
                        </MaiTwitterLink>
                    </>
                )}
                previewDirection='row'
                code={ code.withChilren }/>

                <Case
                title='Twitter icon'
                preview={(
                    <>
                        <MaiTwitterLink color='success' size='lg' />
                        
                        <MaiTwitterLink color='success' size='lg' isX/>
                    </>
                )}
                previewDirection='row'
                code={ code.twitterIcon }/>
        </>
    )
};

const MaiUIComponentsSNSLink = () => {
	return (
		<MaiUIComponents {...props} />
	);
};

export {
    MaiUIComponentsSNSLink
};
