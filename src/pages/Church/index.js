import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  ILChurchBG,
  DummyChurch1,
  DummyChurch2,
  DummyChurch3,
} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListChurch} from '../../components';

const Church = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILChurchBG} style={styles.background}>
        <Text style={styles.title}>Gereja Terdekat</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListChurch
          name="Gereja Katolik Santa Maria Assumpta Gamping"
          address="Jl Melati Wetan No 47"
          picture={DummyChurch1}
        />
        <ListChurch
          name="Gereja Katolik Keluarga Kudus Banteng"
          address="Jl Melati Wetan No 47"
          picture={DummyChurch2}
        />
        <ListChurch
          name="Gereja Katolik Kristus Raja Baciro"
          address="Jl Melati Wetan No 47"
          picture={DummyChurch3}
        />
      </View>
    </View>
  );
};

export default Church;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.primary},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 14,
    borderRadius: 20,
    marginTop: -20,
  },
  background: {height: 270, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.white,
    marginTop: 6,
    textAlign: 'center',
  },
});
