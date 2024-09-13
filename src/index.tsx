'use strict';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavbarMenuContextProvider } from '@/features/navbar-menu';
import { Home, NotFound } from '@/pages';

import { Layout } from './layout';

createRoot(document.querySelector('div#root')!)
.render(<>
  <BrowserRouter>
    <NavbarMenuContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={ <Home /> } />

          <Route path='*' element={ <NotFound /> } />
        </Routes>  
      </Layout>
    </NavbarMenuContextProvider>
  </BrowserRouter>
</>);
