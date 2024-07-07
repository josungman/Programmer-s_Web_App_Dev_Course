import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

// AlertMessage 컴포넌트
const AlertMessage = ({ show, onHide, duration, message }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, duration);

      // Cleanup the timer when the component unmounts or when show changes
      return () => clearTimeout(timer);
    }
  }, [show, duration, onHide]);

  return (
    <Alert show={show} variant="success">
      <p>공지사항에 글이 등록되었습니다!</p>
      <p>{message}</p>
      <Button variant="secondary" size="sm" onClick={onHide}>
        확인
      </Button>
    </Alert>
  );
};

const Seosetting = () => {
  const [show, setShow] = useState(false);

  const titleRef = useRef();
  const contentRef = useRef();
  const fileRef = useRef();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    file: null,
  });
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  const backPress = () => {
    navigate(-1);
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);

    if (formData.title.length < 1) {
      titleRef.current.focus();
      return;
    }

    if (formData.content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (formData.file === null) {
      fileRef.current.focus();
      return;
    }

    setAlertMessage(
      `Title: ${formData.title}\nContent: ${formData.content}\nFile: ${formData.file.name}`
    );
    handleShow();
  };

  return (
    <div>
      <AlertMessage
        show={show}
        onHide={handleHide}
        duration={5000}
        message={alertMessage}
      />
      <Form>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>제목</Form.Label>
          <Form.Control
            ref={titleRef}
            type="text"
            placeholder="제목을 입력하세요"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>내용</Form.Label>
          <Form.Control
            ref={contentRef}
            as="textarea"
            rows={3}
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </Form.Group>
        <div style={{ width: "30%" }}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>첨부파일 선택</Form.Label>
            <Form.Control
              ref={fileRef}
              type="file"
              name="file"
              onChange={handleChange}
            />
          </Form.Group>
        </div>
      </Form>
      <div>
        <Button variant="primary" size="sm" onClick={handleSubmit}>
          올리기
        </Button>{" "}
        <Button variant="secondary" size="sm" onClick={backPress}>
          뒤로가기
        </Button>
      </div>
    </div>
  );
};

export default Seosetting;
