import React from 'react';
import { Text, StyleSheet } from 'react-native';

function TextError(props) {
  const { children } = props || {};
  return <Text style={styles.error}>{children}</Text>;
}
export default TextError;

const styles = StyleSheet.create({
  error: {
    fontSize: 11,
    color: 'red',
    marginBottom: 10,
  },
});
