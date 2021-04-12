import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AppNavigatorRouteProp } from 'src/domains/core/screens/AppNavigator';
import { useGetPokemonQuery } from 'src/services/pokemonApi';

export const PokemonDetailScreen: FC = () => {
  const route = useRoute<AppNavigatorRouteProp<'PokemonDetailScreen'>>();
  const { data, isLoading } = useGetPokemonQuery(route.params.pokemonId);

  return (
    <Box padding={5} direction="row">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Stack horizontal space={4} align="center">
            <Text>{data?.id}</Text>
            <Text>{data?.name}</Text>
          </Stack>
          <Box flex="fluid" />
          <FastImage style={{ height: 50, width: 50 }} source={{ uri: data?.sprites.front_default }} />
        </>
      )}
    </Box>
  );
};
