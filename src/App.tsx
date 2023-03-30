import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
