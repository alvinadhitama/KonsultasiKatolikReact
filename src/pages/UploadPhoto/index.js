import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {colors, fonts, storeData} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, job, uid} = route.params;
  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        console.log('response: ', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Anda belum memilih foto',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.text.white,
          });
        } else {
          console.log('response getImage: ', response);
          const source = {uri: response.uri};

          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Firebase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Foto" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.photoWrapper} onPress={getImage}>
            <Image source={photo} style={styles.photo} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Gap height={8} />
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.job}>{job}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Lanjutkan"
            onPress={uploadAndContinue}
          />
          <Gap height={24} />
          <Link
            title="Lewati Sekarang"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  photo: {width: 110, height: 110, borderRadius: 110 / 2},
  photoWrapper: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 120 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  page: {flex: 1, backgroundColor: colors.white},
  addPhoto: {position: 'absolute', bottom: 8, right: 4},
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.primary,
  },
  job: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.gray,
    fontFamily: fonts.primary[400],
  },
  content: {
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
});
