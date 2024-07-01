//조성만
import { useRef, useState, useEffect } from "react"
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react"
import 'video-react/dist/video-react.css'
import styles from './VideoPlayer.module.css'
import useDeviceType from '../../hooks/useDeviceType'


const VideoPlayer = ({ src, onPlayerChange = () => { }, onChange = () => { }, onTimeUpdate = () => { }, startTime = undefined }) => {
  const [player, setPlayer] = useState(null)
  const [playerState, setPlayerState] = useState(undefined)
  const [source, setSource] = useState()

  const device = useDeviceType()

  useEffect(() => {
    setSource(URL.createObjectURL(src))
  }, [src])

  useEffect(() => {
    if (playerState) {
      onChange(playerState)
      onTimeUpdate(playerState.currentTime) // 현재 재생 시간 추출 및 콜백 함수 호출
    }
  }, [playerState])

  useEffect(() => {
    if (player) {
      onPlayerChange(player)
      player.subscribeToStateChange((state) => {
        setPlayerState(state)
        onTimeUpdate(state.currentTime) // 현재 재생 시간 추출 및 콜백 함수 호출
      })
    }
  }, [player])


  return (
    <div className={styles.video_player}>
      <Player
        ref={(player) => {
          if (player) {
            setPlayer(player)
          }
        }}
        startTime={startTime}
        src={source}

      >
        <source src={source} />
        <BigPlayButton position="center" />
        <LoadingSpinner />
        <ControlBar disableCompletely />
      </Player>
      {playerState && (
        <div className={`${styles.overlay_time} ${device === 'mobile' ? styles.show : styles.hide}`}>
          {Math.floor(playerState.currentTime / 60)}:{('0' + Math.floor(playerState.currentTime % 60)).slice(-2)}
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
