import React from "react";
import { Flex, Button } from "antd";
import { useSelector } from "react-redux";
import type { Rootstate } from "../store/store";

const Home: React.FC = () => {
  const authStatus = useSelector((state: Rootstate) => state.status);

  return (
    <Flex vertical>
      <Flex>
        <div className="text-6xl w-5xl pl-25 m-10 text-start">
          "The Secret to getting ahead is getting started."
        </div>
      </Flex>
      <Flex align="center" justify="space-around">
        <Flex vertical gap="middle">
          {authStatus && (
            <Flex>
              <Button type="default" shape="round" block className="p-6">
                Create Blog
              </Button>
            </Flex>
          )}
          <Flex>
            <Button type="default" shape="round" block className="p-6">
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
