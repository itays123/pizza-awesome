import React from 'react';
import Pizza from './Pizza';
import '../styles/PizzaList.css';

const PizzaList = ({pizzas}) => (
    <div className="pizza-list">{pizzas.map((pizza, index) => (
        <div className="pizza-details" key={index}>
            <Pizza displayPizza={pizza} />
            <h4>{ pizza.title }</h4>
            <h5>{ new Date(pizza.createdAt).toLocaleDateString() }</h5>
        </div>
    ))}</div>
)
 
export default PizzaList;