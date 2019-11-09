import React, { useRef } from 'react';

import { useGetPokemonQuery } from '../graphql/hooks';
import { Pokemon } from './Pokemon/Pokemon';

export const Demo = () => {
  const selectRef = useRef<HTMLSelectElement>();
  const { data, loading, refetch } = useGetPokemonQuery({ variables: { pokemon: selectRef.current && selectRef.current.value } });
  return (
    <div>
      <select ref={selectRef} onChange={refetch}>
        <option value="Squirtle">Squirtle</option>
        <option value="Pikachu">Pikachu</option>
        <option value="Jigglypuff">Jigglypuff</option>
      </select>
      {loading && <p>Loading Pokemon data</p> ||
        <Pokemon pokemon={data.pokemon} />
      }
    </div>
  )
}
