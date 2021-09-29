import { Line } from "react-chartjs-2";
import { Typography, Row, Col } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  console.log(coinHistory);
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in Usd",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071BD",
        borderColor: "#0071BD",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <section style={{ marginTop: "20px" }}>
      <Row>
        <Col xs={24} lg={8}>
          <Title level={2}>{coinName} Price Chart</Title>
        </Col>
        <Col xs={24} lg={8}>
          <Title level={5}>{coinHistory?.data?.change}%</Title>
        </Col>
        <Col xs={24} lg={8}>
          <Title level={5}>
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </section>
  );
};

export default LineChart;
