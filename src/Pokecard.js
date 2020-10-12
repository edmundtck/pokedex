import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API_V2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';



class Pokecard extends Component {
    render() {
        const {id, name, type, exp} = this.props;
        const paddedId = id.toString().padStart(3, '0');
        // const imgLink = `${POKE_API}${id}.png`;
        const imgLink = `${POKE_API_V2}${paddedId}.png`;

        
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-heading">{name}</h2>
                <figure className="Pokecard-image">
                    <img src={imgLink} alt={name}/>
                </figure>
                <div className="Pokecard-details">
                    <p>Type: {type}</p>
                    <p>EXP: {exp}</p>
                </div>
            </div>
        )
    }
}

export default Pokecard;