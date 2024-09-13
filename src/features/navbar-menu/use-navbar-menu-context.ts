// useNavbarMenuContext
'use client';
import { useCallback, useState } from "react";
import { type NavbarMenuContextProps } from "./navbar-menu-context";

export function useNavbarMenuContext () {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);

    const toggleMenu = useCallback((isMenuOpen: boolean)=> {
        setIsMenuOpen(isMenuOpen);
    }, []);

    const context: NavbarMenuContextProps = {
        isMenuOpen,
        toggleMenu
    };

    return {
        context
    };
};
