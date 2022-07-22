import React from 'react'
import PokeCard from './PokeCard'
import './pokedex.css'
export default function Pokedex(props) {
    let title;
    if (props.iswinner){
      title = <h1 className='is-winner'>Winning Hand!</h1>
    }else{
      title = <h1 className='is-looser'>Loosing Hand!</h1>
    } 
  return (
    <div className='PokeDex'>     
       <p>Total experience : {props.exp}</p>
       {title}
        <div className='Pokedex-Cards'>
            {props.pokemon.map((item,indx)=>(
                <PokeCard id={item.id} name={item.name} type={item.type} exp={item.base_experience}/>
            ))}
        </div>
            
    </div>
  )
}
