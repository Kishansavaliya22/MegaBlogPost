import React from "react";
import { Flex, Typography, Button } from "antd";

const { Title } = Typography;
const Home: React.FC = () => {
  return (
    <Flex>
      <Flex>
        <Typography>
          <Title>"The Secret to getting ahead is getting started."</Title>
        </Typography>
      </Flex>
      <Flex>
        <Flex>
          <Button type="default" shape="round">
            Download
          </Button>
        </Flex>
        <Flex>
          <img
            src="src\assets\homepage_image\Lovepik_com-450071175-video blog management vector illustration  1.png"
            alt="blogimage"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
