import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const cardData = [
  {
    header: "유튜브",
    title: "유튜브 성장률",
    subtitle: "2020-2022",
    graphData: [
      { name: "2020", commit: 200 },
      { name: "2021", commit: 100 },
      { name: "2022", commit: 800 },
    ],
  },
  {
    header: "인스타",
    title: "인스타 성장률",
    subtitle: "2020-2022",
    graphData: [
      { name: "2020", commit: 200 },
      { name: "2021", commit: 100 },
      { name: "2022", commit: 800 },
    ],
  },
  {
    header: "지인",
    title: "지인 성장률",
    subtitle: "2020-2022",
    graphData: [
      { name: "2020", commit: 200 },
      { name: "2021", commit: 100 },
      { name: "2022", commit: 800 },
    ],
  },
];

const UserinFlowpath = () => {
  return (
    <article style={{ display: "flex", flexWrap: "wrap", gap: 50 }}>
      {cardData.map((data, index) => (
        <Card className="mb-2" key={index}>
          <Card.Header>{data.header}</Card.Header>
          <Card.Body>
            <Card.Text>
              {data.graphData && (
                <LineChart
                  width={350}
                  height={280}
                  data={data.graphData}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="commit"
                    stroke="#6ABD8C"
                    activeDot={{ r: 2 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </article>
  );
};

export default UserinFlowpath;
