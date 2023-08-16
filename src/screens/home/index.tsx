// React
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// Libraries
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trailers</Text>
      <Button
        title="Guardians of the Galaxy Vol. 3"
        onPress={() =>
          navigate('details', {
            video:
              'https://cdn-azure.net/hls/aWQ9NTU5MTM4OzEzMzI2NDI1MjY7MjE5NDQzMzg7MDsxNjkyMjA0NjExJmg9eWJ0cG5TSTBucWZUNXF6OU5fX3FJZyZlPTE2OTIyOTEwMTE/trailers/d/97/91675.mp4/master-v1a1.m3u8?loc=nl',
          })
        }
      />
      <View style={styles.spacer} />
      <Button
        title="Flash"
        onPress={() =>
          navigate('details', {
            video:
              'https://digital-cdn.net/hls/aWQ9NTU5MTM4OzEzMzI2NDI1MjY7MjE5NDQzMzg7MDsxNjkyMjA0NzE5Jmg9c2pZZ05yaU5fSUxpMnhtRTFKSnJFUSZlPTE2OTIyOTExMTk/trailers/e/59/92050.mp4/master-v1a1.m3u8?loc=nl',
          })
        }
      />
      <View style={styles.spacer} />
      <Button
        title="Extraction 2"
        onPress={() =>
          navigate('details', {
            video:
              'https://cdn-azure.net/hls/aWQ9NTU5MTM4OzEzMzI2NDI1MjY7MjE5NDQzMzg7MDsxNjkyMjA0NzcyJmg9aVNqUl9LRFMtQzlFalhHRWRKUHpZdyZlPTE2OTIyOTExNzI/trailers/d/4b/91147.mp4/master-v1a1.m3u8?loc=nl',
          })
        }
      />
      <View style={styles.spacer} />
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
  spacer: {
    height: 16,
  },
});

export default Home;
