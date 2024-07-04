import React, {useState} from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import AlertModal from '../components/AlertModal';

const {width, height} = Dimensions.get('window');


const Detail = ({ route, navigation }) => {
    const [isVisible, setIsVisible] = useState(false);
    console.log( route.params )
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>뒤로가기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <Text>모달 오픈</Text>
            </TouchableOpacity>
            <Text>Detail {route.params.test}</Text>
            <AlertModal 
                isVisible={isVisible} 
                okText={"알겠습니다."} 
                noText={"닫기"} 
                headerTitle={"디테일 화면에 진입했습니다."} 
                onPressOk={() =>setIsVisible(!isVisible)}
                onPressNo={() =>setIsVisible(!isVisible)}
            />
        </View>
    )
}

export default Detail