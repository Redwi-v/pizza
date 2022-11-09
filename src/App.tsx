
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
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
