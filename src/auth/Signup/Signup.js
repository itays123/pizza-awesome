import React, { useState, useContext } from 'react';
import AddressForm from '../Address/AddressForm';
import './Signup.css';
import Card from '../../layout/Card/Card';
import { AuthContext } from '../AuthContext';
import Pizza from '../../pizza/PizzaItem/Pizza';
import { Redirect } from 'react-router-dom';

const Signup = ({ history }) => {
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isAuth } = useContext(AuthContext);

    if (isAuth) return <Redirect to="/" />

    const handleSubmit = () => {
        signup(email.toLowerCase(), password, address);
        history.push('/');
    }

    return (
        <div className="signup">
            <div className="page">
                <h1>Sign Up To Pizza Awesome</h1>
                <Card className="label">
                    <p>Your Email And Password</p>
                </Card>
                <Card className="cretentials">
                    <form>
                        <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                    </form>
                </Card>
                <Card className="label">
                    <p>Your Address</p>
                </Card>
                <AddressForm initialState="edit" onChange={address => setAddress(address)} />
                <button className="btn" onClick={handleSubmit}>Sign Up</button>
            </div>
            <div className="decoration">
                <Pizza />
            </div>
        </div>
      );
}
 
export default Signup;