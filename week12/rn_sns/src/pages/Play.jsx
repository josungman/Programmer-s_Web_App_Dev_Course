import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';

const dummy_video_list = [
  {
    id: 1,
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    user: 'wefwkwekffkf_wefef',
    contents: '너무 퀴여운 아기 고양기',
    like: 2320,
    comments: 64,
  },
  {
    id: 2,
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    user: 'wefwkwekffkf_wefef',
    contents: '두번째 비디오',
    like: 2320,
    comments: 64,
  },
  {
    id: 3,
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    user: 'wefwkwekffkf_wefef',
    contents: '세번째 비디오',
    like: 1310,
    comments: 64,
  },
  {
    id: 4,
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    user: 'wefwkwekffkf_wefef',
    contents: '카와이네..',
    like: 20,
    comments: 1264,
  },
];

const heartIcon = require('../assets/icons/white_heart.png');
const commentIcon = require('../assets/icons/white_comments.png');

const Play = () => {
  const {width, height} = useWindowDimensions();

  const renderItem = ({item}) => {
    return (
      <View>
        <Video
          source={{uri: item.url}}
          resizeMode="cover"
          playInBackground={false}
          playWhenInactive={false}
          repeat={true}
          rate={1}
          style={{
            width,
            height: height - 120,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width,
            height: 140,
            backgroundColor: '#000',
            opacity: 0.2,
          }}
        />
        <View style={{position: 'absolute', bottom: 52}}>
          <View
            style={{
              marginHorizontal: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: 'https://picsum.photos/130/130'}}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  marginRight: 6,
                }}
              />
              <Text style={{fontSize: 16, fontWeight: '400', color: '#FFF'}}>
                {item.user}
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#fff',
                  borderRadius: 6,
                  paddingVertical: 6,
                  paddingHorizontal: 8,
                  marginLeft: 8,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>팔로우</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#FFF',
              marginLeft: 16,
            }}>
            {item.contents}
          </Text>
        </View>

        <View style={{position: 'absolute', bottom: 24, right: 16}}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Image source={heartIcon} style={{width: 40, height: 40}} />
            <Text style={{fontSize: 13, color: '#fff'}}>
              {item.like.toLocaleString()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Image source={commentIcon} style={{width: 40, height: 40}} />
            <Text style={{fontSize: 13, color: '#fff'}}>{item.comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <FlatList
          data={dummy_video_list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          snapToInterval={height - 120}
          snapToAlignment="start"
          decelerationRate={'fast'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Play;
