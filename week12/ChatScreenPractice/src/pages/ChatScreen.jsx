import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import LeftBubble from '../components/LeftBubble';
import RightBubble from '../components/RightBubble';
import Toast from '../components/Toast';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

const leftArrow = require('../assets/icons/leftArrow.png');
const plusIcon = require('../assets/icons/plus.png');

const photoButton = require('../assets/icons/chat/photoButton.png');
const cameraButton = require('../assets/icons/chat/cameraButton.png');
const voiceButton = require('../assets/icons/chat/voiceButton.png');

const {width} = Dimensions.get('window');

const dummy_data = [
  {
    id: 1,
    name: '이민구',
    content: '점심 먹었니 친구야?',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 2,
    name: '나',
    content: '아니 아직 안먹었어, 너는 먹었니?',
    created_date: '12:03PM',
    position: 'right',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 3,
    name: '나',
    content: '안먹었으면 같이 먹을까?? 먹고 싶은 메뉴가 있으면 말해 보겠니?',
    created_date: '12:03PM',
    position: 'right',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 4,
    name: '이민구',
    content:
      '나는 풍자 또 간집에 나온 소라 편의점의 제욕볶음이 너무 먹고 싶구나ㅎㅎㅎㅎ',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 5,
    name: '나',
    content: '그럼 먹으러 가자구~~',
    created_date: '12:03PM',
    position: 'right',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 6,
    name: '이민구',
    content: '오 몇시에 만날래?',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
  {
    id: 7,
    name: '이민구',
    content: '몇시에 만날래????',
    created_date: '12:03PM',
    position: 'left',
    profileImgUrl: require('../assets/images/dummyProfile.png'),
    isOpen: true,
  },
];

const ChatScreen = ({route, navigation}) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const {name} = route.params.params;

  const onSelect = data => {
    console.log('data', data);
    setSelectedImage(data);
  };

  const goToCameraRoll = () => {
    setmodalVisible(false);
    navigation.navigate('CustomCameraRoll', {onSelect: data => onSelect(data)});
  };

  const handleCamera = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyyles}>
      <View style={styles.mainContainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={leftArrow} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
          <View style={styles.backButton} />
        </View>

        <View style={styles.chattingScreen}>
          <FlatList
            data={dummy_data}
            renderItem={({item, index}) =>
              item.position === 'left' ? (
                <LeftBubble data={item} />
              ) : (
                <RightBubble data={item} nextData={dummy_data[index + 1]} />
              )
            }
            keyExtractor={item => item.id}
            ListHeaderComponent={() => (
              <View style={styles.chatDatWrapper}>
                <Text style={styles.chatDay}> 2022년 2월 7일</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {selectedImage && (
          <View style={{position: 'absolute', bottom: 8, right: 16}}>
            <Image source={selectedImage} style={{width: 60, height: 60}} />
          </View>
        )}
      </View>
      <View style={{padding: 16, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setmodalVisible(!modalVisible)}
          style={{
            borderWidth: 1,
            borderColor: '#EFEFEF',
            borderRadius: 20,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 8,
          }}>
          <Image source={plusIcon} style={{width: 12, height: 12}} />
        </TouchableOpacity>
        <TextInput
          placeholder="메세지 입력하기"
          style={{
            borderWidth: 1,
            borderColor: '#EFEFEF',
            borderRadius: 20,
            flex: 1,
            paddingHorizontal: 12,
          }}
        />
      </View>
      <Toast
        content={'아직 구현되지 않은 기능 입니다.'}
        visible={toastVisible}
        handleCancel={() => setToastVisible(false)}
      />
      <Modal
        isVisible={modalVisible}
        useNativeDriver
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
        backdropOpacity={0}
        style={{
          margin: 0,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            width: width,
            backgroundColor: '#fff',
            paddingTop: 10,
            height: 176,
          }}>
          <View style={{padding: 16, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setmodalVisible(!modalVisible)}
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                borderRadius: 20,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <Image
                source={plusIcon}
                style={{width: 12, height: 12, transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="메세지 입력하기"
              style={{
                borderWidth: 1,
                borderColor: '#EFEFEF',
                borderRadius: 20,
                flex: 1,
                paddingHorizontal: 12,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', gap: 40, marginLeft: 40}}>
            <TouchableOpacity
              onPress={() => goToCameraRoll()}
              style={{gap: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={photoButton} style={{width: 48, height: 48}} />
              <Text style={{fontSize: 13, fontWeight: '400', color: '#828282'}}>
                앨범
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCamera()}
              style={{gap: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={cameraButton} style={{width: 48, height: 48}} />
              <Text style={{fontSize: 13, fontWeight: '400', color: '#828282'}}>
                카메라
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{gap: 4, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={voiceButton} style={{width: 48, height: 48}} />
              <Text style={{fontSize: 13, fontWeight: '400', color: '#828282'}}>
                음성녹음
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyyles: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  backButton: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: '19.97',
    textAlign: 'center',
    color: '#000',
  },
  chattingScreen: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  chatDatWrapper: {
    marginTop: 16,
    marginBottom: 8,
  },
  chatDay: {
    lineHeight: 17.47,
    color: '#828282',
    textAlign: 'center',
  },
  chatRowWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  bubbleWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  chattimeWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  chattime: {
    fontSize: 10,
    fontWeight: 500,
    color: '#737373',
    lineHeight: 14.98,
  },
  myBubbleWrapper: {
    backgroundColor: '#6297ff',
    borderRadius: 8,
    padding: 8,
    maxWidth: 232,
  },
  myChat: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFF',
    lineHeight: 22.5,
  },
  microBar: {
    width: 1,
    height: 4,
    backgroundColor: '#D5D5D5',
  },
  chatInfoWrapper: {
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginRight: 4,
  },
});

export default ChatScreen;
