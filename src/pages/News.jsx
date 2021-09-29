import { NewsComponent } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Typography, Select } from "antd";
import { useState } from "react";
const News = () => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  return (
    <div className="container">
      <section>
        <Select
          style={{width:"200px",marginLeft:"auto",display:"block"}}
          size="large"
          showSearch
          placeholder="select a cryptocurrency"
          optionFilterProp="children"
          onChange={(value) => setNewsCategory(value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase())
          }
        >
          <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
          {data?.data?.coins?.map((coin) => (
            <Select.Option value={coin.name}>{coin.name}</Select.Option>
          ))}
        </Select>
      </section>
      <section>
        <Typography.Title level={2}>All news</Typography.Title>
        <NewsComponent newsCategory={newsCategory} />
      </section>
    </div>
  );
};

export default News;
