
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <HeaderContainer />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
