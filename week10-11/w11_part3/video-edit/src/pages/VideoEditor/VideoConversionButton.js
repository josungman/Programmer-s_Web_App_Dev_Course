import { Button } from 'react-bootstrap';
import { fetchFile } from '@ffmpeg/ffmpeg';
import { readFileAsBase64, sliderValueToVideoTime } from '../../utils/utils';
import out from '../../assets/icons/out.svg';
import dark_download from '../../assets/icons/dark_download.svg';

function VideoConversionButton({
  device,
  videoPlayerState,
  sliderValues,
  videoFile,
  ffmpeg,
  onConversionStart = () => { },
  onConversionEnd = () => { },
  onGifCreated = () => { },
  onProgress = () => { },
  isCancelled = false, // 새로운 prop 추가

}) {
  const convertToGif = async () => {
    // starting the conversion process
    onConversionStart(true);

    console.log('cancel ch', isCancelled)

    const inputFileName = 'input.mp4';
    const outputFileName = 'output.gif';

    // writing the video file to memory
    ffmpeg.FS('writeFile', inputFileName, await fetchFile(videoFile));

    const [min, max] = sliderValues;
    const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
    const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

    // 프로그래스 데이터 상위 컴포넌트로 넘기기
    ffmpeg.setProgress(onProgress);

    // cutting the video and converting it to GIF with a FFMpeg command
    await ffmpeg.run('-i', inputFileName, '-ss', `${minTime}`, '-to', `${maxTime}`, '-f', 'gif', outputFileName);


    if (isCancelled) {
      console.log('cancel ch')
      return; // 취소된 경우 반환
    } else {
      console.log('cancel ch2')
    }
    // reading the resulting file
    const data = ffmpeg.FS('readFile', outputFileName);

    // converting the GIF file created by FFmpeg to a valid image URL
    const gifUrl = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));



    const link = document.createElement('a');
    link.href = gifUrl;
    link.setAttribute('download', '');
    link.click();

    // ending the conversion process

    onConversionEnd(false);
  };

  const onCutTheVideo = async () => {
    onConversionStart(true);

    const [min, max] = sliderValues;
    const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
    const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);


    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoFile));


    // 프로그래스 데이터 상위 컴포넌트로 넘기기
    ffmpeg.setProgress(onProgress);

    await ffmpeg.run('-ss', `${minTime}`, '-i', 'input.mp4', '-t', `${maxTime}`, '-c', 'copy', 'output.mp4');

    if (isCancelled) return; // 취소된 경우 반환

    const data = ffmpeg.FS('readFile', 'output.mp4');
    const dataURL = await readFileAsBase64(new Blob([data.buffer], { type: 'video/mp4' }));

    const link = document.createElement('a');
    link.href = dataURL;
    link.setAttribute('download', '');
    link.click();

    onConversionEnd(false);
  };

  return (
    <>
      <Button onClick={() => convertToGif()} className={device === 'pc' ? "gif__out__pc_btn" : "gif__out__mobile_btn"} style={{ marginBottom: 16 }}>
        <img src={out} alt="GIF 내보내기" />
        <p style={{ color: '#383838', fontSize: 16, fontWeight: 700 }}>GIF 내보내기</p>
      </Button>

      <Button onClick={() => onCutTheVideo()} className={device === 'pc' ? "gif__out__pc_btn" : "gif__out__mobile_btn"}>
        <img src={dark_download} alt="비디오 저장하기" />
        <p style={{ color: '#383838', fontSize: 16, fontWeight: 700 }}>비디오 저장하기</p>
      </Button>
    </>
  );
}

export default VideoConversionButton;
