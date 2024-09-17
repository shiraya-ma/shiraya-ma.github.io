'use strict';
import { type ReactNode } from "react";

export const maiUIComponents: MaiUINavProps[] = [
    { href: '/mai-article', name: 'MaiArticle' },
    { href: '/mai-breadcrumbs', name: 'MaiBreadcrumbs' },
    { href: '/mai-button', name: 'MaiButton' },
    { href: '/mai-card', name: 'MaiCard' },
    { href: '/mai-code-block', name: 'MaiCodeBlock' },
    { href: '/mai-headings', name: 'MaiHeadings' },
    { href: '/mai-markdown', name: 'MaiMarkdown' },
    { href: '/mai-pagination', name: 'MaiPagination' },
    { href: '/mai-skeleton', name: 'MaiSkeleton' },
    { href: '/mai-sns-link', name: 'MaiSNSLink' },
];

export type MaiUINavProps = {
    href: string;
    name: string;
    component?: ReactNode;
};
