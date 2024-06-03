import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './Components/Pages/ErrorBoundary';
import { SignIn } from './Components/Pages/SignIn';
import { Page404 } from './Components/Pages/Page404';
import HomePage from './Components/Pages/HomePage';
import { useSelector } from 'react-redux';
import { Navigate } from'react-router-dom';

function App() {
    const token = useSelector(state => state.auth.token);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} errorElement={<ErrorBoundary />} />
                <Route index path="/login" element={<SignIn />} />
                <Route path="/home" element={token ? <HomePage /> : <Navigate to="/404" />} />
                <Route path="*" element={<Page404 />} />
             </Routes>
         </BrowserRouter>
    );
};

export default App;