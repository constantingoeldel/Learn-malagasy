import React, {useContext} from 'react';
import Listitem from '../ListItem/ListItem';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {GlobalContext} from '../../globalContext/GlobalContext';

const styles = StyleSheet.create({
  container: {
    marginLeft: 23,
    marginRight: 23,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
    marginBottom: 15,
  },
});

export default function SeenPhrase({}) {
  const {state} = useContext(GlobalContext);
  const {learntPhrases} = state;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Learnt phrases:</Text>
        <Listitem
          text={(learntPhrases.length, 'words and phrases')}
          onRowPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
