import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconNextDark,
  IconEditProfile,
  IconRate,
  IconLanguage,
  IconHelp,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({picture, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNextDark />}
    </TouchableOpacity>
  );
};

export default List;

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
  content: {flex: 1, marginLeft: 16},
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
