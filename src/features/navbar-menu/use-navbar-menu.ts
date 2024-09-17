// useNavbarMenu
'use client';
import { useContext } from "react";

import { NavbarMenuContext } from "./navbar-menu-context";

export function useNavbarMenu () {
    const { isMenuOpen, toggleMenu } = useContext(NavbarMenuContext);

    return {
        isMenuOpen,
        toggleMenu
    };
};
