import * as yup from 'yup';
import React from 'react';
import { Formik, Field, Form } from 'formik'; 

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required field'),
    email: yup.string().email('Invalid email').required('Required field'),
});



const ValidationForm = () => (
    <>
    <div>
        <h1>Sign Up</h1>
        <Formik 
            initialValues={{
                name: '',
                email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(value) => {
                console.log(value)
            }}
        >   
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id='name' name='name' placeholder='Sergei' />
                    {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                    ) : null}

                    <label htmlFor="email">Email</label>
                    <Field id='email' name='email' placeholder='sergei@yandex.ru' type='email' />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}

                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
    </>
);

export { ValidationForm };

