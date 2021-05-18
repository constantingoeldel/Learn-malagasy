import React, {useContext} from 'react';
import Shuffle from '../utils/Reshuffle';
import Listitem from '../components/ListItem/ListItem';
import NextButton from '../components/NextButton/NextButton';
import {GlobalContext} from '../globalContext/GlobalContext';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import LearningButtons from '../screenButtonsContainer/LearningButtons';
import PhraseTextarea from '../components/PhaseTextarea/PhraseTextarea';

const styles = StyleSheet.create({
  nextButton: {
    marginTop: 40,
    flexDirection: 'row',
    alignSelf: 'center',
  },
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
  // Descructuring in one line
  const {phrases, categories, showNextButton} = state;
  const id = route.params.id;
  const category = route.params.text;

  const singleCategories = categories?.find(item => item.id === id);
  const phraseId = singleCategories.phrasesIds.map(item => {
    return item;
  });
  // not DRY => wet
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

  const ItemsArray = [Item3, Item4, Item2, Item1];
  const randomSolutions = Shuffle(ItemsArray);
  // Questions should not repeat in a run, when all the questions in a category are an answered once, a reshuffle message should be shown. Answer options should be unique.
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LearningButtons navigation={navigation} />
      </View>
      <View style={styles.phraseSection}>
        <Text style={[styles.text, styles.categoryText]}>
          Category: {category}
        </Text>
      </View>
      <View style={styles.phraseSection}>
        <Text style={[styles.text, styles.phraseText]}>The phrase:</Text>
        <PhraseTextarea editable={false} phrase={singleOption?.name.mg} />
      </View>
      <View>
        <Text style={[styles.text, styles.phraseText]}>Pick a solution:</Text>
        {randomSolutions.map((item, index) => {
          return (
            <View key={index}>
              <Listitem
                text={item}
                onPress={() => {
                  dispatch({
                    type: 'PHRASE_TO_LEARN',
                    phrase: singleOption,
                    category: category,
                    showNextBtn: true,
                  });
                }}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.nextButton}>
        {showNextButton ? (
          <NextButton
            text={'Next'}
            onPress={() => {
              dispatch({
                type: 'SHOW_NEXT_BUTTON',
                showNextBtn: false,
              });
            }}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}
