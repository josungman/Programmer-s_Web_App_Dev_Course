import { useState, useRef, useEffect } from 'react';
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import { Button, Modal, Toast, ToastContainer, Container, Image } from 'react-bootstrap';
import { Progress } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './VideoEditor.module.css';
import video_placeholder from '../../assets/images/editor/video_placeholder.png';
import ReactPlayer from 'react-player';
import MultiRangeSlider from '../../components/MultiRangeSlider';
import VideoConversionButton from './VideoConversionButton';
import { sliderValueToVideoTime } from '../../utils/utils';
import useDeviceType from '../../hooks/useDeviceType';

const ffmpeg = createFFmpeg({ log: true });

const VideoEditor = () => {
  const location = useLocation();
  const device = useDeviceType();
  const uploadFile = useRef('');
  const playerRef = useRef(null);
  const [ffmpegLoaded, setFFmpegLoaded] = useState(false);
  const [sliderValues, setSliderValues] = useState([0, 100]);
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isCancelled, setIsCancelled] = useState(false);
  const [show, setShow] = useState(false);
  const [playerState, setPlayerState] = useState({ duration: 0, playedSeconds: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    if (!ffmpeg.isLoaded()) {
      ffmpeg.load().then(() => {
        setFFmpegLoaded(true);
      });
    } else {
      setFFmpegLoaded(true);
    }
  }, []);

  useEffect(() => {
    const min = sliderValues[0];
    if (min !== undefined && playerState.duration) {
      playerRef.current.seekTo(sliderValueToVideoTime(playerState.duration, min), 'seconds');
    }
  }, [sliderValues, playerState.duration]);

  useEffect(() => {
    if (location.state && location.state.videoFile) {
      const file = location.state.videoFile;
      setVideoFile(file);
      navigate(location.pathname, {}); // 초기화하는 부분
    }
  }, [location.state, navigate]);

  useEffect(() => {
    if (videoFile) {
      const url = URL.createObjectURL(videoFile);
      setVideoUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPlayerState({ duration: 0, playedSeconds: 0 });
    }
  }, [videoFile]);

  const handleProgress = ({ ratio }) => {
    const percentValue = Math.round(ratio * 100);
    if (percentValue < 0 || percentValue >= 100) {
      setPercentage(0);
    } else {
      setPercentage(percentValue);
    }
  };

  const gotoYoutubeVideoList = () => {
    navigate('/youtubevideolist');
  };

  const renderMobileView = () => (
    <Container className="mobile_layout" style={{ padding: '56px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1 className={styles.title_mobile}>Video Edit</h1>
        {videoFile && (
          <div>
            <input
              onChange={(e) => setVideoFile(e.target.files[0])}
              type="file"
              accept="video/*"
              style={{ display: 'none' }}
              ref={uploadFile}
            />
            <Button
              onClick={() => uploadFile.current.click()}
              className={styles.re__upload__mobile_btn}
              style={{ width: 'fit-content' }}
            >
              재선택(로컬)
            </Button>
            <Button
              onClick={gotoYoutubeVideoList}
              className={styles.re__upload__mobile_btn}
              style={{ width: 'fit-content' }}
            >
              재선택(유튜브)
            </Button>
          </div>
        )}
      </div>
      <section>
        {videoFile ? (
          <div style={{ position: 'relative' }}>
            <ReactPlayer
              width="100%"
              height="200px"
              ref={playerRef}
              url={videoUrl}
              controls={true}
              playing
              playsinline
              config={{
                file: {
                  attributes: {
                    playsInline: true,
                  },
                },
              }}
              onDuration={(duration) => {
                setPlayerState((prevState) => ({ ...prevState, duration }));
              }}
              onProgress={({ playedSeconds }) => {
                const maxTime = sliderValueToVideoTime(playerState.duration, sliderValues[1]);
                const minTime = sliderValueToVideoTime(playerState.duration, sliderValues[0]);

                setPlayerState((prevState) => ({ ...prevState, playedSeconds }));

                if (maxTime !== null && playedSeconds >= maxTime) {
                  playerRef.current.seekTo(minTime, 'seconds');
                }

                setCurrentTime(playedSeconds);

              }}
              className={styles.react__player}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '8px', color: 'white', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '0 0 4px 0' }}>
              {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}
            </div>
          </div>
        ) : (
          <>
            <Image src={video_placeholder} alt="비디오를 업로드해주세요" style={{ marginBottom: 32, width: '100%' }} />
            <div>
              <input
                onChange={(e) => setVideoFile(e.target.files[0])}
                type="file"
                accept="video/*"
                style={{ display: 'none' }}
                ref={uploadFile}
              />
              <Button onClick={() => uploadFile.current.click()} className={styles.upload__mobile_btn}>
                비디오업로드하기
              </Button>
              <Button onClick={gotoYoutubeVideoList} className={styles.upload__mobile_btn}>
                비디오업로드하기(유튜브)
              </Button>
            </div>
          </>
        )}
      </section>
      {videoFile && (
        <>
          <section style={{ width: '100%', marginTop: 30, marginBottom: 62, display: 'flex', justifyContent: 'center' }}>
            <MultiRangeSlider
              min={0}
              max={100}
              onChange={({ min, max }) => setSliderValues([min, max])}
            />
          </section>
          <section>
            <VideoConversionButton
              onConversionStart={() => {
                setProcessing(true);
                setIsCancelled(false);
              }}
              onConversionEnd={() => {
                setProcessing(false);
                setShow(true);
              }}
              ffmpeg={ffmpeg}
              videoPlayerState={playerState}
              sliderValues={sliderValues}
              videoFile={videoFile}
              onProgress={handleProgress}
              isCancelled={isCancelled}
            />
          </section>
        </>
      )}
    </Container>
  );

  const renderDesktopView = () => (
    <Container className={styles.pc_layout} style={{ padding: '56px 16px', width: '100%', backgroundColor: '#FFFFFF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h1 className={styles.title_pc}>Video Edit</h1>
        {videoFile && (
          <div>
            <input
              onChange={(e) => setVideoFile(e.target.files[0])}
              type="file"
              accept="video/*"
              style={{ display: 'none' }}
              ref={uploadFile}
            />
            <Button
              onClick={() => uploadFile.current.click()}
              className={styles.re__upload__pc_btn}
              style={{ width: 'fit-content' }}
            >
              재선택(로컬)
            </Button>
            <Button
              onClick={gotoYoutubeVideoList}
              className={styles.re__upload__pc_btn}
              style={{ width: 'fit-content' }}
            >
              재선택(유튜브)
            </Button>
          </div>
        )}
      </div>
      <section>
        {videoFile ? (
          <ReactPlayer
            ref={playerRef}
            width="100%"
            height="500px"
            url={videoUrl}
            controls={true}
            playing
            playsinline
            config={{
              file: {
                attributes: {
                  playsInline: true,
                },
              },
            }}
            onDuration={(duration) => {
              setPlayerState((prevState) => ({ ...prevState, duration }));
            }}
            onProgress={({ playedSeconds }) => {
              const maxTime = sliderValueToVideoTime(playerState.duration, sliderValues[1]);
              const minTime = sliderValueToVideoTime(playerState.duration, sliderValues[0]);

              setPlayerState((prevState) => ({ ...prevState, playedSeconds }));

              if (maxTime !== null && playedSeconds >= maxTime) {
                playerRef.current.seekTo(minTime, 'seconds');
              }

              setCurrentTime(playedSeconds);
            }}
            className={styles.react__player}
          />
        ) : (
          <>
            <Image src={video_placeholder} alt="비디오를 업로드해주세요" style={{ marginBottom: 32, width: '100%' }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <input
                onChange={(e) => setVideoFile(e.target.files[0])}
                type="file"
                accept="video/*"
                style={{ display: 'none' }}
                ref={uploadFile}
              />
              <Button onClick={() => uploadFile.current.click()} className={styles.upload__pc_btn}>
                비디오업로드하기(로컬)
              </Button>
              <Button onClick={gotoYoutubeVideoList} className={styles.upload__pc_btn}>
                비디오업로드하기(유튜브)
              </Button>
            </div>
          </>
        )}
      </section>
      {videoFile && (
        <>
          <section style={{ width: '100%', marginTop: 15, marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <p style={{ fontSize: '22px', justifyContent: 'center', alignItems: 'center' }}>
                재생시간 : <span style={{ fontWeight: 'bold' }}>{currentTime}초</span>
              </p>
              <MultiRangeSlider
                min={0}
                max={100}
                onChange={({ min, max }) => setSliderValues([min, max])}
              />
            </div>
          </section>
          <section style={{ display: 'flex', gap: 16 }}>
            <VideoConversionButton
              onConversionStart={() => {
                setProcessing(true);
                setIsCancelled(false);
              }}
              onConversionEnd={() => {
                setProcessing(false);
                setShow(true);
              }}
              ffmpeg={ffmpeg}
              videoPlayerState={playerState}
              sliderValues={sliderValues}
              videoFile={videoFile}
              onProgress={handleProgress}
              isCancelled={isCancelled}
            />
          </section>
        </>
      )}
    </Container>
  );

  return (
    <>
      {device === 'mobile' ? renderMobileView() : renderDesktopView()}

      <ToastContainer className="p-3" position="top-center" style={{ zIndex: 1 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={2000} bg="dark" autohide>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Video Editor</strong>
          </Toast.Header>
          <Toast.Body>내보내기가 완료되었습니다.</Toast.Body>
        </Toast>
      </ToastContainer>

      <Modal show={processing} onHide={() => setProcessing(false)} backdrop={false} keyboard={false} centered size="sm">
        <div style={{ textAlign: 'center' }}>
          <Progress type="dashboard" strokeColor="#fff" format={() => <span style={{ color: '#fff' }}>{percentage}%</span>} percent={percentage} />
          <p style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: '#c8c8c8' }}>내보내기가 진행중입니다.</p>
        </div>
      </Modal>
    </>
  );
};

export default VideoEditor;
