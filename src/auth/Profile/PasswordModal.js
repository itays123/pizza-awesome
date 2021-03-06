import React, { useContext, useState } from 'react';
import '../../layout/Forms.css';
import Modal from '../../layout/Modal/Modal';
import { AuthContext } from '../AuthContext';

const PasswordModal = ({ showModal, setModalShown }) => {
    const { updatePassword } = useContext(AuthContext);
    const [password, setPassword] = useState('');

    const handleDissmiss = confirm => {
        setModalShown(false);
        if(confirm) updatePassword(password);
    }

    return ( 
        <Modal
            confirmable
            confirmText="Change"
            title="Change Password"
            show={showModal}
            onDissmiss={handleDissmiss}>
            <form>
                <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Your New Password" />
            </form>
        </Modal>
    );
}
 
export default PasswordModal;