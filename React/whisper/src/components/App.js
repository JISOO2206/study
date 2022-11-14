
import React, { useState } from "react";
import AppRouter from "components/Router";
import { auth } from "fbInstance";

function App() {
  // const auth = authService.auth();
  console.log(auth)
  const [ isLoggedIn, setLoggedIn ] = useState(auth.currentUser);
  return <AppRouter isLoggedIn={isLoggedIn} ></AppRouter>;
}

export default App;
