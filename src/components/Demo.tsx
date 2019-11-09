import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Pokemon } from './Pokemon/Pokemon';

export const Demo = () => {
  const { data, loading } = useQuery(
    gql`
      {
        pokemon(name: "Pikachu") {
          name
          attacks {
            fast { name type damage }
            special { name type damage }
          }
          evolutions {
            name
            weight {
              minimum
              maximum
            }
            attacks {
              fast { name type damage }
              special { name type damage }
            }
          }
        }
      }
    `
  );
  return (
    <div>
      {loading && <p>Loading Pokemon data</p> ||
        <Pokemon pokemon={data.pokemon} />
      }
    </div>
  )
}
