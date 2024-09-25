// LeftNav
'use strict';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocation } from '@reach/router';
import { MaiUiNav } from './mai-ui-nav';

const LeftNav: React.FC<LeftNav.Props> = (props) => {
    const {} = props;

    const { pathname } = useLocation();
    
    return (
        <BrowserRouter>
            <Routes location={ pathname }>
                <Route path='/mai-ui/*' element={ <MaiUiNav /> } />

                <Route path='*' element={ <>aside</> }/>
            </Routes>
        </BrowserRouter>
    );
};

namespace LeftNav {
    export type Props = {};
};

export {
    LeftNav
};
