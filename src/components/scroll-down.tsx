import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const ScrollDown: React.FC = () => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowing(true);
    }, 10000);

    const handleScroll = () => {
      setShowing(false);
      clearTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showing) return null;

  return (
    <Text
      transform="translate(-50%, 50%)"
      position="fixed"
      left="50vw"
      bottom="8"
    >
      Scroll down!!!
    </Text>
  );
};
