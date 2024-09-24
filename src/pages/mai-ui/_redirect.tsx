// Redirect
'use strict';
import React, { useLayoutEffect } from 'react';
import { navigate } from 'gatsby';

const Redirect: React.FC<Redirect.Props> = (props) => {
    const {} = props;

    useLayoutEffect(() => {
        navigate('/mai-ui');
    }, []);
    
    return (
        <></>
    );
};

namespace Redirect {
    export type Props = {};
};

export {
    Redirect
};

export default Redirect;
