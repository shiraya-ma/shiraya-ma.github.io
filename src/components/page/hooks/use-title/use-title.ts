// useTitle
'use client';
import { useLayoutEffect } from "react";

export function useTitle (title?: string) {
    useLayoutEffect(() => {
        if (title) {
            document.title = title;
        }

        else {
            const { pathname } = new URL(window.location.href);

            document.title = pathname;
        }
    }, [ title ]);
};
