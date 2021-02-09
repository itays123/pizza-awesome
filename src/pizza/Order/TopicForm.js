import React, { useState } from 'react';
import Card from '../../layout/Card/Card';
import './TopicForm.css';
import '../../layout/Forms.css';

const areSlicesValid = slices => slices.every(slice => ( slice <= 8 && slice >= 1 && slice !== '' ))
const getSlices = input => input.replace(' ', '').split(',');

const topics = ['olive', 'onion', 'pineapple', 'mushroom', 'corn', 'tomato', 'salami'];

const TopicForm = ({ initialTopic, index, handleTopicChange, removeTopic, validateType }) => {
    if (!initialTopic) initialTopic = { type: 'olive', onSlices: [] };
    const [type, setType] = useState(initialTopic.type);
    const [onSlices, setSlices] = useState(initialTopic.onSlices.toString());
    const [slicesAreValid, setSlicesValid] = useState((initialTopic.onSlices.length > 0));
    const [typeIsValid, setTypeValid] = useState(true);

    const handleSlicesChange = e => {
        setSlices(e.target.value)
        const slices = getSlices(e.target.value);
        if (!areSlicesValid(slices)) setSlicesValid(false);
        else setSlicesValid(true);
    }

    const handleSlicesConfirm = () => {
        const slices = getSlices(onSlices);
        if (slicesAreValid) handleTopicChange(index, { type, onSlices: slices });
    }

    const handleTypeChange = e => {
        const newType = e.target.value;
        const slices = getSlices(onSlices)
        setType(newType);
        if (validateType(newType)) {
            setTypeValid(true);
            handleTopicChange(index, { type: newType, onSlices: slices });
        } else setTypeValid(false);
        
    }

    const typeOptions = topics.map((topic, index) => (
        <option value={topic} key={index}>
            { topic }
        </option>
    ));

    const errors = [
        (!typeIsValid && <div key="err1" className="err">You Already have a { type } topic</div>),
        (!slicesAreValid && <div key="err2" className="err">You need to provide a valid slices list</div>)
    ];

    return [( 
        <Card className="topic-form" key="main">
            <div>
                <div className={`topic-display ${type}`}></div>
                <select value={type} onChange={handleTypeChange}>{ typeOptions }</select>
            </div>
            <div>
                <input type="text" onChange={handleSlicesChange} value={onSlices} />
                <button className="btn" onClick={handleSlicesConfirm} disabled={!slicesAreValid} />
                <button className="btn" onClick={removeTopic} />
            </div>
        </Card>
     ), ...errors];
}
 
export default TopicForm;