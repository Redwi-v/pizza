import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

interface MainLayoutProps {}
const MainLayout: FC<MainLayoutProps> = (props) => {
    const {} = props;
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
