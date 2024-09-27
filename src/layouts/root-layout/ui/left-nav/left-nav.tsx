// LeftNav
'use strict';
import React from 'react';
import { useLocation } from '@reach/router';

import { MaiUINav } from './mai-ui-nav';
import { Router } from './router';
import { Route } from './route';

const LeftNav: React.FC<LeftNav.Props> = (props) => {
    const {} = props;

    const { pathname } = useLocation();
    
    return (
        <Router location={ pathname }>
            <Route path={/^\/mai-ui/} element={ <MaiUINav /> } />

            <Route path={/.*/} element={ <></> } />
        </Router>
    );
};

namespace LeftNav {
    export type Props = {};
};

export {
    LeftNav
};
