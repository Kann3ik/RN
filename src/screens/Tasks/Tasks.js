import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tasks({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});