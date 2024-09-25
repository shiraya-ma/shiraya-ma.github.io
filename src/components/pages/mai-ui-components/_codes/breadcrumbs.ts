'use strict';
import { Redirect } from '../_redirect';
export default Redirect;

export const usage = `import React from "react";

import { MaiBreadcrumbItem, MaiBreadcrumbs } from "@shiraya-ma/mai-ui";

export default function App() {
  return (
    <>
      <MaiBreadcrumbs>
        <MaiBreadcrumbItem href='/mai-ui'>MaiUI</MaiBreadcrumbItem>

        <MaiBreadcrumbItem href='/mai-ui/components'>Components</MaiBreadcrumbItem>
        
        <MaiBreadcrumbItem href='/mai-ui/components/mai-breadcrumbs'>MaiBreadcrumbs</MaiBreadcrumbItem>
      </MaiBreadcrumbs>
    </>
  );
};

`;
