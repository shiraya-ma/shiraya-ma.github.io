// useRedirect
'use client';
import { useEffect, useState } from "react";
import { navigate } from "gatsby";

export function useRedirect (option?: UseredirectOption) {
    const [ secs, setSecs ] = useState<number>(option?.seconds || 10);

    const redirectHref = option?.href || '/';

    useEffect(() => {
        if (secs === 0) {
            navigate(redirectHref);
        }

        else {
            setTimeout(() => setSecs(secs - 1), 1000);
        }
    }, [ secs ]);

    return {
        redirectHref,
        secs
    };
};

type UseredirectOption = {
    href?: string;
    seconds?: number;
};
