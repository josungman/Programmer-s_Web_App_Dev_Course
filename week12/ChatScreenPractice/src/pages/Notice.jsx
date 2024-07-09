import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BasicHeader from '../components/BasicHeader';

const dummy_data = [
  {
    id: 1,
    title: '12월 24일 크리스마스 담청자 안내',
    content: '안녕 난 성만이라고 해 담청자 발표 ㅊㅋ',
    created_date: '2024년 12월 24일',
  },
  {
    id: 2,
    title: '12월 25일 크리스마스 담청자 안내',
    content: '안녕 난 성만이라고 해 담청자 발표 ㅊ22ㅋ',
    created_date: '2024년 12월 24일',
  },
];

const Notice = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NoticeDetail', {item})}
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#f4f4f4',
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <BasicHeader title={'공지사항'} />
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notice;
