import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconNextDark} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListRomo = ({picture, name, desc, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={picture} style={styles.photo} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNextDark />}
    </TouchableOpacity>
  );
};

export default ListRomo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  photo: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  content: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.gray,
  },
});
