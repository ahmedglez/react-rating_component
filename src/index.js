import { render } from "react-dom";
import {
  BrowserRouter, 
} from "react-router-dom";
import App from './routes/App'
// import your route components too

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);