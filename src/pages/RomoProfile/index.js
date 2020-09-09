import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Profile, ProfileItem, Button, Gap} from '../../components';
import {colors} from '../../utils';

const RomoProfile = ({navigation, onPress, route}) => {
  const dataRomo = route.params;

  return (
    <View style={styles.page}>
      <Header title="Profil Romo" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <Profile
        name={dataRomo.data.fullName}
        desc={dataRomo.data.profession}
        photo={{uri: dataRomo.data.photo}}
      />
      <ProfileItem label="Ordo" value={dataRomo.data.ordo_name} />
      <ProfileItem label="Tempat Bertugas" value={dataRomo.data.tempat_tugas} />
      <ProfileItem label="Alumnus" value={dataRomo.data.university} />
      <View style={styles.button}>
        <Button
          title="Mulai Konsultasi"
          onPress={() => navigation.navigate('Chatting', dataRomo)}
        />
      </View>
    </View>
  );
};

export default RomoProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  button: {paddingHorizontal: 16, paddingTop: 30},
});
