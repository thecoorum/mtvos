// React
import React from 'react';
import {View, StyleSheet} from 'react-native';

// Libraries
import {createWormhole} from 'react-native-wormhole';
import localhost from 'react-native-localhost';

const {Wormhole} = createWormhole({
  global: {
    require: (moduleId: string) => {
      console.log('require', moduleId);

      if (moduleId === 'react') {
        return require('react');
      } else if (moduleId === 'react-native') {
        return require('react-native');
      } else if (moduleId === 'react-native-video') {
        return require('react-native-video');
      }
    },
  },
  verify: async () => true,
});

const Details = () => {
  return (
    <View style={styles.container}>
      <Wormhole
        source={{
          uri: `https://gist.githubusercontent.com/thecoorum/e957c4035c7df153523d71d46720d9a4/raw/34cbe65c39840b7cfba2841c716bb4dc865146f5/video.js`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    marginBottom: 16,
  },
});

export default Details;
