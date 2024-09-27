'use strict';
import React from "react";
import { MaiMarkdown } from "@shiraya-ma/mai-ui";

import { MaiUIGuide } from "./mai-ui-guide";

const props: MaiUIGuide.Props = {
    name: 'Installation',
    href: '/installation',
    children: (<MaiMarkdown>{`
## Requirement  

- [React 18](https://react.dev/) or later
- [Tailwind CSS 3.4](https://tailwindcss.com/) or later
- [FramerMotion 11](https://www.framer.com/motion/) or later
- [NextUI 2.4](https://nextui.org/) or later
- [react-markdown 9](https://github.com/remarkjs/react-markdown) or later
- [react-syntax-highlighter 15](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/) or later

## Install

### dependencies

\`\`\`bash
npm install @nextui-org/react framer-motion @shiraya-ma/mai-ui
\`\`\`

### devDependencies

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
\`\`\`

### optional

Additional INSTALL is required to change the MaiMarkdown theme.

\`\`\`bash
npm instlal -D @types/react-syntax-highlighter
\`\`\`

## Configuration

### 1.Initialize Tailwind.css

\`\`\`bash
npx tailwind init -p
\`\`\`

### 2.Configure tailwind.config
\`\`\`tailwind.config.js
'use strict';
const { maiUIConfig } = require('@shiraya-ma/mai-ui/setup');

module.exports = maiUIConfig({
  content: []
});

\`\`\`

This is the simplest and most minimalist configuration.<br/>

The following content settings are automatically added by \`maiUIConfig\` and do not need to be added by you.<br/>
- \`./index.html\`
- \`./src/**/*.{js,ts,jsx,tsx,css,scss,sass}\`
- \`./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}\`
- \`./node_modules/@shiraya-ma/mai-ui/**/*.{js,ts,jsx,tsx}\`

### 3.Setup Provider

Add the \`MaiUIProvider\` at the \`root\` to your application.

\`\`\`index.tsx
'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MaiUIProvider } from '@shiraya-ma/mai-ui';

import App from './app';

createRoot(document.querySelector('#root'))
.render(
<MaiUIProvider>
    <App />
</MaiUIProvider>
);

\`\`\`

When set up in conjunction with a routing framework, the following configuration is required.

The navigate function of each framework can be shared within MaiUI.

#### with React Router DOM

Add a component containing \`MaiUIProvider\` inside \`BrowserRouter\` or \`HashRouter\`.

\`\`\`layout.tsx
'use strict';
import React, { PropsWithChildren }  from 'react';
import { useNavigate } from 'react-router';
import { MaiUIProvider } from '@shiraya-ma/mai-ui';
import 'tailwindcss/tailwind.css';
import '@shiraya-ma/mai-ui/fonts.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <MaiUIProvider navigate={ navigate }>
            { children }
        </MaiUIProvider>
    );
};

export default Layout;

\`\`\`\

\`\`\`index.tsx
'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MaiUIProvider } from '@shiraya-ma/mai-ui';

import  Layout from './layout';
import Home from './home';

createRoot(document.querySelector('#root'))
.render(
<BrowserRouter>
    <Layout>
        <Routes>
            <Route path='/' elements={ <Home /> } />
        <Routes>
    </Layout>
</BrowserRouter>
);

\`\`\`

#### with Next.js

##### Pages Router

\`\`\`_app.tsx
'use strict';
import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { MaiUIProvider } from '@shiraya-ma/mai-ui';

const App: React.FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();

    const navigate = (path: string) => {
        router.push(path);
    };

    return (
        <MaiUIProvider navigate={ navigate }>
            { children }
        </MaiUIProvider>
    );
};

export default App;

\`\`\`

##### App Router

\`\`\`layout.tsx
'use client';
import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { MaiUIProvider } from '@shiraya-ma/mai-ui';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const router = useRouter();

    const navigate = (path: string) => {
        router.push(path);
    };

    return (
        <html lang="en">
            <body>
                <MaiUIProvider navigate={ navigate }>
                    { children }
                </MaiUIProvider>
            </body>
        </html>
    );
};

export default Layout;

\`\`\`

    `}</MaiMarkdown>)
};

const MaiUIGuideInstrallation = () => {
    return (
        <MaiUIGuide {...props}/>
    );
};

export {
    MaiUIGuideInstrallation
};
