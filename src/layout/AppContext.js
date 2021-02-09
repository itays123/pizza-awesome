import React, { createContext, useState } from 'react';
import Loading from './Loading/Loading';
import Notification from './Notification/Notification';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [notification, setNotification] = useState({ show: false, color: '#c73838', message: 'notification' })

    const notify = (message, color = '#c73838') => {
        setNotification({ show: true, message, color });
        setTimeout(() => setNotification({ show: false, message: '', color: '' }), 3000);
    }

    return ( 
        <AppContext.Provider value={{ isLoading, setLoading, notify }}>
            <Notification {...notification} />
            <Loading isLoading={isLoading} />
            { children }
        </AppContext.Provider>
    );
}
 
export default AppContextProvider;