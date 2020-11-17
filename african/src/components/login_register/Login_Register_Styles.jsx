import {FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
    background:#ffffffb5;
    padding: 10%;
`
export const Submit = styled(Button)`
    padding: 5%;
    width:75%;
    font-weight: bold;
    border-radius:0;
    background-color: #e33734;
    border: solid 2px #ffffff47;
    :hover{
        background-color: #000000db;
        border: solid 2px #ffffff47;
    }
`

export const TopBar = styled.div`
    width:100%;
    display:flex;
    justify-content: space-evenly;
    background-color: #e33734;
    // border-top: solid 2px #ffffff47;
    // border-right: solid 2px #ffffff47;
    // border-bottom: solid 2px #ffffff47;
    :hover{
        border-color:#ffffff47;
        .topBar{
            border-color:#ffffff47;
        }

`
export const Links = styled(Link)`
    padding: 5%;
    width:50%;
    border: solid 2px #ffffff47;
    font-weight: bold;
    text-decoration:none !important;
    :hover{
        background-color: #000000db;
        border-color: #ffffff47;
    }
    :nth-child(even){
        border-left:none;
    }
    }
`
export const FormWrapper = styled.div`
    width:30%
    padding: 5% 0;

`
export const InputWrapper = styled(FormGroup)`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const Wrapper = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const Logo = styled.img`
    width:300px;
`
export const Title = styled.h1`
    color:#e33734;
    font-weight:bold;
    font-size: 2rem;
    padding-bottom: 5%;
`
export const PassRecovery = styled.div`
    color: black;
    margin-bottom:15px;
    .passwordLink{
        text-transform: none !important;
        color:#e33734;
    }
`