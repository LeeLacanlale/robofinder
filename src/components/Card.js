import React from 'react';

// Display the robot image, robot name, robot email in the Card.
// const Card = (props) => {
// Destructuring props object and obtaining id, name and email
const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-blue dib br4 pa3 ma3 grow bw2 shadow-5'>
      <img alt='robo buddy' src={`https://robohash.org/${id}?size=200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;