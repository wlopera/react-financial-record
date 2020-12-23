//import logo from './logo.svg';
import FinancialRecordScreen from "./containers/FinancialRecordScreen";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <FinancialRecordScreen />
    </BrowserRouter>
  );
}

export default App;
