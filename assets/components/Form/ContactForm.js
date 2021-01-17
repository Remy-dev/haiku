import React, { Component } from 'react';
import {Formik, Field, ErrorMessage} from 'formik';
import './ContactForm.module.scss';
import * as Yup from 'yup';
import apiPgsql from "../../config/apiPgsql";


const CustomInput = ({ field, form, ...props}) => {
    return(
        <div className={ "form__" + field.name }>
            <label htmlFor={ field.name }>{ field.name }</label>
            <input { ...field } { ...props } id={field.name} name={field.name} />
            <ErrorMessage name={field.name} component={ CustomError } />
        </div>
    )
}

const CustomTextarea = ({ field, form, ...props}) => {
    return (
        <div className={ "form__" + field.name }>
            <label htmlFor={ props.label }>Message <span className={"form__" + field.name + "--labelLength"}>500 caractères maximum...</span></label>
            <textarea { ...field } id={field.name} name={field.name}  maxLength="500" placeholder="Bonjour...."/>
            <ErrorMessage name={field.name} component={ CustomError } />
        </div>
    )
}

const CustomError = (props) => {
    return (
        <div className="form__error">{ props.children }</div>
    )
}

const MessageSubmit = ({ state }) => {

        if (state.message.length > 1) {
            return <div className="message">{ state.message }</div>
        } else if (state.message.length > 1 ){
            return <div className="error">{ state.error }</div>
        }
}

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            code: 0,
        }
    }

    userSchema = Yup.object().shape({
        firstname: Yup.string().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
        lastname: Yup.string().min(2, 'minimun 2 caractères').max(20, 'la saisie est trop longue').required('champ requis'),
        email: Yup.string().email('mauvais email').required('champ requis'),
        topic: Yup.string().min(2, 'le sujet doit comporter au moins 2 caractères').max(50, 'la saisie est trop longue').required('champ requis'),
        body: Yup.string().min(10, 'le texte doit être intelligible').max(500, 'trop long').required('champ requis')
    });

    submit = (values, actions) => {
        console.log('coucou');
        apiPgsql.post('/api/contact/form', values, {
            headers: {
                'Content-Type': 'application/json'
            }
        } )
            .then(res => {
                if ( 201 === res.status) {
                   this.setState({
                       message: 'Le message a bien été enregistré.',
                       error: ''
                   });
                   actions.setSubmitting(false);

                }
            })
            .catch(() => {
                this.setState({
                    error: 'Une erreur est survenue lors de l\'envoie du formulaire, le message n\'a pu être enregistré.',
                    message: ''
                });
                actions.setSubmitting(false);

            })
        console.log(actions);
    }



    render() {
        return (
                <>
                    <div className="contact">
                        <h2>Formulaire de contact</h2>
                        <hr />
                    </div>
                    <Formik
                        initialValues={ { firstname: '', lastname: '', email: '', topic: '', body: '', items: [] } }
                        onSubmit={ this.submit }
                        validationSchema={ this.userSchema }

                    >
                        { ({
                               handleSubmit,
                               isSubmitting,
                           }) => (
                            <>
                                { this.state.message || this.state.error ?
                                    <MessageSubmit state={ this.state } /> :
                                    null
                                }

                                <form onSubmit={ handleSubmit } className="form">
                                    <Field name="firstname"  component={ CustomInput } />
                                    <Field name="lastname"  component={ CustomInput }  />
                                    <Field name="email"  component={ CustomInput }  />
                                    <Field name="topic"  component={ CustomInput }  />
                                    <Field name="body"  component={ CustomTextarea } />


                                    <button className="form__btn--submit" type="submit" disabled={ isSubmitting }>Soumettre</button>
                                </form>
                            </>

                        )}
                    </Formik>
                </>


        )
    }
}

export default ContactForm;
