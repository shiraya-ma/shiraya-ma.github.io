'use strict';
import { type ReactNode } from "react";

import {
    CArticle,
    CBreadcrumbs,
    CButton,
    CCard,
    CCodeBlock,
    CHeadings,
    CMarkdown,
    CPagination,
    CSkeleton,
    CSNSLink
} from "@/pages/mai-ui/pages";

export const maiUIComponents: MaiUINavProps[] = [
    { href: '/mai-article', name: 'MaiArticle', component: <CArticle /> },
    { href: '/mai-breadcrumbs', name: 'MaiBreadcrumbs', component: <CBreadcrumbs /> },
    { href: '/mai-button', name: 'MaiButton', component: <CButton /> },
    { href: '/mai-card', name: 'MaiCard', component: <CCard /> },
    { href: '/mai-code-block', name: 'MaiCodeBlock', component: <CCodeBlock /> },
    { href: '/mai-headings', name: 'MaiHeadings', component: <CHeadings /> },
    { href: '/mai-markdown', name: 'MaiMarkdown', component: <CMarkdown /> },
    { href: '/mai-pagination', name: 'MaiPagination', component: <CPagination /> },
    { href: '/mai-skeleton', name: 'MaiSkeleton', component: <CSkeleton /> },
    { href: '/mai-sns-link', name: 'MaiSNSLink', component: <CSNSLink /> },
];

export type MaiUINavProps = {
    href: string;
    name: string;
    component?: ReactNode;
};
