import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ClockCircleOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Carousel,
  Collapse,
  Flex,
  List,
  Progress,
  Space,
  Statistic,
  Timeline,
} from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const { Countdown } = Statistic;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

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

export default function Dashboard() {
  const TitleStyle = {
    color: "#343C6A",
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 20,
  };
  const custonCardStyle = {
    height: 200,
    overflow: "auto",
    background: "#fff",
    borderRadius: 8,
    padding: 24,
  };

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
          <h3 style={TitleStyle}>My Cards</h3>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </div>

        <div>
          <h3 style={{ ...TitleStyle, opacity: 0 }}>My Cards</h3>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </div>

        <div>
          <h3 style={TitleStyle}>Recent Transaction</h3>
          <div style={{ ...custonCardStyle }}>
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
                      <a href="https://ant.design">{item.title}</a>
                    }
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
        <div>
          <h3 style={TitleStyle}>Weekly Activity</h3>
          <div
            style={{
              ...custonCardStyle,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex gap={30} wrap>
              <Countdown title="Countdown" value={deadline} />
              <Statistic
                title="Feedback"
                value={1128}
                prefix={<LikeOutlined />}
              />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />

              <Flex gap={30}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: "#cf1322" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Flex>
            </Flex>
          </div>
        </div>
        <div>
          <h3 style={TitleStyle}>Expense Statistics</h3>
          <div
            style={{
              ...custonCardStyle,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex gap={30} wrap>
              <Progress
                type="circle"
                percent={90}
                strokeColor={twoColors}
              />
              <Progress
                type="circle"
                percent={100}
                strokeColor={twoColors}
              />
              <Progress
                type="circle"
                percent={93}
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
          <h3 style={TitleStyle}>Quick Transfer</h3>
          <div style={{ ...custonCardStyle }}>
            <Carousel arrows infinite={false}>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
        <div>
          <h3 style={TitleStyle}>Balance History</h3>
          <div style={{ ...custonCardStyle }}>
            <Timeline
              mode="alternate"
              items={[
                {
                  children: "Create a services site 2015-09-01",
                },
                {
                  children:
                    "Solve initial network problems 2015-09-01",
                  color: "green",
                },
                {
                  dot: (
                    <ClockCircleOutlined
                      style={{ fontSize: "16px" }}
                    />
                  ),
                  children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
                },
                {
                  color: "red",
                  children:
                    "Network problems being solved 2015-09-01",
                },
                {
                  children: "Create a services site 2015-09-01",
                },
                {
                  dot: (
                    <ClockCircleOutlined
                      style={{ fontSize: "16px" }}
                    />
                  ),
                  children: "Technical testing 2015-09-01",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
