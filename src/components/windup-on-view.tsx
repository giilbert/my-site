import { Box, BoxProps } from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
import { WindupChildren } from "windups";

export const WindupOnView: React.FC<
  React.PropsWithChildren<
    { height: BoxProps["height"] } & Parameters<typeof WindupChildren>[0]
  >
> = ({ height, ...props }) => {
  return (
    <InView triggerOnce={true} rootMargin="0px 0px -200px 0px">
      {({ inView, ref }) => (
        <Box h={height} ref={ref}>
          {inView ? (
            <WindupChildren {...props} />
          ) : (
            <Box height={height} w="1" />
          )}
        </Box>
      )}
    </InView>
  );
};
