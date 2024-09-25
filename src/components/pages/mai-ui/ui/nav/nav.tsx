// Nav
'use strict';
import React, { ReactNode } from 'react';

import { NavItem } from './nav-item';

const Nav: Nav.Component = (props) => {
    const { children } = props;
    
    return (
        <section>
            <nav>
                <ul className='flex flex-col gap-2 p-4'>
                    { children }
                </ul>
            </nav>
        </section>
    );
};

Nav.Item = NavItem;

namespace Nav {
    export type Component = React.FC<Props> & Compound;

    export type Compound = {
        Item: React.FC<NavItem.Props>;
    };

    export type Props = {
        children?: ReactNode;
    };
};

export {
    Nav
};
