import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    
    render() {
        const { pokemon, exp, isWinner } = this.props;
        const cardList = pokemon.map(card => <Pokecard key={card.id} id={card.id} name={card.name} type={card.type} exp={card.base_experience} /> )
        const winColor = isWinner ? 'Pokedex-winlose--win' : 'Pokedex-winlose--lose';
        return (

            <div className="Pokedex">
                <div className="Pokedex-details">
                    <h2 className={`Pokedex-winlose ${winColor}`}>{isWinner ? 'Winner!' : 'Loser!'}</h2>
                    <h4>Total Experience: {exp}</h4>
                </div>
                <div className="Pokedex-cards">
                    {cardList}
                </div>
            </div>
        )
    }
}

export default Pokedex;