import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Typography, Button } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/cryptocurrency.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setMenuOpen(true);
    }
    const handleClick = (e) => {
      if (window.innerWidth < 768) setMenuOpen(false);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo-title">
            <Link to="/" className="logo-text">
              MyCrypto
            </Link>
          </Typography.Title>
        </div>
        <Button
          className="nav-btn"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
        >
          <MenuOutlined />
        </Button>
        <Menu theme="dark" className={`nav-items ${menuOpen ? "open" : ""}`}>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
