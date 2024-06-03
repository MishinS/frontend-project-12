/* import React, { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { SignIn } from './SignIn';


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
                    <li>
                        <button className="cmn-btn mt-4" onClick={() => navigate('', { replace: false })}>
                            Error
                        </button>
                    </li>
                </ul>
            </nav> 
            <SignIn />
            <Outlet />
        </>
    )
};

export { MainPage }; */