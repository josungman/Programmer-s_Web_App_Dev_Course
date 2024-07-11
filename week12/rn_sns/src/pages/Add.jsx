import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const Add = ({navigation}) => {
  const {width, height} = useWindowDimensions();

  const [images, setImages] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    FetchImages();
  }, []);

  const FetchImages = async () => {
    CameraRoll.getPhotos({
      first: 100,
      assetType: 'Photos',
      groupTypes: 'All',
    }).then(res => {
      console.log(res);
      if (!selectedPhoto) {
        setSelectedPhoto(res.edges[0].node.image);
        selectedIndex(0);
      }

      setImages(res.edges.map(e => e.node.image));
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedPhoto(item);
          setSelectedIndex(index);
        }}
        style={{borderWidth: 1, borderColor: '#fff'}}>
        {selectedIndex === index && (
          <View
            style={{
              position: 'absolute',
              right: 8,
              top: 4,
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 20,
              zIndex: 2,
            }}>
            <View
              style={{
                width: 14,
                height: 14,
                borderRadius: 10,
                backgroundColor: 'green',
              }}
            />
          </View>
        )}
        <Image
          source={item}
          style={{width: width / 4 - 2, height: width / 4 - 2}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginBottom: 6,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 17, color: '#FFF', fontWeight: 'bold'}}>
            X
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 17, color: '#FFF', fontWeight: 'bold'}}>
          새 개시물
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 17, color: '#FFF', fontWeight: 'bold'}}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#000', flex: 0.5}}>
        <Image
          source={{uri: selectedPhoto?.uri}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flex: 0.5}}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.uri}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
        />
      </View>
    </SafeAreaView>
  );
};

export default Add;
