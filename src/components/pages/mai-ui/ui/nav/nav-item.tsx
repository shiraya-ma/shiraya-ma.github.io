// NavItem
'use strict';
import React, { ReactNode } from 'react';

import { MaiLink } from '@shiraya-ma/mai-ui';

const NavItem: React.FC<NavItem.Props> = (props) => {
    const { children, href } = props;
    
    return (
        <li>
            <MaiLink
            href={ href }
            className='text-2xl font-logo text-[var(--nextui-foreground)]'
            showAnchorIcon>
                { children }
            </MaiLink>
        </li>
    );
};

namespace NavItem {
    export type Props = {
        children?: ReactNode;
        href: string;
    };
};

export {
    NavItem
};
