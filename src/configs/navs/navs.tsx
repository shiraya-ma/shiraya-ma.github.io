'use strict';
import { type ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, MaiUI } from "@/pages";
import { CRoot } from "@/pages/mai-ui/pages";
import { Page } from "@/components";

import { maiUIComponents } from "./mai-ui-navs";

export const navs: NavProp[] = [
    { href: '/', label: 'HOME', component: (<Home />) },
    { href: '/mai-ui', path: '/mai-ui/*', label: 'MaiUI', component: (
        <Routes>
            <Route path="/" element={ <MaiUI /> }/>

            <Route path={`/components`} element={ <CRoot /> } key={`mai-ui-components-root`}/>

            { maiUIComponents.map(nav => (
                <Route path={`/components${ nav.href }`} element={ nav.component } key={`mai-ui-components-${ nav.name }`}/>
            ))}
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
