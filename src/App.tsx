
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import { Category } from './components/Categories/Category';



function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(0)
  const [sortProperty, setSortProperty] = React.useState('')

  const setCategoryId = (categoryId: number) => {
    setSelectedCategory(categoryId)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Main selectedCategory={selectedCategory} setCategory={setCategoryId} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
