'use strict';
import React from 'react';
import { type PageProps } from 'gatsby';
import { MaiArticle, MaiBreadcrumbItem, MaiBreadcrumbs, MaiH1, MaiMarkdown } from '@shiraya-ma/mai-ui';

import { text } from './text';
import { useBreadcrumbs } from './hooks';

const NotFoundPage: React.FC<NotFoundPage.Props> = (props) => {
    const {} = props;

    const { bItems } = useBreadcrumbs(props);

    return (
        <>
            <MaiBreadcrumbs>
                {
                    bItems.map(item => (
                        <MaiBreadcrumbItem
                        href={ item.href }
                        key={ item.href }>
                            { item.label }
                        </MaiBreadcrumbItem>
                    ))
                }                
            </MaiBreadcrumbs>

            <MaiArticle.Container>
                <MaiH1>Page not found</MaiH1>

                <MaiArticle.Divider />

                <section>
                    <MaiMarkdown>{ text }</MaiMarkdown>
                </section>
            </MaiArticle.Container>
        </>
    );
};

namespace NotFoundPage {
    export type Props = PageProps;
};

export {
    NotFoundPage
};
