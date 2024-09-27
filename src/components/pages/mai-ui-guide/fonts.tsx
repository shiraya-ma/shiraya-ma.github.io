'use strict';
import React from "react";
import { MaiH2, MaiMarkdown } from "@shiraya-ma/mai-ui";

import { MaiUIGuide } from "./mai-ui-guide";

const props: MaiUIGuide.Props = {
    name: 'Fonts',
    href: '/fonts',
    children: (<>
        <MaiH2>MaiFonts</MaiH2>

        <section
        className="flex flex-col gap-4">
            <p>MaiUI has added the following fonts to Tailwind's font sets.</p>

            <table className="w-full max-w-[50ch] mx-auto">
                <thead className="[&>th]:p-2 [&>th]:text-lg">
                    <th> Tailwind variable name </th>

                    <th> Font name </th>
                </thead>

                <tbody
                className="[&_td]:p-2 [&_td]:text-center [&_td]:text-lg">
                    <tr className="font-heading">
                        <td>font-heading</td>
                        <td>Sawarabi Gothic</td>
                    </tr>

                    <tr className="font-main">
                        <td>font-main</td>
                        <td>Sawarabi Mincho</td>
                    </tr>

                    <tr className="font-code">
                        <td>font-dode</td>
                        <td>JetBrains Mono</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <MaiMarkdown>{`
## How to add fonts

To add fonts, edit tailwind.config.js as follows:

\`\`\`tailwind.config.js
'use strict';
const { maiUIConfig } = require('@shiraya-ma/mai-ui/setup');

module.exports = maiUIConfig({
    content: [],
    theme: {
        fontFamily: {
            robot: [ 'Robot Flex', 'sans-serif' ]
        }
    }
});

\`\`\`

Create css to import the specified font.

\`\`\`fonts.css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

\`\`\`

Import the created css

\`\`\`layout.tsx
'use strict';
import React, { PropsWithChildren }  from 'react';
import { useNavigate } from 'react-router';
import { MaiUIProvider } from '@shiraya-ma/mai-ui';
import 'tailwindcss/tailwind.css';

// If you want to use the following default fonts in MaiUI, import this css.
// - Sawarabi Gothic
// - Sawarabi Mincho
// - JetBrains Mono
// If there are some that you do not use, import the ones you use in your fonts.css.
import '@shiraya-ma/mai-ui/fonts.css';

import './fonts.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <MaiUIProvider navigate={ navigate }>
            { children }
        </MaiUIProvider>
    );
};

export default Layout;

\`\`\`
        `}</MaiMarkdown>
    </>)
};

const MaiUIGuideFonts = () => ( <MaiUIGuide { ...props } />);

export {
    MaiUIGuideFonts
};
