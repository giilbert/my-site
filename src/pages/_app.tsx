import type { AppProps } from "next/app";
import "@fontsource/roboto-mono";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "#efefef",
        fontFamily: "Roboto Mono",
      },
    },
    Link: {
      baseStyle: {
        color: "#efefef",
        fontFamily: "Roboto Mono",
      },
    },
    Heading: {
      baseStyle: {
        color: "#efefef",
        fontFamily: "Roboto Mono",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
      },
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
