import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cart from './pages/Cart/Cart';
import MainContainer from './pages/Main/MainContainer';
import MainLayout from './layouts/MainLayout';
import Pizza from './pages/Pizza/Pizza';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<MainContainer />} />
                <Route path=":sort/:categoryId" element={<MainContainer />} />
                <Route path="cart" element={<Cart />} />
                <Route path="pizza/:id" element={<Pizza />} />
            </Route>
        </Routes>
    );
}

export default App;
