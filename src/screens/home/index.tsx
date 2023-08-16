// React
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// Libraries
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Details screen"
        onPress={() => navigate('details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    marginBottom: 16,
  },
});

export default Home;
