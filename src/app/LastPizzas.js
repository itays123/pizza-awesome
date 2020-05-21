import React, { useContext } from 'react';
import PizzaList from './PizzaList';
import { AuthContext } from '../auth/authContext';
import Card from '../layout/Card';

const LastPizzas = () => {
    const { user } = useContext(AuthContext);
    const { pizzas } = user;

    return pizzas ? (
        <Card className="last-pizzas">
            <h4>Last Pizzas:</h4>
            <PizzaList pizzas={pizzas} />
        </Card>
    ) : null;
}
 
export default LastPizzas;