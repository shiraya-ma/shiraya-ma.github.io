// RootLayout
'use strict';
import React, { useState, type ReactNode } from 'react';
import { navigate } from 'gatsby';
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import { MaiLink, MaiUIProvider } from '@shiraya-ma/mai-ui';

import { navs } from '@/configs';

import '@shiraya-ma/mai-ui/fonts.css';

const RootLayout: React.FC<RootLayout.Props> = (props) => {
    const { children } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <MaiUIProvider navigate={ navigate }>
            <Navbar
            classNames={{
                wrapper: 'w-screen max-w-[100ch]'
            }}
            isBordered
            isMenuOpen={ isMenuOpen }
            onMenuOpenChange={ setIsMenuOpen }>
                <NavbarContent
                className='flex md:hidden'>
                    <NavbarItem
                    className='flex size-16 justify-center'>
                        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                    </NavbarItem>
                </NavbarContent>
                
                <NavbarContent
                className='hidden md:flex'>
                    { navs.map(nav => (
                        <NavbarItem key={`navbar-links-${ nav.label }`}>
                            <MaiLink
                            href={ nav.href }
                            className='text-xl font-heading text-[var(--nextui-foreground)]'>
                                { nav.label }
                            </MaiLink>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarMenu
                className='overflow-y-hidden'>
                    { navs.map(nav => (
                        <NavbarMenuItem key={`navbar-menu-links-${ nav.label }`}>
                            <MaiLink
                            href={ nav.href }
                            className='text-2xl'
                            showAnchorIcon>
                                { nav.label }
                            </MaiLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

            <div
            className='flex flex-grow'>
                <main
                className='flex flex-col flex-grow mx-auto w-screen max-w-[100ch] gap-4'>
                    { children }
                </main>
            </div>
        </MaiUIProvider>
    );
};

namespace RootLayout {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    RootLayout
};
