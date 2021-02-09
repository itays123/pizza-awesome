import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import Card from '../../layout/Card/Card';
import AddressForm from '../Address/AddressForm';
import './Profile.css';
import ProfilePic from '../../layout/ProfilePic/ProfilePic';
import PasswordModal from './PasswordModal';
import { Redirect } from 'react-router-dom';
import LastPizzas from './LastPizzas';

const Profile = () => {
    const { user, updateAddress, signout } = useContext(AuthContext);
    const [showPasswordModal, setPasswordModalShown] = useState(false);
    if (!user) return <Redirect to="/" />

    const handleAddressChange = address => updateAddress(address);

    return [<PasswordModal key="modal" showModal={showPasswordModal} setModalShown={setPasswordModalShown} />, ( 
        <div className="profile" key="page">
            <Card className="main">
                <div className="title">
                    <h1>Your Profile</h1>
                    <h4>{ user.email }</h4>
                </div>
                <ProfilePic dimen={200} />
            </Card>
            <div className="details">
                <Card className="order-count">
                    <h1><strong>{ user.pizzas.length }</strong></h1>
                    <h1> Pizzas Ordered</h1>
                </Card>
                <LastPizzas />
                <AddressForm initialState="view" onSave={handleAddressChange} />
                <div className="actions">
                    <button className="btn" onClick={() => setPasswordModalShown(true)}>Change Password</button>
                    <button className="btn" onClick={() => signout()}>Sign Out</button>
                </div>
            </div>
        </div>
    )];
}
 
export default Profile;