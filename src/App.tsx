import React from 'react';
import { useLocation, useRoutes, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home, SignIn } from '@pages';

function App() {
  const element = useRoutes([
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/auth/signin',
      element: <SignIn />,
    },
    {
      path: '/auth/*',
      element: <Navigate to={'/auth/signin'} />,
    },
    {
      path: '/*',
      element: <Navigate to={'/home'} />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return <AnimatePresence exitBeforeEnter={true}>{React.cloneElement(element, { key: location.pathname })}</AnimatePresence>;
}

export default App;
