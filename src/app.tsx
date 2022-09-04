import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Main from "./components/Main";
import { createRoot } from "react-dom/client";

function render() {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(
    <CssVarsProvider>
      <Main />
    </CssVarsProvider>
  );
}

render();
