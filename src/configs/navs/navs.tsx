'use strict';
import { type ReactNode } from "react";

import { Home, MaiUI } from "@/pages";
import { Page } from "@/components";
import { Route, Routes } from "react-router-dom";

export const navs: NavProp[] = [
    { href: '/', label: 'HOME', component: (<Home />) },
    { href: '/mai-ui', path: '/mai-ui/*', label: 'MaiUI', component: (
        <Routes>
            <Route path="/" element={ <MaiUI /> }/>
        </Routes>
    ) },
    { href: '/temp', label: 'TEMP', component: (<Page title="temp">temp page</Page>) }
];

export type NavProp = {
    href: string,
    label: string,
    component: ReactNode;
    path?: string;
};
