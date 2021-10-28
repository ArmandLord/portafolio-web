import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { 
    FormContainer, 
    FormMin, 
    Form, 
    Input, 
    Textarea, 
    Button, 
    Message 
} from './FormContact.element'


const FormContact = () => {
    const [state, handleSubmit] = useForm("mknkreqj");
    if (state.succeeded) {
        return <FormContainer>
                    <FormMin>
                        <Message><p>!Gracias por tu mensaje!</p></Message>
                    </FormMin>
               </FormContainer>;
    }
    return (
            // <FormContainer>
            //     <FormMin>
            //         <Message><p>Thanks for joining!</p></Message>
            //     </FormMin>
            // </FormContainer>

        <FormContainer>
            <FormMin>
                <Form onSubmit={handleSubmit}>
                    <h2>Contáctame</h2>
                    <label htmlFor="email"></label>
                    <Input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Escribe tu email:"
                    />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />
                    <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje:"
                    />
                    <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    />
                    <Button type="submit" disabled={state.submitting}>
                        Enviar
                    </Button>
                </Form>
            </FormMin>
        </FormContainer>
    );
}

export default FormContact
