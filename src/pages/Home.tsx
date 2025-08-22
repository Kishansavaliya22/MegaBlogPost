import React from "react";
import { Flex, Button } from "antd";

const Home: React.FC = () => {
  return (
    <Flex vertical>
      <Flex>
        <div className="text-6xl w-5xl pl-25 m-10 text-start">
          "The Secret to getting ahead is getting started."
        </div>
      </Flex>
      <Flex align="center" justify="space-around">
        <Flex vertical gap="middle">
          <Flex>
            <Button type="default" shape="round" block>
              Create Blog
            </Button>
          </Flex>
          <Flex>
            <Button type="default" shape="round" block>
              Read Blog
            </Button>
          </Flex>
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
