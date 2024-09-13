// useReturn
'use client';

import { useState } from "react";

export function useReturn (href: string, s = 5) {
    const [ seconds, setSeconds  ] = useState<number>(s);

    return {
        href,
        seconds
    };
};
