// Link
'use strict';
import { MaiLink } from '@shiraya-ma/mai-ui';
import React from 'react';

const Link: React.FC<Link.Props> = (props) => {
    const { children, href } = props;
    
    return (
        <li>
            <MaiLink
            className='text-2xl'
            href={ href }
            showAnchorIcon>
                { children }
            </MaiLink>
        </li>
    );
};

namespace Link {
    export type Props = {
        children: string;
        href: string;
    };
};

export {
    Link
};
