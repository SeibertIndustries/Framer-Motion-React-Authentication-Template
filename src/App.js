import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Org from "./components/Org";
import Names from './components/Names';
import Contact from './components/Contact';
import Password from './components/Password';
import Confirmation from './components/Confirmation';

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    orgName: "",
    orgType: "",
  });

  const addNames = (firstName, lastName) => {
    setUser({ ...user, firstName, lastName });
    console.log(user);
  };

  const addEmail = (email) => {
    setUser({ ...user, email });
    console.log(user);
  };

  const addPassword = (password) => {
      setUser({ ...user, password });
      console.log(user);
  };

  const addOrg = (orgType, orgName) => {
    setUser({ ...user, orgType, orgName });
    console.log(user);
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/name-setup">
          <Names addNames={addNames} user={user} />
        </Route>
        <Route path="/email-setup">
          <Contact addEmail={addEmail} user={user} />
        </Route>
        <Route path="/security-setup">
          <Password addPassword={addPassword} user={user} />
        </Route>
        <Route path="/organization-setup">
          <Org addOrg={addOrg} user={user} />
        </Route>
        <Route path="/account-confirmation">
          <Confirmation user={user} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
