import React from 'react';

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