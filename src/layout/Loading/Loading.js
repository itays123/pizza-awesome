import React from 'react';
import './Loading.css'

const Loading = ({ isLoading }) => {
    if (!isLoading) return null;
    return ( 
        <div className="loading-container">
            <div className="lds-roller">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
     );
}
 
export default Loading;