import React, { Component } from 'react';
import { Formik } from 'formik';
import './ContactForm.module.scss';

class ContactForm extends Component {

    submit = (values, actions) => {

    }

    render() {
        return (
            <>
                <Formik
                    initialValues={ { firstname: '', lastname: '', email: '', topic: '', body: '' } }
                    onSubmit={ this.submit }
                >
                    { ({
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        values,
                        isSubmitting
                       }) => (
                        <form onSubmit={ handleSubmit } className="form">
                            <div className="form__firstname">
                                <label htmlFor="firstname">Nom</label>
                                <input value={ values.firstname } onChange={ handleChange } onBlur={ handleBlur } type="text" id="firstname" name="firstname" />
                            </div>
                            <div className="form__lastname">
                                <label htmlFor="lastname">Prénom</label>
                                <input value={ values.lastname } onChange={ handleChange } onBlur={ handleBlur } type="text" id="lastname" name="lastname" />
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input value={ values.email } onChange={ handleChange } onBlur={ handleBlur } type="email" id="email" name="email" />
                            </div>
                            <div className="topic">
                                <label htmlFor="topic">Sujet</label>
                                <input value={ values.topic } onChange={ handleChange } onBlur={ handleBlur } type="text" id="topic" name="topic" />
                            </div>
                            <div className="body">
                                <label htmlFor="body">Votre Message</label>
                                <textarea value={ values.body } onChange={ handleChange } onBlur={ handleBlur } id="body" name="body" rows="10" cols="30" placeholder="Bonjour...."/>
                            </div>
                            <button className="form__button" type="submit" disabled={ isSubmitting }>Envoyer</button>
                        </form>
                    )}
                </Formik>
            </>
        )
    }
}

export default ContactForm;
