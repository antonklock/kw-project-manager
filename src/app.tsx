import * as React from "react";
import * as ReactDOM from "react-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Main from "./components/Main";

function render() {
  ReactDOM.render(
    <CssVarsProvider>
      <Main />
    </CssVarsProvider>,
    document.body
  );
}

render();
