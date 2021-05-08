import Back from '../icons/back.svg';
import React, {useContext} from 'react';
import Switch from '../icons/switch.svg';
import Switchcolor from '../icons/switchcolor.svg';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {GlobalContext} from '../globalContext/GlobalContext';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/LanguageSwitcherButton';

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

export default function LearningBtns({navigation}) {
  const {dispatch} = useContext(GlobalContext);
  return (
    <SafeAreaView style={styles.btns}>
      <View style={styles.btn}>
        <ToolButton
          onPress={() => {
            navigation.navigate('HomeScreen');
            dispatch({
              type: 'PHRASE_TO_LEARN',
              showNextBtn: false,
            });
          }}>
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
}
