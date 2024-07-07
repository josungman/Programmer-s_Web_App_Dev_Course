import { useState } from "react";
import {
  ListGroup,
  Button,
  Table,
  Col,
  Row,
  Tab,
  Image,
} from "react-bootstrap";

import profileImg from "./profile.png";
import profileImg2 from "./profile2.png";

const data = [
  {
    name: "사용자 1",
    age: 24,
    address: "서울시 강남구",
    email: "a@a.a",
    profileImg: profileImg,
  },
  {
    name: "사용자 2",
    age: 30,
    address: "서울시 서초구",
    email: "b@b.b",
    profileImg: profileImg2, // assuming the same image for example
  },
];

const RecentActivityDetails = () => {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <article>
      <Tab.Container
        id="list-group-tabs-example"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
      >
        <Row>
          <Col sm={4}>
            <ListGroup>
              {data.map((item, index) => (
                <ListGroup.Item
                  action
                  onClick={() => setActiveKey(index)}
                  key={index}
                >
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {data.map((item, index) => (
                <Tab.Pane eventKey={index} key={index}>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>이름</td>
                        <td>{item.name}</td>
                      </tr>
                      <tr>
                        <td>나이</td>
                        <td>{item.age}</td>
                      </tr>
                      <tr>
                        <td>주소</td>
                        <td>{item.address}</td>
                      </tr>
                      <tr>
                        <td>이메일</td>
                        <td>{item.email}</td>
                      </tr>
                      <tr>
                        <td>프로필 이미지</td>
                        <td>
                          <Image
                            src={item.profileImg}
                            style={{
                              width: "100px",
                              height: "100px",
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </article>
  );
};

export default RecentActivityDetails;
