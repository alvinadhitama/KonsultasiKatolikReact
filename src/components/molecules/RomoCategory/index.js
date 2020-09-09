import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Button} from '../../../components';
import {fonts, colors} from '../../../utils';

const RomoCategory = ({onPress, name, photo, desc}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={photo} style={styles.photo} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.paroki}>{desc}</Text>
      </View>
      <View style={styles.button}>
        <Button type="icon-only" icon="next-dark" />
      </View>
    </TouchableOpacity>
  );
};

export default RomoCategory;

const styles = StyleSheet.create({
  photo: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  profile: {flex: 1},
  button: {flexDirection: 'row'},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  paroki: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.gray,
    marginTop: 2,
  },
});
