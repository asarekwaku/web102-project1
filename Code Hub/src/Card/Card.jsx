import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.image} alt={props.alt} />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
      <a className="card-link" href={props.link}>
        Visit Page</a>
      </div>
  );
};

export default Card
