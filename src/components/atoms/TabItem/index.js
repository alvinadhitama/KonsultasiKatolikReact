import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconBishop,
  IconMessages,
  IconChurch,
  IconBishopActive,
  IconMessagesActive,
  IconChurchActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Romo') {
      return active ? <IconBishopActive /> : <IconBishop />;
    }
    if (title === 'Pesan') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Gereja') {
      return active ? <IconChurchActive /> : <IconChurch />;
    }
    return <IconBishop />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 12,
    color: active ? colors.text.active : colors.text.inactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
