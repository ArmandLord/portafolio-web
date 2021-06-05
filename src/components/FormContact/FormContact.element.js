import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const FormContainer = styled.div`
    width: 100%;
    height: 300px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormMin = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
`

export const Input = styled.input`
    background: transparent;
    outline: none;
    color: #fff;
    border: 0;
    border-bottom: 2px solid #fff;
    padding: 10px;
    margin: 10px 20px;
    width: 100%; 
    
    ${ props => props.id } 
    ${ props => props.type } 
    ${ props => props.email }     
`

export const Textarea = styled.textarea`
    resize: none;
    outline: none;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #fff;
    padding: 10px;
    margin: 10px 20px;
    width: 100%;
    height: 100px;
`

export const Button = styled.button`
    width: 100%;
    height: 3em;
    color: #fff;
    background: transparent;
    margin-top: 10px;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: all .2s linear;
    padding: 3px;
    text-transform: uppercase;
    &:hover{
        box-shadow: 0 0 20px #fff, 0 0 30px #fff inset;
        background: #fff;
        color: #000000;
        font-weight: bold; 
    }
    &:focus{
        background: #000000;
        color: #fff;
        box-shadow: 0 0 5px #fff, 0 0 10px #fff inset;
    }
`