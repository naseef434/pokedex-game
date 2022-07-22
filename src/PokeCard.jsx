import React from 'react'
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
export default function PokeCard(props) {
    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)
    let imgsrc = `${POKE_API}${padToThree(props.id)}.png`;
  return (
    <div className='PokeCard'>
        <h3 className='Pokecard-Title'>{props.name}</h3>
        <div className='pokecardImage'>
           <img src={imgsrc} alt={props.name} />
        </div>
        <div className='Pokecard-data'>Type: {props.type}</div>
        <div className='Pokecard-data'>Exp: {props.exp}</div>
    </div>
  )
}
