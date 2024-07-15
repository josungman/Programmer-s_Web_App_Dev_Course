import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import CommentsModal from '../components/CommentsModal';
import fonts from '../styles/fonts';
import {API} from '../apis';
import {getAppVersion} from '../apis/basic';
import {getMyInfo} from '../apis/user';

const logo = require('../assets/icons/logo.png');
const heart = require('../assets/icons/heart.png');
const comment = require('../assets/icons/comment.png');
const more = require('../assets/icons/more.png');

const {width} = Dimensions.get('window');

const dummy_story = [
  {
    id: 1,
    name: 'BONG',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: false,
  },
  {
    id: 2,
    name: 'sungman_671',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: false,
  },
  {
    id: 3,
    name: 'park_ch',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: true,
  },
  {
    id: 4,
    name: 'pig031',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: true,
  },
  {
    id: 5,
    name: 'proamamam',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: true,
  },
  {
    id: 6,
    name: 'ff_2f',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: false,
  },
  {
    id: 7,
    name: 'ekek3',
    profileImg: 'https://avatar.iran.liara.run/public',
    isOpen: false,
  },
  {
    id: 7,
    name: 'apple',
    profileImg: 'https://avatar.iran.liara.run/public',
  },
];

const dummy_feed = [
  {
    id: 1,
    name: 'wekfwefk_12345',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    content: 'Test',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 2,
    name: 'QWER_145',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    content: 'Test',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 3,
    name: 'ASDF_12345',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    content: 'Test',
    like: 37,
    likeUsers: [1, 2, 3],
  },
];

const Home = () => {
  const [myInfo, setMyInfo] = useState([]);

  useEffect(() => {
    getAppVersion();
    async function getMyInfoApi() {
      const res = await getMyInfo();
      setMyInfo(res.data);
    }
    getMyInfoApi();
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const renderStory = ({item, index}) => {
    return (
      <TouchableOpacity
        style={index === 0 ? {marginHorizontal: 16} : {marginRight: 16}}>
        <Image
          style={
            item.isOpen
              ? {
                  width: 52,
                  height: 52,
                  marginBottom: 2,
                }
              : {
                  width: 52,
                  height: 52,
                  marginBottom: 2,
                  borderWidth: 2,
                  borderColor: '#2A85FF',
                  borderRadius: 26,
                }
          }
          source={{uri: item.profileImg}}
        />
        <Text
          numberOfLines={1}
          style={{
            maxWidth: 52,
            fontSize: 13,
            fontWeight: '400',
            lineHeight: 16,
            color: '#4f4f4f',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderFeed = ({item}) => {
    return (
      <View style={{paddingVertical: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 8,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Image
              source={{uri: item.profileImg}}
              style={{width: 32, height: 32}}
            />
            <Text
              style={{
                fontSize: 16,

                lineHeight: 19,
                fontFamily: fonts.PRETENDARD[500],
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={more}
              style={{width: 24, height: 24}}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <Image
          source={{uri: item.feedImg[2]}}
          style={{width: width, height: width, marginBottom: 8}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 36,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image source={heart} style={{width: 32, height: 32}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Image source={comment} style={{width: 32, height: 32}} />
            </TouchableOpacity>
          </View>
          <Text>외 37명이 좋아합니다.</Text>
        </View>

        <View style={{paddingHorizontal: 16, gap: 4}}>
          <Text>{item.name}</Text>
          <Text style={{fontWeight: '400', color: '#4f4f4f'}}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff', marginBottom: 32}}>
        <FlatList
          data={dummy_feed}
          renderItem={renderFeed}
          keyExtractor={item => item.id}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View>
              <View
                style={{
                  padding: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Image source={logo} style={{width: 88, height: 22}} />
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                  <TouchableOpacity>
                    <Image source={heart} style={{width: 32, height: 32}} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={comment} style={{width: 32, height: 32}} />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <FlatList
                  data={dummy_story}
                  renderItem={renderStory}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  removeClippedSubviews
                />
              </View>
            </View>
          )}
        />

        <CommentsModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
