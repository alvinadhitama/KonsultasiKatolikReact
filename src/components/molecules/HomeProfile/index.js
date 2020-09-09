import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {fonts, colors, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    job: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      // console.log('data user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      console.log('new profile: ', data);
      setProfile(res);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.photo} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.job}>{profile.job}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  photo: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  job: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.gray,
    textTransform: 'capitalize',
  },
});
