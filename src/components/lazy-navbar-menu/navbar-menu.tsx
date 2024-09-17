// NavbarMenu
'use strict';
import React from 'react';
import { NavbarMenu as NextUINavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { MaiLink } from '@shiraya-ma/mai-ui';

import { navs } from '@/configs';

const NavbarMenu: React.FC<NavbarMenu.Props> = (props) => {
    const {} = props;
    
    return (
        <NextUINavbarMenu>
            { navs.map(nav => (
                <NavbarMenuItem key={`navbar-menu-link-${ nav.label }`}>
                    <MaiLink href={ nav.href }>{ nav.label }</MaiLink>
                </NavbarMenuItem>                        
            ))}
        </NextUINavbarMenu>
    );
};

namespace NavbarMenu {
    export type Props = {};
};

export {
    NavbarMenu
};

export default NavbarMenu;
