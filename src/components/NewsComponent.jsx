import { useGetNewsQuery } from "../services/cryptoNewsApi";
import { Row, Col, Card, Typography, Avatar, Empty } from "antd";
import { Loading } from "../components";
import moment from "moment";

const imageDemoUrl =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsComponent = ({ simplified, newsCategory }) => {
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (isFetching) return <Loading />;

  return (
    <Row gutter={[24, 24]} style={{minHeight:"80vh"}}>
      {cryptoNews?.value?.length === 0 && (
        <Empty
        style={{margin:"auto"}}
          description={`No related news to ${newsCategory} have been found`}
        />
      )}
      {cryptoNews?.value?.map((news, id) => (
        <Col xs={24} sm={12} lg={8} key={id}>
          <Card hoverable>
            <a href={news.url} target="_blank" rel="noreferrer noopener">
              <div>
                <Typography.Title level={4}>{news.name}</Typography.Title>
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    margin: "10px auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                  src={news?.image?.thumbnail?.contentUrl || imageDemoUrl}
                  alt="news thumbnail"
                />
              </div>
              <p style={{ color: "#555" }}>
                {news.description > 100
                  ? `${news.description.subString(0, 100)} ...`
                  : news.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    size="small"
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      imageDemoUrl
                    }
                  />
                  <Typography.Text style={{ marginLeft: "10px" }}>
                    {news.provider[0]?.name}
                  </Typography.Text>
                </div>
                <Typography.Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NewsComponent;
