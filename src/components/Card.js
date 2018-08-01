import React from 'react';

const Card = ({ name, email, id, username }) => {
    return (
        <div className='blue tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' onClick={() => alert(`Hi my name is ${name}!`)}>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <h3>({username})</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;