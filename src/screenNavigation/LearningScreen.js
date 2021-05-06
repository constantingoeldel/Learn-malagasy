import React, {useContext, useEffect} from 'react';
import Shuffle from '../utils/Reshuffle';
import Listitem from '../components/ListItem/ListItem';
import LearningButtons from '../screenButtonsContainer/LearningButtons';
import {GlobalContext} from '../globalContext/GlobalContext';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import PhraseTextarea from '../components/PhaseTextarea/PhraseTextarea';

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

export default function Learning({navigation, route}) {
  const {state, dispatch} = useContext(GlobalContext);
  const {phrases} = state;
  const {categories} = state;
  const id = route.params.id;
  const category = route.params.text;

  const singleCategories = categories?.find(item => item.id === id);
  const phraseId = singleCategories.phrasesIds.map(item => {
    return item;
  });

  const item1 = phraseId[Math.floor(Math.random() * phraseId.length)];
  const item2 = phraseId[Math.floor(Math.random() * phraseId.length)];
  const item3 = phraseId[Math.floor(Math.random() * phraseId.length)];
  const item4 = phraseId[Math.floor(Math.random() * phraseId.length)];

  const Item1 = phrases.find(itm => itm.id === item1).name.en;
  const Item2 = phrases.find(itm => itm.id === item2).name.en;
  const Item3 = phrases.find(itm => itm.id === item3).name.en;
  const Item4 = phrases.find(itm => itm.id === item4).name.en;

  const groupItems = [item1, item2, item3, item4];
  const singleItem = groupItems[Math.floor(Math.random() * groupItems.length)];
  const singleOption = phrases.find(itm => itm.id === singleItem);

  const ItemsArray = [Item1, Item4, Item2, Item3];
  const randomSolutions = Shuffle(ItemsArray);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LearningButtons navigation={navigation} />
      </View>
      <View style={styles.phraseSection}>
        <Text style={[styles.text, styles.categoryText]}>
          Category: {category}
        </Text>
        <Text style={[styles.text, styles.phraseText]}>The phrase:</Text>
        <PhraseTextarea editable={false} phrase={singleOption?.name.mg} />
      </View>
      <View>
        <Text style={[styles.text, styles.phraseText]}>Pick a solution:</Text>
        {randomSolutions.map((item, index) => {
          return (
            <View key={index}>
              <Listitem text={item} onPress={() => alert('I am here')} />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
