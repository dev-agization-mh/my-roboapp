import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots, requestRobots }) => {
    if (false) {
        throw new Error('Noooo');
    }
    return (
        <div className='ScrollBoxContent'>
            <button className='RefreshButton' onClick={requestRobots}>Refresh</button>
            <div className='ScrollBoxContent'>
                {
                    robots.map((user, i) => {
                        return (
                                <Card 
                                    key={`card${i}`} 
                                    id={`card${user.id}`} 
                                    username={user.username} 
                                    name={user.name} 
                                    email={user.email}
                                />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CardList;