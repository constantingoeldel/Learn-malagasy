import React, {useState} from 'react';
import List from '../components/List/List';
import HomeButtons from '../containers/HomeButtons';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function HomeScreen({navigation}) {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <HomeButtons setIsEnglish={setIsEnglish} />
      </View>
      <View style={styles.space}>
        <List navigation={navigation} isEnglish={isEnglish} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  space: {
    marginBottom: 15,
  },
});

export default HomeScreen;
