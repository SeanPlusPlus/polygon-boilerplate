import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime.js";
import AppContextProvider from "../context/AppContextProvider";
import '../styles/globals.css'

const supportedChainIds = [
  1,
  4,      // Rinkeby
  137,
  80001,  // Mumbai
];

// Include what type of wallet you want to support
// In this case, we support Metamask which is an "injected wallet"
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ThirdwebWeb3Provider 
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </AppContextProvider>
  )
}

export default MyApp
