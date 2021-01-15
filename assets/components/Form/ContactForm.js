import React, { Component } from 'react';
import {Formik, Field, ErrorMessage, FieldArray} from 'formik';
import './ContactForm.module.scss';
import * as Yup from 'yup';


const CustomInput = ({ field, form, ...props}) => {
    return(
        <div className={ "form__" + field.name }>
            <label htmlFor={ field.name }>{ field.name }</label>
            <input { ...field } { ...props } id={field.name} name={field.name} />

        </div>
    )
}

const CustomTextarea = ({ field, form, ...props}) => {
    return (
        <div className="form__body">
            <label htmlFor={ props.label }>Message</label>
            <textarea { ...field } id="body" name="body"  maxLength="500" placeholder="Bonjour...."/>
        </div>
    )
}

const CustomError = (props) => {
    return (
        <div className="form__error">{ props.children }</div>
    )
}

class ContactForm extends Component {

    userSchema = Yup.object().shape({
        firstname: Yup.string().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
        lastname: Yup.string().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
        email: Yup.string().email('mauvais email').required('champ requis'),
        topic: Yup.string().min(2, 'le sujet doit comporter au moins 2 caractères').max(50, 'la saisie est trop longue').required('champ requis'),
        body: Yup.string().min(10, 'le texte doit être intelligible').max(500, 'trop long').required('champ requis')
    });

    submit = (values, actions) => {
        console.log(actions);
        actions.setSubmitting(false);
    }



    render() {
        return (

                <Formik
                    initialValues={ { firstname: '', lastname: '', email: '', topic: '', body: '', items: [] } }
                    onSubmit={ this.submit }
                    validationSchema={ this.userSchema }

                >
                    { ({
                        handleSubmit,
                        isSubmitting,
                       }) => (
                        <form onSubmit={ handleSubmit } className="form">
                            <Field name="firstname"  component={ CustomInput } />
                            <ErrorMessage name="firstname" component={ CustomError } />
                            <Field name="lastname"  component={ CustomInput }  />
                            <ErrorMessage name="lastname" component={ CustomError } />
                            <Field name="email"  component={ CustomInput }  />
                            <ErrorMessage name="email" component={ CustomError } />
                            <Field name="topic"  component={ CustomInput }  />
                            <ErrorMessage name="topic" component={ CustomError } />
                            <Field name="body"  component={ CustomTextarea } />
                            <ErrorMessage name="body" component={ CustomError } />


                            <button className="form__button" type="submit" disabled={ isSubmitting }>Envoyer</button>
                        </form>
                    )}
                </Formik>

        )
    }
}

export default ContactForm;
