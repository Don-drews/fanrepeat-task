import { useState } from "react";
import Login from "./components/Login";
import CustomerList from "./components/CustomerList";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div>{isLoggedIn ? <CustomerList /> : <Login />}</div>;
};

export default App;
