import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

export default () => {
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  return (
    <Router>
      <Routes>
        {isLoggedIn ?
        <>
          <Route>

          </Route>
        </>
         : <Route>
            <Auth />
          </Route>}      
      </Routes>
    </Router>
  )
}

/**
 * 
 */