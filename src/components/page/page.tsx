// Page
'use strict';
import React, { ReactNode } from 'react';
import { type BreadcrumbItemProps } from '@nextui-org/react';
import {
    MaiArticle,
    MaiBreadcrumbItem,
    MaiBreadcrumbs,
    MaiH1
} from '@shiraya-ma/mai-ui';
import { useCloseNavbarMenu, useTitle } from './hooks';

const Page: React.FC<Page.Props> = (props) => {
    const { title, children, breadcrumbItems } = props;

    useCloseNavbarMenu();
    
    useTitle(title);
    
    return (
        <>
            { breadcrumbItems && (
                <MaiBreadcrumbs>
                    { breadcrumbItems.map((props, index) => (
                        <MaiBreadcrumbItem { ...props } key={`breadcrumbs-${ index }`}/>
                    ))}
                </MaiBreadcrumbs>
            )}

            <MaiArticle.Container>
                { title && (<>
                    <MaiH1>{ title }</MaiH1>

                    <MaiArticle.Divider />
                </>) }      
                
                <section className='flex flex-col gap-4 px-2 py-4'>
                    { children }
                </section>
            </MaiArticle.Container>
        </>
    );
};

namespace Page {
    export type Props = {
        title?: string;
        children?: ReactNode;
        breadcrumbItems?: BreadcrumbItemProps[];
    };
};

export {
    Page
};
