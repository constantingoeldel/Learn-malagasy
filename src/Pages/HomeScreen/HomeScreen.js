import React, {useState} from 'react';
import List from '../../components/List/List';
import Buttons from './Buttons';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SeenPhrases from '../../components/SeenPhrases/SeenPhrases';
import LearntPhrases from '../../components/LearntPhrases/LearntPhrases';

export default function HomeScreen({navigation}) {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <Buttons setIsEnglish={setIsEnglish} />
      </View>
      <View style={styles.space}>
        <List navigation={navigation} isEnglish={isEnglish} />
      </View>
      <View>
        <SeenPhrases />
      </View>
      <View>
        <LearntPhrases />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  space: {
    marginBottom: 15,
  },
});
