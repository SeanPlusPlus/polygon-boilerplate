import { useWeb3 } from "@3rdweb/hooks";
import Main from '../components/main'

export default function App() {
  const { connectWallet, address, error, provider } = useWeb3();

  if (!address) {
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <button onClick={() => connectWallet("injected")} className="btn btn-secondary">
            Connect your wallet
          </button>
        </div>
      </div>
    );
  }
  
  return <Main />
}
