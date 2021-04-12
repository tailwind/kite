import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { BottomTabNavigatorProp } from 'src/domains/core/screens/BottomTabNavigator';
import { ResourceReference, useGetPokemonQuery, useListPokemonQuery } from 'src/services/pokemonApi';

export const PokemonListScreen: FC = () => {
  const { data, isFetching, refetch } = useListPokemonQuery();

  return (
    <FlatList
      data={data?.results}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      refreshing={isFetching}
      onRefresh={refetch}
      removeClippedSubviews
    />
  );
};

const keyExtractor = (item: ResourceReference) => item.name;

const renderItem = ({ item }: { item: ResourceReference }) => <FlatListItem item={item} />;

const FlatListItem: FC<{ item: ResourceReference }> = ({ item }) => {
  const { data, isLoading } = useGetPokemonQuery(item.name);
  const navigation = useNavigation<BottomTabNavigatorProp<'PokemonListScreen'>>();

  const onPress = useCallback(() => navigation.push('PokemonDetailScreen', { pokemonId: data!.name }), [
    data,
    navigation,
  ]);

  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  );
};
