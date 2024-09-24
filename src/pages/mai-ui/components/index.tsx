// Index
'use strict';
import React, { useLayoutEffect } from 'react';
import { navigate } from 'gatsby';

const Index: React.FC<Index.Props> = (props) => {
    const {} = props;
    
    useLayoutEffect(() => {
        navigate('/mai-ui/components/mai-button');
    }, []);

    return (
        <></>
    );
};

namespace Index {
    export type Props = {};
};

export {
    Index
};

export default Index;
