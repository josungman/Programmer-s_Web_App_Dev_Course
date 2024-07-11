import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const searchIcon = require('../assets/icons/search.png');
const multiPhoto = require('../assets/icons/multiPhoto.png');

const duumy_search = [
  {
    id: 1,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
  {
    id: 2,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
  {
    id: 3,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
  {
    id: 4,
    img: 'https://picsum.photos/130/130',
    isMulti: true,
  },
  {
    id: 5,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
  {
    id: 6,
    img: 'https://picsum.photos/130/130',
    isMulti: true,
  },
  {
    id: 7,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
  {
    id: 8,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
  {
    id: 9,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
  {
    id: 10,
    img: 'https://picsum.photos/130/130',
    isMulti: false,
  },
];

const Search = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [keyword, setKeyword] = useState('');

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{borderWidth: 1, borderColor: '#fff'}}>
        {item.isMulti && (
          <Image
            source={multiPhoto}
            style={{
              position: 'absolute',
              right: 8,
              top: 8,
              width: 24,
              height: 24,
              zIndex: 10,
            }}
          />
        )}
        <Image
          source={{uri: item.img}}
          style={{width: width / 3 - 2, height: width / 3 - 2}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchList')}
            style={styles.searchWrapper}>
            <TouchableOpacity style={styles.searchIconStyle}>
              <Image source={searchIcon} style={{width: 24, height: 24}} />
            </TouchableOpacity>

            <Text allowFontScaling={false} style={styles.inputStyle}>
              검색어를 입력하세요
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={duumy_search}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 68,
    backgroundColor: '#FFF',
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 4,
  },
  searchIconStyle: {
    marginLeft: 16,
    marginRight: 2,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '400',
    color: '#828282',
    paddingRight: 12,
  },
});

export default Search;
