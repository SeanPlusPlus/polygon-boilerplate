import { useWeb3 } from "@3rdweb/hooks";
import Main from '../components/main'
import About from '../components/about'

export default function App() {
  const { connectWallet, address, error, provider } = useWeb3();

  if (!address) {
    return (
      <div className="flex h-screen text-center">
        <div className="m-auto w-2/3">
          <div className="grid grid-cols-1 lg:p-10 lg:bg-base-200 rounded-box mb-5">
            <div className="card shadow-lg compact side bg-base-100 mb-1">
              <div className="card-body">
                <h2 className="my-4 text-4xl font-bold card-title">
                  Hello <span role="img" aria-label="wave">👋</span>
                </h2>
                <div className="bio">
                  <About />
                </div>
              </div>
            </div>
          </div>
          <button onClick={() => connectWallet("injected")} className="btn btn-secondary">
            Connect your wallet
          </button>
        </div>
      </div>
    );
  }
  
  return <Main />
}
