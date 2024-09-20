'use strict';

const _navs: NavProps[] = [
    { href: '/', label: 'MaiDocs' },
    { href: '/mai-ui', label: 'MaiUI' },
    { href: '/temp', label: 'Temp' }
];

export const navs = process.env.NODE_ENV === 'development'? _navs: _navs.filter(nav => nav.href !== '/temp');

export type NavProps = {
    href: string, label: string;
};
