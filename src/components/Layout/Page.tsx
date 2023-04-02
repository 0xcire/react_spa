import Nav from '@/components/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Page = () => {
  return (
    <>
      <Nav />
      <main className='h-[calc(100svh-75px)] grid place-items-center min'>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Page;
