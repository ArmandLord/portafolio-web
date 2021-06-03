import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0; 
    padding: 0;
    /* font-family: 'Source Sans Pro', sans-serif; */
    /* font-family: 'Concert One', cursive; */
    font-family: 'Noto Sans SC', sans-serif;
    color: #fff;
}
`

export const Container = styled.div`
    z-index: 1; 
    width: 100%;
    max-width: 1300px;
    min-width: 300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px; 
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 20px; 
        padding-left: 20px;
    }
`

export default GlobalStyles