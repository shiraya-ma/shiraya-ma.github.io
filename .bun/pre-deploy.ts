'use strict';
import { $ } from 'bun';
import { resolve } from 'path';
import { existsSync, renameSync } from 'fs';

const rootdir = resolve(__dirname, '..');

$.cwd(rootdir);

const publicdir = resolve(rootdir, 'public');

if (existsSync(publicdir)) {
    const docsdir = resolve(rootdir, 'docs');
    
    await $`echo rename directory name [public] to [docs]`;
    
    renameSync(publicdir, docsdir);

    await $`touch ./docs/.nojekyll`;
}
