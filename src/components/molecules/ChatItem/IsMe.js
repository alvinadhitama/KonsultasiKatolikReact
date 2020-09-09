import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = ({text, date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.chatContent}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  chatContent: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.blue,
    maxWidth: '75%',
    borderRadius: 10,
    borderTopRightRadius: 0,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.gray,
    marginRight: 8,
  },
});
