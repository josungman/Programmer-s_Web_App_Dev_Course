import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const backArrow = require('../assets/icons/back_arrow.png');
const Tab = createMaterialTopTabNavigator();
const {width} = Dimensions.get('window');

const FollowerTab = () => {
  return (
    <View>
      <Text>Follwer</Text>
    </View>
  );
};

const FollowingTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View>
        <View style={styles.recentKeywordRow}>
          <TouchableOpacity style={styles.recentKeywordUser}>
            <Image
              source={{uri: 'https://picsum.photos/130/130'}}
              style={{width: 40, height: 40, borderRadius: 20}}
            />
            <Text>Lucymartin_3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#E0E0E0',
              borderRadius: 4,
              padding: 8,
            }}>
            <Text>팔로우 취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Follower = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backArrow} style={{width: 40, height: 40}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: '600'}}>성만조</Text>
        <View style={{width: 40}} />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: '#828282',
          tabBarActiveTintColor: '#333333',
          tabBarIndicatorStyle: {
            backgroundColor: '#4f4f4f',
            width: 100,
            marginLeft: width / 8,
            height: 1,
          },
        }}>
        <Tab.Screen name="230팔로워" component={FollowerTab} />
        <Tab.Screen name="261팔로잉" component={FollowingTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 68,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    marginBottom: 24,
  },
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F8F8F8',
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 4,
    gap: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
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
    backgroundColor: '#F8F8F8',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F80ED',
  },
  recentKeywordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  recentKeywordLabel: {
    fontSize: 16,
    color: '#333',
  },
  allDeleteLabel: {
    fontSize: 16,
    color: '#828282',
  },
  recentKeywordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  recentKeywordUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
});

export default Follower;
