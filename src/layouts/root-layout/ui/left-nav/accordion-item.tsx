// AccordionItem
'use strict';
import React, { ReactNode } from 'react';
import { MaiLink } from '@shiraya-ma/mai-ui';

const AccordionItem: React.FC<AccordionItem.Props> = (props) => {
    const { children, href} = props;
    
    return (
        <li className='before:contents="-"'>
            <MaiLink
            href={ href }
            className='text-large'
            color='foreground'>
                { children }
            </MaiLink>
        </li>
    );
};

namespace AccordionItem {
    export type Props = {
        children?: ReactNode;
        href: string;
    };
};

export {
    AccordionItem
};
