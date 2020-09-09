import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Gap, Input, Button, Header} from '../../components';
import {colors, useForm, storeData, showError} from '../../utils';
import {Firebase} from '../../config';
import {useDispatch} from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    // console.log(form);

    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        const data = {
          fullName: form.fullName,
          job: form.job,
          email: form.email,
          uid: success.user.uid,
        };
        Firebase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('register success: ', success);
      })
      .catch((err) => {
        // Handle Errors here.
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
        // console.log('error; ', error);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={24} />
            <Input
              label="Nama Lengkap"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={16} />
            <Input
              label="Pekerjaan"
              value={form.job}
              onChangeText={(value) => setForm('job', value)}
            />
            <Gap height={16} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={16} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 24, paddingTop: 0},
});
