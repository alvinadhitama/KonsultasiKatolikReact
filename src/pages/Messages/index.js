import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListRomo} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Firebase} from '../../config';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      console.log('user login', res);
      setUser(res);
    });
  };

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUidRomo = `admins/${oldData[key].uidPartner}`;
          const detailRomo = await rootDB.child(urlUidRomo).once('value');
          console.log('detail romo: ', detailRomo.val());
          data.push({
            id: key,
            detailRomo: detailRomo.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);

        console.log('new data history: ', data);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Pesan</Text>
        {historyChat.map((chat) => {
          const dataRomo = {
            id: chat.detailRomo.uid,
            data: chat.detailRomo,
          };
          return (
            <ListRomo
              key={chat.id}
              picture={{uri: chat.detailRomo.photo}}
              name={chat.detailRomo.fullName}
              desc={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting', dataRomo)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.primary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
