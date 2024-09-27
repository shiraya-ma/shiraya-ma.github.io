// useBreadcrumbs
'use client';
import type { PageProps } from "gatsby";

export function useBreadcrumbs (props: PageProps) {
    const path = props.path;

    const dirs = path.split(/\//).filter(d => d);    

    const bItems = dirs
        .map((label, i) => {
            const href = dirs
                .filter((_, _i) => _i <= i)
                .reduce((prev, current) => `${ prev }/${ current }`, '');

            return { href, label };
        });

    return {
        bItems
    };
};
