import React from 'react';
import './ProfilePic.css'
import accountPhoto from '../../assets/account.svg';

const mapDimentions = dimen => (dimen <= 100) ? 'small': 'big';

const ProfilePic = ({ dimen, backgroundColor }) => {
    const dimentions = mapDimentions(dimen);
    return (
        <div style={{ background: ( backgroundColor || '#c73838' ) }} className={`profilePic ${dimentions}`}>
            <img src={accountPhoto} alt="" />
        </div>
    )
}
 
export default ProfilePic;