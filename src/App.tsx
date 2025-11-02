import { Image } from '@heroui/react';
import { MaiH1 } from '@shiraya-ma/mai-ui';

import './App.css'
import { LinkList } from './components/ui';

export default function App () {
  return (
    <main className='w-full max-w-[80ch] px-4 py-12'>
      <article className='flex flex-col gap-4'>
        <MaiH1>Links</MaiH1>

        <LinkList>
          <LinkList.Item
            data-name='homepage'
            href='https://www.shiraya.ma'
            label={(
              <>
                <Image
                  src='/images/homepage/black.svg'
                  classNames={{
                    img: 'dark:hidden h-10',
                  }}
                  alt='homepage'
                  removeWrapper
                />

                <Image
                  src='/images/homepage/white.svg'
                  classNames={{
                    img: 'hidden dark:block h-10',
                  }}
                  alt='homepage'
                  removeWrapper
                  radius='none'
                />
              </>
            )}
          />

          <LinkList.Item
            data-name='mai-ui'
            href='https://docs.shiraya.ma/mai-ui/'
            label={(
             <Image
                src='/images/mai-ui/logotype.svg'
                classNames={{
                  img: 'h-10',
                }}
                alt='mai-ui'
                removeWrapper
                radius='none'
              />
            )}

            details={{
              'Repository': 'https://github.com/shiraya-ma/mai-ui',
              'npm': 'https://www.npmjs.com/package/@shiraya-ma/mai-ui',
            }}
          />
        </LinkList>
      </article>
    </main>
  );
};
App.displayName = "App";