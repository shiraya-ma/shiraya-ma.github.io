// CRoot
'use strict';
import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CRoot: React.FC<{}> = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        navigate('/mai-ui/components/mai-button');
    }, []);

    return (<></>);
};

namespace CRoot {
    export type Props = {};
};

export {
    CRoot
};
