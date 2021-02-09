import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthContextProvider from './auth/AuthContext';
import Navbar from './layout/Navbar/Navbar';
import Signup from './auth/Signup/Signup';
import Profile from './auth/Profile/Profile';
import AppContextProvider from './layout/AppContext';
import PizzaContextProvider from './pizza/Order/PizzaContext';
import OrderPizza from './pizza/Order/Order';
import Home from './layout/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AuthContextProvider>
          <PizzaContextProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/newpizza" component={OrderPizza} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </PizzaContextProvider>
        </AuthContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
