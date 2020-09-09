import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

const ProfileChat = ({onPress, title, type, photo, desc}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <Gap width={10} />
      <Image source={photo} style={styles.photo} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
    </View>
  );
};

export default ProfileChat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[700],
    fontSize: 20,
    color: colors.text.white,
  },
  category: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.gray,
  },
  photo: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 16},
  content: {flex: 1},
});
