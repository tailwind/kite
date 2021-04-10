import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';
import { Pokemon, ResourceReferenceList } from 'src/services/pokemonApi/types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    listPokemon: builder.query<ResourceReferenceList, void>({
      query: () => 'pokemon?limit=1118&offset=0',
    }),
    getPokemon: builder.query<Pokemon, string>({
      query: pokemonId => `pokemon/${pokemonId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonQuery, useListPokemonQuery } = pokemonApi;
export * from './types';
