import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ToolButton from '../../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../../components/LanguageSwitcherButton/LanguageSwitcherButton';
import Back from '../../components/Icons/back.svg';
import Switch from '../../components/Icons/Switch.svg';
import Switchcolor from '../../components/Icons/switchcolor.svg';
import List from '../../components/List/List';

const Buttons = () => {
  return (
    <SafeAreaView style={styles.btns}>
      <View style={styles.btn}>
        <ToolButton>
          <Back />
        </ToolButton>
      </View>
      <View style={styles.btn}>
        <ToolButton>
          <Switchcolor />
        </ToolButton>
      </View>
      <View>
        <LanguageSwitcherButton>
          <Switch />
        </LanguageSwitcherButton>
      </View>
    </SafeAreaView>
  );
};

export default function Learning({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Buttons
          onPress={() => (
            <Button onPress={() => navigation.navigate('HomeScreen')} />
          )}
        />
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
