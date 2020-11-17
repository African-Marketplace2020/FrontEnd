import { FormGroup, Button } from "reactstrap";
import styled from "styled-components";

export const Form = styled.form`
  background: #ffffffb5;
  padding: 10%;
`;
export const Submit = styled(Button)`
  padding: 1.5%;
  width: 25%;
  font-weight: bold;
  border-radius: 0;
  background-color: #e33734;
  border: solid 2px #ffffff47;
  margin-bottom: 5%;
  :hover {
    background-color: #000000db;
    border: solid 2px #ffffff47;
  }
`;
export const FormWrapper = styled.div`
    width:50%
    padding: 5% 0;

`;
export const InputWrapper = styled(FormGroup)`
  text-align:left;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  width: 100%;
  margin-bottom:0;
  padding:2%;
`;
export const TopBar = styled.div`
    width:100%;
    display:flex;
    justify-content: space-evenly;
    background-color: #e33734;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
        border-color:#ffffff47;
        .topBar{
            border-color:#ffffff47;
        }

`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #e33734;
`;

