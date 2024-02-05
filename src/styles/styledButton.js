import styled from "styled-components";

const StyledButton = styled.button`
  background-color: navy;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: all 150ms ease;
  text-transform: uppercase;
  font-family: Impact, "Arial Narrow Bold", sans-serif;

  &:hover {
    background-color: lightblue;
    color: black;
    cursor: pointer;
    transform: translateY(-10px) scale() (1.1);
  }
`;

export default StyledButton;
