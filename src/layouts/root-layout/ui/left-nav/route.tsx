// Route
'use strict';
import React, { ReactElement } from 'react';


const Route: React.FC<Route.Props> = (props) => {
    const { element } = props;
    
    return (<>{ element }</>);
};

namespace Route {
    export type Props = {
        path: RegExp;
        element: ReactElement;
    };
};

export {
    Route
};
