import { useRoute } from '@react-navigation/native';
import { Box, HStack, Spacer } from 'native-base';
import React, { FC } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AppNavigatorRouteProp } from 'src/domains/core/screens/AppNavigator';
import { useGetPokemonQuery } from 'src/services/pokemonApi';

export const PokemonDetailScreen: FC = () => {
  const route = useRoute<AppNavigatorRouteProp<'PokemonDetailScreen'>>();
  const { data, isLoading } = useGetPokemonQuery(route.params.pokemonId);

  return (
    <Box padding={5} flexDirection="row">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <HStack space={4} alignItems="center">
            <Text>{data?.id}</Text>
            <Text>{data?.name}</Text>
          </HStack>
          <Spacer />
          <FastImage style={{ height: 50, width: 50 }} source={{ uri: data?.sprites.front_default }} />
        </>
      )}
    </Box>
  );
};
