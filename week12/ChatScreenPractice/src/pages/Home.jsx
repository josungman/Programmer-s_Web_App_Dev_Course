import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableHighlightComponent,
} from 'react-native';

const searchIcon = require('../assets/icons/search.png');
const addIcon = require('../assets/icons/add.png');
const alertIcon = require('../assets/icons/alert.png');
const settingIcon = require('../assets/icons/setting.png');
const myProfile = require('../assets/images/myProfile.png');
const rightArrow = require('../assets/icons/rightArrow.png');

const dummy_data = [
  {
    id: 1,
    name: '이민구',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '야옹',
  },
  {
    id: 2,
    name: '정태영',
    profileImg: require('../assets/images/dummyProfile.png'),
    message: '대구에서 살고 있는 흑인',
  },
  {
    id: 3,
    name: '박찬옹',
    profileImg: require('../assets/images/dummyProfile2.png'),
    message: '연대보다 고대',
  },
  {
    id: 4,
    name: '김종훈',
    profileImg: require('../assets/images/dummyProfile4.png'),
    message: '돼지임',
  },
  {
    id: 5,
    name: '김종훈',
    profileImg: require('../assets/images/dummyProfile5.png'),
    message: '돼지임',
  },
  {
    id: 6,
    name: '김종훈',
    profileImg: require('../assets/images/dummyProfile6.png'),
    message: '돼지임',
  },
  {
    id: 7,
    name: '김종훈',
    profileImg: require('../assets/images/dummyProfile7.png'),
    message: '돼지임',
  },
];

const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat', {params: item})}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 16,
        }}>
        <Image source={item.profileImg} style={{width: 40, height: 40}} />
        <View style={{gap: 4}}>
          <Text style={{fontSize: 14, color: '#333'}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: '#828282'}}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListHeader = () => {
    return (
      <View
        style={{
          marginVertical: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 400, color: '#828282'}}>친구 </Text>
        <Text style={{fontSize: 14, color: '#4F4F4F'}}>
          {dummy_data.length}명
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            gap: 8,
            marginRight: 16,
            marginBottom: 16,
            marginHorizontal: 16,
          }}>
          <TouchableOpacity>
            <Image source={searchIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={addIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={alertIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={settingIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            marginHorizontal: 16,
          }}>
          <View style={{gap: 2}}>
            <Text style={{fontWeight: 'blod', fontSize: 18, color: '#333'}}>
              성만조
            </Text>
            <Text style={{fontWeight: '500', fontSize: 14, color: '#828282'}}>
              Hello World
            </Text>
          </View>
          <Image source={myProfile} style={{width: 56, height: 56}} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#f2f2f2',
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingHorizontal: 16,
          paddingVertical: 16,
          gap: 4,
        }}>
        <View style={{maxWidth: 321, gap: 4}}>
          <Text style={{fontSize: 16, color: '#000'}}>추천친구</Text>
          <Text
            style={{fontSize: 14, fontWeight: 400, color: '#828282'}}
            numberOfLines={1}>
            이순시, 세종대왕, 박보영, 크레용신짱, 성만조, 스타크래프트
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={rightArrow} style={{width: 32, height: 32}} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginHorizontal: 16}}>
        <FlatList
          data={dummy_data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={renderListHeader}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
