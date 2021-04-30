import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Listitem from '../ListItem/ListItem';

export default function SeenPhrase({}) {
  return (
    <SafeAreaView>
      <View>
        <Text style={StyleSheet.text}>Seen phrases:</Text>
        <Listitem text={'35 words and phrases'} onRowPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
