// React
import React from 'react';
import {View, StyleSheet} from 'react-native';

// Libraries
import {createWormhole} from 'react-native-wormhole';
import {useRoute} from '@react-navigation/native';
import localhost from 'react-native-localhost';

const {Wormhole} = createWormhole({
  global: {
    require: (moduleId: string) => {
      console.log('require', moduleId);

      switch (moduleId) {
        case 'react':
          return require('react');
        case 'react-native':
          return require('react-native');
        case 'react-native-video':
          return require('react-native-video');
        case '@babel/runtime/helpers/interopRequireDefault':
          return require('@babel/runtime/helpers/interopRequireDefault');
      }
    },
  },
  verify: async () => true,
});

const Details = () => {
  const {params} = useRoute();

  return (
    <View style={styles.container}>
      <Wormhole
        source={{
          // uri: `http://${localhost}:3000/wormhole/test.tsx`,
          uri: 'https://cdn.jsdelivr.net/gh/thecoorum/mtvos/wormhole-3.js',
        }}
        video={params.video}
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
