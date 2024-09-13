// useCloseNavbarMenu
'use client';

import { useNavbarMenu } from "@/features/navbar-menu";
import { useEffect } from "react";

export function useCloseNavbarMenu () {
    const { toggleMenu } = useNavbarMenu();

    useEffect(() => toggleMenu(false), []);
};
