import * as yup from 'yup';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess, logout  }  from  '../slices/authSlice.jsx';

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required field'),
    password: yup
        .string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required field'),
});

const ValidationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tok = useSelector((state) => state.auth.token);
    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(logout(tok));
        axios
            .post('/api/v1/login', { username: values.name, password: values.password })
            .then((response) => {                
                const { token } = response.data;
                if (token) {
                    localStorage.setItem('token', token);
                    dispatch(loginSuccess(tok))
                    console.log('Успешный успех')
                    navigate('/');
                    
                    
                } else {
                    
                    dispatch(logout(tok))
                    console.error('Ошибка авторизации');
                }
            })
            .catch((err) => {
                navigate('/404');
                dispatch(logout(tok));
                console.error('Ошибка', err);
            })
            .finally(() => {
                setSubmitting(false);
            });
        }
    return (
                <Formik 
                    initialValues={{
                        name: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >   
                    {({ errors, touched }) => (
                        <Form className='col-12 col-md-6 mt-3 mt-mb-0'>
                            <h1 className='text-center mb-4'>Войти</h1>

                            <div className='form-floating mb-3'>                        
                                <Field className='form-control' id='name' name='name' placeholder='Ваш ник' />
                                <label htmlFor="name">Ваш ник</label>
                                {errors.name && touched.name ? (
                                    <div style={{color: 'red'}}>{errors.name}</div>
                                ) : null}
                            </div>
                            
                            <div className='form-floating mb-4'>                        
                                <Field className='form-control' id='password' name='password' placeholder='Пароль' type='password' />
                                <label htmlFor="password">Пароль</label>
                                {errors.password && touched.password ? <div style={{color: 'red'}}>{errors.password}</div> : null}
                            </div>
                            

                            <button className='w-100 mb-3 btn btn-outline-primary' type='submit'>Войти</button>
                        </Form>
                    )}
                </Formik>
    );
};

export default ValidationForm;

