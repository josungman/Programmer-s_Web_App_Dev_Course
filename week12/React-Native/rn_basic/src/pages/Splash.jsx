import React, { useEffect, useState } from 'react';
import { View, Text, Linking, Platform } from 'react-native';
import { getAppVersion } from '../apis/basic';
import AlertModal from '../components/AlertModal';

const appVersion = {
    ios: 2,
    android: 2
}

const Splash = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        handleAppVersionCheckLogic();
    }, [])

    const handleAppVersionCheckLogic = async () => {
        const res = await getAppVersion();
        if(res.data.ios === appVersion.ios) {
            console.log('version 일치')
            setTimeout(() => {
                navigation.replace('MainTab')
            }, 2000)
        } else {
            console.log('업데이트')
            setIsVisible(true);
        }
    }

    const handleNoUpdate = () => {
        setIsVisible(false)
        navigation.replace('MainTab')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Splash</Text>
            <AlertModal 
                isVisible={isVisible} 
                setIsVisible={setIsVisible} 
                headerTitle={"최신 버전이 아닙니다."} 
                okText={"업데이트하기"} 
                onPressOk={async () => {
                    if( Platform.OS === 'ios') {
                        await Linking.openURL("https://naver.com");
                        return;
                    } else {
                        await Linking.openURL("https://playstore.com");
                        return;
                    }
                    
                }}  
                noText={"나중에하기"}
                onPressNo={() => handleNoUpdate()}
            />
        </View>
    )
}

export default Splash;