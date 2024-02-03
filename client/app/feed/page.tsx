import { Flex } from "@radix-ui/themes";
import { FaRegHeart } from "react-icons/fa";
import { Header } from "../components/Header";
import feed from "./Feed.json";
import { lily } from "../font";

const progress = [25, 30, 49, 69, 12, 33];
const tags = ["beach trip", "weekend", "happy"];

const Feed = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="start"
      className="bg-beige w-full h-full"
    >
      <Flex direction="column" className="w-full" align="start">
        <Flex className="mt-7 pl-4" direction="column">
          <div className="text-pink text-2xl">
            <div className={lily.className}>Welly</div>
          </div>
          <Flex className="storyBox">
            {progress.map((number) => (
              <Flex direction="column" align="center" className="mr-4">
                <Flex
                  className="rounded-full w-14 h-14 border-4 border-winered"
                  align="center"
                  justify="center"
                >
                  <div className="text-winered">{number}%</div>
                </Flex>
                <div className="color-winered text-xs text-winered">
                  <div className={lily.className}>name</div>
                </div>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex justify="center" align="center" className="w-full">
          <div className="feedBox">
            {feed.map((feed) => (
              <Flex
                direction="column"
                align="start"
                justify="start"
                className="mt-10 pl-10 w-full"
              >
                <div className="text-brown text-3xl">{feed.name}</div>
                <div className="w-80 h-80 rounded-3xl bg-gray mt-3"></div>
                <Flex className="tagbox" align="center">
                  <Flex
                    className="bg-winered w-8 h-8 rounded-full cursor-pointer"
                    align="center"
                    justify="center"
                  >
                    <FaRegHeart className="w-8" color="#ffffff" size="15" />
                  </Flex>
                  {tags.map((tag) => (
                    <Flex
                      className="bg-winered text-white px-4 ml-2 py-0.5 rounded-xl whitespace-nowrap cursor-pointer"
                      align="center"
                      justify="center"
                    >
                      {tag}
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Feed;
