'use strict';

import { createContext } from "react";

export const NavbarMenuContext = createContext<NavbarMenuContextProps>({
    isMenuOpen: false,
    toggleMenu: (_) => {}
});

export type NavbarMenuContextProps = {
    isMenuOpen: boolean;
    toggleMenu: (isMenuOpen: boolean) => void;
};
