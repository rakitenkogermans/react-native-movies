import {StyleSheet, Text} from 'react-native';
import React from 'react';

interface HeaderProps {
  text: string;
}
const Header = (props: HeaderProps) => {
  return <Text style={styles.title}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export {Header};
