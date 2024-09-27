'use strict';
import React from 'react';
import { MaiCard, MaiSkeleton } from '@shiraya-ma/mai-ui';

import { MaiUIComponents } from './mai-ui-components';

import { Case } from './_ui';
import * as code from './_codes/skeleton';

const props: MaiUIComponents.Props = {
    name: 'MaiSkeleton',
    href: '/mai-skeleton',

    description: `A component that extends NextUI's Skeleton.

The default background color is changed.`,
    seeMore:'https://nextui.org/docs/components/skeleton',
    install: `
\`\`\`tsx
import { MaiSkeleton } from '@shiraya-ma/mai-ui';
\`\`\`
    `,
    usage: (
        <>
            <Case
            preview={(
                <>
                    <MaiCard className="w-[200px] space-y-5 p-4" radius="lg">
                        <MaiSkeleton className="rounded-lg">
                            <div className="h-24 rounded-lg bg-default-300"></div>
                        </MaiSkeleton>

                        <div className="space-y-3">
                            <MaiSkeleton className="w-3/5 rounded-lg">
                                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                            </MaiSkeleton>

                            <MaiSkeleton className="w-4/5 rounded-lg">
                                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                            </MaiSkeleton>

                            <MaiSkeleton className="w-2/5 rounded-lg">  
                                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                            </MaiSkeleton>
                        </div>
                    </MaiCard>
                </>
            )}
            previewDirection='row'
            code={ code.usage }/>
        </>
    )
};

const MaiUIComponentsSkeleton = () => {
	return (
		<MaiUIComponents {...props} />
	);
};

export {
    MaiUIComponentsSkeleton
};
