import React, { createContext, useState, useContext } from 'react';
import LoginForm from './Login/LoginForm';
import { fetchLogin, fetchSignup, fetchUpdate } from './fetch';
import { AppContext } from '../layout/AppContext';

export const AuthContext = createContext();

const saveToLocalStroage = (authState, userState, tokenState) => {
    localStorage.setItem('token', JSON.stringify(tokenState));
    localStorage.setItem('user', JSON.stringify(userState));
    localStorage.setItem('isAuth', JSON.stringify(authState));
}

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
    const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem('isAuth')));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [showLoginModal, setLoginModalShown] = useState(false);
    const { setLoading, notify } = useContext(AppContext);

    const loginModal = (
        <LoginForm show={showLoginModal} dismiss={() => setLoginModalShown(false)} />
    )

    const login = (email, password) => {
        setLoading(true);
        fetchLogin(email, password)
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                const { user, token, err } = result;
                if (err) {
                    notify(err);
                    return;
                }
                setAuth(true);
                setUser(user);
                setToken(token);
                saveToLocalStroage(true, user, token);
                notify('logged in as ' + user.email, '#1af07e')
            })
            .catch(err => {
                //handle errors
                console.log(err);
                setLoading(false);
                notify('an error accured, plase try again');
            })
    }

    const signup = (email, password, address) => {
        setLoading(true);
        fetchSignup(email, password, address)
            .then(res => res.json())
            .then(result => {
                const { err } = result;
                if (err) {
                    notify(err);
                    return;
                }
                else notify('user created', '#1af07e');
                setLoading(false);
            })
            .catch(err => {
                //handle errors
                console.log(err);
                setLoading(false);
                notify('an error accured, plase try again');
            })
    }

    const signout = () => {
        setAuth(false);
        setToken(null);
        setUser(null);
        saveToLocalStroage(false, null, null);
    }

    const updatePassword = password => {
        setLoading(true);
        fetchUpdate(token, 'password', password)
            .then(res => res.json())
            .then(result => {
                const { user, err } = result;
                if (err) {
                    notify(err);
                    return;
                }
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setLoading(false);
                notify('password updated', '#1af07e')
            })
            .catch(err => {
                //handle errors
                console.log(err);
                setLoading(false);
                notify('an error accured, plase try again');
            });
    }

    const updateAddress = address => {
        setLoading(true);
        fetchUpdate(token, 'address', address)
            .then(res => res.json())
            .then(result => {
                const { user, err } = result;
                if (err) {
                    notify(err);
                    return;
                }
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setLoading(false);
                notify('address updated', '#1af07e')
            })
            .catch(err => {
                //handle errors
                console.log(err);
                setLoading(false);
                notify('an error accured, plase try again');
            });
    }

    const addPizzaToUser = pizza => {
        setUser(user => {
            const updatedUser = {
                ...user,
                pizzas: [...user.pizzas, pizza]
            }
            localStorage.setItem('user', updatedUser);
            return user;
        });
    }

    return ( 
        <AuthContext.Provider value={{ 
                user, 
                isAuth, 
                token,
                setLoginModalShown, 
                login, 
                signup,
                signout, 
                updatePassword, 
                updateAddress,
                addPizzaToUser }}>
            { loginModal }
            { children }
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;