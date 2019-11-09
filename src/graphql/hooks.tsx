import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

/** Represents a Pokémon's attack types */
export type Attack = {
   __typename?: 'Attack',
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars['String']>,
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars['String']>,
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars['Int']>,
};

/** Represents a Pokémon */
export type Pokemon = {
   __typename?: 'Pokemon',
  /** The ID of an object */
  id: Scalars['ID'],
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars['String']>,
  /** The name of this Pokémon */
  name?: Maybe<Scalars['String']>,
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>,
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>,
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars['String']>,
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>,
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars['String']>>>,
  fleeRate?: Maybe<Scalars['Float']>,
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars['Int']>,
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>,
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>,
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars['Int']>,
  image?: Maybe<Scalars['String']>,
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
   __typename?: 'PokemonAttack',
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>,
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>,
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
   __typename?: 'PokemonDimension',
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars['String']>,
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars['String']>,
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
   __typename?: 'PokemonEvolutionRequirement',
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars['Int']>,
  /** The name of the candy to evolve */
  name?: Maybe<Scalars['String']>,
};

/** Query any Pokémon by number or name */
export type Query = {
   __typename?: 'Query',
  query?: Maybe<Query>,
  pokemons?: Maybe<Array<Maybe<Pokemon>>>,
  pokemon?: Maybe<Pokemon>,
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int']
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};


export const GetPokemonDocument = gql`
    query getPokemon($pokemon: String!) {
  pokemon(name: $pokemon) {
    name
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
}
    `;
export type GetPokemonComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPokemonQuery, GetPokemonQueryVariables>, 'query'> & ({ variables: GetPokemonQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPokemonComponent = (props: GetPokemonComponentProps) => (
      <ApolloReactComponents.Query<GetPokemonQuery, GetPokemonQueryVariables> query={GetPokemonDocument} {...props} />
    );
    

/**
 * __useGetPokemonQuery__
 *
 * To run a query within a React component, call `useGetPokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonQuery({
 *   variables: {
 *      pokemon: // value for 'pokemon'
 *   },
 * });
 */
export function useGetPokemonQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, baseOptions);
      }
export function useGetPokemonLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPokemonQuery, GetPokemonQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPokemonQuery, GetPokemonQueryVariables>(GetPokemonDocument, baseOptions);
        }
export type GetPokemonQueryHookResult = ReturnType<typeof useGetPokemonQuery>;
export type GetPokemonLazyQueryHookResult = ReturnType<typeof useGetPokemonLazyQuery>;
export type GetPokemonQueryResult = ApolloReactCommon.QueryResult<GetPokemonQuery, GetPokemonQueryVariables>;