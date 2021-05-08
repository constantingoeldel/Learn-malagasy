import React, {useContext} from 'react';
import Listitem from '../components/ListItem/ListItem';
import NextButton from '../components/NextButton/NextButton';
import {GlobalContext} from '../globalContext/GlobalContext';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import LearningButtons from '../screenButtonsContainer/LearningButtons';
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
  const {state} = useContext(GlobalContext);
  const {phraseToLearn, categoryToLearn} = state;
  const items = route.params.items;

  const phrase = state.phraseToLearn.mg;
  const category = state.categoryToLearn;
  const {shuffledAnswers} = route.params;
  const correctAnswer = answer.name.mg === phrase;

  const ListOfView = correctAnswer ? (
    <List data={shuffledAnswers} buttonText={'Pick'} textColor="#ff00ff" />
  ) : (
    <List data={shuffledAnswers} buttonText={'Pick'} textColor={'#00ffff'} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LearningButtons navigation={navigation} />
      </View>
      <View style={styles.phraseSection}>
        <Text style={[styles.text, styles.categoryText]}>
          Category: {categoryToLearn}
        </Text>
        <Text style={[styles.text, styles.phraseText]}>The phrase:</Text>
        <PhraseTextarea editable={false} phrase={phraseToLearn.name.mg} />
      </View>
      <View>
        <Text style={[styles.text, styles.phraseText]}>Pick a solution:</Text>
        {items.map((item, index) => (
          <View key={index}>
            <Listitem text={item} onPress={() => alert(item)} />
          </View>
        ))}
      </View>
      <View>
        <NextButton text={'Next'} />
      </View>
    </SafeAreaView>
  );
}
