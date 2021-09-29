import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import { Collapse, Row, Col, Avatar, Typography } from "antd";
import { Loading } from "../components";
import HTMLReactParser from "html-react-parser";
import millify from "millify";

const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();

  if (isFetching) return <Loading />;

  return (
    <section className="container" style={{ marginTop: "50px" }}>
      <Row
        style={{ marginBottom: "10px", fontWeight: "bold"}}
      >
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h trade volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {data?.data?.exchanges.map((e) => (
          <Col span={24} key={e.id}>
            <Collapse>
              <Panel
                showArrow={false}
                header={
                  <Row>
                    <Col span={6}>
                      <Typography.Text>
                        <strong>{e.rank}.</strong>
                      </Typography.Text>
                      <Avatar
                        style={{ margin: "0 10px" }}
                        size="small"
                        src={e.iconUrl}
                      />
                      <Typography.Text>
                        <strong>{e.name}</strong>
                      </Typography.Text>
                    </Col>
                    <Col span={6}>${millify(e.volume)}</Col>
                    <Col span={6}>{millify(e.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(e.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(e.description || "No description to display")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Exchanges;
