import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router';

import { HOME } from '@/config/routes';

import { Layout } from './components/layout/Layout';
import { Loading } from '@/components/Loading';

import Home from '@/views/Home';
import NoMatch from '@/views/NoMatch';
import Services from '@/views/Services';
import Contact from '@/views/Contact';
import About from '@/views/About';

const Error = React.lazy(() => import('@/views/Error'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary fallback={<Error />}>
        <Routes>
          <Route path={HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<Contact />} />

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
