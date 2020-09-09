import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListRomo} from '../../components';
import {colors} from '../../utils';
import {Firebase} from '../../config';

const ChooseCategory = ({navigation, route}) => {
  const [listRomo, setListRomo] = useState([]);
  const itemCategory = route.params;

  useEffect(() => {
    callRomoByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callRomoByCategory = (category) => {
    Firebase.database()
      .ref('admins/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        console.log('data list romo: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListRomo(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack()}
        title={`Konsultasi ${itemCategory.category}`}
      />
      {listRomo.map((romo) => {
        return (
          <ListRomo
            key={romo.id}
            type="next"
            picture={{uri: romo.data.photo}}
            name={romo.data.fullName}
            desc={romo.data.tempat_tugas}
            onPress={() => navigation.navigate('RomoProfile', romo)}
          />
        );
      })}
    </View>
  );
};

export default ChooseCategory;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
