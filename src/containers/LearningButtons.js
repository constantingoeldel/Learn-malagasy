import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';
import Back from '../icons/back.svg';
import Switch from '../icons/switch.svg';
import Switchcolor from '../icons/switchcolor.svg';

const LearningBtns = ({navigation}) => {
  return (
    <SafeAreaView style={styles.btns}>
      <View style={styles.btn}>
        <ToolButton onPress={() => navigation.navigate('HomeScreen')}>
          <Back />
        </ToolButton>
      </View>
      <View style={styles.btn}>
        <ToolButton onPress={() => alert('I am here')}>
          <Switchcolor />
        </ToolButton>
      </View>
      <View>
        <LanguageSwitcherButton onPress={() => alert('I am here')}>
          <Switch />
        </LanguageSwitcherButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginRight: 10,
  },
  btns: {
    marginTop: 35,
    flexDirection: 'row',
    marginBottom: 65,
  },
});

export default LearningBtns;
