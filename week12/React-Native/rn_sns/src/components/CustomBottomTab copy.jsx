import React, { useRef } from 'react';
import { View, Animated, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const homeOn = require('../assets/icons/bottomtab/home_on.png');
const homeOff = require('../assets/icons/bottomtab/home_off.png');
const searchOn = require('../assets/icons/bottomtab/search_on.png');
const searchOff = require('../assets/icons/bottomtab/search_off.png');
const addOn = require('../assets/icons/bottomtab/add_circle_off.png');
const playOn = require('../assets/icons/bottomtab/auto_read_play_on.png');
const playOff = require('../assets/icons/bottomtab/auto_read_play_off.png');
const personOn = require('../assets/icons/bottomtab/person_on.png');
const personOff = require('../assets/icons/bottomtab/person_off.png');


const CustomBottomTab = ({ state, descriptors, navigation, insets }) => {
    const tab1Value = useRef(new Animated.Value(0)).current;
    const tab2Value = useRef(new Animated.Value(0)).current;
    const tab3Value = useRef(new Animated.Value(0)).current;
    const tab4Value = useRef(new Animated.Value(0)).current;
    const tab5Value = useRef(new Animated.Value(0)).current;

    const scaleAnimated = (value, animatedValue) =>
        Animated.timing(animatedValue, {
            useNativeDriver: true,
            toValue: value,
            duration: 150,
        });
    const animatedValues = {
        0: tab1Value,
        1: tab2Value,
        2: tab3Value,
        3: tab4Value,
        4: tab5Value,
    };
    return (
        <View style={[defaultStyles.bottomTabBarWrapper, { paddingBottom: insets.bottom }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = route.name;
                const isFocused = state.index === index;
                const animatedOf = animatedValues[index];

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                    scaleAnimated(1, animatedOf).start(({ finished }) => {
                        if (finished) {
                            scaleAnimated(0, animatedOf).start();
                        }
                    });
                };

                const iconFlag = bool => {
                    switch (label) {
                        case '홈':
                            return bool ? homeOn : homeOff;
                        case '검색':
                            return bool ? searchOn : searchOff;
                        case '추가':
                            return bool ? addOn : addOn;
                        case '쇼츠':
                            return bool ? playOn : playOff;
                        default:
                            return bool ? personOn : personOff;
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.6}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <Animated.Image
                            source={iconFlag(isFocused)}
                            resizeMode={'contain'}
                            style={{
                                width: 24,
                                height: 24,
                                transform: [
                                    {
                                        scale: animatedOf.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 0.9],
                                        }),
                                    },
                                ],
                            }}
                        />
                    </TouchableOpacity>
                )

            })}
        </View>
    );
};

const defaultStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    flexCenterView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTabBarWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#eee',
        backgroundColor: '#FFF',
        paddingTop: 10,
        zIndex: 8,
    },
})

export default CustomBottomTab;