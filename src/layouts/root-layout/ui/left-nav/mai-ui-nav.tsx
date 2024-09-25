// MaiUiNav
'use strict';
import React from 'react';
import { Accordion, AccordionItem, type SlotsToClasses } from '@nextui-org/react';
import { MaiLink } from '@shiraya-ma/mai-ui';

import { maiUIComponentsNavs as components } from '@/configs';

const MaiUiNav: React.FC<MaiUiNav.Props> = (props) => {
    const {} = props;
    
    const accordionItem: SlotsToClasses<"base" | "title" | "content" | "heading" | "trigger" | "startContent" | "indicator" | "titleWrapper" | "subtitle"> = {
        title: 'text-2xl',
        trigger: 'py-0'
    };
    const innerUl = 'flex flex-col gap-2 p-2';
    const link = 'text-large';
    
    return (
        <nav>
            <ul>
                <li>
                    <Accordion defaultSelectedKeys={'0'}>
                        <AccordionItem
                        title='Guide'
                        key={'0'}
                        classNames={accordionItem}>

                        </AccordionItem>
                    </Accordion>
                </li>
                <li>
                    <Accordion defaultSelectedKeys={'0'}>
                        <AccordionItem
                        title='Components'
                        key={'0'}
                        classNames={accordionItem}>
                            <ul className={innerUl}>
                                { components.map(nav => (
                                    <li
                                    className='before:contents="-"'
                                    key={ nav.label }>
                                        <MaiLink
                                        href={`/mai-ui/components${ nav.href }`}
                                        className={ link }
                                        color='foreground'>{ nav.label }</MaiLink>
                                    </li>
                                ) )}
                            </ul>
                        </AccordionItem>
                    </Accordion>
                </li>
            </ul>
        </nav>
    );
};

namespace MaiUiNav {
    export type Props = {};
};

export {
    MaiUiNav
};
