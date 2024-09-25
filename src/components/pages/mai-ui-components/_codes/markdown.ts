'use strict';
import { Redirect } from '../_redirect';
export default Redirect;

export const usage = `import React from "react";
import { MaiMarkdown } from "@shiraya-ma/mai-ui";

import { markdownText } from "./markdown-text.ts";

export default function App() {
  return (
    <MaiMarkdown>
      { markdownText }
    </MaiMarkdown>
  );
};

`;
