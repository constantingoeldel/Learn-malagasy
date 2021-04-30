import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ToolButton from '../../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../../components/LanguageSwitcherButton/LanguageSwitcherButton';
import Plus from '../../components/Icons/plus.svg';
import Switch from '../../components/Icons/Switch.svg';
import Correct from '../../components/Icons/correct.svg';
import DoubleCorrect from '../../components/Icons/doublecorrect.svg';
import Switchcolor from '../../components/Icons/switchcolor.svg';
import List from '../../components/List/List';
import SeenPhrases from '../../components/SeenPhrases/SeenPhrases';
import LearntPhrases from '../../components/LearntPhrases/LearntPhrases';

const Buttons = () => {
  return (
    <SafeAreaView style={styles.btns}>
      <View style={styles.btn}>
        <ToolButton>
          <Plus />
        </ToolButton>
      </View>
      <View style={styles.btn}>
        <LanguageSwitcherButton>
          <Switch />
        </LanguageSwitcherButton>
      </View>
      <View style={styles.btn}>
        <ToolButton>
          <Correct />
        </ToolButton>
      </View>
      <View style={styles.btn}>
        <ToolButton>
          <DoubleCorrect />
        </ToolButton>
      </View>
      <View>
        <ToolButton>
          <Switchcolor />
        </ToolButton>
      </View>
    </SafeAreaView>
  );
};

/* <Buttons oPress={navigation.navigate('Learning')} />; */

export default function HomeScreen({navigation}) {
  console.log(navigation);
  return (
    <SafeAreaView>
      <View>
        <Buttons />
      </View>
      <View style={styles.space}>
        <List />
      </View>
      <View>
        <SeenPhrases />
      </View>
      <View>
        <LearntPhrases />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  space: {
    marginBottom: 15,
  },
  btn: {
    marginRight: 10,
  },
  btns: {
    marginTop: 35,
    marginLeft: 23,
    flexDirection: 'row',
    marginBottom: 65,
  },
});
