import { Box, BoxProps } from "@chakra-ui/react";
import { InView } from "react-intersection-observer";
import { WindupChildren } from "windups";

export const WindupOnView: React.FC<
  React.PropsWithChildren<{ height: BoxProps["height"] }>
> = ({ height, children }) => {
  return (
    <InView triggerOnce={true} rootMargin="0px 0px -200px 0px">
      {({ inView, ref }) => (
        <Box h={height} ref={ref}>
          {inView ? (
            <WindupChildren>{children}</WindupChildren>
          ) : (
            <Box height={height} w="1" />
          )}
        </Box>
      )}
    </InView>
  );
};
