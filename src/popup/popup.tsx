import React from "react";
import { useState, FC } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../styles/globalStyles";
import StyledButton from "../styles/styledButton.js";
import StyledForm from "../styles/styledForm.js";
import StyledInput from "../styles/styledInput.js";

const Popup: FC = () => {
  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitted API Key: ${apiKey}`);
  };
  return (
    <>
      <GlobalStyles />
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <span className={`apikey-label`}>
            Please enter your OpenAI API key:
          </span>
          <br />
          <StyledInput
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          ></StyledInput>
        </label>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Popup />, root);
