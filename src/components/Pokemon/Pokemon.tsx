import React from 'react';
import { AttackList } from './AttackList';
import { Pokemon as PokemonType } from '../../graphql/hooks';

export interface PokemonProps {
  pokemon: PokemonType
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => (
  <div style={{ width: 750, margin: "0 auto" }}>
    <img style={{ float: "right" }} src={pokemon.image} alt={pokemon.name} />
    <h1>{pokemon.name}</h1>
    <h2>Fast Attacks</h2>
    <AttackList attacks={pokemon.attacks.fast} />
    <h2>Special Attacks</h2>
    <AttackList attacks={pokemon.attacks.special} />
    <h2>Evolutiona</h2>
    <div>
      {pokemon.evolutions.map(evolution => (
        <div key={evolution.name}>
          <h3>{evolution.name}</h3>
          <p>{evolution.weight.minimum} - {evolution.weight.maximum}</p>
          <h3>Fast Attacks</h3>
          <AttackList attacks={evolution.attacks.fast} />
          <h3>Special Attacks</h3>
          <AttackList attacks={evolution.attacks.special} />
        </div>
      ))}
    </div>
  </div>
)
