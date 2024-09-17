// useBreadcrumbs
'use client';

export function useBreadcrumbs () {
    const { pathname } = new URL(window.location.href);
    
    const pathes = pathname.split(/\//).filter(t => t);

    let _href = '';

    const items = pathes.map((path, index) => {
        const key = `breadcrumb-item${ index }-${ path }`;
        const href = `${ _href }/${ path }`;
        const children = path;

        _href = href;

        return {
            children,
            href,
            key,
        };
    });

    return {
        items
    };
};
