import ReactDOM from "react-dom/client";
import { Providers } from "./components/providers";
import { Router } from "./components/router";

const rootElement = document.getElementById("app") as Element;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Providers>
      <Router />
    </Providers>,
  );
}
