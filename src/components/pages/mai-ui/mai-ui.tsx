// MaiUI
'use strict';
import React from 'react';
import { MaiArticle, MaiBreadcrumbItem, MaiBreadcrumbs, MaiH1, MaiH2, MaiLink } from '@shiraya-ma/mai-ui';

import { maiUIComponentsNavs as components } from '@/configs';

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

                    <section>
                        <nav>
                            <ul className='flex flex-col gap-2 p-4'>
                                { components.map((nav) => (
                                    <li key={nav.label}>
                                        <MaiLink
                                        href={`/mai-ui/components${ nav.href }`}
                                        className='text-2xl font-logo text-[var(--nextui-foreground)]'
                                        showAnchorIcon>
                                            { nav.label }
                                        </MaiLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
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
