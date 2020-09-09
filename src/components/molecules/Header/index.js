import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button} from '../../atoms';
import {colors, fonts} from '../../../utils';
import ProfileChat from './ProfileChat';

const Header = ({onPress, title, type, photo, desc}) => {
  if (type === 'profile-chat') {
    return (
      <ProfileChat onPress={onPress} title={title} desc={desc} photo={photo} />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'light' ? 'back-dark' : 'back-light'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'light' ? colors.white : colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  title: (type) => ({
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: type === 'light' ? colors.text.primary : colors.text.white,
    textAlign: 'center',
    flex: 1,
    textTransform: 'capitalize',
  }),
});
