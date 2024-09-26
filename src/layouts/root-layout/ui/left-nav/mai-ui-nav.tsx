// MaiUINav
'use strict';
import React from 'react';

import { maiUIComponentsNavs as components, maiUIGuideNavs as guide } from '@/configs';
import { Accordion } from './accordion';

const MaiUINav: React.FC<MaiUINav.Props> = (props) => {
    const {} = props;
    
    return (
        <nav>
            <ul>
                <Accordion title='Guide'>
                    { guide.map(nav => (
                        <Accordion.Item
                        href={`/mai-ui/guide${ nav.href }`}
                        key={ nav.label }>
                            { nav.label }
                        </Accordion.Item>
                    ) )}
                </Accordion>

                <Accordion title='Components'>
                    { components.map(nav => (
                        <Accordion.Item
                        href={`/mai-ui/components${ nav.href }`}
                        key={ nav.label }>
                            { nav.label }
                        </Accordion.Item>
                    ) )}
                </Accordion>
            </ul>
        </nav>
    );
};

namespace MaiUINav {
    export type Props = {};
};

export {
    MaiUINav
};
