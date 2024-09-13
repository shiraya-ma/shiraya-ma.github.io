// Layout
'use strict';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react';
import {
    MaiLink,
    MaiUIProvider
} from '@shiraya-ma/mai-ui';

import 'tailwindcss/tailwind.css';
import '@shiraya-ma/mai-ui/fonts.css';

import { useNavbarMenu } from './features/navbar-menu';

import './global.css';

const Layout: React.FC<Layout.Props> = (props) => {
    const { children } = props;

    const navigate = useNavigate();
    const { isMenuOpen, toggleMenu } = useNavbarMenu();
    
    return (
        <MaiUIProvider navigate={ navigate }>
            <Navbar
            classNames={{
                base: 'bg-transparent backdrop-saturate-100',
                wrapper: 'w-screen max-w-[100ch] px-0'
            }}
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={ toggleMenu }>
                <NavbarContent>
                    <NavbarItem className='flex size-16 justify-center md:hidden'>
                        <NavbarMenuToggle aria-label={ isMenuOpen ? "Close menu" : "Open menu" }/>
                    </NavbarItem>

                    <NavbarItem className='hidden gap-4 grow md:flex'>
                        <MaiLink href='/'>HOME</MaiLink>
                    </NavbarItem>
                    
                    <NavbarItem>
                    </NavbarItem>

                    <NavbarMenu className='md:hidden'>
                        <NavbarMenuItem>
                            <MaiLink href='/'>HOME</MaiLink>
                        </NavbarMenuItem>
                    </NavbarMenu>
                </NavbarContent>
            </Navbar>

            <main
            className='flex flex-col gap-4 mx-auto w-screen max-w-[100ch]'>
                { children }
            </main>
        </MaiUIProvider>
    );
};

namespace Layout {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Layout
};
