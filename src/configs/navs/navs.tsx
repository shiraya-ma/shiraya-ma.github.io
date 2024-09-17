'use strict';
import { type ReactNode } from "react";

import { Home } from "@/pages";
import { Page } from "@/components";

export const navs: NavProp[] = [
    { href: '/', label: 'HOME', component: (<Home />) },
    { href: '/temp', label: 'TEMP', component: (<Page title="temp">temp page</Page>) }
];

export type NavProp = {
    href: string,
    label: string,
    component: ReactNode;
};
