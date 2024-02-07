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
  transition: all 150ms ease;

  &:hover {
    background-color: lightblue;
    color: black;
    cursor: pointer;
    transform: translateY(-4px) scale(1.02);
  }
`;

export default StyledButton;
