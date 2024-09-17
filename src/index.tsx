'use strict';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { navs } from '@/configs';
import { NavbarMenuContextProvider } from '@/features/navbar-menu';
import { NotFound } from '@/pages';

import { Layout } from './layout';

createRoot(document.querySelector('div#root')!)
.render(<>
  <BrowserRouter>
    <NavbarMenuContextProvider>
      <Layout>
        <Routes>
          {navs.map((nav) => (
            <Route path={ nav.path ?? nav.href } element={ nav.component } key={`router-${ nav.label }`} />
          ))}

          <Route path='*' element={ <NotFound /> } />
        </Routes>  
      </Layout>
    </NavbarMenuContextProvider>
  </BrowserRouter>
</>);
