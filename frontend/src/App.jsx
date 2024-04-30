import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './Components/Pages/MainPage';
import { ErrorBoundary } from './Components/Pages/ErrorBoundary';
import { SignIn } from './Components/Pages/SignIn';
import { Page404 } from './Components/Pages/Page404';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} errorElement={<ErrorBoundary />}>
                    <Route path="/login" element={<SignIn />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
             </Routes>
         </BrowserRouter>
    )
}

export default App;