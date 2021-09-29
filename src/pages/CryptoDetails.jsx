import { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Row, Col, Typography, Select } from "antd";
import { Loading, LineChart } from "../components";
import {
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import HTMLReactParser from "html-react-parser";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  console.log({ coinHistory, coinId, timePeriod });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loading />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails.approvedSupply ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <div className="container">
      <section style={{ textAlign: "center" }}>
        <Title level={2}>
          {cryptoDetails.name} ({cryptoDetails.slug}) Price
        </Title>
        <Text>
          Bitcoin live price in $, and some other interesting statistics
        </Text>
      </section>
      <Select
        defaultValue="7d"
        style={{ width: "200px", marginLeft: "auto", display: "block" }}
        size="large"
        placeholder="select a time period"
        onChange={(value) => setTimeperiod(value)}
      >
        {time.map((date) => (
          <Option value={date}>{date}</Option>
        ))}
      </Select>
      <section>
        <LineChart
          coinHistory={coinHistory}
          coinName={cryptoDetails.name}
          currentPrice={millify(cryptoDetails.price)}
        />
      </section>
      <section style={{ marginTop: "15px" }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={8}>
            <Title level={3}>{cryptoDetails.name} value statistics</Title>
            <div>
              {stats.map(({ title, value, icon }, id) => (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Text style={{ marginRight: "4px" }}>{icon}</Text>
                    <Text>{title}</Text>
                  </div>
                  <Text style={{ fontWeight: "bolder" }}>{value}</Text>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={24} sm={12} lg={8}></Col>
          <Col xs={24} sm={12} lg={8}>
            <Title level={3}>Other statistics</Title>
            <div>
              {genericStats.map(({ title, value, icon }, id) => (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 0",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Text style={{ marginRight: "4px" }}>{icon}</Text>
                    <Text>{title}</Text>
                  </div>
                  <Text style={{ fontWeight: "bolder" }}>{value}</Text>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>
      <section>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} lg={12}>
            <Title level={3}>What is {cryptoDetails.name}</Title>
            {HTMLReactParser(cryptoDetails.description)}
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <Title level={3}>{cryptoDetails.name} Links </Title>
            {cryptoDetails.links.map((link) => (
              <Row
                key={link.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 0",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <Title level={5}>{link.type}</Title>
                <a href={link.url} target="_blank" rel="noreferrer noopener">
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default CryptoDetails;
