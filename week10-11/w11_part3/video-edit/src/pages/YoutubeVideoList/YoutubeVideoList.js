import { Form, Button, Spinner, Modal, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import getyoutubelist from '../../apis/getyoutubelist';
import getvideodownload from '../../apis/getvideodownload';
import styles from './YoutubeVideoList.module.css';

function YoutubeVideoList() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('고양이'); // 초기 검색어 설정
  const [query, setQuery] = useState('고양이'); // 실제 검색할 때 사용할 상태
  const [downloadedVideo, setDownloadedVideo] = useState(null); // 다운로드된 비디오 파일 저장
  const [youtubeId, setYoutubeId] = useState('a1x7I5f3hbQ&t'); // 초기 youtubeID
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getyoutubelist.get('/search', {
          params: {
            q: query, // 검색어를 실제 API 요청에 사용
          },
        });
        setVideos(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('비디오를 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchVideos();
  }, [query]); // query 상태가 변경될 때마다 fetchVideos 함수 호출




  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm); // 검색어 상태를 query 상태로 업데이트하여 API 요청 트리거
  };
  const handleDownload = async (videoId) => {
    setLoading(true); // 로딩 상태 시작
    try {
      console.log('videoId', videoId);
      const response = await getvideodownload.get(`/temp/youtubevideo_download/${videoId}`);

      // Blob 객체가 잘 생성되었는지 확인
      if (response.data instanceof Blob) {
        // Blob에서 File 객체 생성
        const file = new File([response.data], `${videoId}.mp4`, { type: 'video/mp4' });
        setDownloadedVideo(file);
        console.log('downfilech : ', file)

        // 다운로드된 비디오 파일을 가지고 VideoEditor 컴포넌트로 이동
        navigate('/', { state: { videoFile: file } });
      } else {
        throw new Error('응답 데이터가 Blob 형식이 아닙니다.');
      }
    } catch (error) {
      console.error('Error downloading video:', error);
      setError('비디오 다운로드하는 중 오류가 발생했습니다!!!');
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  const backPress = () => {
    navigate(-1, { replace: true });
  };

  return (
    <Container>
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Button variant="secondary" size="sm" onClick={backPress}>
            뒤로가기
          </Button>
        </Col>
        <Col>
          <h2 className="text-center mb-0">유튜브 리스트</h2>
        </Col>
      </Row>

      {error === null ?
        <Form onSubmit={handleSearch}>
          <Row className="align-items-center mb-3">
            <Col xs={9} sm={10}>
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="검색어를 입력하세요"
              />
            </Col>
            <Col xs={3} sm={2}>
              <Button type="submit" size="sm">검색</Button>
            </Col>
          </Row>
        </Form>
        : null
      }

      {error && (
        <>
          <p style={{ color: 'red' }}>{error}</p>
          <p>videoID 다운으로 대체 됩니다.</p>
          <Form>
            <Form.Control
              type="text"
              value={youtubeId}
              onChange={(e) => setYoutubeId(e.target.value)}
              placeholder="youtube videoID를 입력하세요"
              className="mb-3"
            />
            <Button className="w-100" size="sm" onClick={() => handleDownload(youtubeId)} variant="info">videoID로 다운</Button>
          </Form>
        </>
      )}

      <Row>
        {videos.map((video) => (
          <Col key={video.id.videoId} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <div className={styles.video__list__item}>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="img-fluid" />
              <p className={styles.video__title}>{video.snippet.title}</p>
              <Button onClick={() => handleDownload(video.id.videoId)} size="sm" variant="info" className={styles.down__button}>
                다운로드
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={loading} onHide={() => setLoading(false)} backdrop="static" keyboard={false} centered size="sm">
        <Modal.Body className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-3 text-white">다운로드 진행중입니다.</p>
        </Modal.Body>
      </Modal>
    </Container>

  );
}

export default YoutubeVideoList;
