// Accordion
'use strict';
import React, { ReactNode } from 'react';
import { Accordion as NextAccordion, AccordionItem as NextAccordionItem } from '@nextui-org/react';

import { AccordionItem } from './accordion-item';

const Accordion: Accordion.Component = (props) => {
    const { children, title } = props;

    const KEY = '0';
    
    return (
        <li>
            <NextAccordion
            defaultSelectedKeys={KEY}>
                <NextAccordionItem
                title={ title }
                classNames={{
                    title: 'text-2xl',
                    trigger: 'py-0'
                }}
                key={KEY}>
                    <ul className='flex flex-col gap-2 p-2'>
                        { children }                    
                    </ul>
                </NextAccordionItem>
            </NextAccordion>
        </li>
    );
};

Accordion.Item = AccordionItem;

namespace Accordion {
    export type Component = React.FC<Props> & Compound;

    export type Compound = {
        Item: React.FC<AccordionItem.Props>;
    };

    export type Props = {
        children?: ReactNode;
        title: string;
    };
};

export {
    Accordion
};
