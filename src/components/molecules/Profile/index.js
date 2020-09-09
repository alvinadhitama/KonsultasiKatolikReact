import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, isRemove, photo, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View style={styles.borderProfile}>
          <Image source={photo} style={styles.photo} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
          <Image source={photo} style={styles.photo} />
          {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  photo: {height: 110, width: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  container: {alignItems: 'center', justifyContent: 'center'},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 16,
    color: colors.text.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  desc: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginTop: 2,
    color: colors.text.gray,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  removePhoto: {position: 'absolute', right: 6, bottom: 6},
});
