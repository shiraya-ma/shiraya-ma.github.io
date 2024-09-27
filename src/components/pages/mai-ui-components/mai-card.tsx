'use strict';
import React from 'react';
import { Divider, Image } from '@nextui-org/react';
import { MaiCard, MaiCardBody, MaiCardFooter, MaiCardHeader, MaiLink } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from './mai-ui-components';

import { Case } from './_ui';
import * as code from './_codes/card';

const props: MaiUIComponents.Props = {
    name: 'MaiCard',
    href: '/mai-card',

    description: `A component that extends NextUI's Card.

The default background color is changed so that it is blurred.`,
    seeMore: 'https://nextui.org/docs/components/card',
    install: `
\`\`\`tsx
import { MaiCard, MaiCardBody, MaiCardFooter, MaiCardHeader } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiCard className="max-w-[400px]">
                        <MaiCardHeader className="flex gap-3">
                            <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={40}
                            />

                            <div className="flex flex-col">
                                <p className="text-md">NextUI</p>
                                <p className="text-small text-default-500">nextui.org</p>
                            </div>
                        </MaiCardHeader>

                        <Divider/>

                        <MaiCardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </MaiCardBody>

                        <Divider/>

                        <MaiCardFooter>
                            <MaiLink
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                            >
                            Visit source code on GitHub.
                            </MaiLink>
                        </MaiCardFooter>
                    </MaiCard>
                </>
            )}
            previewDirection='row'
            code={ code.usage }/>
        </>
    )
};

const MaiUIComponentsCard = () => {
	return (
		<MaiUIComponents {...props} />
	);
};

export {
    MaiUIComponentsCard
};
