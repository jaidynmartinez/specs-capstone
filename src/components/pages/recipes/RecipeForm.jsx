import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik' 

import * as Yup from 'yup'
import axios from 'axios'

import './recipeForm.css'

const ingredientInput = ''

const initialValues = {
    coverImg: null,
    fName: '',
    lName: '',
    title: '',
    petType: '',
    description: '',
    ingredients: [''],
    instructions: [''],
}

const onSubmit = (values) => {
    // values.ingredients = values.ingredients.split(", ");
    // values.instructions.push({step: values.instructions})


    axios.post('http://localhost:5000/create', values)
        .then(res => res.data)
        .catch(console.log('success'))
}



const validationSchema = Yup.object({
    // fName: Yup.string().required('Required Field'),
    // lName: Yup.string().required('Required Field'),
    // petType: Yup.string().required('Required Field'),
    // title: Yup.string().required('Required Field'),
    // ingredients: Yup.string().required('Invalid Format'),
    // step1: Yup.string().required('Required Field'),
    // step2: Yup.string().required('Required Field'),
    // step3: Yup.string().required('Required Field')
})

const RecipeForm = () =>{

    
    return(
        <div className='form-container'>
            <h1>Share your homemade recipe!</h1>
            <h3 className='form-h3'>Fill out all areas marked with <span className='star'>*</span></h3>
            <div className='form-background'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    method='post'
                    action= '/'
                    >
                    {({values, handleChange}) => (
                    <Form>
                        <div className='div'>
                            <label htmlFor='fName'>First Name: <span className='star'>*</span></label>
                            <Field  id='input' name='fName'
                                value={values.fName}
                                onChange={(e) => {
                                    console.log(
                                        "onChange: ", 
                                        e.target.name,
                                        ":",
                                        e.target.value
                                    );
                                    handleChange(e);
                                }}
                                />
                            <ErrorMessage name= 'fName' component='div'/>
                        </div>
                    <hr className='form-hr'></hr>
                        <div className='div'>
                            <label htmlFor='lName'>Last Name: <span className='star'>*</span></label>
                            <Field type='text' id='input' name='lName' 
                                value={values.lName}
                                onChange={(e) => {
                                    console.log(
                                        "onChange: ", 
                                        e.target.name, 
                                        ":",
                                        e.target.value
                                    );
                                    handleChange(e);
                                }}
                            />
                            <ErrorMessage name= 'lName' />
                        </div>
                    <hr className='form-hr'></hr>
                        <div className='div'>
                            <label>Pet Type: <span className='star'>*</span></label>
                            <section className='petType-section'>
                                <Field type='radio' name='petType' value='dog'/>Dog
                                <Field type='radio' name='petType' value='cat'/>Cat
                                <Field type='radio' name='petType' value='small-animal'/>Small Animal
                                <Field type='radio' name='petType' value='reptile'/>Reptile
                                <Field type='radio' name='petType' value='bird'/>Bird
                                <Field type='radio' name='petType' value='aquatic'/>Aquatic
                            </section>
                        </div>
                    <hr className='form-hr'></hr>
                        <div className='div'>
                            <label htmlFor='title'>Title: <span className='star'>*</span></label>
                            <Field type='text' id='input' name='title' 
                                value={values.title}
                                onChange={(e) => {
                                    console.log(
                                        "onChange: ", 
                                        e.target.name, 
                                        ":",
                                        e.target.value
                                    );
                                    handleChange(e);
                                }}
                            />
                            <ErrorMessage name= 'title' />
                        </div>
                    <hr className='form-hr'></hr>
                        <div className='div'>
                            <label htmlFor='description'>Description:</label>
                            <Field as='textarea' id='textarea' name='description' 
                                value={values.description}
                                onChange={(e) => {
                                    console.log(
                                        "onChange: ", 
                                        e.target.name, 
                                        ":",
                                        e.target.value
                                    );
                                    handleChange(e);
                                }}
                            />
                            <ErrorMessage name= 'description' />
                        </div>
                    <hr className='form-hr'></hr>
                        <div className='div'>
                            <label htmlFor='ingredients'>Ingredients: <span className='star'>*</span></label>
                            <Field type='text' id='input' name='ingredients' 
                                value={values.ingredients}
                                onChange={(e) => {
                                    console.log(
                                        "onChange: ", 
                                        e.target.name, 
                                        ":",
                                        e.target.value
                                    );
                                    handleChange(e);
                                }}
                            />
                            <ErrorMessage name= 'ingredients' />
                        </div>
                    <hr className='form-hr'></hr>
                        <section className='instructions-section'>
                            <label>Instructions: <span className='star'>*</span></label>

<div >
    <FieldArray name='instructions' >
        {fieldArrayProps => {
            const {push, remove, form} = fieldArrayProps
            const { values } = form
            const { instructions } = values
            return (
                <div >
                    {instructions.map((step, index) => {
                            
                        return((
                            <div key={index} className='addStep'>
                            <label htmlFor='instructions' >Step. {index + 1}</label>
                                <div className='help'>
                                    <Field name={`instructions[${index}]`} id='input'
                                        value={values.instructions[index]}
                                        onChange={(e) => {
                                            console.log(
                                                "onChange: ", 
                                                e.target.name, 
                                                ":",
                                                 e.target.value
                                                );
                                                handleChange(e);
                                            }}
                                            />
                                    
                                    
                                    <div className='buttons-div'>
                                        {index > 0 && (
                                            <button type='button' id='button' onClick={() => remove(index)}>
                                            {' '}
                                            -
                                            {' '}
                                        </button>
                                        )}
                                        <button type='button' id='button' onClick={() => push('')}>
                                            {' '}
                                            +
                                            {' '}
                                        </button>
                                            
                                        </div>
                                    </div>
                            </div>
                        ))})}
                     </div>
                )
            }}
    </FieldArray>
    </div>
                        </section>

                        <div className='submit-div'>
                            <button type='submit' id='submit'>Submit</button>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    ) 

}

export default RecipeForm


