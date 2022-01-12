export default function About() {
  return(
    <div className="pb-4">
      <p className="pb-4">
        My name&apos;s <a className="link link-secondary" href="https://twitter.com/seanplusplus" target="_blank" rel="noopener noreferrer">Sean</a>, I&apos;m a Sr Software Engineer at Disney digital media, and am super interested in this whole web3 space. 
      </p>
      <p className="pb-4">
        What you&apos;re seeing here is a simple, proof-of-concept <a className="link link-secondary" href="https://github.com/SeanPlusPlus/polygon-boilerplate" target="_blank" rel="noopener noreferrer">Next.js frontend</a>, communicating with <a className="link link-secondary" href="https://github.com/SeanPlusPlus/polygon-boilerplate-smart-contract" target="_blank" rel="noopener noreferrer">this smart contract</a>, deployed to the Polygon Ethereum L2.
      </p>
      <p className="pb-4">
        To play along, follow these 3 steps:
      </p>
      <p className="pb-4">
        <span className="mr-2" role="img" aria-label="one">1️⃣</span>
        Connect your Metamask Wallet to the <a className="link link-secondary" href="https://blog.pods.finance/guide-connecting-mumbai-testnet-to-your-metamask-87978071aca8" target="_blank" rel="noopener noreferrer">Polygon Mumbai Testnet</a>.
      </p>
      <p className="pb-4">
        <span className="mr-2" role="img" aria-label="two">2️⃣</span>
        Get some test MATIC tokens from <a className="link link-secondary" href="https://faucet.polygon.technology/" target="_blank" rel="noopener noreferrer">this faucet</a>.
      </p>
      <p className="pb-4">
        <span className="mr-2" role="img" aria-label="three">3️⃣</span> Connect your wallet to this site, send a message, and confirm the gas fee in Metamask!
      </p>
    </div>
  )
}