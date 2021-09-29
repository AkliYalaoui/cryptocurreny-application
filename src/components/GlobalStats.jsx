import millify from "millify";
import { Card, Row, Col } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const GlobalStats = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  return (
    <Row gutter={[24,24]}>
      <Col xs={24} sm={12} lg={6}>
        <Card loading={isFetching}>
          <Card.Meta
            title="Total Cryptocurrencies"
            description={globalStats?.total}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card loading={isFetching}>
          <Card.Meta
            title="Total Exchanges"
            description={
              globalStats?.totalExchanges
                ? millify(globalStats?.totalExchanges)
                : ""
            }
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card loading={isFetching}>
          <Card.Meta
            title="Total Market Cap"
            description={
              globalStats?.totalMarketCap
                ? millify(globalStats?.totalMarketCap)
                : ""
            }
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card loading={isFetching}>
          <Card.Meta
            title="Total 24h Volume"
            description={
              globalStats?.total24hVolume
                ? millify(globalStats?.total24hVolume)
                : ""
            }
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card loading={isFetching}>
          <Card.Meta
            title="Total Markets"
            description={
              globalStats?.totalMarkets
                ? millify(globalStats?.totalMarkets)
                : ""
            }
          />
        </Card>
      </Col>
    </Row>
  );
};

export default GlobalStats;
