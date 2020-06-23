import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Recents = () => {
  return (
    <View style={styles.container}>
      <Text>This is recents.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Recents;

