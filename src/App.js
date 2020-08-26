import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Names from './components/Names';
import Email from './components/Email';
import Password from './components/Password';
import Confirmation from './components/Confirmation';

const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:""
  });

  const addNames = (firstName, lastName) => {
    if (!lastName) {
      setUser({ ...user, firstName });
      console.log(user);
    } else if (!firstName) {
      setUser({ ...user, lastName });
      console.log(user);
    }
  };

  const addEmail = (email) => {
    setUser({ ...user, email });
    console.log(user);
  };

  const addPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
      setUser({ ...user, password });
      console.log(user);
    } else if (!password) {
      setUser({ ...user, confirmPassword });
      console.log(user);
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/name-setup">
          <Names addNames={addNames} user={user} />
        </Route>
        <Route path="/email-setup">
          <Email addEmail={addEmail} user={user} />
        </Route>
        <Route path="/security-setup">
          <Password addPassword={addPassword} user={user} />
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
