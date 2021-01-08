import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Registration from "./components/Registration.js";
import UserHome from "./components/UserHome.js";
import IssuesListPage from "./components/IssuesListPage.js";
import NavBar from "./components/Navheader.js";
import './App.scss';
import PrivateRoute from './components/PrivateRoute.js';
import IssuePage from "./components/IssuePage.js";
import IssueForm from "./components/IssueForm.js";

function App() {

  const id = localStorage.getItem('userId');


  const [newIssue, setNewIssue] = useState({});



  const onSubmitIssue = formValues => {
    setNewIssue(formValues);
  };

  return (
    <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute path="/userHome" component={NavBar}/>
        <PrivateRoute path="/issuesListPage" component={NavBar}/>
        <PrivateRoute path="/issues/:id" component={NavBar}/>
        <PrivateRoute path="/issues/:id" component={IssuePage}/>
        <PrivateRoute path="/userHome/" component={UserHome} />
        <PrivateRoute path="/issuesListPage" component={IssuesListPage} />
        <PrivateRoute
          path="/submitIssue"
          render={props => {
            return <IssueForm onSubmit={onSubmitIssue} />;
          }}
        />
    </div>
  );
}

export default App;
