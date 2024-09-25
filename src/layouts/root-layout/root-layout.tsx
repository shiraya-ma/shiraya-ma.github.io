// RootLayout
'use strict';
import React, { useState, type ReactNode } from 'react';
import { navigate } from 'gatsby';
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import { MaiLink, MaiUIProvider } from '@shiraya-ma/mai-ui';

import { navs } from '@/configs';

import '@shiraya-ma/mai-ui/fonts.css';
import { Helmet } from 'react-helmet';
import { LeftNav } from './ui';

const RootLayout: React.FC<RootLayout.Props> = (props) => {
    const { children } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <>
            <Helmet htmlAttributes={{
                lang: 'en'
            }}>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <meta name='robots' content='noindex, nofollow' />
            </Helmet>

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
                            <NavbarItem key={ nav.label }>
                                <MaiLink
                                href={ nav.href }
                                className='text-xl font-logo text-[var(--nextui-foreground)]'>
                                    { nav.label }
                                </MaiLink>
                            </NavbarItem>
                        ))}
                    </NavbarContent>

                    <NavbarMenu
                    className='overflow-y-hidden'>
                        { navs.map(nav => (
                            <NavbarMenuItem key={ nav.label }>
                                <MaiLink
                                href={ nav.href }
                                className='text-2xl font-logo text-[var(--nextui-foreground)]'
                                showAnchorIcon>
                                    { nav.label }
                                </MaiLink>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>

                <div
                className='relative flex flex-col flex-grow lg:flex-row-reverse'>
                    <main
                    className='flex flex-col flex-grow mx-auto w-full max-w-[100ch] gap-4 lg:ml-0'>
                        { children }
                    </main>

                    <aside
                    className='sticky top-16 flex flex-col gap-2 h-fit max-h-full p-4 overflow-x-hidden lg:w-[calc((100%-100ch)/2)]'>
                        <LeftNav />
                    </aside>
                </div>
            </MaiUIProvider>
        </>
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
