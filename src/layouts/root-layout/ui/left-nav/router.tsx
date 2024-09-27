// Router
'use strict';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Route } from './route';

const Router: React.FC<Router.Props> = (props) => {
    const { children, location } = props;
    const [ route, setRoute ] = useState<ReactElement>();

    useEffect(() => {
        const routes = children as ReactElement<Route.Props>[];

        const route = routes.find(route => route.props.path.test(location));

        setRoute(route);
    }, [ children, location ]);
    
    return (
        <>
            { route }
        </>
    );
};

namespace Router {
    export type Props = {
        children?: ReactNode;
        location: string;
    };
};

export {
    Router
};
