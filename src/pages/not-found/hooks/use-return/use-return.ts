// useReturn
'use client';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useReturn (href: string, s = 10) {
    const navigate = useNavigate();
    const [ seconds, setSeconds  ] = useState<number>(s);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }

        else if (seconds === 0) {
            navigate(href);
        }
    }, [ href, seconds ]);

    return {
        href,
        seconds
    };
};
