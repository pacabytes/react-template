import React from 'react';
import { AttackProps } from './Attack';
import { AttackList } from './AttackList';

export interface PokemonProps {
  pokemon: {
    name: string;
    attacks: {
      fast: AttackProps[];
      special: AttackProps[];
    };
    evolutions: {
      name: string;
      weight: {
        minimum: string;
        maximum: string;
      };
      attacks: {
        fast: AttackProps[];
        special: AttackProps[];
      };
    }[]
  }
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => (
  <div>
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
