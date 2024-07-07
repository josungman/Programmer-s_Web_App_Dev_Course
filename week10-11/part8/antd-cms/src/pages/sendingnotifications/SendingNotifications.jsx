import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const SendingNotifications = () => {
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const selectedNotificationRef = useRef();
  const dateRef = useRef();

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedNotification, setSelectedNotification] =
    useState("");
  const [date, setDate] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) =>
    setPhoneNumber(e.target.value);
  const handleRadioChange = (e) => {
    console.log(e);
    setSelectedNotification(e.target.value);
  };

  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      emailRef.current.focus();
      return;
    }

    if (phoneNumber.length < 1) {
      phoneNumberRef.current.focus();
      return;
    }

    if (selectedNotification.length < 1) {
      selectedNotificationRef.current.focus();
      return;
    }

    if (date.length < 1) {
      dateRef.current.focus();
      return;
    }

    alert(
      `Email: ${email}\nPhoneNumber: ${phoneNumber}\nNotification Method: ${selectedNotification}\nDate: ${date}`
    );
  };

  const sendData = [
    { label: "이메일로 수신", value: "email" },
    { label: "카톡으로 수신", value: "kakao" },
    { label: "전화번호로 수신", value: "phone" },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formHorizontalEmail"
      >
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter your phone Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formHorizontalPhonenumber"
      >
        <Form.Label column sm={2}>
          PhoneNumber
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            ref={phoneNumberRef}
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        className="mb-3"
        controlId="formHorizontalDate"
      >
        <Form.Label column sm={2}>
          Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            ref={dateRef}
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            {sendData.map((item, idx) => (
              <Form.Check
                ref={selectedNotificationRef}
                key={idx}
                type="radio"
                label={item.label}
                value={item.value}
                aria-label={`radio${idx}`}
                name="radioGroup"
                onChange={handleRadioChange}
              />
            ))}
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Send</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SendingNotifications;
