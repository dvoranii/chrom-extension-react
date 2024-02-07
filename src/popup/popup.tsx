import React from "react";
import { useState, FC } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../styles/globalStyles";
import StyledButton from "../styles/styledButton.js";
import StyledForm from "../styles/styledForm.js";
import StyledInput from "../styles/styledInput.js";
import StyledLabel from "../styles/StyledLabel";

const Popup: FC = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiKeyValidated, setApiKeyValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    chrome.runtime.sendMessage(
      { type: "validateApiKey", apiKey: apiKey },
      (res) => {
        console.log("Response from background", res);

        if (res.status === "API Key saved") {
          setApiKeyValidated(true);
        } else {
          alert("Invalid API Key");
        }
      }
    );
  };

  return (
    <>
      <GlobalStyles />
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          <span className={`apikey-label`}>
            Please enter your OpenAI API key:
          </span>
          <br />
          <StyledInput
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            disabled={apiKeyValidated}
          ></StyledInput>
        </StyledLabel>
        {!apiKeyValidated && <StyledButton type="submit">Submit</StyledButton>}
        {apiKeyValidated && (
          <div>API Key validated! You can now use the extension.</div>
        )}
      </StyledForm>
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Popup />, root);
