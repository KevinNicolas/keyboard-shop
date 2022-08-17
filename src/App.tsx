import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import { Auth, Home } from '@pages';

function App() {
  return (
    <BrowserRouter>
      {/* prettier-ignore */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/*' element={<Navigate to={'/home'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
