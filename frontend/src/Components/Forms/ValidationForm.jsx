import * as yup from 'yup';
import React from 'react';
import { Formik, Field, Form } from 'formik'; 

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required field'),
    password: yup
        .string()
        .min(8, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required field'),
});



const ValidationForm = () => (
    <>
        <Formik 
            initialValues={{
                name: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(value) => {
                console.log(value)
            }}
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
    </>
);

export { ValidationForm };

