import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ClockCircleOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  List,
  Flex,
  Statistic,
  Progress,
  Carousel,
  Timeline,
} from "antd";
import Meta from "antd/es/card/Meta";

const { Countdown } = Statistic;

const data = [
  {
    title: "첫번째 결재 내역입니다.",
  },
  {
    title: "두번째 결재 내역입니다.",
  },
  {
    title: "세번째 결재 내역입니다.",
  },
  {
    title: "결제 실패했습니다.",
  },
];

const twoColors = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

const conicColors = {
  "0%": "#87d068",
  "50%": "#ffe58f",
  "100%": "#ffccc7",
};

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const ContentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Dashboard = () => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        maxWidth: 1920,
      }}
    >
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat( auto-fit, minmax(300px, 1fr) )",
          gap: 30,
        }}
      >
        <div>
          <h3>My Card</h3>
          <Card
            cover={
              <img
                alt="example"
                src="https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_960_720.jpg"
              />
            }
          >
            <Meta
              avatar={<Avatar src="" />}
              title="첫번째 카드"
              description="이것은 첫번째 카드의 설명입니다."
            />
          </Card>
        </div>

        <div>
          <h3>My Card</h3>
          <Card
            cover={
              <img
                alt="example"
                src="https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_960_720.jpg"
              />
            }
          >
            <Meta
              avatar={<Avatar src="" />}
              title="첫번째 카드"
              description="이것은 첫번째 카드의 설명입니다."
            />
          </Card>
        </div>
        <div>
          <h3>Recent Transaction</h3>
          <div
            style={{
              height: 300,
              overflow: "auto",
              background: "#FFF",
              borderRadius: 8,
              padding: 24,
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                      />
                    }
                    title={
                      <a href="https://ant.desgin">{item.title}</a>
                    }
                    description="Hello World"
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat( auto-fit, minmax(300px, 1fr) )",
          gap: 30,
        }}
      >
        <div
          style={{
            height: 300,
            overflow: "auto",
            background: "#FFF",
            borderRadius: 8,
            padding: 24,
          }}
        >
          <h3>Weekly Activity</h3>
          <Flex gap={30} wrap>
            <Countdown title="오픈일자" value={deadline} />
            <Statistic
              title="Feedback"
              value={1130}
              prefix={<LikeOutlined />}
            />
            <Statistic title="merged" value={90} suffix="/ 100" />

            <Flex gap={30}>
              <Statistic
                title="Active"
                value={11.28}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Statistic
                title="Idle"
                value={11.28}
                precision={1}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Flex>
          </Flex>
        </div>
        <div
          style={{
            height: 300,
            overflow: "auto",
            background: "#FFF",
            borderRadius: 8,
            padding: 24,
          }}
        >
          <h3>Expense Statistics</h3>
          <div>
            <Flex gap={30} wrap>
              <Progress
                type="circle"
                percent={90}
                strokeColor={twoColors}
              />
              <Progress
                type="circle"
                percent={100}
                strokeColor={conicColors}
              />
              <Progress
                type="circle"
                percent={20}
                strokeColor={conicColors}
              />
            </Flex>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat( auto-fit, minmax(300px, 1fr) )",
          gap: 30,
        }}
      >
        <div>
          <h3>Quick Transfer</h3>
          <div
            style={{
              height: 300,
              overflow: "auto",
              background: "#fff",
              borderRadius: 8,
              padding: 24,
            }}
          >
            <Carousel arrows infinite={false}>
              <div>
                <h3 style={{ ...ContentStyle }}>1</h3>
              </div>
              <div>
                <h3 style={{ ...ContentStyle }}>2</h3>
              </div>
              <div>
                <h3 style={{ ...ContentStyle }}>3</h3>
              </div>
            </Carousel>
          </div>
        </div>
        <div>
          <h3>History</h3>
          <div
            style={{
              height: 300,
              overflow: "auto",
              background: "#fff",
              borderRadius: 8,
              padding: 24,
            }}
          >
            <Timeline
              mode="alternate"
              items={[
                { children: "첫 리액트 공부 2024-06-21" },
                {
                  children: "웹페이지 구현 2024-06-25",
                  color: "green",
                },
                {
                  children: "웹페이지 구현 2024-06-25",
                  dot: <ClockCircleOutlined />,
                },
              ]}
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Dashboard;
