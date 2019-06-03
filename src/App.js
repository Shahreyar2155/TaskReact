import React from 'react';
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import HomePage from './components/pages/Homepage';
import PropTypes from "prop-types";
import LoggedIn from './components/pages/LoggedIn';


const App = ({location}) => (
    <div>

      <GuestRoute location={location} path="/" exact component={HomePage} />
      <UserRoute location={location} path="/LoggedIn" exact component={LoggedIn} />

    </div>
);




export default App;
