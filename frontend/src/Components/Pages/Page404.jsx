import React from "react";
import errorImage from '../../Fixtures/Pages/error-404.png';
// import '../../Styles/stylePage404.css';

const Page404 = () => (
        <>
            <div className="error">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                        <img src={errorImage} alt="404" />
                        <h2><b>404</b> Страница не найдена</h2>
                        <p>посетите главную страницу <br /> возможно вы найдёте её</p>
                        <a href="/login" className="cmn-btn mt-4">На главную</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
);

export { Page404 };
