
import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  return <AppRouter isLoggedIn={isLoggedIn} ></AppRouter>;
}

export default App;
