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

export default function List({navigation, isEnglish}) {
  const {state, dispatch} = useContext(GlobalContext);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Select a category:</Text>
      <View>
        <FlatList
          style={styles.lists}
          data={state.categories}
          renderItem={({item}) => (
            <ScrollView>
              <Listitem
                text={isEnglish ? item.name.ma : item.name.en}
                onPress={() =>
                  navigation.navigate('LearningScreen', {
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
