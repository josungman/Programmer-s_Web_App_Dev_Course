import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import BasicHeader from '../components/BasicHeader';
import Video, {VideoRef} from 'react-native-video';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const dummyLocalVideo = require('../assets/videos/dummy.mp4');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <BasicHeader title={'비디오'} />
      <Video
        source={dummyLocalVideo}
        ref={videoRef}
        style={{
          width: 320,
          height: 320,
        }}
      />
    </SafeAreaView>
  );
};

export default VideoPlayer;
