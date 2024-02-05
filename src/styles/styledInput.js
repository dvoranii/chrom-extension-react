import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  margin: 1.2rem auto;
  color: palevioletred;
  background: papayawhip;
  border: 1px solid palevioletred;
  border-radius: 3px;

  &:focus {
    outline: none;
    border-color: #bc70a4;
  }
`;

export default StyledInput;
