import React from 'react';
import './styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthContextProvider from './auth/authContext';
import Navbar from './layout/Navbar';
import Signup from './auth/Signup';
import Profile from './auth/Profile';
import AppContextProvider from './app/AppContext';
import PizzaContextProvider from './app/PizzaContext';
import OrderPizza from './app/OrderPizza';
import Home from './app/Home';

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
