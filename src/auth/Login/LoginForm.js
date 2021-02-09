import React, { useContext, useState } from 'react';
import Modal from '../../layout/Modal/Modal';
import { AuthContext } from '../AuthContext';
import '../../layout/Forms.css';

const LoginForm = ({ show, dismiss }) => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleDismiss = confirm => {
        dismiss();
        if (confirm) login(email.toLowerCase(), password);
    }

    return ( 
        <Modal 
            show={show} 
            confirmable 
            title="login" 
            onDissmiss={handleDismiss}
            confirmText="Login">
                <form style={{ maxWidth: 300 }}>
                    <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </form>
        </Modal>
     );
}
 
export default LoginForm;