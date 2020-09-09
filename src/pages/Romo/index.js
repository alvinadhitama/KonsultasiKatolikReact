import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  ConsultationCategory,
  RomoCategory,
  NewsItem,
  Gap,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {Firebase} from '../../config';

const Romo = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryConsultation, setCategoryConsultation] = useState([]);
  const [romos, setRomos] = useState([]);

  useEffect(() => {
    getCategoryConsultation();
    getRomo();
    getNews();
  }, []);

  const getNews = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setNews(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getCategoryConsultation = () => {
    Firebase.database()
      .ref('category_consultation/')
      .once('value')
      .then((res) => {
        console.log('category data: ', res.val());
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setCategoryConsultation(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getRomo = () => {
    Firebase.database()
      .ref('admins/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        console.log('chat doctor: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('data parse: ', data);
          setRomos(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>Mau konsultasi apa hari ini?</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryConsultation.map((item) => {
                  return (
                    <ConsultationCategory
                      key={item.id}
                      category={item.category}
                      onPress={() =>
                        navigation.navigate('ChooseCategory', item)
                      }
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.labelChat}>Chat Langsung</Text>
            {romos.map((romo) => {
              return (
                <RomoCategory
                  key={romo.id}
                  name={romo.data.fullName}
                  desc={romo.data.tempat_tugas}
                  photo={{uri: romo.data.photo}}
                  onPress={() => navigation.navigate('RomoProfile', romo)}
                />
              );
            })}

            <Text style={styles.labelNews}>Warta Gereja</Text>
          </View>
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Romo;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 16,
    marginBottom: 16,
    maxWidth: 200,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  labelChat: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 16,
    marginBottom: 8,
  },
  labelNews: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 16,
    marginBottom: 8,
  },
});
