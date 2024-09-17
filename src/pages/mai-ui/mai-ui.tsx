// MaiUI
'use strict';
import React from 'react';
import { MaiH2 } from '@shiraya-ma/mai-ui';

import { Page } from '@/components';
import { maiUIComponents } from '@/configs';

import { Nav } from './_ui';

const MaiUI: React.FC<MaiUI.Props> = (props) => {
    const {} = props;
    
    return (
        <Page
        title='MaiUI'
        breadcrumbItems={[{ children: 'MaiUI' }]}>
            <MaiH2>Guide</MaiH2>

            <MaiH2>Components</MaiH2>

            <Nav.Wrapper>
                { maiUIComponents.map(nav => (
                    <Nav.Link
                    href={`/mai-ui/components${ nav.href }`}
                    key={`mai-ui-components-nav-${ nav.name }`}>
                        { nav.name 
                    }</Nav.Link>
                ))} 
            </Nav.Wrapper>
        </Page>
    );
};

namespace MaiUI {
    export type Props = {};
};

export {
    MaiUI
};
