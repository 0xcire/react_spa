import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { routes, TRoute } from '@/routes/routes';
import Page from '@/components/Layout/Page';
import NotFound from '@/routes/NotFound';

function App() {
  return (
    <AnimatePresence>
      <Routes key={'routes'}>
        <Route element={<Page />}>
          {routes.map((page: TRoute, index: number) => (
            <Route
              key={`${index}-${page}`}
              path={page.path}
              element={page.component}
            />
          ))}
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
