// MaiUI
'use strict';
import { MaiArticle, MaiBreadcrumbItem, MaiBreadcrumbs, MaiH1, MaiH2 } from '@shiraya-ma/mai-ui';
import React from 'react';

const MaiUI: React.FC<MaiUI.Props> = (props) => {
    const {} = props;
    
    return (
        <>
            <MaiBreadcrumbs>
                <MaiBreadcrumbItem>MaiUI</MaiBreadcrumbItem>
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiH1>MaiUI</MaiH1>

                <MaiArticle.Divider />

                <section>
                    <MaiH2>Guide</MaiH2>

                    <section></section>

                    <MaiH2>Components</MaiH2>

                    <section></section>
                </section>
            </MaiArticle.Container>
        </>
    );
};

namespace MaiUI {
    export type Props = {};
};

export {
    MaiUI
};
