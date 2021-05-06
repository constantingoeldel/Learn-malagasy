import React, {useContext} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Listitem from '../ListItem/ListItem';
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

export default function SeenPhrase() {
  const {state} = useContext(GlobalContext);
  const {seenPhrases} = state;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Seen phrases:</Text>
        <Listitem
          text={(seenPhrases.length, 'words and phrases')}
          onRowPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
