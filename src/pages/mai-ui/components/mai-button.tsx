'use strict';
import React from 'react';
import { MaiUIConmponents } from '@/components/pages';

const props: MaiUIConmponents.Props = {
    name: 'MaiButton',
    href: '/mai-button',

    description: '',
    install: 'hoge',
    usage: (
        <>
            this is mai button
        </>
    )
};

export default MaiUIConmponents(props).Page;

export const Head = MaiUIConmponents(props).Head;
