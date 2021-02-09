import React from 'react';
import './Notification.css'

const Notification = ({ show, message, color }) => {
    if (!show) return null;
    return ( 
        <div className="notificaiton">
            <div className="status" style={{ backgroundColor: color }} />
            <p>{message}</p>
        </div>
     );
}
 
export default Notification;