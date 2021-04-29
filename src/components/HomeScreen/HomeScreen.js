import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ToolButton from '../ToolButton/ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton/LanguageSwitcherButton';
import Plus from '../Icons/plus.svg';
import Switch from '../Icons/Switch.svg';
import Correct from '../Icons/correct.svg';
import DoubleCorrect from '../Icons/doublecorrect.svg';
import Switchcolor from '../Icons/switchcolor.svg';
import List from '../List/List';

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

export default function HomeScreen({}) {
  return (
    <SafeAreaView>
      <View>
        <Buttons />
      </View>
      <View>
        <List />
      </View>
    </SafeAreaView>
  );
}

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
