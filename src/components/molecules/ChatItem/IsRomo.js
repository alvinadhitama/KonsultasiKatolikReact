import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsRomo = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <View style={styles.chatContainer}>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default IsRomo;

const styles = StyleSheet.create({
  chatContent: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.blue2,
    maxWidth: '75%',
    borderRadius: 10,
    borderTopLeftRadius: 0,
  },
  chatContainer: {flexDirection: 'row', alignItems: 'flex-end'},
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingLeft: 16,
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.white,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.gray,
    marginLeft: 8,
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
