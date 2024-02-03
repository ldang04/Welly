import { Flex } from "@radix-ui/themes";
import { Header } from "../components/Header";
import friends from "./Friends.json";

const Friends = () => {
  const empty = friends.length === 0;
  return (
    <Flex
      direction="column"
      align="center"
      justify="start"
      className="bg-beige w-full h-full"
    >
      <Header header="friends" />
      <Flex></Flex>
      <div className="friendsBox">
        <Flex direction="column" className="mt-10">
          {friends.map((friend) => (
            <div className="bg-orange w-80 h-18 rounded-3xl py-3 px-5 mb-4">
              <div className="text-winered text-3xl">{friend.name}</div>
            </div>
          ))}
        </Flex>
      </div>
    </Flex>
  );
};

export default Friends;
