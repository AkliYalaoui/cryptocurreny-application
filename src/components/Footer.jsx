import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography.Title level={5} style={{ color: "#fff" }}>
        This website is developed and maintained by{" "}
        <a
          href="https://akliyalaoui.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Akli YALAOUI
        </a>
      </Typography.Title>
      <Space>
        <span style={{ color: "#fff" }}>|</span>
        <Link to="/home">home</Link>
        <Link to="/exchanges">exchanges</Link>
        <Link to="/cryptocurrencies">cryptocurrencies</Link>
        <Link to="/news">news</Link>
      </Space>
    </footer>
  );
};

export default Footer;
