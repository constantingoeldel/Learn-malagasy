import React, {useState} from 'react';
import List from '../components/List/List';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SeenPhrases from '../components/SeenPhrases/SeenPhrases';
import HomeButtons from '../screenButtonsContainer/HomeButtons';
import LearntPhrases from '../components/LearntPhrases/LearntPhrases';

const styles = StyleSheet.create({
  space: {
    marginBottom: 15,
  },
});

export default function HomeScreen({navigation}) {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <HomeButtons setIsEnglish={setIsEnglish} />
      </View>
      <View style={styles.space}>
        <List navigation={navigation} isEnglish={isEnglish} />
      </View>
      <View style={styles.space}>
        <SeenPhrases />
      </View>
      <View>
        <LearntPhrases />
      </View>
    </SafeAreaView>
  );
}
