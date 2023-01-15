import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import MainContainer from './pages/Main/MainContainer';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainContainer />} />
                        <Route path="/:sort/:categoryId" element={<MainContainer />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
