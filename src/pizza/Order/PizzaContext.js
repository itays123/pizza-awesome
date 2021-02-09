import React, { createContext, useContext } from 'react';
import { AppContext } from '../../layout/AppContext';
import { AuthContext } from '../../auth/AuthContext';
import { fetchNewPizza } from './fetch';
import { withRouter } from 'react-router-dom';

export const PizzaContext = createContext();

const PizzaContextProvider = ({ children, history }) => {
    const { setLoading, notify } = useContext(AppContext);
    const { token, addPizzaToUser } = useContext(AuthContext);

    const createPizza = pizza => {
        setLoading(true);
        fetchNewPizza(token, pizza)
            .then(res => res.json())
            .then(res => {
                if(res.err) {
                    notify(res.err);
                    return;
                }
                notify('pizza ordered', '#1af07e')
                setLoading(false);
                setTimeout(() => history.push('/'), 1500);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                notify('an error accured, plase try again');
            })
    }

    const addPizza = pizza => addPizzaToUser(pizza);

    return ( 
        <PizzaContext.Provider value={{ createPizza, addPizza }}>
            { children }
        </PizzaContext.Provider>
     );
}
 
export default withRouter(PizzaContextProvider);