import crypto1 from "../assets/bitcoin.png";
import crypto2 from "../assets/cardano.jpg";
import crypto3 from "../assets/dogecoin.png";
import crypto4 from "../assets/ethereum.png";
import crypto5 from "../assets/litecoin.png";
import crypto6 from "../assets/polkadot.jpg";
import crypto7 from "../assets/ripple.png";
import crypto8 from "../assets/Stellar.png";
import crypto9 from "../assets/tron.png";
import crypto10 from "../assets/uniswap.png";
import { Card, Row, Col } from "antd";

const TopCrypto = () => {
  const cryptos = [
    crypto1,
    crypto2,
    crypto3,
    crypto4,
    crypto5,
    crypto6,
    crypto7,
    crypto8,
    crypto9,
    crypto10,
  ];
  return (
    <Row>
      {cryptos.map((crypto, id) => (
        <Col key={id} xs={24} sm={12} lg={6}>
          <Card>
            <img
              style={{ width: "200px", height: "200px", margin: "auto",display:"block",objectFit:"contain" }}
              src={crypto}
              alt="crypto logo"
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TopCrypto;
