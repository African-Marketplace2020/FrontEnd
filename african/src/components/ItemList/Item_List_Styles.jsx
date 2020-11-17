import styled from "styled-components";
import { Input, InputGroup } from "reactstrap";

export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
`
export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  height: 100%;
`;
export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  width: 100%;
`;
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2%;
  background-color: #e33734;
  margin-bottom: 2%;
`;
export const SearchBar = styled(InputGroup)`
  width: 50%;
`;
export const SearchInput = styled(Input)`
  &&&input:focus {
    outline: none !important;
  }
`;

export const AddButton = styled.button`
  margin-top: 1%;
  }
`;
