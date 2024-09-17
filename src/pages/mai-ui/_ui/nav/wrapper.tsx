// Wrapper
'use strict';
import React, { ReactNode } from 'react';

const Wrapper: React.FC<Wrapper.Props> = (props) => {
    const { children } = props;
    
    return (
        <ul className='flex flex-col gap-2 px-4'>
            { children }
        </ul>
    );
};

namespace Wrapper {
    export type Props = {
        children?: ReactNode;
    };
};

export {
    Wrapper
};
