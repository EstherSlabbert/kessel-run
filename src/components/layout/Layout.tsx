import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Loading } from '@/components/Loading';
import { AppHeader } from '@/components/layout/AppHeader';
import { NavMenu } from '@/components/layout/NavigationMenu';
import { Link } from '@/components/links/Link';
import { AppFooter } from '@/components/layout/AppFooter';

export const Layout = () => {
  return (
    <>
      <AppHeader>
        <Link to="/" className="no-underline!">
          <img
            src="/krlogo-removebg-preview.png"
            alt="Company Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="font-company-logo text-xl font-bold">Kessel Run</span>
        </Link>
        <NavMenu />
      </AppHeader>

      <div data-testid="page-container" className="px-4 py-10 xl:px-10">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>

      <AppFooter />
    </>
  );
};
