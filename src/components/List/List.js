import React, {useContext} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import Listitem from '../ListItem/ListItem';
import {GlobalContext} from '../../globalContext/GlobalContext';

const styles = StyleSheet.create({
  lists: {
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    marginLeft: 23,
    marginRight: 23,
    height: 384,
  },
  title: {
    fontSize: 18,
    marginLeft: 23,
    lineHeight: 22,
    color: '#111827',
    marginBottom: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Inter',
  },
});

export default function List({navigation}) {
  const {state, dispatch} = useContext(GlobalContext);
  // Scrollview inside each item is unneccessary
  return (
    <SafeAreaView>
      <Text style={styles.title}>Select a category:</Text>
      <View>
        <FlatList
          style={styles.lists}
          data={state.categories}
          renderItem={({item}) => (
            <Listitem
              text={item.name.en}
              onPress={() =>
                navigation.navigate('LearningScreen', {
                  item: item,
                  text: `${item.name.en}`,
                  id: `${item.id}`,
                })
              }
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
