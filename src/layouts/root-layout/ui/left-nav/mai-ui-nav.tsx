// MaiUiNav
'use strict';
import React from 'react';

import { maiUIComponentsNavs as components, maiUIGuideNavs as guide } from '@/configs';
import { Accordion } from './accordion';

const MaiUiNav: React.FC<MaiUiNav.Props> = (props) => {
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

namespace MaiUiNav {
    export type Props = {};
};

export {
    MaiUiNav
};
