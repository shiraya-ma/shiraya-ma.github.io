// useCloseNavbarMenu
'use client';
import { useEffect } from "react";

import { useNavbarMenu } from "@/features/navbar-menu";

export function useCloseNavbarMenu () {
    const { toggleMenu } = useNavbarMenu();

    useEffect(() => toggleMenu(false), []);
};
