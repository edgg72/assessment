import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Form from './pages/Form';
import Login from './pages/Login';
import profileData from './pages/profileData';
import Home from './pages/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Router>
        <Navbar toggle={toggle} />
        <profileData toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />

        <Switch>

          <Route path="/" exact component={Home} />
          <Route exact path="/signup" component={Form} />

          <Route path="/data" component={profileData} />

          <Route exact path="/orders" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
