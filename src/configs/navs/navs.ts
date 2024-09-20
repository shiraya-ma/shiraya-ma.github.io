'use strict';

export const navs: NavProps[] = [
    { href: '/', label: 'MaiDocs' },
    { href: '/temp', label: 'Temp' },
];

export type NavProps = {
    href: string, label: string;
};
