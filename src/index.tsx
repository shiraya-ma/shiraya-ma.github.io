'use strict';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './layout';
import { Home, NotFound } from './pages';

createRoot(document.querySelector('div#root')!)
.render(<>
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route path='*' element={ <NotFound /> } />
      </Routes>  
    </Layout>
  </BrowserRouter>
</>);
