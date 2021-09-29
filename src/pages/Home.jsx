import { GlobalStats, Currencies, NewsComponent } from "../components";
import { Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const Home = () => {
  return (
    <div className="container">
      <section>
        <Title level={2}>Global Crypto Stats</Title>
        <GlobalStats />
      </section>
      <section>
        <Row>
          <Col xs={24} sm={12}>
            <Title level={2}>Top 10 Cryptocurrencies</Title>
          </Col>
          <Col xs={24} sm={12}>
            <Title level={3} style={{ textAlign: "right" }}>
              <Link to="/cryptocurrencies"> show more</Link>
            </Title>
          </Col>
        </Row>
        <Currencies simplified term="" />
      </section>
      <section>
        <Row>
          <Col xs={24} sm={12}>
            <Title level={2}>Lates News</Title>
          </Col>
          <Col xs={24} sm={12}>
            <Title level={3} style={{ textAlign: "right" }}>
              <Link to="/cryptocurrencies"> show more</Link>
            </Title>
          </Col>
        </Row>
        <NewsComponent simplified newsCategory="Cryptocurrency" />
      </section>
    </div>
  );
};

export default Home;
