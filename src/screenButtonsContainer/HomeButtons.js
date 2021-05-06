import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';
import Plus from '../icons/plus.svg';
import Switch from '../icons/switch.svg';
import Correct from '../icons/correct.svg';
import DoubleCorrect from '../icons/doublecorrect.svg';
import Switchcolor from '../icons/switchcolor.svg';

const styles = StyleSheet.create({
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

export default function HomeBtns({setIsEnglish}) {
  return (
    <SafeAreaView style={styles.btns}>
      <View style={styles.btn}>
        <ToolButton onPress={() => alert('I am Plus btn')}>
          <Plus />
        </ToolButton>
      </View>
      <View style={styles.btn}>
        <LanguageSwitcherButton onPress={() => setIsEnglish(false)}>
          <Switch />
        </LanguageSwitcherButton>
      </View>
      <View style={styles.btn}>
        <ToolButton onPress={() => alert('I am correct btn')}>
          <Correct />
        </ToolButton>
      </View>
      <View style={styles.btn}>
        <ToolButton onPress={() => alert('I am doublecorrect btn')}>
          <DoubleCorrect />
        </ToolButton>
      </View>
      <View>
        <ToolButton onPress={() => alert('I am switchcolor')}>
          <Switchcolor />
        </ToolButton>
      </View>
    </SafeAreaView>
  );
}
