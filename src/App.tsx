import Login from "./components/Login";
import CustomerList from "./components/CustomerList";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/customer-list" element={<CustomerList />} />
    </Routes>
  );
};

export default App;
