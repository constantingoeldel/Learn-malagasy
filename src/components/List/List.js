import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import Listitem from '../ListItem/ListItem';
import {categories} from '../../data/categories.json';

// import {ContextProvider} from '../GlobalContext/GlobalContext';

// console.log(ContextProvider);
// const [categories] = ContextProvider;

export default function List({navigation}) {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Select a category:</Text>
      <View>
        <FlatList
          style={styles.lists}
          data={categories}
          renderItem={({item, index}) => (
            <ScrollView style={styles.scroll}>
              <Listitem
                text={item.name.en}
                onRowPress={() => navigation.navigate('Learning')}
              />
            </ScrollView>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lists: {
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    marginLeft: 23,
    marginRight: 23,
    height: 386,
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
