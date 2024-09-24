// Case
'use strict';
import React, { ReactNode } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import { MaiH3, MaiCodeBlock } from '@shiraya-ma/mai-ui';

import { Redirect } from '../../_redirect';

const Case: React.FC<Case.Props> = (props) => {
    const { title, preview, previewDirection, code } = props;
    
    return (
        <>
            { title && (<MaiH3>{ title }</MaiH3>) }
            
            <Tabs variant='underlined'>
                <Tab key="preview" title="Preview">
                    <div className={[
                        'flex flex-col gap-4 p-4 border border-gray-500/50 rounded-lg',
                        'data-[direction=row]:flex-row data-[direction=row]:overflow-x-auto'
                    ].join(' ')}
                    data-direction={ previewDirection }>
                        { preview }
                    </div>
                </Tab>

                <Tab key="code" title="Code">
                    <MaiCodeBlock language='tsx'>
                        { code || '//wait add example code' }
                    </MaiCodeBlock>
                </Tab>
            </Tabs>
        </>
    );
};

namespace Case {
    export type Props = {
        title?: string;
        preview: ReactNode;
        previewDirection?: 'col' | 'row';
        code?: string;
    };
};

export {
    Case
};

export default Redirect;
