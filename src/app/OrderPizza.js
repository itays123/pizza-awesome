import React, { useContext, useState } from 'react';
import { PizzaContext } from './PizzaContext';
import Pizza from './Pizza';
import TopicForm from './TopicForm';
import '../styles/Order.css';
import Card from '../layout/Card';
import { AuthContext } from '../auth/authContext';
import { Redirect } from 'react-router-dom';

const getUnusedTopics = usedTopics => {
    const allTypes = ['olive', 'onion', 'pineapple', 'mushroom', 'corn', 'tomato', 'salami'];
    const unusedTopics = [];
    allTypes.forEach(type => {
        if (usedTopics.every(usedTopic => usedTopic.type !== type)) {
            unusedTopics.push({ type, onSlices: [] });
        }
    });
    return unusedTopics;
}

const OrderPizza = ({ initialPizza, history }) => {
    if (!initialPizza) initialPizza = {};
    const { isAuth } = useContext(AuthContext);
    const { createPizza } = useContext(PizzaContext);
    const [topics, setTopics] = useState(initialPizza.topics || []);
    const [flags, setFlags] = useState(initialPizza.flags || {});
    const [title, setTitle] = useState(initialPizza.title || 'Untitled Pizza');

    const handleOrderRequest = () => {
        createPizza({ title, flags, topics });
    }

    const handleTopicChange = (index, topic) => {
        setTopics(prevTopics => {
            const updatedTopics = [...prevTopics];
            updatedTopics[index] = topic;
            return updatedTopics;
        })
    }

    const pushTopics = () => {
        if (!getUnusedTopics(topics).length > 0) return;
        const newType = getUnusedTopics(topics)[0].type;
        setTopics(prevTopics => [
            ...prevTopics,
            { type: newType, onSlices: [] }
        ])
    }

    const removeTopic = (index) => {
        setTopics(prevTopics => prevTopics.filter((t, i) => i !== index))
    }

    const isTopicTypeUsed = type => {
        const unusedTopics = getUnusedTopics(topics);
        return unusedTopics.some(topic => topic.type === type);
    }

    const handleFlagsChange = e => {
        e.persist();
        const allowFlag = !Boolean(flags[e.target.id]);
        console.log(allowFlag);
        setFlags(prevFlags => ({
            ...prevFlags,
            [e.target.id]: allowFlag
        }))
    }

    if (!isAuth) return <Redirect to="/" />

    return ( 
        <div className="order">
            <div className="display-pizza">
                <Card className="pizza-header">
                    <h1><input type="text" onChange={e => setTitle(e.target.value)} value={title}/></h1>
                    <Pizza displayPizza={{ topics, flags, title }} />
                </Card>
            </div>
            <div className="topics-container scrollable">
                <div className="set-topics">
                    <h2>Topics:</h2>
                    <Card className="add-title">
                        <h4>Topic Type:</h4>
                        <h4>On Slices:</h4>
                    </Card>
                    { topics.map((topic, index) => ( 
                        <TopicForm 
                            initialTopic={topic} 
                            index={index} 
                            key={`${topic.type}${index}`} 
                            handleTopicChange={handleTopicChange}
                            removeTopic={() => removeTopic(index)}
                            validateType={isTopicTypeUsed} />
                    ))}
                    <Card className="add">
                        <button onClick={pushTopics} />
                    </Card>
                </div>
                
                <h2>Options:</h2>
                <Card className="flags">
                    <label htmlFor="glutenFree" className="checkbox-label">
                        <input type="checkbox" id="glutenFree" onChange={handleFlagsChange} />
                        <span className="custom-checkbox"></span>
                        gluten free
                    </label>
                </Card>

                <button className="btn" onClick={handleOrderRequest}>Order</button>
            </div>
        </div>
     );
}
 
export default OrderPizza;