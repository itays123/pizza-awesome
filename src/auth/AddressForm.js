import React, { useState, useContext } from 'react';
import { AuthContext } from './authContext';
import Card from '../layout/Card';
import editIcon from '../assets/edit.svg';
import doneIcon from '../assets/done.svg';
import '../styles/Address.css';

const getInitialAddress = user => {
    if (user) {
        const { city, street, number, apartment } = user.address;
        return { city, street, number, apartment };
    } else {
        return { city: '', street: '', number: '' };
    }
}

const formatAddress = ({ city, street, number, apartment }) => {
    let refrenceApartement = '';
    if (apartment) {
        refrenceApartement = `, apartment ${apartment}`;
    }
    return `${number} ${street}, ${city}${refrenceApartement}`;
}

const AddressForm = ({ initialState, onChange, onSave }) => {
    const { user } = useContext(AuthContext);
    const [address, setAddress] = useState(getInitialAddress(user));
    const [isViewing, setViewing] = useState(initialState === 'view');

    const handleFormChange = ({target}) => {
        setAddress(prev => ({ ...prev, [target.id]: target.value }))
        if (onChange) onChange(address);
    }

    const toggleToView = () => {
        setViewing(true);
        if (onSave) onSave(address);
    }

    const form = (
        <div className="edit-mode">
            <form>
                <input type="text" value={address.number} id="number" 
                    onChange={handleFormChange} placeholder="number" />
                <input type="text" value={address.street} id="street" 
                    onChange={handleFormChange} placeholder="street" />
                <input type="text" value={address.city} id="city" 
                    onChange={handleFormChange} placeholder="city" />
                <input type="text" value={address.apartment} id="apartment" 
                    onChange={handleFormChange} placeholder="apartment (optional)" />
            </form>
            <button onClick={toggleToView}><img src={doneIcon} alt="" /></button>
        </div>
    )

    const view = (
        <div className="view-mode">
            <p>{ formatAddress(address) }</p>
            <button onClick={() => setViewing(false)}><img src={editIcon} alt="" /></button>
        </div>
    )

    return (
        <Card className="address">
            { isViewing ? view : form }
        </Card>
    );
}
 
export default AddressForm;