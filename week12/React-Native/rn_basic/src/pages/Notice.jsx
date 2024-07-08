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
    title: '24.07.08 12주차 리액트 네이티브 실습내용',
    content: '당첨자 안내',
  },
  {
    id: 2,
    title: '24.07.08 12주차 리액트 네이티브 실습내용',
    content: '당첨자 안내',
  },
];

const Notice = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NoticeDetail', {item})}
        style={{padding: 16, borderBottomWidth: 1, borderBottomColor: '#333'}}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
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
