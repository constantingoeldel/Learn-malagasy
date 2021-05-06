import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import Listitem from '../ListItem/ListItem';
import {GlobalContext} from '../../GlobalContext/GlobalContext';

function List({navigation, isEnglish}) {
  const {state} = useContext(GlobalContext);
  const {categories} = state;

  return (
    <SafeAreaView>
      <Text style={styles.title}>Select a category:</Text>
      <View>
        <FlatList
          style={styles.lists}
          data={categories}
          renderItem={({item, index}) => (
            <ScrollView>
              <Listitem
                text={isEnglish ? item.name.ma : item.name.en}
                onPress={() =>
                  navigation.navigate('Learning', {
                    text: `${item.name.en}`,
                    id: `${item.id}`,
                  })
                }
              />
            </ScrollView>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default List;

const styles = StyleSheet.create({
  lists: {
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    marginLeft: 23,
    marginRight: 23,
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
