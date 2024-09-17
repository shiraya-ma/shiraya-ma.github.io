// NavbarMenuContextProvider
'use strict';
import React, { ReactNode } from 'react';
import { useNavbarMenuContext } from './use-navbar-menu-context';
import { NavbarMenuContext } from './navbar-menu-context';

const NavbarMenuContextProvider: React.FC<NavbarMenuContextProvider.Props> = (props) => {
    const { children } = props;

    const { context } = useNavbarMenuContext();
    
    return (
        <NavbarMenuContext.Provider value={ context }>
            { children }
        </NavbarMenuContext.Provider>
    );
};

namespace NavbarMenuContextProvider {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    NavbarMenuContextProvider
};
