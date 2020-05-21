import React from 'react';

const Card = ({ children, className }) => (
    <div className={`card ${className || ''}`}>
        { children }
    </div>
)
 
export default Card;