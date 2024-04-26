import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Current location is ', location);
      }, [location]);

    return (
        <>
        <nav>
            <ul>
                <li>
                    <button className="cmn-btn mt-4" onClick={() => navigate('/404', { replace: false })}>
                        Page 404
                    </button>
                </li>
                <li>
                    <button className="cmn-btn mt-4" onClick={() => navigate('/login', { replace: false })}>
                        Sign Up
                    </button>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
        </>
    )
};

export { MainPage };