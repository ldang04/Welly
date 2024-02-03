import { Flex } from "@radix-ui/themes";
import React from "react";
import { Header } from "../components/Header";

const Profile = () => {
  const groups = ["group 1", "group 2", "group 3"];
  return (
    <Flex
      direction="column"
      align="center"
      justify="start"
      className="bg-beige w-full h-full"
    >
      {/* <Header header="profile" /> */}
      <Flex
        direction="column"
        className="mt-11"
        justify="center"
        align="center"
      >
        <Flex className="rounded-full w-28 h-28 border-8 mt-4 border-winered"></Flex>
        <div className="mt-4 text-winered">Your name</div>
      </Flex>
      <div className="text-darkbrown mt-11 text-3xl">Your groups</div>
      <Flex direction="column" className="mt-4">
        {groups.map((group) => (
          <Flex className="bg-orange text-2xl mt-6 py-3 text-darkbrown w-80 px-7 rounded-full">
            {group}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Profile;
