import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyChurch1} from '../../../assets';
import {fonts, colors} from '../../../utils';

const ListChurch = ({name, address, picture}) => {
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.photo} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListChurch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.blue,
  },
  photo: {width: 100, height: 75, borderRadius: 10, marginRight: 16},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    maxWidth: 250,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.gray,
    marginTop: 6,
  },
});
