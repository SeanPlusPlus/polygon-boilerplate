import { useWeb3 } from "@3rdweb/hooks";
import Main from '../components/main'

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
                  <p className="pb-5">
                    Hiya there! I'm <a className="link link-secondary" href="https://twitter.com/seanplusplus" target="_blank" rel="noopener noreferrer">Sean</a>, and I'm a Sr Software Engineer at Disney digital media. This is a prototype I am <a className="link link-secondary" href="https://github.com/SeanPlusPlus/waveportal-starter-project" target="_blank" rel="noopener noreferrer">hacking together</a> based on <a className="link link-secondary" href="https://app.buildspace.so/projects/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b/lessons/LEe9f04c2e-fe9c-4e87-81b2-efb677a1720c" target="_blank" rel="noopener noreferrer">this tutorial</a>. Connect your Ethereum wallet (make sure you're on the Rinkeby test network), craft a message, and wave at me! To start, you probably should <a className="link link-secondary" href="https://web3hackathon.vercel.app/how-to" target="_blank" rel="noopener noreferrer">follow this</a> (you can go and mint your very own 🏈 NFT there while you're at it).
                  </p>
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
