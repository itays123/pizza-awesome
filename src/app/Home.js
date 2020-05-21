import React, { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import Card from '../layout/Card';
import '../styles/Home.css';

const Home = ({ history }) => {
    const { isAuth, user, setLoginModalShown } = useContext(AuthContext);

    const signedInPage = (
        <div className="signin home-actions">
            <button className="btn" onClick={() => history.push('/newpizza')}>Order a Pizza</button>
            <button className="btn" onClick={() => history.push('/profile')}>See My Last Orders</button>
        </div>
    );

    const signedOutPage = (
        <div className="signup home-actions">
            <button className="btn" onClick={() => history.push('/signup')}>Sign Up</button>
            <button className="btn" onClick={() => setLoginModalShown(true)}>Log In</button>
        </div>
    )

    const topicHr = (
        <div className="topic-hr">
            <div className="topic-display olive" />
            <div className="topic-display onion" />
            <div className="topic-display pineapple" />
            <div className="topic-display mushroom" />
            <div className="topic-display tomato" />
            <div className="topic-display salami" />
            <div className="topic-display corn" />
        </div>
    )

    return ( 
        <div className="homepage">
            <header>
                <Card>
                    <h1>Welcome to Pizza Awesome!</h1>
                </Card>
            </header>
            { topicHr }
            <main>
                <Card>
                    <h2>Hello, { user?.email || 'Guest' }</h2>
                    <h3>What would you like to do?</h3>
                </Card>
                { isAuth ? signedInPage : signedOutPage }
            </main>
        </div>
     );
}
 
export default Home;