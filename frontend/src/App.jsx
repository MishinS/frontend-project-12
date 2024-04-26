import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './Components/Pages/Pages';
import { MainPage } from './Components/Pages/MainPage';
import { ValidationForm } from './Components/Forms/ValidationForm';
import { Page404 } from './Components/Pages/Page404';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} >
                    <Route index element={<div>No page is selected.</div> } />
                    <Route path="/login" element={<ValidationForm />} />
                    <Route path="/404" element={<Page404 />} />                      
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;