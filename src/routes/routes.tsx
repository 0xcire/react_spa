import { lazy, ReactNode } from 'react';

import Home from '@/routes/home';
const About = lazy(() => import('@/routes/about'));

export interface TRoute {
  path: string;
  component: ReactNode;
}

export const routes: Array<TRoute> = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/page',
    component: <About />,
  },
];
