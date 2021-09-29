import millify from "millify";
import { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import { Loading } from "../components";

const Currencies = ({ simplified, term }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const filtredData = cryptosList?.data?.coins.filter((crypto) =>
      crypto.name.toLowerCase().includes(term.toLowerCase())
    );
    setCryptos(filtredData);
  }, [cryptosList, term]);

  if (isFetching) return <Loading />;
  return (
    <div>
      <Row gutter={[32, 32]}>
        {cryptos &&
          cryptos.map((crypto) => (
            <Col key={crypto.id} xs={24} sm={12} lg={6}>
              <Link to={`/crypto/${crypto.id}`}>
                <Card
                  hoverable
                  title={`${crypto.rank ?? ""}. ${crypto?.name ?? ""}`}
                  extra={
                    crypto.iconUrl && (
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                        src={crypto.iconUrl}
                        alt="crypto icon"
                      />
                    )
                  }
                >
                  <p>Price : {crypto?.price ? millify(crypto.price) : ""}</p>
                  <p>
                    Market Cap :{" "}
                    {crypto?.marketCap ? millify(crypto.marketCap) : ""}
                  </p>
                  <p>
                    Daily Change :{" "}
                    {crypto?.dailyChange ? millify(crypto.dailyChange) : ""}%
                  </p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Currencies;
