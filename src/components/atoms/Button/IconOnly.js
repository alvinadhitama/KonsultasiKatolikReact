import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconBackLight, IconBackDark, IconNextDark} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'next-dark') {
      return <IconNextDark />;
    }
    return <IconBackLight />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
