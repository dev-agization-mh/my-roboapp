import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
    if (false) {
        throw new Error('Noooo');
    }
    return (
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
    );
}

export default CardList;