import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Profile, List, Gap} from '../../components';
import {colors, getData} from '../../utils';
import {ILNullPhoto} from '../../assets';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    job: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Firebase.auth()
      .signOut()
      .then((res) => {
        console.log('success sign out');
        navigation.replace('Login');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.text.white,
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profil" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.job}
          photo={profile.photo}
        />
      )}
      <Gap height={10} />
      <List
        type="next"
        name="Ubah Profil"
        desc="Terakhir diganti kemarin"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        type="next"
        name="Ganti Bahasa"
        desc="Tersedia dalam 2 bahasa"
        icon="language"
      />
      <List
        type="next"
        name="Beri Penilaian"
        desc="Beri kami nilai di Play Store"
        icon="rate"
      />
      <List
        type="next"
        name="Keluar"
        desc="Baca panduan penggunaan"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
