import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import React from "react";

import { ProjectListScreens } from "screens/project-list";
import { UnauthenticatedApp } from "unauthenticated-app";
import "./App.css";

function App() {
  
   const {user} = useAuth()
  return (
    <div className="App">
     {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;
