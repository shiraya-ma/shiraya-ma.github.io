// RootLayout
'use strict';
import React, { type ReactNode } from 'react';
import { navigate } from 'gatsby';
import { MaiUIProvider } from '@shiraya-ma/mai-ui';

const RootLayout: React.FC<RootLayout.Props> = (props) => {
    const { children } = props;
    
    return (
        <MaiUIProvider navigate={ navigate }>
            { children }
        </MaiUIProvider>
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
