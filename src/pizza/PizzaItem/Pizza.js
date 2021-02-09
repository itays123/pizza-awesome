import React from 'react';
import './Pizza.css';
import sortTopics from './topicsAlg';

const examplePizza = {
    topics: [
        { type: 'olive', onSlices: [1, 2, 3] },
        { type: 'onion', onSlices: [3, 4, 5, 6] },
        { type: 'pineapple', onSlices: [2, 3, 4, 5, 6, 7] },
        { type: 'tomato', onSlices: [1, 8, 7] },
        { type: 'salami', onSlices: [6, 7, 8, 1] },
        { type: 'corn', onSlices: [1, 2] },
        { type: 'mushroom', onSlices: [1, 2, 3, 4, 5, 6, 7, 8] },
    ]
}

const Pizza = ({ displayPizza }) => {
    const pizza = displayPizza || examplePizza;
    const slices = sortTopics(pizza.topics);

    const mapTopic = (topic, index) => <div key={index} className={`topic ${topic}`}></div>;
    const sliceList = slices.map((topics, index) => (
        <div key={index} className={`slice-container slice-${index + 1}`}>
            <div className="slice">
                {topics.map(mapTopic)}
            </div>
        </div>
    ));


    return ( 
        <div className="pizza-container">
            <div className="pizza">
                <div className="pizza-background">
                    <div /><div /><div /><div />
                </div>
                { sliceList }
            </div>
        </div>
    );
}
 
export default Pizza;