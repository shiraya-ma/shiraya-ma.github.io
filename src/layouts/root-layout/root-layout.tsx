// RootLayout
'use strict';
import React, { type ReactNode } from 'react';

const RootLayout: React.FC<RootLayout.Props> = (props) => {
    const { children } = props;
    
    return (
        <>
            { children }
        </>
    );
};

namespace RootLayout {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    RootLayout
};
