import Buttons from './Buttons';
import React, {useContext} from 'react';
import Listitem from '../../components/ListItem/ListItem';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {GlobalContext} from '../../components/GlobalContext/Context';
import PhraseTextarea from '../../components/PhaseTextarea/PhraseTextarea';

export default function Learning({navigation, route}) {
  const {state} = useContext(GlobalContext);
  const category = route.params.text;
  const id = route.params.id;
  const {categories} = state;
  const {phrases} = state;

  const categoriesList = categories.find(item => item.id === id);
  const phraseId = categoriesList.phrasesIds.map(item => {
    return item;
  });

  // Creating four random variables for the four value to display.
  const item1 = phraseId[Math.floor(Math.random() * phraseId.length)];
  const item2 = phraseId[Math.floor(Math.random() * phraseId.length)];
  const item3 = phraseId[Math.floor(Math.random() * phraseId.length)];
  const item4 = phraseId[Math.floor(Math.random() * phraseId.length)];

  const groupItems = [item1, item2, item3, item4];
  const singleItem = groupItems[Math.floor(Math.random() * groupItems.length)];
  const singleOption = phrases.find(itm => itm.id === singleItem);
  const malagasyItemVersion = singleOption.name.mg;

  if (
    item1 === item2 ||
    item1 === item3 ||
    item1 === item4 ||
    item2 === item3 ||
    item2 === item4 ||
    item3 === item4
  ) {
    return null;
  }

  // Getting the item value from the random id
  const Option1 = phrases.find(itm => itm.id === item1);
  const Item1 = Option1.name.en;
  const Option2 = phrases.find(itm => itm.id === item2);
  const Item2 = Option2.name.en;
  const Option3 = phrases.find(itm => itm.id === item3);
  const Item3 = Option3.name.en;
  const Option4 = phrases.find(itm => itm.id === item4);
  const Item4 = Option4.name.en;

  // // Grouping all of the items.
  const ItemsArray = [Item1, Item4, Item2, Item3];
  // // Sorting the items in order to avoid getting the same data over again.
  const randomSolutions = ItemsArray.sort((a, b) => b - a);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Buttons navigation={navigation} />
      </View>
      <View style={styles.phraseSection}>
        <Text style={[styles.text, styles.categoryText]}>
          Category: {category}
        </Text>
        <Text style={[styles.text, styles.phraseText]}>The phrase:</Text>
        <PhraseTextarea editable={false} phrase={malagasyItemVersion} />
      </View>
      <View>
        <Text style={[styles.text, styles.phraseText]}>Pick a solution:</Text>
        {randomSolutions.map(item => {
          return (
            <View key={item}>
              <Listitem text={item} onPress={() => alert('I am clicked !')} />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  phraseSection: {
    marginBottom: 37,
  },
  container: {
    marginLeft: 23,
    marginRight: 23,
  },
  categoryText: {
    marginBottom: 30,
  },
  phraseText: {
    marginBottom: 15,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});
