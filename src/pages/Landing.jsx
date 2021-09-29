import image from "../assets/crypto.svg";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { Overlay, TopCrypto, GlobalStats } from "../components";

const { Title, Text } = Typography;

const Landing = () => {
  return (
    <div className="home">
      <section
        className="home-header"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Overlay>
          <div className="home-content">
            <Title level={1} style={{ color: "#fff" }}>
              We bring you the world of crypto
              <br />
              All in between your hands.
            </Title>
            <Button type="primary" className="home-btn">
              <Link to="/home">Discover more</Link>
            </Button>
          </div>
        </Overlay>
      </section>
      <section className="container">
        <Title level={2}>What is cryptocurrency?</Title>
        <Text style={{ padding: "10px" }}>
          Cryptocurrency is a form of payment that can be exchanged online for
          goods and services. Many companies have issued their own currencies,
          often called tokens, and these can be traded specifically for the good
          or service that the company provides. Think of them as you would
          arcade tokens or casino chips. You’ll need to exchange real currency
          for the cryptocurrency to access the good or service.
          <br /> Cryptocurrencies work using a technology called blockchain.
          Blockchain is a decentralized technology spread across many computers
          that manages and records transactions. Part of the appeal of this
          technology is its security.
        </Text>
        <Button type="link">
          <a
            href="https://www.nerdwallet.com/article/investing/blockchain"
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn more
          </a>
        </Button>
      </section>
      <section className="container">
        <Title level={2}>Global stats</Title>
        <GlobalStats />
      </section>
      <section className="container">
        <Title level={2}>Top Cryptocurrencies</Title>
        <TopCrypto />
      </section>
    </div>
  );
};

export default Landing;
