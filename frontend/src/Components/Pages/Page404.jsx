import React from "react";
import errorImage from '../../Fixtures/Pages/error-404.png';
import '../../Styles/stylePage404.css';

const Page404 = () => (
        <>
            <html lang="ru">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Cosmotema 404 - 404 | page not found</title>
                    <link rel="shortcut icon" type="image/png" href="#" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                    
                </head>  
                <body>  
                    <div className="error">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                <img src={errorImage} alt="404" />
                                <h2><b>404</b> Страница не найдена</h2>
                                <p>посетите главную страницу <br /> возможно вы найдёте её</p>
                                <a href="/" className="cmn-btn mt-4">На главную</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        </>
);

export { Page404 };
