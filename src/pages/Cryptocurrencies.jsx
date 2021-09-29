import { Currencies } from "../components";
import { Typography, Input } from "antd";
import { useState } from "react";

const Cryptocurrencies = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="container">
      <section className="search-crypto">
        <Input
          size="large"
          placeholder="search cryptocurrency"
          onChange={(e) => setTerm(e.target.value)}
        />
      </section>
      <section>
        <Typography.Title level={2}>Top 100 Cryptocurrencies</Typography.Title>
        <Currencies term={term} />
      </section>
    </div>
  );
};

export default Cryptocurrencies;
