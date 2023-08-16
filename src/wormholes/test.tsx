import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const Wormhole = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://digital-cdn.net/hls/aWQ9NTU5MTM4OzEzMzI2NDI1MjY7MjE5NDQzMzg7MDsxNjkyMjAxNDY0Jmg9UUp3WjJIaXJqdnRzQzVPZkc0NS10USZlPTE2OTIyODc4NjQ/trailers/1/1c/59632.mp4/master-v1a1.m3u8?loc=nl',
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
