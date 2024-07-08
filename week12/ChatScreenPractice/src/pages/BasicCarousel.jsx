import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginVertical: 10,
  },
  date: {
    fontSize: 14,
    color: 'grey',
  },
});

const dummy_data = [
  {
    id: 1,
    name: '이민구',
    content: '점심 먹었니 친구야?',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: 'https://dummyimage.com/600x400/000/fff',
    isOpen: true,
  },
  {
    id: 2,
    name: '나',
    content: '아직 안먹었어, 너는 먹었니?',
    created_date: '12:03PM',
    position: 'right',
    profileImgUrl: 'https://dummyimage.com/600x400/000/fff',
    isOpen: true,
  },
  // 추가 데이터 생략
];

const {width} = Dimensions.get('window');

const BasicCarousel = () => {
  const renderSlide = item => {
    return (
      <View style={styles.slide} key={item.id}>
        <Image source={{uri: item.profileImgUrl}} style={styles.profileImage} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.date}>{item.created_date}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Carousel</Text>
        <Swiper style={styles.wrapper} showsButtons>
          {dummy_data.map(item => renderSlide(item))}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

export default BasicCarousel;
