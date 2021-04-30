import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Listitem from '../ListItem/ListItem';

export default function SeenPhrase({}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Learnt phrases:</Text>
        <Listitem text={'10 words and phrases'} onRowPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

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
