import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navigation from './components/navigation/Navigation';

function RootLayout() {
  return (
    <div className='root-layout'>
        {/* <header>
            <Navigation />
        </header> */}

        <main>
            <Outlet />
        </main>
    </div>
  );
}

export default RootLayout;