import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const Wormhole = ({video: uri}) => {
  console.log('uri', uri);
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri,
          type: 'm3u8',
        }}
        style={{width, height}}
        onError={error => console.log('error', error)}
        onBuffer={buffer => console.log('buffer', buffer)}
        controls
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
    color: '#FFFFFF',
    marginBottom: 16,
  },
});

export default Wormhole;
