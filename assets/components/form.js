import React, {Component} from 'react';
import {ErrorMessage, Field, FieldArray, withFormik} from "formik";
import * as Yup from "yup";


const CustomInput = ({field, form, ...props}) => {
    return (
        <div className="form-group">
            <label>{props.displayname ? props.displayname : field.name}</label>
            <input { ...field } { ...props } type="text" className="form-control"/>
        </div>
    )
}

const CustomError = (props) => {
    return (
        <div className="text-danger">{ props.children }</div>
    )
}
class Form extends Component {
    render() {
        const { values, isSubmitting, handleSubmit } = { ...this.props }
        return (
            <div className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                <form onSubmit={handleSubmit} className="bg-white p-5 d-flex flex-column">
                    <Field name="name" component={ CustomInput } />
                    <ErrorMessage name="name" component={ CustomError }/>
                    <Field name="email" type="email" component={ CustomInput }/>
                    <ErrorMessage name="email" component={ CustomError }/>
                    <Field name="password" component={ CustomInput }/>
                    <ErrorMessage name="password" component={ CustomError }/>
                    <FieldArray name="items">
                        { arrayHelpers => (
                            <div>
                                { values.items && values.items.length ? (
                                    values.items.map( (item, index) => (
                                        <div key={index}>
                                            <div>Item: {index}</div>
                                            <hr className="w-100"/>
                                            <Field name={`items.${index}.name`} displayname="name" component={ CustomInput } />
                                            <ErrorMessage name={ `items.${index}.name`} component={ CustomError }/>
                                            <Field name={`items.${index}.quantity`} displayname="quantity" component={ CustomInput } />
                                            <ErrorMessage name={ `items.${index}.quantity`} component={ CustomError }/>
                                            <button type="button" className="mt-2 btn btn-small btn-danger" onClick={ () => arrayHelpers.remove(index) }>delete</button>
                                        </div>
                                    ))
                                ) : null }
                                <button type="button" className="mt-2 w-100 btn btn-small btn-success" onClick={ () => arrayHelpers.push({
                                    name: '',
                                    quantity: 0
                                })}>Add item</button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit" className="btn mt-2 btn-small btn-primary" disabled={isSubmitting}>Submit</button>
                </form>
            </div>
        );
    }
}
const MyForm = withFormik({
    mapPropsToValues: () => ({ name: '', email: '', password: '', items: [] }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'trop court').max(7, 'trop long').required('required'),
        email: Yup.string().email('mauvais email').required('required'),
        password: Yup.string().min(5, 'trop court'),
        items: Yup.array().of(Yup.object().shape({
            name: Yup.string().required('required name'),
            quantity: Yup.number().typeError('doit être un nombre').min(5, 'trop faible')
        })),
    }),
    handleSubmit: (values, actions ) => {
        actions.setSubmitting(false);
    }
})(Form);

export default MyForm;
