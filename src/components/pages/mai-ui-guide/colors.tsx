'use strict';
import React from "react";
import { MaiCodeBlock, maiColors, MaiH2, MaiLink, MaiMarkdown } from "@shiraya-ma/mai-ui";

import { MaiUIGuide } from "./mai-ui-guide";

Object.entries(maiColors).map(([color, scales]) => {})

const colors = [
    'mint',
    'chocolate',
    'cider',
    'strawberry',
    'citrus'
];

const scales = [ 50, 100, 200, 300, 400, 500, 600, 800, 900 ];

const props: MaiUIGuide.Props = {
    name: 'Colors',
    href: '/colors',
    children: (<>
        <MaiH2>MaiColors</MaiH2>

        <section
        className="flex flex-col gap-4">
            <p>MaiUI has added the following color sets to Tailwind's color sets.</p>

            <table className="w-full">
                <tbody>
                    { Object.entries(maiColors).map(([color, colors]) => (
                        <tr key={ color }>
                            <td
                            className="w-0 p-2">{ color }</td>

                            { scales.map(scale => {
                                const colorCode = colors['' + scale] as string;

                                return (
                                    <td
                                    className="p-2"
                                    key={ scale }>
                                        <div
                                        className="w-full h-8 rounded-md border border-[hsl(var(--nextui-default-500))]"
                                        style={{ backgroundColor: colorCode }}/>
                                        <div>
                                            <span>{ colorCode }</span>
                                        </div>
                                    </td>
                                    );
                                })
                            }
                        </tr>
                    ))}
                </tbody>
            </table>

            <p>MaiUI colors correspond to NextUI colors as follows:</p>

            <table className="w-full max-w-[50ch] mx-auto">
                <thead className="[&>th]:p-2 [&>th]:text-lg">
                    <th> NextUI </th>

                    <th> Mai UI</th>
                </thead>

                <tbody
                className="[&_td]:p-2 [&_td]:text-center [&_td]:text-lg">
                    <tr className="text-mint-300">
                        <td>primary</td>
                        <td>mint</td>
                    </tr>

                    <tr className="text-chocolate-400">
                        <td>secondary</td>
                        <td>chocolate</td>
                    </tr>

                    <tr className="text-cider-300">
                        <td>success</td>
                        <td>cider</td>
                    </tr>

                    <tr className="text-strawberry-300">
                        <td>danger</td>
                        <td>strawberry</td>
                    </tr>

                    <tr className="text-citrus-400">
                        <td>warning</td>
                        <td>citrus</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <MaiMarkdown>{`
## How to add colors

To add a color set, edit tailwind.config.js as follows:

\`\`\`tailwind.config.js
'use strict';
const { maiUIConfig } = require('@shiraya-ma/mai-ui/setup');

const yourcolor = {
    50: '#fff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
};

module.exports = maiUIConfig({
    content: [],
    theme: {
        colors: {
            yourcolor
        }
    }
});

\`\`\`

[Seemore](https://tailwindcss.com/docs/customizing-colors#color-object-syntax).

## Apply to NextUI\`s semantic colors

To override the NextUI color set, further edit tailwind.config.js as follows:

\`\`\`tailwind.config.js
'use strict';
const { maiUIConfig } = require('@shiraya-ma/mai-ui/setup');

const yourcolor = {
    50: '#fff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
};

const primary = {
    50: yourcolor[50],
    100: yourcolor[100],
    200: yourcolor[200],
    300: yourcolor[300],
    400: yourcolor[400],
    500: yourcolor[500],
    600: yourcolor[600],
    700: yourcolor[700],
    800: yourcolor[800],
    900: yourcolor[900],
    DEFAULT: yourcolor[300],
    foreground: '#fff'
};

module.exports = maiUIConfig({
    content: [],
    theme: {
        colors: {
            yourcolor
        }
    }
}, {
    themes: {
        dark: {
            colors: {
                primary
            }
        },
        light: {
            colors: {
                primary
            }
        }
    }
});

\`\`\`

> [!NOTE]
> Options to be passed to \`nextui\` plugin are passed to the second argument of \`maiConfig\`.<br/>
> [See more](https://nextui.org/docs/customization/colors#semantic-colors).
        `}</MaiMarkdown>
    </>)
};

const MaiUIGuideColors = () => {
    return (
        <MaiUIGuide {...props}/>
    );
};

export {
    MaiUIGuideColors
};
