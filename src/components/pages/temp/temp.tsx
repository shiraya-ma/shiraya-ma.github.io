// Temp
'use strict';
import React from 'react';
import { MaiArticle, MaiBreadcrumbItem, MaiBreadcrumbs, MaiH1 } from '@shiraya-ma/mai-ui';

const Temp: React.FC<Temp.Props> = (props) => {
    const {} = props;
    
    return (
        <>
            <MaiBreadcrumbs>
                <MaiBreadcrumbItem>Temp</MaiBreadcrumbItem>
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiH1>Temp</MaiH1>

                <MaiArticle.Divider />

                this is temp page.
            </MaiArticle.Container>
        </>
    );
};

namespace Temp {
    export type Props = {};
};

export {
    Temp
};
