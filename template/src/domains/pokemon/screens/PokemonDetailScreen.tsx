import { useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AppNavigatorRouteProp } from 'src/domains/core/screens/AppNavigator';
import { useGetPokemonQuery } from 'src/services/pokemonApi';

export const PokemonDetailScreen: FC = () => {
  const route = useRoute<AppNavigatorRouteProp<'PokemonDetailScreen'>>();
  const { data, isFetching } = useGetPokemonQuery(route.params.pokemonId);

  return (
    <View style={{ padding: 20, alignItems: 'center', flexDirection: 'row' }}>
      {isFetching && <ActivityIndicator />}
      <Text>{data?.id}</Text>
      <Text>{data?.name}</Text>
      <View style={{ flex: 1 }} />
      <FastImage style={{ height: 50, width: 50 }} source={{ uri: data?.sprites.front_default }} />
    </View>
  );
};
