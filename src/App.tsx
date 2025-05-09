import { useState } from "react";
import Login from "./components/Login";
import CustomerList from "./components/CustomerList";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // return <div>{isLoggedIn ? <CustomerList /> : <Login />}</div>;

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/customer-list" element={<CustomerList />} />
    </Routes>
  );
};

export default App;
