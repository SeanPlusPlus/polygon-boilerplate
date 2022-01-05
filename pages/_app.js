import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime.js";
import '../styles/globals.css'

// 4 = Rinkeby
const supportedChainIds = [1, 4, 137];

// Include what type of wallet you want to support
// In this case, we support Metamask which is an "injected wallet"
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider 
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
