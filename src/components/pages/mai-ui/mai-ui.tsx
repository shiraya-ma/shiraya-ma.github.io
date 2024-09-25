// MaiUI
'use strict';
import React from 'react';
import { MaiArticle, MaiBreadcrumbItem, MaiBreadcrumbs, MaiH1, MaiH2 } from '@shiraya-ma/mai-ui';

import { maiUIComponentsNavs as components, maiUIGuideNavs as guide } from '@/configs';

import { Nav } from './ui';

const MaiUI: React.FC<MaiUI.Props> = (props) => {
    const {} = props;
    
    return (
        <>
            <MaiBreadcrumbs>
                <MaiBreadcrumbItem>MaiUI</MaiBreadcrumbItem>
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiH1 className='font-logo'>MaiUI</MaiH1>

                <MaiArticle.Divider />

                <section>
                    <MaiH2>Guide</MaiH2>

                    <Nav>
                        { guide.map((nav) => (
                            <Nav.Item
                            href={`/mai-ui/guide${ nav.href }`}
                            key={nav.label}>
                                { nav.label }
                            </Nav.Item>
                        ))}
                    </Nav>

                    <MaiH2>Components</MaiH2>

                    <Nav>
                        { components.map((nav) => (
                            <Nav.Item
                            href={`/mai-ui/components${ nav.href }`}
                            key={nav.label}>
                                { nav.label }
                            </Nav.Item>
                        ))}
                    </Nav>
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
