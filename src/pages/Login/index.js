import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components';
import {colors, fonts, useForm, storeData, showError} from '../../utils';
import {Firebase} from '../../config';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const login = () => {
    // console.log('form: ', form);
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        // console.log('success: ', res);
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            // console.log('data user: ', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
        navigation.replace('MainApp');
      })
      .catch((err) => {
        // console.log('error: ', err);
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
      });
  };

  return (
    <>
      <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <View style={styles.logo}>
          <ILLogo />
          <Text style={styles.title}>Konsultasi Katolik</Text>
        </View>
        <Gap height={40} />
        <Text style={styles.titlepage}>Sign In</Text>
        <Gap height={16} />
        <Input
          label="Email Address"
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
        <Gap height={16} />
        <Link title="Forgot Password" size={12} />
        <Gap height={16} />
        <Button title="Sign In" onPress={login} />
        <Gap height={16} />
        <Button
          title="Create New Account"
          type="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white, flex: 1},
  tes: {height: 24, width: 24},
  logo: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  titlepage: {fontFamily: fonts.primary[700], fontSize: 24},
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 10,
    fontFamily: fonts.primary[600],
  },
});
